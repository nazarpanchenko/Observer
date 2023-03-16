import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import conf from '../conf.json';
import { userTypes, userTokenTypes } from '../shared/types';
import db from '../db';
import { mailProvider, userTokenProvider } from '.';
import { UserDTO } from '../dto';

class AuthProvider {
  async signup(params: userTypes.UserData): Promise<userTypes.UserDTO> {
    const passwordHash = await bcrypt.hash(params.password, conf.jwt.salt_rounds);
    const verificationLink = uuidv4();

    const storedUser: userTypes.UserData = await db.User.signup({
      ...params,
      password: passwordHash,
    });
    const tokens: userTokenTypes.JwtToken = userTokenProvider.generateToken({
      ...storedUser,
    });

    const userDTO: userTypes.UserDTO = new UserDTO({
      id: storedUser.id,
      firstName: storedUser.firstName,
      lastName: storedUser.lastName,
      isVerified: storedUser.isVerified || 0,
      ...tokens,
    });

    await userTokenProvider.create(userDTO.id, tokens.refreshToken);
    await mailProvider.sendVerification(params.email, verificationLink);

    return userDTO;
  }

  async signin() {
    return {};
  }

  async logout() {
    return {};
  }

  async verifyUser() {
    return {};
  }

  async resetPassword() {
    return {};
  }
}

const authProvider = new AuthProvider();
export default authProvider;
