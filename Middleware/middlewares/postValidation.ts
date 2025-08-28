import Ajv from "ajv";
import addFormats from "ajv-formats"
import {postSchema} from "../data/postSchema";
import { NotFoundError, ValidationError } from "../errors";
import { NextFunction, Request, Response } from "express";
import postsModel from "../models/postsModel";

const ajv = new Ajv();
addFormats(ajv);
const validatePost = ajv.compile(postSchema);

export function postValidation(req:Request,res:Response,next:NextFunction){
    const valid = validatePost(req.body);
    if(valid){
        next();
    } else {
        const error = new ValidationError("Post validation error");
        next(error);
    }
}

export function postIdValidation(req:Request,res:Response,next:NextFunction){
    const posts = postsModel.getPosts();
    const postId = req.params.postId;
    console.log(postId);
    if(!Object.keys(posts).find(key=> key === postId)){
        console.log("not")
        const error = new NotFoundError("post not found");
        next(error);
    } else {
        next();
    }
}