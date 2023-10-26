import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const userSchema = new Schema({
  // name: { type: String, required: true },
  email: { type: String, required: true },
  create_at: { type: Date, default: Date.now },
  emailVerified: { type: Boolean, default: null },
  entries: { type: [Schema.Types.ObjectId] },
  // ref: "Entry",
});

const User = models.User || model("User", userSchema);
export default User;
