import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import Users from '../models/usersModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    res.status(401).send('Token is required for Authorization!');
  }
  try {
    let decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await Users.findOne({ domainID: decodedToken.domainID }).select(
      '-password'
    );
    next();
  } catch (error) {
    res.status(401).send('Not authorized, token failed!');
  }
});

export { protect };
