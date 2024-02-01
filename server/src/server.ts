import { PrismaClient } from '@prisma/client'
import express from 'express';

const prisma = new PrismaClient()
const app = express();
app.use(express.json());

// INDEX
// This allows to view ALL the coffee
app.get("/coffee", async (req, res) => {
  const coffee = await prisma.coffee.findMany({});
  res.send(coffee)

})

// SHOW ENDPOINT
// specific number of the id
app.get("/coffee/:id", async (req,res) => {
  const id = +req.params.id;

  const coffee = await prisma.coffee.findUnique({
    where: {
      id, 
    }
  })

  // shows if the item is there using the id
  if(!coffee) {
    return res.status(204).send("No Content")
  }
  res.send(coffee);
})



// DELETE ENPOINT
app.delete("/coffee/:id", async (req,res) => {
  const id = +req.params.id;

  const deletedCoffee = await Promise.resolve()
  .then(() => {
    return prisma.coffee.delete({
      where: {
        id,
      }
    })
  }).catch(() => null);

  if(deletedCoffee === null) {
    res.status(404).send({error: "Coffee not found!"})
  }

  return res.status(200).send("Coffee Deleted!")
})


// POST REQUEST AKA CREATING A COFFEE
app.post("/coffee", async (req, res) => {
  const body = req.body;
  const title = req?.body?.title;
  const image = req?.body?.image;
  const instructions = req?.body?.instructions
  if (typeof title !== "string") {
    return res.status(400).send({error: "Title must be a string"})
  }
  if (typeof image !== "string") {
    return res.status(400).send({error: "Image must be a string"})
  }
  if (typeof instructions !== "string") {
    return res.status(400).send({error: "Instructions must be a string"})
  }
  try {
    const newCoffee = await prisma.coffee.create({
      data: {
        title: title,
        image: image,
        instructions: instructions
      }
    })
    res.status(201).send(newCoffee);
  } catch(e) {
    console.error(e)
    res.status(500);
  }
})

// PATCH REQUEST AKA UPDATING COFFEE
app.patch("/coffee/:id", async (req, res) => {
  const id = +req.params.id;
  const { title, image, instructions } = req.body || {};

  const validKeys = ['title', 'instructions', 'image'];

  const errors = [];

  const invalidKeys = Object.keys(req.body).filter((item) => {
    return !validKeys.includes(item)
  })

  if(invalidKeys) {
    for (const key of invalidKeys) {
      errors.push(`${key} is not a valid key`)
    }
  }

  if(errors.length > 0) {
    res.status(400).send({error: "Error 400 Invalid Keys"})
  }


  try {

    const existingCoffee =await prisma.coffee.findUnique({
      where: {
        id: id,
      }
    })

    if(!existingCoffee) {
      return res.status(404).send({error: "Coffee not found"})
    }

    const updateCoffee = await prisma.coffee.update({
      where: {
        id: id
      },
      data: {
        title: title,
        image: image,
        instructions: instructions
      }
    })
    res.status(201).send(updateCoffee);
  } catch(e) {
    console.error(e)
    res.status(500).send({erro: "error 500 Internal Server"});
  }
})


// this launches the port 3000
app.listen(3000, () => {
  console.log('Server ready at port 3000')
});