import { config } from "dotenv";
config();

const _envs = {
    PORT: process.env.PORT, 
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
}

export const envs = Object.freeze(_envs);
