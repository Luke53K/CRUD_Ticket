import express from "express";
import dotenv from "dotenv";
import path from "path";
import {fileURLToPath} from "url";
import mainRoutes from "./routes/main.routes.js";

dotenv.config();
const app = express();

//CSS
app.use(express.static("src/public"));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// EJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Rutas - Home
app.use("/home", mainRoutes);
app.get("/", (req, res) => {
  res.redirect("/home");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});