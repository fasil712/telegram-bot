const axios = require("axios");
const dotenv = require("dotenv");
const TelegramBot = require("node-telegram-bot-api");
dotenv.config();
// Get the bot token from the .env file
const token = process.env.BOT_TOKEN;

// Store cart data for each user
let userCart = {};

// Function to initialize the bot
const initTelegramBot = async () => {
  const bot = new TelegramBot(token, { polling: true });

  // Listen for the '/start' command
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.username; // Get the first name or username

    // Define inline buttons for categories
    const options = {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: "Browse Categories", callback_data: "browse_categories" }],
        ],
      }),
    };

    // Send a welcome message with the user's first name or username
    bot.sendMessage(
      chatId,
      `Welcome, @${firstName}! Click below to browse products:`,
      options
    );
  });

  // Handle the '/help' command
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;

    // Define the help message
    const helpMessage = `
Here are the available commands:
- /start: Start interacting with the bot and browse products.
- /help: Get information about how to use this bot.
- Browse Categories: Explore product categories such as Car, House, Electronics, Cosmetics, and more.
- Add to Cart: Add products to your cart and track your items.
    `;

    // Send the help message
    bot.sendMessage(chatId, helpMessage);
  });

  // Handle the "Browse Categories" button click
  bot.on("callback_query", (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const action = callbackQuery.data; // Get the callback data

    // If "Browse Categories" button is clicked
    if (action === "browse_categories") {
      // Send category buttons to the user
      const categoriesOptions = {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [
              { text: "Car", callback_data: "Car" },
              { text: "House", callback_data: "House" },
              { text: "Electronics", callback_data: "Electronics" },
            ],
            [
              { text: "Cosmetics", callback_data: "Cosmetics" },
              { text: "Medicine", callback_data: "Medicine" },
            ],
            [{ text: "Other", callback_data: "Other" }],
          ],
        }),
      };

      bot.sendMessage(chatId, "Please choose a category:", categoriesOptions);
    }

    // Handle product categories
    const categories = [
      "Car",
      "House",
      "Electronics",
      "Cosmetics",
      "Medicine",
      "Other",
    ];
    if (categories.includes(action)) {
      axios
        .get(`https://dummyjson.com/products?category=${action}`)
        .then((response) => {
          const products = response.data.products.slice(0, 3);

          products.forEach((product) => {
            const options = {
              reply_markup: JSON.stringify({
                inline_keyboard: [
                  [
                    { text: "Back", callback_data: "browse_categories" },
                    { text: "Add to Cart", callback_data: `add_${product.id}` },
                  ],
                ],
              }),
            };

            bot.sendPhoto(chatId, product.thumbnail, {
              // Use product image URL
              caption: `${product.title} - $${product.price}`,
              reply_markup: options.reply_markup,
            });
          });
        })
        .catch((error) => {
          console.error(error);
          bot.sendMessage(
            chatId,
            `Sorry, we couldn't fetch the ${action} products.`
          );
        });
    }

    // Handle Add to Cart
    if (action.startsWith("add_")) {
      const productId = action.split("_")[1]; // Extract the product ID

      // Initialize the cart if it doesn't exist
      if (!userCart[chatId]) {
        userCart[chatId] = {};
      }

      // Initialize product count in cart
      if (!userCart[chatId][productId]) {
        userCart[chatId][productId] = 1;
      } else {
        userCart[chatId][productId] += 1;
      }

      // Send message showing the updated cart count
      bot.sendMessage(
        chatId,
        `Added to cart! You now have ${userCart[chatId][productId]} of this item.`
      );
    }
  });
};

module.exports = initTelegramBot;
