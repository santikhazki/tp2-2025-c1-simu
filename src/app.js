import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/userRoute.js";
import movieRoutes from "./routes/movieRouter.js";
import cors from "cors";

const app = express();

// Middlewars
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);

// Ruta base
app.get("/", (req, res) =>{
    res.send("API funcionando 🚀");
})

export default app;