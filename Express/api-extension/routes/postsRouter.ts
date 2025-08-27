import express from 'express'
import { getPosts } from '../controllers/postsController';
const router = express.Router();

router.get("/", getPosts);

export default router
