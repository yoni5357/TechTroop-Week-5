import postsModel from "../models/postsModel";

export async function getPosts(req,res){
    const posts = await postsModel.getPosts();
    res.status(200).json(posts);
}

function getPostById(req,res){
    const post = postsModel.getPostById(req.params.id);
    res.status(200).json(post);
}

function getPostComments(req,res){
    const comments = postsModel.getPostComments(req.params.id);
    res.status(200).json(comments);
}

function updateComment(req,res){
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const body = req.body;
    postsModel.updateComment(postId, commentId, body);
    res.status(200).json(postsModel.getPostById(postId)["comments"]);
}

function addPost(req,res){
    postsModel.addPost(req.body);
    res.sendStatus(201);
}

function deletePostById(req,res){
    postsModel.deletePostById(req.params.id);
    res.sendStatus(204);
}

export default {getPosts, getPostById, getPostComments, updateComment, addPost, deletePostById}