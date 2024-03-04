"use strict";
// this helper function makes sure the person logging in
// export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
//   // this finds the token from the user when trying to create a coffee
//   // *JWT HANDLING STUFF BELOW
//   const [, token] = req.headers.authorization?.split?.(" ") || [];
//   const myJWTData = getDataFromAuthToken(token);
//   if(!myJWTData) {
//     return res.status(401).json({message: "Invalid Token"})
//   }
//   const userFromJWt = await prisma.user.findFirst({
//     where: {
//       username: myJWTData.username,
//     }
//   }) 
//   // console.log(userFromJWt, 'userFromJWT');
//   if(!userFromJWt){
//     return res.status(401).json({message: "User not Found"})
//   }
//   req.user = userFromJWt;
//   next();
//   // *JWT HANDLING STUFF ABOVE
//   }
//# sourceMappingURL=thowStuff.js.map