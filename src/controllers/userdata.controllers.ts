import { Request, Response } from "express";
import prismaClient from "../db/prismaClient"

export const getUserData = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const targetUserData = await prismaClient.userData.findFirst({
            where: { userId: userId }
        })
        return res.status(200).send(targetUserData)
    } catch (error) {
        return res.status(500).send(error)

    }
};

export const createUserData = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        const existingUser = await prismaClient.userData.findFirst({
            where: { userId: userId }
        })
        if (existingUser) {
            return res.status(200).send(existingUser)
        }

        const newUserData = await prismaClient.userData.create({
            data: {
                userId,
                likes: 0,
                views: 0,
                followers: 0,
                shared: 0
            }
        })
        return res.status(201).send(newUserData)
    } catch (error) {
        return res.status(500).send(error)
    }
};

export const updateFollowers = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { totalFollowers } = req.body;

        if (!totalFollowers) {
            return res.status(404).send('Missing followers')
        }

        const newUserData = await prismaClient.userData.update({
            where: { userId },
            data: {
                followers: totalFollowers,
            }
        })
        return res.status(202).send(newUserData)
    } catch (error) {
        return res.status(500).send(error)
    }

};
export const addViews = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const newUserData = await prismaClient.userData.update({
            where: { userId },
            data: {
                views: { increment: 1 }
            }
        })
        return res.status(202).send(newUserData)
    } catch (error) {
        return res.status(500).send(error)
    }

};
export const updateLikes = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { action } = req.body;

        const targetUser = await prismaClient.userData.findFirst({
            where: { userId: userId },
        })

        if (action == 'increment') {
            const newUserData = await prismaClient.userData.update({
                where: { userId },
                data: {
                    likes: { increment: 1 }
                }
            })
            return res.status(202).send(newUserData)
        }
        else if (action == 'decrement' && targetUser!.likes > 0) {
            const newUserData = await prismaClient.userData.update({
                where: { userId },
                data: {
                    likes: { decrement: 1 }
                }
            })
            return res.status(202).send(newUserData)
        }
        else
            return res.status(400).send('Invalid action ' + action)

    } catch (error) {
        return res.status(500).send(error)
    }

};
export const addShared = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const newUserData = await prismaClient.userData.update({
            where: { userId },
            data: {
                shared: { increment: 1 }
            }
        })
        return res.status(202).send(newUserData)
    } catch (error) {
        return res.status(500).send(error)
    }

};
