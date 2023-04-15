import usersModel from "./users-model.js";
import {ObjectId} from "mongodb";
export const findAllUsers = () => usersModel.find();
export const findUsers = (uid) => usersModel.findOne({uid:(uid)});
export const createUser = (user) => usersModel.create(user);
export const deleteUser = (pid) => usersModel.deleteOne({_id: pid});
export const updateUser = (pid, user) => usersModel.updateOne({_id: pid}, {$set: user})


