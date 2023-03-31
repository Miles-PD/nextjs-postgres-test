import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {


       

        //============
        // create post
        //============
        try {
            const result = await prisma.post.findMany({
                include: {
                    user: true,
                    comment: true,
                },
                orderBy: {
                    createdAt: 'desc',
                }
            })
            res.status(200).json(result)
        } catch (error) {
            res.status(403).json({ err: "Error getting posts" })
        }

    }
}