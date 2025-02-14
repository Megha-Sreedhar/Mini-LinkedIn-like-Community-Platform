import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { sendConnectionRequest } from "../controllers/connection.controller.js";
import { acceptConnectionRequest } from "../controllers/connection.controller.js";

const router = express.Router();

router.post("/request/:userId", protectRoute, sendConnectionRequest);
router.put("/accept/:requestId", protectRoute, acceptConnectionRequest);

export default router;
