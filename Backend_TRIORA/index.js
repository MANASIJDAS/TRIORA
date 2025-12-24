import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./Route/User_Route.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://manasij-das-triora.onrender.com",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.options("*", cors());

app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB."))
.catch((error) => console.log("MongoDB connection error:", error));

app.use("/user", userRoute);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../Frontend_TRIORA")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend_TRIORA/Welcome_Page.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
