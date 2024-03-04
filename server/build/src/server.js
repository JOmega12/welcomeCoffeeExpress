"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const coffeeRouter_router_1 = require("../router/coffeeRouter.router.");
const userRouter_router_1 = require("../router/userRouter.router");
const authRouter_router_1 = require("../router/authRouter.router");
// import { PrismaClient } from "@prisma/client";
// import { createProxyMiddleware } from "http-proxy-middleware";
const cors_1 = __importDefault(require("cors"));
const favRouter_router_1 = require("../router/favRouter.router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(authRouter_router_1.authController);
app.use("/coffee", coffeeRouter_router_1.coffeeRouter);
// app.use("/coffee", createProxyMiddleware({target: 'http://localhost:4000', changeOrigin: true}) ,coffeeRouter);
app.use("/users", userRouter_router_1.userRouter);
app.use("/favorites", favRouter_router_1.favoriteRouter);
// this launches the port 4000
app.listen(4000);
//# sourceMappingURL=server.js.map