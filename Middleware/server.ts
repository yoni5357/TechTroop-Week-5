import express, { Request, Response } from 'express';
import middleware from './middleware';

const server = express();
const port = 3010;
let reqCount = 0;


server.get("/", middleware.logger, (req:Request,res:Response) => {
    res.status(200);
    res.send({message:"Welcome!", requestCount:++reqCount});
})

server.listen(port, () => {
    console.log("Server running on port " + port);
})