import { Request, Response } from "express";
import usersModel from "../models/usersModel";

function getUsers(req: Request, res: Response) {
  res.status(200);
  res.send(usersModel.getUsers());
}

function getUserById(req: Request, res: Response) {
  res.status(200);
  res.send(usersModel.getUserById(req.params.id));
}

export default { getUsers, getUserById };
