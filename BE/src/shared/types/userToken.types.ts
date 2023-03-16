type UserToken = {
  id?: number;
  userId?: number;
  refreshToken: string;
};

type UserTokenTuple = [affectedCount: number, affectedRows: UserToken[]];

type JwtToken = {
  accessToken: string;
  refreshToken: string;
};

export { UserToken, UserTokenTuple, JwtToken };
