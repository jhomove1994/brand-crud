import { Router } from "express";
import { brandRouter } from "./brand";

const router = Router();

router.use("", brandRouter);

export { router };
