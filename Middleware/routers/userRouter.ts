import express, { Request, Response } from 'express';
import userController from '../controllers/userController';
import middleware from '../middleware';

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id",middleware.validateId, middleware.checkResourceExists, userController.getUserById);


export default router;