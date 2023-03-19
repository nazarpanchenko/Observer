import { JwtToken } from '.';

type UserData = {
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

type UserDtoData = JwtToken & {
  id: number;
  isVerified: 1 | 0;
};

export { UserData, CreateUser, UserDtoData };
