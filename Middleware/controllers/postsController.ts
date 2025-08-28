import { Request, Response } from "express";
import postsModel from "../models/postsModel";

function getPosts(req: Request, res: Response) {
  res.status(200);
  res.send(postsModel.getPosts);
}

function addPost(req: Request, res: Response) {
  const postBody = req.body;
  res.sendStatus(201);
  postsModel.addPost(postBody);
}

function addComment(req: Request, res: Response) {
  const postId = req.params.postId;
  res.sendStatus(201);
  postsModel.addComment(postId, req.body);
}

function getComments(req: Request, res: Response) {
  const postId = req.params.postId;
  console.log(postId);
  res.status(200);
  res.send(postsModel.getComments(postId));
}

export default { addPost, getPosts, addComment, getComments };
