import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    nickname: String,
    email: String,
    password: String,
    profilePicture: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    dateJoined: Date,
    birthday: Date,
    website: String,
    bio: String,
    following: Array,
    followers: Number,
    endorsements: Number,
    thumbUp: Number,
    thumbDown: Number,
    role: String,
    posts: Array,
    comments: Array,
    favorites: Array,
    history: Array,
  },
  { collection: "user" }
);
export default schema;
