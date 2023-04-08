import * as postsDao from '../dao/posts/posts-dao.js'



const findPosts = async (req, res) => {
    const posts = await postsDao.findPosts()
    res.json(posts);
}

const createPost = async (req, res) => {
    const newpost = req.body;
    newpost.likes = 0;
    newpost.liked = false;
    const insertedpost = await postsDao
        .createPost(newpost);
    res.json(insertedpost);
}

const deletePost = async (req, res) => {
    const postIdToDelete = req.params.tid;
    const status = await postsDao
        .deletePost(postIdToDelete);

    res.json(status);
}

const updatePost = async (req, res) => {
    const postIdToUpdate = req.params.tid;
    const updates = req.body;


    const status = await postsDao
        .updatePost(postIdToUpdate,
            updates);
    res.json(status);
}
export default (app) => {
    app.post('/api/posts', createPost);
    app.get('/api/posts', findPosts);
    app.put('/api/posts/:tid', updatePost);
    app.delete('/api/posts/:tid', deletePost);
}
