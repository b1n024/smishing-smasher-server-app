import * as postsDao from "../dao/posts/posts-dao.js";

const findAllPosts = async (req, res) => {
  const posts = await postsDao.findAllPosts();
  res.json(posts);
};

const findPostById = async (postId) => {
  console.log("find post", postId);

  const post = await postsDao.findPostById(postId);
  return post;
};

const findPostsByContents = async (body) => {
  console.log("find post", body);

  const post = await postsDao.findPostsByContents(body);
  return post;
};

const findPostsByAddress = async (body) => {
  console.log("find post", body);

  const post = await postsDao.findPostsByAddress(body);
  return post;
};

const createPost = async (req, res) => {
  const newpost = req.body;
  newpost.thumbUp = 0;
  newpost.thumbDown = 0;
  newpost.endorsement = 0;
  newpost.comments = [];
  newpost.time = new Date().getTime() + "";
  const insertedpost = await postsDao.createPost(newpost);
  res.json(insertedpost);
};

const deletePost = async (req, res) => {
  const postIdToDelete = req.body.pid;
  const status = await postsDao.deletePost(postIdToDelete);
  res.json(status);
};

const updatePost = async (req, res) => {
  const postIdToUpdate = req.body._id;
  const updates = req.body;
  const status = await postsDao.updatePost(postIdToUpdate, updates);
  res.json(status);
};
export default (app) => {
  app.post("/api/posts", createPost);
  app.get("/api/posts", findAllPosts);
  app.post("/api/posts/mul", findPostsByContents);
  app.post("/api/posts/one", findPostsByAddress);
  app.post("/api/posts/id", findPostById);
  app.post("/api/posts/update", updatePost);
  app.post("/api/posts/delete", deletePost);
};
