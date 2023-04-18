import mongoose from 'mongoose';

const schema = mongoose.Schema({
    title: String,
    time: Date,
}, {collection: 'tag'});
export default schema;

