import { Router } from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { prisma } from "../prisma/db.setup";
import bcrypt from 'bcrypt';
import { createTokenForUser, createUnsecuredUserInformation } from "../src/auth.utils";

const authController = Router();

authController.post("/auth/login", 
    // this makes sure that there is both username and password as well as it being strictly string and not a number
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
        return res.status(404).json({message: "User not found"})
    }

    const isPasswordCorrect = await bcrypt.compare(bodyPassword, user.passwordHash)
    if(!isPasswordCorrect){
        return res.status(401).json({message: "Invalid credentials"})
    }
    //this creates the user information that is being put
    const userInformation = createUnsecuredUserInformation(user);

    // this creates the token for the user
    const token = createTokenForUser(user);

    return res.status(200).json({token, userInformation})
})

export { authController }