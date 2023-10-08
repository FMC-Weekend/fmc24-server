import express from "express"
import { createServer } from "node:http"
const app = express();
const server = createServer(app)
app.get('/', (req, res) => {
    res.send("Hello from fmc")
});
import userRouter from "./routes/users.r.js"
app.use("/api", userRouter)
const PORT=process.env.PORT || 3000;
server.listen( PORT ,(req, res) => {
    console.log(`Server is running on port ${PORT}`)
})