import commentsModel from "./comments-model.js";
export const findAllComments = () => commentsModel.find();
export const findComments = (body) => commentsModel.find(body);
export const findOneCommentsByAuthorID = (authorID) => commentsModel.findOne({authorID: authorID});
export const findCommentsByNickname = (nickname) => commentsModel.find({nickname: {$regex: nickname, options: 'i'}});
export const findCommentsByContents = (body) => {
  const queries = [];
  Object.keys(body).forEach(function(key) {
    queries.push({key: { $regex: body[key], $options: 'i' }})
  })
  return commentsModel.find({$or: queries});
};
export const findCommentsByTime = (start, end) => commentsModel.find({time: {$gte: start, $lte: end}});
export const findCommentById = (cid) => commentsModel.findById(cid);
export const createComment = (comment) => commentsModel.create(comment);
export const deleteComment = (cid) => commentsModel.findByIdAndDelete(cid);
export const updateComment = (cid, comment) => commentsModel.findByIdAndUpdate(cid, { $set: comment });
