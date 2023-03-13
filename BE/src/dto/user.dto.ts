import { userTypes } from '../types';

class UserDTO {
  id!: number;
  username!: string;
  isVerified!: 1 | 0;
  accessToken!: string;
  refreshToken!: string;

  constructor(userModel: userTypes.UserDTO) {
    this.id = userModel.id;
    this.username = userModel.username;
    this.isVerified = userModel.isVerified;
    this.accessToken = userModel.accessToken;
    this.refreshToken = userModel.refreshToken;
  }
}

export default UserDTO;
