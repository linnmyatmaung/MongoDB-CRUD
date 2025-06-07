export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface UserDto {
  _id: string;
  name: string;
  email: string;
}
