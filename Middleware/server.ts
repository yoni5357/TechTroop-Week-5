import express, { Request, Response } from 'express';
import middleware from './middleware';
import usersModel from './usersModel';
import userController from './controllers/userController';
import userRouter from './routers/userRouter';

const server = express();
const port = 3010;
let reqCount = 0;


server.get("/", middleware.logger, (req:Request,res:Response) => {
    res.status(200);
    res.send({message:"Welcome!", requestCount:++reqCount});
})

server.use("/users", userRouter);


server.listen(port, () => {
    console.log("Server running on port " + port);
})


server.use(middleware.errorHandler);