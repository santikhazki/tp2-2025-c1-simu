import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

export async function findAllMovies(page = 1, pageSize = 10) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const movies = await db.collection("movies")
            .find()
            .skip(skip)
            .limit(pageSize)
            .toArray();
        const total = await db.collection("movies").countDocuments();
        return {
            data: movies,
            total,
            page,
            pageSize,
            totalPages: Math.ceil(total / pageSize)
        };
    } else {
        // Sin paginación: trae todas las películas
        const movies = await db.collection("movies").find().toArray();
        return movies;
    }
}

export async function findMovieById(id) {
    const db = getDb();
    const movie = await db.collection("movies").findOne({ _id: new ObjectId(id) });
    return movie;
}