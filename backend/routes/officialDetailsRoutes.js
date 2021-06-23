import express from 'express';
import {
  getOfficialDetails,
  setOfficialDetails,
} from '../controllers/officialDetailsController.js';

const router = express.Router();

router.route('/').get(getOfficialDetails).post(setOfficialDetails);

export default router;
