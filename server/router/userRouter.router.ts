import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userRouter = Router();

// INDEX
userRouter.get("/", async (req, res) => {
    const user = await prisma.user.findMany({});
    res.send(user);
})


export { userRouter };