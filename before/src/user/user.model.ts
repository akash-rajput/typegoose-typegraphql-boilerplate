import { Document, Model, Schema } from "mongoose";
import { db } from "../util/database";

export interface IUserProps {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface IUserDocument extends IUserProps, Document {
}

export interface IUserModel extends Model<IUserDocument> {
  dateCreated: Date;
  lastUpdated: Date;
  hashPassword(password: string): string;
}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    firstName: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const hashPassword = (_password: string) => {
    // logic to hash
}

UserSchema.method("hashPassword", hashPassword);

export const User: IUserModel = db.model<IUserDocument, IUserModel>(
  "User",
  UserSchema
);

