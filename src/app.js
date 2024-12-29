import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/todo.routes.js";

const app = express();

// Recreate __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());

// Use the recreated __dirname for static files
app.use("/public", express.static(path.join(__dirname, "..", "public")));
console.log(__dirname);

app.use("/api", routes);

export { app };
