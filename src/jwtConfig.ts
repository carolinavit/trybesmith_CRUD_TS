import jwt, { SignOptions } from 'jsonwebtoken';
import User from './interfaces/user.interface';

const secret = process.env.JWT_SECRET || 'JWT_SECRET';

function createTokenJWT(payload: User) {
  const config: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, config);
  return token;
}

export default createTokenJWT;
