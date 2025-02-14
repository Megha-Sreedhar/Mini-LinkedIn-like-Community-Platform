import express from 'express';
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUserNotifications } from '../controllers/notification.controller.js';

const router = express.Router();

router.get("/", protectRoute, getUserNotifications);

export default router;