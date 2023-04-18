import postsModel from "./posts-model.js";

export const findAllPosts = () => postsModel.find();
export const findPostById = (pid) => postsModel.findById(pid);
export const findPostByAuthorID = (authorID) => postsModel.findById({authorID: authorID});
export const findPostsByNickname = (nickname) => postsModel.find({nickname: {$regex: nickname, options: 'i'}});
export const findPostsByContents = (body) => {
  const queries = [];
  Object.keys(body).forEach(function(key) {
    queries.push({key: { $regex: body[key], $options: 'i' }})
  })
  return postsModel.find({$or: queries});
};
export const findPostsByAddress = (body) => {
  const queries = [];
  Object.keys(body).forEach(function(key) {
    queries.push({key: { $regex: body[key], $options: 'i' }})
  })
  return postsModel.find({$and: queries});
};
export const findPostsByTime = (start, end) => postsModel.find({time: {$gte: start, $lte: end}});
export const createPost = (post) => postsModel.create(post);
export const deletePost = (pid) => postsModel.findByIdAndDelete(pid);
export const updatePost = (pid, post) =>
  postsModel.findByIdAndUpdate(pid, { $set: post });
