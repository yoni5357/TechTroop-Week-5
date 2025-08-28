import { NextFunction, Request, Response } from "express";
import {ValidationError,NotFoundError,BaseError} from "./errors"
import usersModel from "./usersModel";

function logger(req:Request,res:Response,next:NextFunction){
    const date = new Date().toDateString();
    const method = req.method;
    const url = req.url;
    console.log(date, method, url);
    next();
}

function validateId(req:Request,res:Response,next:NextFunction) {
    const id = req.params.id;
    if(isNaN(Number(id))){
        const error = new ValidationError("Id is not a valid number");
        next(error);
    } else next();
}

function checkResourceExists(req:Request,res:Response,next:NextFunction){
    const userId = req.params.id;
    if(!usersModel.getUsers().find(user => user.id === Number(userId))){
        const error = new NotFoundError("user not found");
        next(error);
    } else next();
}

function errorHandler(err:BaseError,req:Request,res:Response,next:NextFunction){
    console.error(err);
    res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
}

export default {logger, validateId, checkResourceExists,errorHandler};