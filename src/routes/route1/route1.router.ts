import { Router } from "express";
import { validator1 } from "./battle.validator";
import { controller1 } from "./battle.controller";

const route1 = Router();

route1.post("/create", controller1)

export default route1;