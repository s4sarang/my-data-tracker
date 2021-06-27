import asyncHandler from 'express-async-handler';
import PersonalDetails from '../models/personalDetailsModel.js';

//@desc Get personal details of a user
//@route GET /api/personalDetails
//@access Public
//@status test purpose

const getPersonalDetails = asyncHandler(async (req, res) => {
  try {
    const personalDetailsResponse = await PersonalDetails.find({});

    if (personalDetailsResponse) {
      res.status(200).json(personalDetailsResponse);
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
      user: req.body.user,
      address: req.body.address,
      contact: req.body.contact,
      personalEmail: req.body.personalEmail,
      dob: req.body.dob,
      aadhaar: req.body.aadhaar,
      personalMobileDevice: req.body.personalMobileDevice,
      personalBroadband: req.body.personalBroadband,
    });
    if (setPersonalDetailsResponse) {
      res.status(201).json(setPersonalDetailsResponse);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

//@desc Update personal details of a user
//@route PUT /api/personalDetails/profile
//@access Private
//@status test purpose

const updatePersonalDetailsProfile = asyncHandler(async (req, res) => {
  let oldPersonalDetails = await PersonalDetails.findOne({
    user: req.user._id,
  });
  try {
    const updatePersonalDetailsProfileResponse =
      await PersonalDetails.updateOne(
        { user: req.user._id },
        {
          address: req.body.address || oldPersonalDetails.address,
          contact: req.body.contact || oldPersonalDetails.contact,
          personalEmail:
            req.body.personalEmail || oldPersonalDetails.personalEmail,
          dob: req.body.dob || oldPersonalDetails.dob,
          aadhaar: req.body.aadhaar || oldPersonalDetails.aadhaar,
          personalMobileDevice:
            req.body.personalMobileDevice ||
            oldPersonalDetails.personalMobileDevice,
          personalBroadband:
            req.body.personalBroadband || oldPersonalDetails.personalBroadband,
        }
      );
    if (updatePersonalDetailsProfileResponse) {
      res
        .status(201)
        .json({ success: true, message: 'Details updated successfully!' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

//@desc Get personal details of a user
//@route GET /api/personalDetails/profile
//@access Private
//@status test purpose
const getPersonalDetailsProfile = asyncHandler(async (req, res) => {
  try {
    const getPersonalDetailsProfileResponse = await PersonalDetails.findOne({
      user: req.user._id,
    });

    if (getPersonalDetailsProfileResponse) {
      res.status(200).json(getPersonalDetailsProfileResponse);
    } else {
      res
        .status(404)
        .json({ success: false, error: "User's Personal Details not found!" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});
export {
  getPersonalDetails,
  setPersonalDetails,
  updatePersonalDetailsProfile,
  getPersonalDetailsProfile,
};
