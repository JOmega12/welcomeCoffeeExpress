import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { authMiddleware, getDataFromAuthToken } from "../auth.utils";

const prisma = new PrismaClient();
const favoriteRouter = Router();

// this is to view ALL favorites
favoriteRouter.get("/", async (req, res) => {
  const favorites = await prisma.favorite.findMany({});
  res.send(favorites);
});

// this creates the favorite
favoriteRouter.post("/", authMiddleware, async (req, res) => {
  try {
    const [, token] = req.headers.authorization?.split?.(" ") || [];
    const myJWTData = getDataFromAuthToken(token);
    const usernameFromJWTData = myJWTData?.username;

    const user = await prisma.user.findFirst({
      where: {
        username: usernameFromJWTData,
      },
    });

    const { coffeeId } = req.body;

    // Check if the user is found
    if (!user) {
      return res.status(401).json({ message: "User not Found" });
    }

    if (!user.id) {
      return res.status(401).json({ message: "User Id Not Found" });
    }

    if (!coffeeId) {
      return res.status(401).json({ message: "Coffee Id Not Found" });
    }

    const newFavoriteCoffee = await prisma.favorite.create({
      data: {
        userId: user.id,
        coffeeId,
      },
    });

    if (!newFavoriteCoffee) {
      res.status(404).send({ error: "Favorite not favorited" });
    }
    res.status(201).json(newFavoriteCoffee);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// this is to delete Favorites
favoriteRouter.delete("/:id", async (req, res) => {
  const id = +req.params.id;

  try {
    const checkExistingFavorite = await prisma.favorite.findUnique({
      where: {
        id,
      },
    });
    if (!checkExistingFavorite) {
      return res.status(404).json({ message: "Cannot find favorite" });
    }
    const deletedCoffee = await prisma.favorite.delete({
      where: {
        id,
      },
    });

    res.status(204).send(deletedCoffee);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export { favoriteRouter };
