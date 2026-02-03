import { Router } from "express";
import {
  showMain,
  showCreate,
} from "../controller/main.controller.js";

import { validateInfo } from "../middleware/validate.js";

const mainRoutes = Router();

mainRoutes.get("/", showMain);
mainRoutes.get("/nuevo", showCreate);


export default mainRoutes;