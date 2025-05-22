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
app.get("/", (req, res) => {
    res.json({
        message: "API TP2 - Mflix",
        endpoints: [
            { method: "GET", path: "/api/users", description: "Lista todos los usuarios" },
            { method: "GET", path: "/api/users/:id", description: "Obtiene un usuario por ID" },
            { method: "GET", path: "/api/movies", description: "Lista todas las películas (soporta paginado)" },
            { method: "GET", path: "/api/movies/:id", description: "Obtiene una película por ID" },
            { method: "GET", path: "/api/movies/get_winner_movies", description: "Obtiene las peliculas que ganaron al menos un premio" },
            { method: "GET", path: "/api/movies/get_movies_by_fresh", description: "Obtiene las peliculas ordenadas por puntaje Fresh descendentemente" },
            { method: "GET", path: "/api/movies/get_comments_by_user", description: "Obtiene los comentarios hechos en las peliculas por un usuario en particular" },
            { method: "POST", path: "/api/movies/get_movies_by_language", description: "Obtiene las peliculas de un determinado idioma" }
        ],
        pagination: {
            endpoint: "/api/movies",
            params: [
                { name: "page", description: "Número de página (opcional, por defecto 1)" },
                { name: "pageSize", description: "Cantidad de películas por página (opcional, por defecto 10)" }
            ]
        }
    });
});

export default app;