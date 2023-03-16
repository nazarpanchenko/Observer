import { userTokenTypes } from '.';

type UserModel = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isVerified?: 1 | 0;
  verificationLink?: string;
};

type CreateUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verificationLink: string;
};

type UserDTO = userTokenTypes.JwtToken & {
  id: number;
  firstName: string;
  lastName: string;
  isVerified: 1 | 0;
};

export { UserModel, CreateUser, UserDTO };
