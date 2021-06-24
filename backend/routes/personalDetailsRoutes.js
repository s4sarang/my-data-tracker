import express from 'express';
import {
  getPersonalDetails,
  setPersonalDetails,
} from '../controllers/personalDetailsController.js';

const router = express.Router();

router.route('/').get(getPersonalDetails).post(setPersonalDetails);

export default router;
