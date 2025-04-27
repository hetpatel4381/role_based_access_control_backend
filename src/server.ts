import express, { NextFunction, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World 2");
});

app.use("/api/v1", routes);

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
    console.error("Server error occurred:", err);
});
