import * as usersDao from "../dao/users/users-dao.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const bcrypt = require("bcryptjs");

const findAllUser = async (req, res) => {
  const users = await usersDao.findAllUsers();
  console.log("findAllUser", users);
  res.json(users);
};

const findUserById = async (req, res) => {
  console.log("findUser", req.params.uid);
  const userId = req.params._id;
  const user = await usersDao.findUserById(userId);
  res.json(user);
};

const createUser = async (req, res) => {
  const newuser = req.body;
  newuser.dateJoined = new Date().getTime() + "";
  newuser.endorsements = 0;
  newuser.role = "user";
  newuser.following = [];
  newuser.followers = 0;
  newuser.thumbUp = 0;
  newuser.thumbDown = 0;
  newuser.endorsements = 0;
  newuser.posts = [];
  newuser.comments = [];

  newuser.favorites = [];
  newuser.history = [];
  newuser.dateJoined = new Date().toLocaleDateString();

  const inserteduser = await usersDao.createUser(newuser);
  res.json(inserteduser);
};

const deleteUser = async (req, res) => {
  const userIdToDelete = req.body._id;
  const status = await usersDao.deleteUser(userIdToDelete);

  res.json(status);
};

const updateUser = async (req, res) => {
  const userIdToUpdate = req.body._id;
  const updates = req.body;
  const password = req.body.password;
  req.body.password = bcrypt.hashSync(password, 10);
  const status = await usersDao.updateUser(userIdToUpdate, updates);
  res.json(status);
};
export default (app) => {
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUser);
  app.post("/api/users/id", findUserById);
  app.post("/api/users/update", updateUser);
  app.post("/api/users/delete", deleteUser);
};
