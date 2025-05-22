import { getMovies, getMovieById, getMoviesWithAwards, getMoviesByLanguages, getMoviesByFresh, getUserComments } from "../services/movieService.js";

export const getAllMovies = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const movies = await getMovies(page, pageSize);
        res.json(movies);
    } catch (error) {
        console.log("Error fetching movies: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getMovie = async (req, res) => {
    try {
        const movie = await getMovieById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Película no encontrada" });
        }
        res.json(movie);
    } catch (error) {
        console.log("Error fetching movie: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getWinnerMovies = async (req, res) => {
    try {
        const movies = await getMoviesWithAwards();
        
        if (!movies) {
            return res.status(404).json({ message: "No hay peliculas ganadoras de premios" });
        }
        res.json(movies);
    } catch (error) {
        console.log("Error fetching movies: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getLanguageMovies = async (req, res) => {
    const { language } = req.body
    console.log("Idioma: ", language)
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const movies = await getMoviesByLanguages(language, page, pageSize);
        
        if (!movies ||  movies.length === 0) {
            return res.status(404).json({ message: "No hay peliculas con el idioma especificado" });
        }
        res.json(movies);
    } catch (error) {
        console.log("Error fetching movies: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const getFreshMovies = async (req, res) => {
    try {
        const movies = await getMoviesByFresh();
        if (!movies) {
            return res.status(404).json({ message: "No hay peliculas ganadoras de premios" });
        }
        res.json(movies);
    } catch (error) {
        console.log("Error fetching movies: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getCommentsByUser = async (req, res) => {
    const id_user  = req.query.id_user
    try {
        const comments = await getUserComments(id_user);
        if (!comments) {
            return res.status(404).json({ message: "No hay peliculas ganadoras de premios" });
        }
        res.json(comments);
    } catch (error) {
        console.log("Error fetching movies: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};