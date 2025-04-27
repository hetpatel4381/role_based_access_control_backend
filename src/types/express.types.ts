import { Role } from "../generated/prisma";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                role: Role;
            };
        }
    }
}