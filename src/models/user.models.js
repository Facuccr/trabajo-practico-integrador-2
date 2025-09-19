import { Schema, Types } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    unique: true,
  },
  password: { type: String },
  profile: {
    firstName: { type: String, minlength: 2, maxlength: 50, required: true },
    lastName: { type: String, minlength: 2, maxlength: 50, required: true },
    biography: { type: String, maxlength: 500 },
    avatarUrl: { type: String },
    birthDate: { type: Date },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
});

export const userModel = model("User", userSchema);
