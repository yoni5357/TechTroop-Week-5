import express from "express";
import postsController from "../controllers/postsController";
import { postIdValidation, postValidation } from "../middlewares/postValidation";
import { validateComment, commentValidation } from "../middlewares/commentValidation";

const router = express.Router();

router.get("/", postsController.getPosts);
router.post("/", postValidation, postsController.addPost);
router.get("/:postId/comments",postIdValidation,postsController.getComments);
router.post("/:postId/comments", validateComment, commentValidation, postsController.addComment);

export default router;
