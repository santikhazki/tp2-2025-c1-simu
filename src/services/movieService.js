import { findAllMovies, findMovieById, findMoviesByLanguage, findWinnerMovies, findMoviesByFresh,findUserComments } from "../data/movieData.js";

export const getMovies = async (page, pageSize) => {
    return await findAllMovies(page, pageSize);
}

export const getMovieById = async (id) => {
    return await findMovieById(id);
}

export const getMoviesWithAwards = async () => {
    return await findWinnerMovies();
}

export const getMoviesByLanguages = async (language, page, pageSize) => {
    return await findMoviesByLanguage(language, page, pageSize);
}

export const getMoviesByFresh = async () => {
    return await findMoviesByFresh();
}

export const getUserComments = async (id_user) => {
    return await findUserComments(id_user);
}