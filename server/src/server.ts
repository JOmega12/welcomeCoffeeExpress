import express from 'express';
import { coffeeRouter } from '../router/coffeeRouter.router.';
import { userRouter } from '../router/userRouter.router';
import { authController } from '../router/authRouter.router';
// import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());


app.use(authController);
app.use("/coffee", coffeeRouter);
app.use("/users", userRouter)


// this launches the port 3000
app.listen(3000);