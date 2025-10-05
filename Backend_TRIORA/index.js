
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./Route/User_Route.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Correct MongoDB connection (async)
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB."))
.catch((error) => console.log("MongoDB connection error:", error));

// API routes (must come before frontend routes)
app.use("/user", userRoute);

// Frontend setup

const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);


// Serve frontend static files
app.use(express.static(path.join(_dirname, "../Frontend_TRIORA")));

// Serve Welcome_Page.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "../Frontend_TRIORA/Welcome_Page.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
