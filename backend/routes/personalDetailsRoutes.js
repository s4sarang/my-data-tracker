import express from 'express';
import {
  getPersonalDetails,
  setPersonalDetails,
  updatePersonalDetailsProfile,
  getPersonalDetailsProfile,
} from '../controllers/personalDetailsController.js';

const router = express.Router();

router.route('/').get(getPersonalDetails).post(setPersonalDetails);
router
  .route('/:id')
  .get(getPersonalDetailsProfile)
  .put(updatePersonalDetailsProfile);

export default router;
