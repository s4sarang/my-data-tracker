import express from 'express';
import { isAdmin, protect } from '../middleware/authMiddleware.js';
import {
  getPersonalDetails,
  setPersonalDetails,
  updatePersonalDetailsProfile,
  getPersonalDetailsProfile,
} from '../controllers/personalDetailsController.js';

const router = express.Router();

router.route('/').get(protect, isAdmin, getPersonalDetails);
router
  .route('/profile')
  .get(protect, getPersonalDetailsProfile)
  .put(protect, updatePersonalDetailsProfile)
  .post(protect, setPersonalDetails);

export default router;
