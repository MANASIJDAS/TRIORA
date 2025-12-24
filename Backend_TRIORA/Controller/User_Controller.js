import User from "../Model/User_Model.js";
import bcryptjs from "bcryptjs";

/* ===================== SIGNUP ===================== */
export const signup = async (req, res) => {
  try {
    let { firstname, middlename, lastname, email, password } = req.body;

    // Normalize email
    email = email.toLowerCase();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "USER ALREADY EXISTS!" });
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create user
    const createdUser = new User({
      firstname,
      middlename,
      lastname,
      email,
      password: hashedPassword,
    });

    await createdUser.save();

    return res.status(201).json({
      message: "USER CREATED SUCCESSFULLY!",
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error.message);
    return res.status(500).json({
      message: "OOPS! INTERNAL SERVER ERROR.",
    });
  }
};


/* ===================== LOGIN ===================== */
export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // Normalize email
    email = email.toLowerCase();

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "INVALID CREDENTIALS!",
      });
    }

    // Compare password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "INVALID CREDENTIALS!",
      });
    }

    // Successful login
    return res.status(200).json({
      message: "VALID CREDENTIALS!",
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error.message);
    return res.status(500).json({
      message: "OOPS! INTERNAL SERVER ERROR.",
    });
  }
};
