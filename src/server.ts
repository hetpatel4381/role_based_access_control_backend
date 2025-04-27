import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World 2");
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
    console.error("Server error occurred:", err);
});
