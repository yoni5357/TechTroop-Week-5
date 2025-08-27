import postsModel from "../models/postsModel";

export async function getPosts(req,res){
    const posts = await postsModel.getPosts();
    res.status(200).json(posts);
}

export default {getPosts}