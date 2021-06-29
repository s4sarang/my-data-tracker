import asyncHandler from 'express-async-handler';
import OfficialDetails from '../models/officialDetailsModel.js';

//@desc Get official details of users
//@route GET /api/officialDetails
//@access Public
//@status test purpose

const getOfficialDetails = asyncHandler(async (req, res) => {
  try {
    const officialDetailsResponse = await OfficialDetails.find();

    if (officialDetailsResponse) {
      res.status(200).json(officialDetailsResponse);
    } else {
      res.status(404).json({ success: false, error: 'Details not found!' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//@desc Set official details of a user
//@route POST /api/officialDetails
//@access Private
//@status test purpose

const setOfficialDetails = asyncHandler(async (req, res) => {
  try {
    const setOfficialDetailsResponse = await OfficialDetails.create({
      user: req.user._id,
      ecode: req.body.ecode,
      officeEmail: req.body.officeEmail,
      doj: req.body.doj,
      cocp: req.body.cocp,
      team: req.body.team,
      officialMobileDevice: req.body.officialMobileDevice,
      domainLaptop: req.body.domainLaptop,
    });
    if (setOfficialDetailsResponse) {
      res.status(201).json(setOfficialDetailsResponse);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

//@desc Update official details of a user
//@route PUT /api/officialDetails/profile
//@access Private
//@status test purpose

const updateOfficialDetailsProfile = asyncHandler(async (req, res) => {
  let oldOfficialDetails = await OfficialDetails.findOne({
    user: req.user._id,
  });

  try {
    const updateOfficialDetailsProfileResponse =
      await OfficialDetails.updateOne(
        { user: req.user._id },
        {
          ecode: req.body.ecode || oldOfficialDetails.ecode,
          officeEmail: req.body.officeEmail || oldOfficialDetails.officeEmail,
          doj: req.body.doj || oldOfficialDetails.doj,
          cocp: req.body.cocp || oldOfficialDetails.cocp,
          team: req.body.team || oldOfficialDetails.team,
          officialMobileDevice:
            req.body.officialMobileDevice ||
            oldOfficialDetails.officialMobileDevice,
          domainLaptop:
            req.body.domainLaptop || oldOfficialDetails.domainLaptop,
        }
      );
    if (updateOfficialDetailsProfileResponse) {
      res
        .status(201)
        .json({ success: true, message: 'Details updated successfully!' });
    }
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

//@desc Get official details of a user
//@route GET /api/officialDetails/profile
//@access Private
//@status test purpose
const getOfficialDetailsProfile = asyncHandler(async (req, res) => {
  try {
    const getOfficialDetailsProfileResponse = await OfficialDetails.findOne({
      user: req.user._id,
    });

    if (getOfficialDetailsProfileResponse) {
      res.status(200).json(getOfficialDetailsProfileResponse);
    } else {
      res
        .status(404)
        .json({ success: false, error: "User's Official Details not found!" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

export {
  getOfficialDetails,
  setOfficialDetails,
  updateOfficialDetailsProfile,
  getOfficialDetailsProfile,
};
