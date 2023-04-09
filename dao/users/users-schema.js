import mongoose from 'mongoose';
import {ObjectId} from "mongodb";

const schema = mongoose.Schema({
    uid: String,
    firstName: String,
    lastName: String,
    handle: String,
    profilePicture: String,
    location: String,
    dateJoined : String,
    following: Array,
    endorsements: Number,
    role: String,
    posts: Array,


}, {collection: 'user'});
export default schema;

