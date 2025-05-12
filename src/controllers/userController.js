import {getUsers, getUserById} from "../services/userService.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        console.log("Error fetching users: ", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if(!user){
            return res.status(404).json({message: "Usuario no encontrado"});
        }
        res.json(user);
    } catch (error) {
        console.log("Error fetching users: ", error);
        res.status(500).json({message: "Internal server error"});
    }
};