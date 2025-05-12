import express from "express";
import { getAllMovies, getMovie } from "../controllers/movieController.js";

const router = express.Router();
router.get("/", getAllMovies);
router.get("/:id", getMovie);

export default router;