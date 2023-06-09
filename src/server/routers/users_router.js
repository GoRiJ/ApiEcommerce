import { Router } from "express";
import { isAuth } from "../middlewares/auth.js";
import { JWT, REGISTER } from "../utils/auth/passport_auth.js";
import { 
    
    controllerGetUser, 
    controllerPostUser 

} from "../controllers/users_controller.js";

export const USERS_ROUTER = Router();

USERS_ROUTER.get("/", isAuth, JWT, controllerGetUser);
USERS_ROUTER.post("/", REGISTER, controllerPostUser);