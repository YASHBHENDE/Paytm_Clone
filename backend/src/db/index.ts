import mongoose, { mongo } from "mongoose";
import { MONGO_URL } from "../config";
mongoose.connect(MONGO_URL).then(()=>{
    console.log("connected to Mongoose")
}).catch(()=>{
    console.log("not connected to mongoose")
})

const objectId = mongoose.Schema.Types.ObjectId

const UserSchema = new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    password:String
})

const AccountSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId,ref:"User"},
    balance:Number
})
export const User = mongoose.model("User",UserSchema)
export const Account = mongoose.model("Account",AccountSchema)


