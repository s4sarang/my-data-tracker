import asyncHandler from 'express-async-handler';
import OfficialDetails from '../models/officialDetailsModel.js';

//@desc Get official details of a user
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
      user: req.body.user,
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

export { getOfficialDetails, setOfficialDetails };
