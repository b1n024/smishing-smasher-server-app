import mongoose from "mongoose";
import commentsSchema from "./comments-schema.js";
const commentsModel = mongoose.model("postsModel", commentsSchema);
export default commentsModel;
