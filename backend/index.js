require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const User = require("./model/UserModel");
const { createSecretToken } = require("./util/SecretToken");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

/* ================= CORS (NODE 25 SAFE) ================= */

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  httpOnly: true,
  sameSite: "lax",

};

app.use(cors(corsOptions));

/**
 * ✅ SAFE preflight handler (NO app.options("*"))
 * Node 25 + Express compatible
 */
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return cors(corsOptions)(req, res, next);
  }
  next();
});

/* ================= MIDDLEWARE ================= */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ================= AUTH MIDDLEWARE ================= */

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ success: false });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ success: false });
    }

    req.user = user;
    next();
  } catch {
    return res.status(401).json({ success: false });
  }
};

/* ================= AUTH ROUTES ================= */

// SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.json({ success: false, message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // localhost
    });

    res.status(201).json({
      success: true,
      message: "Signup successful",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

// LOGOUT
app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
  });
  res.json({ success: true });
});

// CHECK AUTH
app.get("/check-auth", authMiddleware, (req, res) => {
  res.json({ success: true, user: req.user });
});

/* ================= PROTECTED ROUTES ================= */

app.get("/allOrders", authMiddleware, async (req, res) => {
  const orders = await OrdersModel.find({});
  res.json(orders);
});

app.get("/allHoldings", authMiddleware, async (req, res) => {
  const data = await HoldingsModel.find({});
  res.json(data);
});

app.get("/allPositions", authMiddleware, async (req, res) => {
  const data = await PositionsModel.find({});
  res.json(data);
});

app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    if (mode === "BUY") {
      const existingHolding = await HoldingsModel.findOne({ name });

      if (existingHolding) {
        const totalQty = existingHolding.qty + qty;
        const totalCost =
          existingHolding.avg * existingHolding.qty + price * qty;

        existingHolding.qty = totalQty;
        existingHolding.avg = totalCost / totalQty;
        existingHolding.price = price;

        await existingHolding.save();
      } else {
        await HoldingsModel.create({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });
      }
    }

    res.json({ success: true, message: "Order placed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

/* ================= SERVER ================= */

app.listen(PORT, async () => {
  await mongoose.connect(uri);
  console.log("✅ Server running on port", PORT);
  console.log("✅ MongoDB connected");
});
