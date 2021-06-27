import jwt from 'jsonwebtoken';

const generateWebToken = (domainID) => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign({ domainID }, secret, {
    expiresIn: '1w',
  });
};

export default generateWebToken;
