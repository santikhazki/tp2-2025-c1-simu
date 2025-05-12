import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

export async function findAllMovies(page = 1, pageSize = 10) {
    const db = getDb();
    const skip = (page - 1) * pageSize;
    const movies = await db.collection("movies")
        .find()
        .skip(skip)
        .limit(pageSize)
        .toArray();
    return movies;
}

export async function findMovieById(id) {
    const db = getDb();
    const movie = await db.collection("movies").findOne({ _id: new ObjectId(id) });
    return movie;
}