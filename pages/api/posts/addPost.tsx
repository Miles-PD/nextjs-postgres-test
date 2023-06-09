import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import prisma from '../../../prisma/client.tsx'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const session = await getServerSession(req, res, authOptions)
        if (!session) {
            return res.status(401).json({ message: 'Sign it to post'})
        }
        
        const title: string = req.body.title

        const prismaUser = await prisma.user.findUnique({
            where: { email: session?.user?.email },
        })

        //============
        // check post contents
        //============
        if (title.length > 300) {
            return res.status(403).json({ message: 'Text length too long' })
        }
        if (!title.length) {
            return res.status(403).json({ message: 'Empty posts not accepted' })
        }

        //============
        // create post
        //============
        try {
            const result = await prisma.post.create({
                data: {
                    title,
                    userId: prismaUser.id,
                }
            })
            res.status(200).json(result)
        } catch (error) {
            res.status(403).json({ err: "Error has occured while making a post" })
        }

    }
}