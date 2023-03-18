type UserTokenData = {
  id?: number;
  userId?: number;
  refreshToken: string;
};

type UserTokenTuple = [affectedCount: number, affectedRows: UserTokenData[]];

type JwtToken = {
  accessToken: string;
  refreshToken: string;
};

export { UserTokenData, UserTokenTuple, JwtToken };
