type UserTokenData = {
  id: number;
  refreshToken: string;
};

type ModifiedUserToken = [affectedCount: number, affectedRows: UserTokenData[]];

type JwtToken = {
  accessToken: string;
  refreshToken: string;
};

export { UserTokenData, ModifiedUserToken, JwtToken };
