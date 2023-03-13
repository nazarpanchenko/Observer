import { userTokenTypes } from '.';

type UserModel = {
  id: number;
  username: string;
  email: string;
  password: string;
  isVerified?: 1 | 0;
  verificationLink?: string;
};

type CreateUser = {
  id: number;
  username: string;
  email: string;
  password: string;
  verificationLink: string;
};

type UserDTO = userTokenTypes.JwtToken & {
  id: number;
  username: string;
  isVerified: 1 | 0;
};

export { UserModel, CreateUser, UserDTO };
