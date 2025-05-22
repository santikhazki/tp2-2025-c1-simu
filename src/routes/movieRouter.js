import express from "express";
import { getAllMovies, getMovie, getWinnerMovies, getLanguageMovies, getFreshMovies, getCommentsByUser } from "../controllers/movieController.js";

const router = express.Router();
router.get("/get_winner_movies", getWinnerMovies);
router.post("/get_movies_by_language", getLanguageMovies);
router.get("/get_movies_by_fresh", getFreshMovies);
router.get("/get_comments_by_user", getCommentsByUser);
router.get("/", getAllMovies);
router.get("/:id", getMovie);


export default router;