import express from "express"
import postsRouter from "./routes/postsRouter"
import postsController from "./controllers/postsController";
import postsModel from "./models/postsModel";


const server = express();
const port = 3000;

server.use(express.json());

server.listen(port, () => {
    console.log("server listening on port " + port);
    postsModel.getPosts();
})

