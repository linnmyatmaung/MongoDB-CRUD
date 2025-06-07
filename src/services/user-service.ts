import { UserModel, User } from "@entities/user";

export const createUser = async (data: Partial<User>): Promise<User> => {
  const user = new UserModel(data);
  return await user.save();
};

export const getAllUsers = async (): Promise<User[]> => {
  return await UserModel.find().sort({ createdAt: -1 });
};
