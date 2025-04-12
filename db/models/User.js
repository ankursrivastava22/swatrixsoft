import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: false, // Optional for Google users
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: false, // Optional for OAuth users
    },
    role: {
      type: String,
      enum: ["admin", "teacher", "student", "user"],
      default: "user",
      required: true,
    },
    provider: {
      type: String,
      default: "credentials", // Can be 'credentials' or 'google'
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
