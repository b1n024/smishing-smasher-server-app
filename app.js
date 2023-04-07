import mongoose from "mongoose";
// TODO: add env variable for connection string
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING

mongoose.connect("mongodb+srv://root:smishingsmasher@smishing-smasher.udn2ewp.mongodb.net/smishing-smasher?retryWrites=true&w=majority");


import express from 'express'
// import UserController
//     from "./controllers/users/users-controller.js"
import PostController from "./controllers/posts-controller.js"
import cors from 'cors'

const app = express()
app.use(express.json());
app.use(cors())
PostController(app)
app.listen(process.env.PORT || 4000)