import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getConnectionRequests, rejectConnectionRequest, sendConnectionRequest } from "../controllers/connection.controller.js";
import { acceptConnectionRequest } from "../controllers/connection.controller.js";

const router = express.Router();

router.post("/request/:userId", protectRoute, sendConnectionRequest);
router.put("/accept/:requestId", protectRoute, acceptConnectionRequest);
router.put("/reject/:requestId", protectRoute, rejectConnectionRequest);
router.get("/requests", protectRoute, getConnectionRequests);

export default router;
