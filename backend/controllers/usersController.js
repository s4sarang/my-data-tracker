import asyncHandler from 'express-async-handler';
import Users from '../models/usersModel.js';
import bcrypt from 'bcryptjs';
import generateWebToken from '../utils/generateToken.js';

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

//@desc SET all users
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

//@desc Login
//@route POST /api/users/login
//@access Public
//@status test purpose

const loginUser = asyncHandler(async (req, res) => {
  try {
    const user = await Users.findOne({ domainID: req.body.domainID });

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.status(200).json({
        domainID: req.body.domainID,
        token: generateWebToken(user.domainID),
      });
    } else {
      res.status(401).json({ success: false, error: 'Invalid credentials!' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

export { getUsers, setUsers, loginUser };
