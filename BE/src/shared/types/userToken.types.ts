type UserToken = {
  id?: number;
  userId?: number;
  refreshToken: string;
};

type JwtToken = {
  accessToken: string;
  refreshToken: string;
};

export { UserToken, JwtToken };
