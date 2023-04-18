import mongoose from 'mongoose';

const schema = mongoose.Schema({
    authorID: Object,
    time: Date,
    thumbUp: Number,
    thumbDown: Number,
    text: String,
    photos: Array,
}, {collection: 'comment'});
export default schema;
