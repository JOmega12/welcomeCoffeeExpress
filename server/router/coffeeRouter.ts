import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const prisma = new PrismaClient();
const coffeeRouter = Router();

const coffeeSchema = z.object({
  title: z.string({
    errorMap: (err) => ({ message: "Title needs to be a string" }),
  }),
  instructions: z.string({
    errorMap: (err) => ({ message: "Description needs to be a string" }),
  }),
  image: z.string({
    errorMap: (err) => ({ message: "Image needs to be a string" }),
  }),
});

// INDEX
// This allows to view ALL the coffee
// the middleware validateRequest does the strict typing instead of having to write if statements if the variable is the typeof string
coffeeRouter.get("/coffee", async (req, res) => {
  const coffee = await prisma.coffee.findMany({});
  res.send(coffee);
});

// SHOW ENDPOINT
// specific number of the id
coffeeRouter.get("/coffee/:id", async (req, res) => {
  const id = +req.params.id;

  const coffee = await prisma.coffee.findUnique({
    where: {
      id,
    },
  });

  // shows if the item is there using the id
  if (!coffee) {
    return res.status(204).send("No Content");
  }
  res.send(coffee);
});

// DELETE ENPOINT
coffeeRouter.delete("/coffee/:id", async (req, res) => {
  const id = +req.params.id;

  const deletedCoffee = await Promise.resolve()
    .then(() => {
      return prisma.coffee.delete({
        where: {
          id,
        },
      });
    })
    .catch(() => null);

  if (deletedCoffee === null) {
    res.status(404).send({ error: "Coffee not found!" });
  }

  return res.status(200).send("Coffee Deleted!");
});

// POST REQUEST AKA CREATING A COFFEE
coffeeRouter.post(
  "/coffee",
  validateRequest({
    body: z.object({
      title: z.string(),
      instructions: z.string(),
      image: z.string(),
    }),
  }),
  async (req, res) => {
    //   const body = req.body;
    try {
      const newCoffee = await prisma.coffee.create({
        data: {
          ...req.body,
        },
      });
      res.status(201).send(newCoffee);
    } catch (e) {
      console.error(e);
      res.status(500);
    }
  }
);

// PATCH REQUEST AKA UPDATING COFFEE
coffeeRouter.patch(
  "/coffee/:id",
  validateRequest({
    body: coffeeSchema.partial(),
  }),
  async (req, res) => {
    const id = +req.params.id;
    const { title, image, instructions } = req.body || {};

    const validKeys = ["title", "instructions", "image"];

    const errors = [];

    const invalidKeys = Object.keys(req.body).filter((item) => {
      return !validKeys.includes(item);
    });

    if (invalidKeys.length > 0) {
      for (const key of invalidKeys) {
        errors.push(`${key} is not a valid key`);
      }
    }

    if (errors.length > 0) {
      res.status(400).send({ error: "Error 400 Invalid Keys" });
    }

    try {
      const existingCoffee = await prisma.coffee.findUnique({
        where: {
          id: id,
        },
      });

      if (!existingCoffee) {
        return res.status(404).send({ error: "Coffee not found" });
      }

      const updateCoffee = await prisma.coffee.update({
        where: {
          id: id,
        },
        data: {
          title: title,
          image: image,
          instructions: instructions,
        },
      });
      res.status(201).send(updateCoffee);
    } catch (e) {
      console.error(e);
      res.status(500).send({ erro: "error 500 Internal Server" });
    }
  }
);

export { coffeeRouter };