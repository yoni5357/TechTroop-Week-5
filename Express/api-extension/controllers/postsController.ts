import postsModel from "../models/postsModel";

export async function getPosts(req,res){
    const posts = await postsModel.getPosts();
    res.status(200).json(posts);
}

function getPostById(req,res){
    const post = postsModel.getPostById(req.params.id);
    res.status(200).json(post);
}

export default {getPosts, getPostById}