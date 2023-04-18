import mongoose from 'mongoose';

const schema = mongoose.Schema({
    authorID: Object,
    title: String,
    time: Date,
    phone: Number,
    city: String,
    state: String,
    zip: String,
    comments: Array,
    tags: Array,
    thumbUp: Number,
    thumbDown: Number,
    endorsement: Number,
    description: String,
    spamText: String,
    photos: Array,
}, {collection: 'smish'});
export default schema;

