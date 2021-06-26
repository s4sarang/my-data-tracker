import asyncHandler from 'express-async-handler';
import Users from '../models/usersModel.js';
import bcrypt from 'bcryptjs';

//@desc Get all users
//@route GET /api/users
//@access Private
//@status test purpose

const getUsers = asyncHandler(async (req, res) => {
  try {
    const getUserResponse = await Users.find({});
    if (getUserResponse) {
      res.status(200).json(getUserResponse);
    } else {
      res.status(404).json({ success: false, error: 'User not found!' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

//@desc SER all users
//@route PUT /api/users
//@access Private
//@status test purpose

const setUsers = asyncHandler(async (req, res) => {
  try {
    const setUsersResponse = await Users.create({
      fname: req.body.fname,
      lname: req.body.lname,
      domainID: req.body.domainID,
      password: bcrypt.hashSync(req.body.password, 10),
      isAdmin: req.body.isAdmin,
    });

    if (setUsersResponse) {
      res.status(201).json(setUsersResponse);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

export { getUsers, setUsers };
