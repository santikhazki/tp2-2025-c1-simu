import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

export async function findAllMovies(page, pageSize) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const movies = await db.collection("movies")
            .find()
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return movies;
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

export async function findWinnerMovies() {
    const db = getDb()
    const movies = await db.collection("movies").find(
        { "awards.wins": { $gt: 1 } },
        {
            projection: {
                _id: 0,
                title: 1,
                poster: 1,
                plot: 1
            }
        }
    ).toArray();

    return movies;

}

export async function findMoviesByLanguage(language, page, pageSize) {
    const db = getDb()
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const movies = await db.collection("movies")
            .find({ languages: language })
            .skip(skip)
            .limit(pageSize)
            .toArray();
        console.log("Movies: ", movies)
        return movies;
    }
    const movies = await db.collection("movies")
        .find({ languages: language })
    return movies;

}

export async function findMoviesByFresh() {
    const db = getDb()
    const movies = await db.collection("movies")
        .find({ "tomatoes.fresh": { $exists: true } })
        .sort({ "tomatoes.fresh": -1 })
        .toArray();
    return movies;

}

export async function findUserComments(id_user) {
    const db = getDb();

    const user = await db.collection("users").findOne({ _id: new ObjectId(id_user) });
    if (!user) return [];

    const commentsWithMovies = await db.collection("comments").aggregate([
        {
            $match: {
                name: user.name,
                email: user.email
            }
        },
        {
            $lookup: {
                from: "movies",
                localField: "movie_id",
                foreignField: "_id",
                as: "movie"
            }
        },
        {
            $unwind: "$movie"
        },
        {
            $project: {
                _id: 0,
                movieTitle: "$movie.title",
                comment: "$text",
                moviePoster: "$movie.poster"
            }
        }
    ]).toArray();

    return commentsWithMovies;


}