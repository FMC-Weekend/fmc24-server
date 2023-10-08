import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import methodOverride from "method-override";

dotenv.config();

const app = express();
app.use(cors());

// Middlewares
app.set('trust proxy', 1);
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('.'));

// Routes
app.get('/', (req, res) => {
    res.send("Hello from fmc");
});

import userRouter from "./routes/users.r.js";
app.use("/api", userRouter);

app.post("/login", (req, res) => {
    res.send({ message: 'Login successful', body: req.body });
});

const PORT = process.env.PORT || 3000; // Set a default port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
