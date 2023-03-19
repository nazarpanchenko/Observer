import { UserDtoData } from '../shared/types';

class UserDTO {
  id!: number;
  isVerified!: 1 | 0;
  accessToken!: string;
  refreshToken!: string;

  constructor(userModel: UserDtoData) {
    this.id = userModel.id;
    this.isVerified = userModel.isVerified;
    this.accessToken = userModel.accessToken;
    this.refreshToken = userModel.refreshToken;
  }
}

export default UserDTO;
