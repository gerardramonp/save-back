import mongoose, { Schema, model, ObjectId } from 'mongoose';

export interface IUser extends mongoose.Document {
  _id?: string;
  email: string;
  password: string;
  salary?: ObjectId;
  categories?: ObjectId[];
}

const userModel = new Schema<IUser>({
  email: { type: String },
  password: { type: String },
  salary: { type: Schema.Types.ObjectId, ref: 'Salary' },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});

export default model<IUser>('Users', userModel);
