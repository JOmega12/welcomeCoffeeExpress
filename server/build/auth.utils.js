"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = exports.getDataFromAuthToken = exports.createTokenForUser = exports.createUnsecuredUserInformation = exports.encryptPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("zod");
const db_setup_1 = require("./prisma/db.setup");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const jwtSecret = process.env.JWT_SECRET;
// console.log(jwtSecret)
const saltRounds = 11;
const encryptPassword = (password) => {
    return bcrypt_1.default.hash(password, saltRounds);
};
exports.encryptPassword = encryptPassword;
const createUnsecuredUserInformation = (user) => ({
    username: user.username,
    id: user.id,
});
exports.createUnsecuredUserInformation = createUnsecuredUserInformation;
const createTokenForUser = (user) => {
    return jsonwebtoken_1.default.sign((0, exports.createUnsecuredUserInformation)(user), jwtSecret);
};
exports.createTokenForUser = createTokenForUser;
const jwtInfoSchema = zod_1.z.object({
    username: zod_1.z.string(),
    iat: zod_1.z.number(),
});
// this gets the data from auth token created from the headers from authorization
const getDataFromAuthToken = (token) => {
    if (!token)
        return null;
    try {
        // this zod schema is going to parse out the type and it will scream if it's not the string and number that it is expecting/ proper data type
        return jwtInfoSchema.parse(jsonwebtoken_1.default.verify(token, jwtSecret));
    }
    catch (e) {
        console.error(e);
        return null;
    }
};
exports.getDataFromAuthToken = getDataFromAuthToken;
// this helper function makes sure the person logging in
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // this finds the token from the user when trying to create a coffee
    // *JWT HANDLING STUFF BELOW
    const [, token] = ((_b = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split) === null || _b === void 0 ? void 0 : _b.call(_a, " ")) || [];
    const myJWTData = (0, exports.getDataFromAuthToken)(token);
    if (!myJWTData) {
        return res.status(401).json({ message: "Invalid Token" });
    }
    const userFromJWt = yield db_setup_1.prisma.user.findFirst({
        where: {
            username: myJWTData.username,
        },
    });
    // console.log(userFromJWt, 'userFromJWT');
    if (!userFromJWt) {
        return res.status(401).json({ message: "User not Found" });
    }
    req.user = userFromJWt;
    next();
    // *JWT HANDLING STUFF ABOVE
});
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.utils.js.map