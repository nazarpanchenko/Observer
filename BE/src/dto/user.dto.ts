import { UserDtoData } from '../shared';

class UserDTO {
  id!: number;
  firstName!: string;
  lastName!: string;
  isVerified!: 1 | 0;
  accessToken!: string;
  refreshToken!: string;

  constructor(userModel: UserDtoData) {
    this.id = userModel.id;
    this.firstName = userModel.firstName;
    this.lastName = userModel.lastName;
    this.isVerified = userModel.isVerified;
    this.accessToken = userModel.accessToken;
    this.refreshToken = userModel.refreshToken;
  }
}

export default UserDTO;
