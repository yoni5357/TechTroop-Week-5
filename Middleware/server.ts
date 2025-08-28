import express, { Request, Response } from "express";
import middleware from "./middleware";
import { rateLimiter } from "./middlewares/rateLimiter";
import userRouter from "./routers/userRouter";
import postsRouter from "./routers/postsRouter";

const server = express();
const port = 3010;
let reqCount = 0;

server.use(express.json());
server.use(rateLimiter);

server.get("/", middleware.logger, (req: Request, res: Response) => {
  res.status(200);
  res.send({ message: "Welcome!", requestCount: ++reqCount });
});

server.use("/users", userRouter);

server.use("/posts", postsRouter);

server.listen(port, () => {
  console.log("Server running on port " + port);
});

server.use(middleware.errorHandler);
