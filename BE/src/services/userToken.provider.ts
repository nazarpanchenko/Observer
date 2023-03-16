import jwt from 'jsonwebtoken';
import AES from 'crypto-js/aes';

import conf from '../conf.json';
import db from '../db';
import { userTypes, userTokenTypes } from '../shared/types';

class UserTokenProvider {
  generateToken(payload: userTypes.UserModel): userTokenTypes.JwtToken {
    const { JWT_ACCESS_SECRET = '', JWT_REFRESH_SECRET = '' } = process.env;

    const accessSecret = AES.encrypt(JWT_ACCESS_SECRET, String(payload.id)).toString();
    const refreshSecret = AES.encrypt(JWT_REFRESH_SECRET, String(payload.id)).toString();

    return {
      accessToken: jwt.sign(payload, accessSecret, {
        expiresIn: conf.jwt.access_token.expiresIn,
      }),
      refreshToken: jwt.sign(payload, refreshSecret, {
        expiresIn: conf.jwt.refresh_token.expiresIn,
      }),
    };
  }

  async create(userId: number, refreshToken: string) {
    const storedToken: userTokenTypes.UserToken | null = await db.UserToken.getToken(
      userId
    );
    if (storedToken) {
      const updatedToken: userTokenTypes.UserToken = await db.UserToken.updatedToken(
        userId,
        refreshToken
      );
      return updatedToken;
    }

    const createdToken: userTokenTypes.UserToken = await db.UserToken.saveToken(
      refreshToken
    );
    return createdToken;
  }
}

const userTokenProvider = new UserTokenProvider();
export default userTokenProvider;
