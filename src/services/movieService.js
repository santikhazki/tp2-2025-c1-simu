import { findAllMovies, findMovieById } from "../data/movieData.js";

export const getMovies = async (page, pageSize) => {
    return await findAllMovies(page, pageSize);
}

export const getMovieById = async (id) => {
    return await findMovieById(id);
}