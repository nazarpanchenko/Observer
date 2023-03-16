type UserData = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type UserCredentials = {
  email: string;
  password: string;
};

type RegisteredUser = {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  accessToken: string;
  refreshToken: string;
};

export { UserData, UserCredentials, RegisteredUser };
