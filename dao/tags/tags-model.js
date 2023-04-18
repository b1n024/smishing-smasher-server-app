import mongoose from "mongoose";
import tagsSchema from "./tags-schema.js";
const tagsModel = mongoose.model("tagsModel", tagsSchema);
export default tagsModel;
