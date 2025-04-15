import jwt, { decode } from "jsonwebtoken";
import {SECRET_KEY} from '../constants.js'

export default function authMiddleware(req, res, next) {
   if (req.headers.authorization !== undefined) {
      let tokenString = req.headers.authorization;
      let token = tokenString.split(" ")[1]
      // console.log(token)
      jwt.verify(token,SECRET_KEY,(err,decode)=>{
         if(!err){
            next();
         }
         else{
            res.status(403).send({message:"invalid or expired token "})
         
         }
      })

      // res.send("here")
   } else {
      res.send({ message: "Auhtorization token not present" })
   }

}