import "dotenv/config";
import { findAllUsers } from "./src/data/userData.js";
import { connectToDatabase } from "./src/data/connection.js";

await connectToDatabase();
await findAllUsers();