import { NextFunction,Request,Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"


import { Jwt_Secret } from "../config";

export interface AuthRequest extends Request {
  userId?: string;
}

export function UserMiddleware(req:AuthRequest,res:Response,next:NextFunction){
    const authHeader = req.headers.authorization
    if(!authHeader || authHeader == undefined ){
        res.json({
            "msg":"Unatuthorized access"
        })
        return
    }

    const token = authHeader.split(' ')[1]


    const decode:JwtPayload[string] = jwt.verify(token,Jwt_Secret)

    req.userId  = decode.userId

    next()
}