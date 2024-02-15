
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
        const { userId, coffeeId }= req.body;
        
        const newFavoriteCoffee = await prisma.favorite.create({
            data: {
                userId,
                coffeeId
            }
        })

        if(!newFavoriteCoffee){
            res.status(404).send({error: "Favorite not favorited"});
        }
        res.status(201).json(newFavoriteCoffee);

        // console.log(...req.body, 'reqbody')
    }catch(e) {
        console.error(e);
        res.status(500).json({message: "Internal Server Error"})

    } 
})


favoriteRouter.delete("/:id", async (req, res) => {
    const id = +req.params.id;

    try{   

        const checkExistingFavorite = await prisma.favorite.findUnique({
            where: {
                id
            }
        })
        if(!checkExistingFavorite) {
            return res.status(404).json({message: "Cannot find favorite"})
        }
        const deletedCoffee = await prisma.favorite.delete({
            where: {
                id,
            }
        })

        res.status(204).send(deletedCoffee);
    }catch(e) {
        console.error(e);
        res.status(500).json({message: "Internal Server Error"})
    }
})


// favoriteRouter.post("/", async (req, res) => {
//     try{
//         const { userId, coffeeId }= req.body;

//         // checks if the coffee is favorited
//         const existingFavoriteCoffee = await prisma.favorite.findFirst({
//             where: {
//                 userId,
//                 coffeeId
//             }
//         })

//         if(existingFavoriteCoffee) {
//             const deleteCurrentFav = await prisma.favorite.delete({
//                 where: {
//                     id: existingFavoriteCoffee.id,
//                 }
//             });
//             res.status(204).send(deleteCurrentFav);
//         } else {
//             const newFavoriteCoffee = await prisma.favorite.create({
//                 data: {
//                     userId,
//                     coffeeId
//                 }
//             })
    
//             if(!newFavoriteCoffee){
//                 res.status(404).send({error: "Favorite not favorited"});
//             }
//             res.status(201).json(newFavoriteCoffee);
//         }

//         // console.log(...req.body, 'reqbody')
//     }catch(e) {
//         console.error(e);
//         res.status(500).json({message: "Internal Server Error"})

//     } 
// })


export { favoriteRouter }