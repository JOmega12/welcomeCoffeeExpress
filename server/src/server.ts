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
app.get("coffee/:id", async (req,res) => {
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

// this launches the port 3000
app.listen(3000);