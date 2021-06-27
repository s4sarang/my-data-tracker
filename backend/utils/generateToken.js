import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const generateWebToken = (domainID) => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign({ domainID }, secret, {
    expiresIn: '1w',
  });
};

export default generateWebToken;
