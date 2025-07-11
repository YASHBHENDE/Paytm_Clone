import dotenv from "dotenv";
dotenv.config({
    path:"../.env"
});


export const MONGO_URL = process.env.MONGO_URL as string;
export const Jwt_Secret = process.env.Jwt_Secret as string;