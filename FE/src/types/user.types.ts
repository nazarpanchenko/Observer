type UserData = {
  id?: number;
  username: string;
  password: string;
  email: string;
  country: string;
  streetAddress: string;
  postalCode: number;
  phoneNumber?: string;
};

type UserCredentials = {
  username: string;
  password: string;
};

export { UserData, UserCredentials };
