import { Router } from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { prisma } from "../prisma/db.setup";
import bcrypt from 'bcrypt';

const authController = Router();

authController.post("/auth/login", 
    validateRequest({
        body: z.object({
            username: z.string(),
            password: z.string(),
        })
    })
,async ({body: {username: bodyUsername, password:bodyPassword}  },res) => {
    const user = await prisma.user.findFirst({
        where: {
            username: bodyUsername
        }
    })
    
    if(!user) {
        return res.status(404).json({message: "user not found"})
    }

    const isPasswordCorrect = await bcrypt.compare(bodyPassword, user.passwordHash)
    if(!isPasswordCorrect){
        return res.status(401).json({message: "invalid credentials"})
    }

    return res.status(200).json({message: "You Logged In!"})
})

export { authController }