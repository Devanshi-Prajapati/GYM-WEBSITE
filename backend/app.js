import express from "express";
import { config } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import session from "express-session";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

// 🔗 Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// 🏗️ User Schema & Model
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// 🛠️ Middleware
app.use(
  cors({
    origin: ["http://localhost:5173"], // 🔥 Adjust this for production
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Required for sessions
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔒 Session Configuration
app.use(
  session({
    secret: "super_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true }, // Secure should be true in production (HTTPS)
  })
);

// 🚀 Register User API
router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ success: true, message: "User Registered Successfully" });
  } catch (error) {
    console.error("❌ Error Registering User:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// 🔑 Login User API (Stores session)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    req.session.user = { id: user._id, email: user.email };
    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: req.session.user,
    });
  } catch (error) {
    console.error("❌ Error Logging In:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// 🚪 Logout API (Clears session)
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Logout Failed" });
    }
    res.status(200).json({ success: true, message: "Logged Out Successfully" });
  });
});

// 🔍 Check Auth Status API (Returns logged-in user)
router.get("/auth/status", (req, res) => {
  if (req.session.user) {
    return res.json({ loggedIn: true, user: req.session.user });
  }
  res.json({ loggedIn: false });
});

// ✉️ Send Email API
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Please provide all details" });
  }
  try {
    await sendEmail({
      email: "devanshiprajapati1111@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({ success: true, message: "Message Sent Successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at port ${process.env.PORT}`);
});
