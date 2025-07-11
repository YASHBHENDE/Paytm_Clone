import express from 'express'
import RootRouter from './routes'
import accountRouter from "./routes/account"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/v1",RootRouter)
app.use("/api/v1/account",accountRouter)



app.listen(3001,()=>{
    console.log("listening on port 3001")
})