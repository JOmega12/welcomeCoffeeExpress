import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";

const saltRounds = 11;

export const encryptPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

export const createUnsecuredUserInformation = (user: User) => ({
  username: user.username,
});

export const createTokenForUser = (user: User) => {
  return jwt.sign(createUnsecuredUserInformation(user), "super-secret");
};

const jwtInfoSchema = z.object({
    username: z.string(),
    iat: z.number(),
})

// this gets the data from auth token created from the headers from authorization
export const getDataFromAuthToken = (token?: string) => {
    if(!token) return null;
    try {
        // this zod schema is going to parse out the type and it will scream if it's not the string and number that it is expecting/ proper data type
        return jwtInfoSchema.parse(jwt.verify(token, "super-secret"));
    } catch(e) {
        console.error(e);
        return null;
    }
}