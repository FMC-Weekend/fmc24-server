import express from "express"
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();
import { createServer } from "node:http"
const app = express();
app.use(cors());
const server = createServer(app)
app.get('/', (req, res) => {
    res.send("Hello from fmc")
});
import userRouter from "./routes/users.r.js"
app.use("/api", userRouter)
const PORT=process.env.PORT;
server.listen( PORT ,(req, res) => {
    console.log(`Server is running on port ${PORT}`)
})