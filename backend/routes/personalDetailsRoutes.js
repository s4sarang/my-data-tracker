import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getPersonalDetails,
  setPersonalDetails,
  updatePersonalDetailsProfile,
  getPersonalDetailsProfile,
} from '../controllers/personalDetailsController.js';

const router = express.Router();

router.route('/').get(getPersonalDetails).post(setPersonalDetails);
router
  .route('/profile')
  .get(protect, getPersonalDetailsProfile)
  .put(protect, updatePersonalDetailsProfile);

export default router;
