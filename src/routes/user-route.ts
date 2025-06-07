import express from "express";
import * as UserController from "../controllers/user-controller";

const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);

export default router;
