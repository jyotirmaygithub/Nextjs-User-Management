import express from "express";
import  User  from "../models/User";

const router = express.Router();

router.use("/newuser", async (req, res, next) => {
    const { name, email } = req.body;

    // Basic validation using destructuring
    if (!name || !email) {
        return res
            .status(400)
            .json({ message: "Name, email are required" });
    }

    try {
        // Check if user already exists
        let newUser = await User.findOne({ email });
        if (newUser) {
            return res.status(400).json({ message: "User already exists" });
        }
    } catch (error) {
        // Handle error
        console.error(error);
        return res.status(500).send("Internal server error");
    }

    // Hash the password and create new user
    try {
        const newUser = await User.create({
            name,
            email,
        });

        res.json({ newUser });
    } catch (error) {
        // Handle error
        console.error(error);
        res.status(500).send("Internal server Error Occurred");
    }
});

export default router;
