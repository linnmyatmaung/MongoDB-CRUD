import { Schema, model, Document } from "mongoose";

export interface User extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false, // 🔥 Hides __v
  }
);

export const UserModel = model<User>("User", userSchema);
