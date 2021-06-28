import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import {
  registerUsers,
  getUsers,
  loginUser,
} from '../controllers/usersController.js';

const router = express.Router();

router.route('/').get(protect, isAdmin, getUsers);
router.route('/register').post(registerUsers);
router.route('/login').post(loginUser);

export default router;
