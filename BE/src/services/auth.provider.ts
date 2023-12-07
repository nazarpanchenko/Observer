import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import conf from '../conf.json';
import { UserDtoData, UserData, JwtToken, ApiError } from '../shared';
import db from '../db';
import { mailProvider, userTokenProvider } from '.';
import { UserDTO } from '../dto';

class AuthProvider {
  async signup(params: UserData): Promise<UserDtoData> {
    const passwordHash = await bcrypt.hash(params.password, conf.jwt.salt_rounds);
    const verificationLink = uuidv4();

    const storedUser: UserData = await db.models.User.signup({
      ...params,
      password: passwordHash,
      verificationLink,
    });
    const tokens: JwtToken = userTokenProvider.generate({
      ...storedUser,
    });

    const userDTO: UserDtoData = new UserDTO({
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

  async signin(password: string, storedUser: UserData): Promise<UserDtoData> {
    const isPasswordValid = await bcrypt.compare(password, storedUser.password);
    if (!isPasswordValid) {
      throw ApiError.badRequest(`The password you provided is invalid`);
    }

    const tokens: JwtToken = userTokenProvider.generate({
      ...storedUser,
    });
    const userDTO: UserDtoData = new UserDTO({
      id: storedUser.id,
      firstName: storedUser.firstName,
      lastName: storedUser.lastName,
      isVerified: storedUser.isVerified || 0,
      ...tokens,
    });

    return userDTO;
  }

  async logout(id: number, refreshToken: string): Promise<void> {
    await userTokenProvider.delete(refreshToken);
  }

  async verify(link: string): Promise<void> {
    await db.models.User.verify(link);
  }

  async resetPassword() {
    return {};
  }
}

const authProvider = new AuthProvider();
export default authProvider;
