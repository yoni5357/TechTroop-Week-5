
import { NextFunction, Request, Response } from "express";
import { validationResult, body } from "express-validator";


export const validateComment = [
    body('content')
        .isLength({min:5, max:500})
        .withMessage('Content must be at least 5 and no more than 500 characters'),
    body('email')
        .isEmail()
        .withMessage('Must be valid email'),
    body('postId')
        .isNumeric()
        .withMessage('postId must be a number')
];


export function commentValidation(req:Request, res:Response, next:NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}