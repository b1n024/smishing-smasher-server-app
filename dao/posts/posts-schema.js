import mongoose from 'mongoose';

const schema = mongoose.Schema({

    username: String,

    time: Date,

    replies: Number,

    endorsement: Number,

    text: String,

    number: String,

}, {collection: 'smish'});
export default schema;

