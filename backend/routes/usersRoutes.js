import express from 'express';
import {
  setUsers,
  getUsers,
  loginUser,
} from '../controllers/usersController.js';

const router = express.Router();

router.route('/').get(getUsers).post(setUsers);
router.route('/login').post(loginUser);

export default router;
