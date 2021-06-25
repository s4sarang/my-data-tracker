import express from 'express';
import { setUsers, getUsers } from '../controllers/usersController.js';

const router = express.Router();

router.route('/').get(getUsers).post(setUsers);

export default router;
