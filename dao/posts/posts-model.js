import mongoose from "mongoose";
import postsSchema from "./posts-schema.js";
const postsModel = mongoose.model("postsModel", postsSchema);
export default postsModel;
