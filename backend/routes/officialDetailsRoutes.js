import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getOfficialDetails,
  setOfficialDetails,
  updateOfficialDetailsProfile,
  getOfficialDetailsProfile,
} from '../controllers/officialDetailsController.js';

const router = express.Router();

router.route('/').get(getOfficialDetails).post(setOfficialDetails);
router
  .route('/profile')
  .get(protect, getOfficialDetailsProfile)
  .put(protect, updateOfficialDetailsProfile);

export default router;
