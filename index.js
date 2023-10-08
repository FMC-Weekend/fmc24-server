import express from "express"
import { createServer } from "node:http"
const app = express();
const server = createServer(app)
app.get('/', (req, res) => {
    res.send("Hello from fmc")
});
server.listen(process.env.PORT || 3000, (req, res) => {
    console.log("Server is running on port 3000")
})