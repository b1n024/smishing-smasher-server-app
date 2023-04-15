import * as postsDao from '../dao/posts/posts-dao.js'




const findAllPosts = async (req, res) => {
    const posts = await postsDao.findAllPosts()
    res.json(posts);
}
const findPosts = async (postId) => {
    console.log("findpost", postId)

    const post = await postsDao.findPost(postId)
    return post;
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
    // app.get('/api/posts', findAllPosts);

    app.get('/api/posts', async (req, res) => {
        const ids = req.query.ids;
        // console.log("ids", ids)

        if (!ids) {
            const posts = await postsDao.findAllPosts();
            // console.log("no ids", posts)
            res.json(posts);
        }

        else {
            const idArray = ids.split(',');

            try {
                const posts = await postsDao.findPost(idArray);
                // console.log(posts)
                res.json(posts);
            } catch (error) {
                res.status(500).json({error: error.message});
            }
        }

    });

    app.put('/api/posts/:tid', updatePost);
    app.delete('/api/posts/:tid', deletePost);
}
