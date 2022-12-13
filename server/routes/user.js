import express from "express";
import { signup, signin } from "../controllers/user";
import verifyToken from "../middlewares/auth";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
export default router;
