import express from 'express';
import { isAdmin, protect } from '../middleware/authMiddleware.js';
import {
  getOfficialDetails,
  setOfficialDetails,
  updateOfficialDetailsProfile,
  getOfficialDetailsProfile,
} from '../controllers/officialDetailsController.js';

const router = express.Router();

router.route('/').get(protect, isAdmin, getOfficialDetails);
router
  .route('/profile')
  .get(protect, getOfficialDetailsProfile)
  .put(protect, updateOfficialDetailsProfile)
  .post(protect, setOfficialDetails);

export default router;
