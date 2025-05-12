import { findAllUsers, findUserById } from "../data/userData.js";

export const getUsers = async () => {
    return await findAllUsers();
}

export const getUserById = async (id) => {
    return await findUserById(id);
}