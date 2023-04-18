import tagsModel from "./tags-model.js";
export const findAllTags = () => tagsModel.find();
export const findTagById = (tid) => tagsModel.findById(tid);
export const findTagsByTitle = (title) => tagsModel.find({title: { $regex: title, $options: 'i' }});
export const createTag = (tag) => tagsModel.create(tag);
export const deleteTag = (tid) => tagsModel.findByIdAndDelete({ _id: tid });
export const updateTag = (tid, tag) => tagsModel.findByIdAndUpdate({ _id: tid }, { $set: tag });
