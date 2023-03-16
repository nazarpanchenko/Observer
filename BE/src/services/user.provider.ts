import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import conf from '../conf.json';
import { userTypes, userTokenTypes } from '../shared/types';
import db from '../db';
import { mailProvider, userTokenProvider } from '../services';
import { UserDTO } from '../dto';

class UserProvider {
  async signup(params: userTypes.UserModel): Promise<userTypes.UserDTO> {
    const passwordHash = await bcrypt.hash(params.password, conf.jwt.salt_rounds);
    const verificationLink = uuidv4();

    const storedUser: userTypes.UserModel = await db.User.signup({
      ...params,
      password: passwordHash,
    });
    await mailProvider.sendVerification(params.email, verificationLink);

    const tokens: userTokenTypes.JwtToken = userTokenProvider.generateToken({
      ...storedUser,
    });
    const userDTO = new UserDTO({
      id: storedUser.id,
      firstName: storedUser.firstName,
      lastName: storedUser.lastName,
      isVerified: storedUser.isVerified || 0,
      ...tokens,
    });

    await userTokenProvider.create(userDTO.id, tokens.refreshToken);
    return userDTO;
  }

  async signin() {}

  async logout() {}

  async verifyUser() {}
}

const userProvider = new UserProvider();
export default userProvider;
