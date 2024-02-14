
import { PrismaClient } from "@prisma/client"
import { Router } from "express";

// then CREATE/POST the specific favorite

// then DELETE the specific favorite

// try to toggle but thats later
// no tokens needed


const prisma = new PrismaClient;
const favoriteRouter = Router();


// this is to view ALL favorites
favoriteRouter.get("/", async (req, res) => {
    const favorite = await prisma.favorite.findMany({});
    res.send(favorite);
})


favoriteRouter.post("/", async (req, res) => {
    try{
        // const newFavoriteCoffee = await prisma
        console.log(...req.body, 'reqbody')
    }catch(e) {
        console.error(e);
        res.status(500);
    } 
})

export { favoriteRouter }