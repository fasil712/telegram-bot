const express = require("express");
const app = express();
const dotenv = require("dotenv");

const initTelegramBot = require("./telegram-bot/telegram_bot");
const connectDB = require("./config/db");

app.use(express.json());
dotenv.config();
initTelegramBot();
connectDB();

// Import routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const shipmentRoutes = require("./routes/shipmentRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const addressRoutes = require("./routes/addressRoutes");

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/shipments", shipmentRoutes);
app.use("/api/wishlists", wishlistRoutes);
app.use("/api/addresses", addressRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
