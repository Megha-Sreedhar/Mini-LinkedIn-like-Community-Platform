import express from 'express';
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUserNotifications, markNotificationAsRead } from '../controllers/notification.controller.js';

const router = express.Router();

router.get("/", protectRoute, getUserNotifications);
router.put("/:id/read", protectRoute, markNotificationAsRead);

export default router;