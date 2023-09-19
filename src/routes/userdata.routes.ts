import { Router } from "express";
import { createUserData, addShared, addViews, updateFollowers, updateLikes, getUserData } from "../controllers/userdata.controllers";



export const favouritesRouter: Router = Router();

favouritesRouter
    .get('/:userId', getUserData)
    .post('/:userId', createUserData)
    .patch('/shared/:userId', addShared)
    .patch('/views/:userId', addViews)
    .patch('/followers/:userId', updateFollowers)
    .patch('/likes/:userId', updateLikes)
