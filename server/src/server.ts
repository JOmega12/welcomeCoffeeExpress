import express from 'express';
import { coffeeRouter } from '../router/coffeeRouter.router.';
import { userRouter } from '../router/userRouter.router';
import { authController } from '../router/authRouter.router';
import { User } from '@prisma/client';
// import { PrismaClient } from "@prisma/client";
// import { createProxyMiddleware } from "http-proxy-middleware";


const app = express();


// uses the type system for authMid
declare global {
    namespace Express {
        interface Request {
            user? : User;
        }
    }

    namespace NodeJS {
        export interface ProcessEnv {
          HOST: string;
          DATABASE_URL: string;
          JWT_SECRET: string;
        }
      }
}

app.use(express.json());


app.use(authController);
app.use("/coffee",coffeeRouter);
// app.use("/coffee", createProxyMiddleware({target: 'http://localhost:4000', changeOrigin: true}) ,coffeeRouter);
app.use("/users", userRouter); 



// this launches the port 4000
app.listen(4000);