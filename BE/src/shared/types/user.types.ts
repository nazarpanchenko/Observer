import { JwtToken } from './userToken.types';

type isUserVerified = 1 | 0;

type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  refreshToken: string;
  isVerified?: isUserVerified;
  verificationLink?: string;
};

type CreateUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  refreshToken: string;
  verificationLink: string;
};

type UserDtoData = JwtToken & {
  id: number;
  firstName: string;
  lastName: string;
  isVerified: isUserVerified;
};

export { isUserVerified, UserData, CreateUser, UserDtoData };
