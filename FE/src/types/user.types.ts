type UserData = {
  id?: number;
  username: string;
  email: string;
  password: string;
};

type UserCredentials = {
  email: string;
  password: string;
};

type RegisteredUser = {
  id: number;
  username: string;
  password: string;
  accessToken: string;
  refreshToken: string;
};

export { UserData, UserCredentials, RegisteredUser };
