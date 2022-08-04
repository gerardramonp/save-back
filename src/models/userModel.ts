import mongoose, { Schema, model, ObjectId } from 'mongoose';

export interface IUser extends mongoose.Document {
  _id?: string;
  email: string;
  password: string;
  salary?: ObjectId;
  categories?: ObjectId[];
}

const userModel = new Schema<IUser>({});

export default model<IUser>('Users', userModel);
