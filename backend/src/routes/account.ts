import express from 'express'
import { AuthRequest, UserMiddleware } from './middleware'
import { Account, User } from '../db'
import mongoose from 'mongoose'


const router = express.Router()

router.get("/balance",UserMiddleware,async(req:AuthRequest,res)=>{
    const userId = req.userId
    console.log(userId)
    const AccountDetail = await Account.findOne({userId:userId})
    const UserDetail = await User.findOne({_id:userId})

    console.log(AccountDetail)
    res.json({
        "balance":AccountDetail?.balance,
        "detail":{
            firstname:UserDetail?.firstname,
            lastname:UserDetail?.lastname,
            username:UserDetail?.username,
            
        }
    })
})

router.post("/transfer", UserMiddleware, async (req: AuthRequest, res) => {
    const { to, amount } = req.body;
    const session = await mongoose.startSession();
    const userId = req.userId;

    try {
        session.startTransaction();

        const userAccount = await Account.findOne({ userId }).session(session);
        if (!userAccount || !userAccount.balance) {
            throw new Error("Sender account not found");
        }

       
        if (userAccount.balance < amount) {
            throw new Error("Insufficient balance");
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            throw new Error("Receiver account not found");
        }

      
        await Account.updateOne(
            { userId },
            { $inc: { balance: -amount } },
            { session }
        );

       
        await Account.updateOne(
            { userId: to },
            { $inc: { balance: amount } },
            { session }
        );

        await session.commitTransaction();
        res.json({ message: "Transfer successful" });
    } catch (err) {
        await session.abortTransaction();
        console.log(err)
        res.status(400).json({ error: "errror"});
    } finally {
        session.endSession();
    }
});

export default router


