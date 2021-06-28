import express from 'express';
import {
  registerUsers,
  getUsers,
  loginUser,
} from '../controllers/usersController.js';

const router = express.Router();

router.route('/').get(getUsers);
router.route('/register').post(registerUsers);
router.route('/login').post(loginUser);

export default router;
