import express from 'express';
import {
  getOfficialDetails,
  setOfficialDetails,
  updateOfficialDetailsProfile,
  getOfficialDetailsProfile,
} from '../controllers/officialDetailsController.js';

const router = express.Router();

router.route('/').get(getOfficialDetails).post(setOfficialDetails);
router
  .route('/:id')
  .get(getOfficialDetailsProfile)
  .put(updateOfficialDetailsProfile);

export default router;
