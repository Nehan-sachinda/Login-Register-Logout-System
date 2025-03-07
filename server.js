const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/register")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Define User Schema and Model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    password: String,
    cityCode: String
});

const User = mongoose.model("User", userSchema);

// Register Route
app.post("/register", async (req, res) => {
    try {
        const { name, email, address, password, cityCode } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered" });
        }

        // Create new user
        const newUser = await User.create({ name, email, address, password, cityCode });

        // Return success message and user data
        res.status(201).json({ message: "Registration successful", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check password
        if (user.password !== password) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Return success message and user data
        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});