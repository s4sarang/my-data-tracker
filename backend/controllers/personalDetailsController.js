import asyncHandler from 'express-async-handler';
import PersonalDetails from '../models/personalDetailsModel.js';

//@desc Get personal details of a user
//@route GET /api/personalDetails
//@access Public
//@status test purpose

const getPersonalDetails = asyncHandler(async (req, res) => {
  try {
    const personalDetailsResponse = await PersonalDetails.find();

    if (personalDetails) {
      res.status(200).json(personalDetails);
    } else {
      res.status(404).json({ success: false, error: 'Details not found!' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

//@desc Set personal details of a user
//@route POST /api/personalDetails
//@access Private
//@status test purpose

const setPersonalDetails = asyncHandler(async (req, res) => {
  try {
    const setPersonalDetailsResponse = await PersonalDetails.create({
      address: req.body.address,
      contact: req.body.contact,
      personalEmail: req.body.personalEmail,
      dob: req.body.dob,
      aadhaar: req.body.aadhaar,
      personalMobileDevice: req.body.personalMobileDevice,
      personalBroadband: req.body.personalBroadband,
    });
    if (setPersonalDetailsResponse) {
      res.status(200).json(setPersonalDetailsResponse);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

export { getPersonalDetails, setPersonalDetails };
