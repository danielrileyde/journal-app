import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const journalEntrySchema = new Schema({
  // name: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  create_at: { type: Date, default: Date.now },
  // userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const JournalEntry =
  models.JournalEntry || model("JournalEntry", journalEntrySchema);
export default JournalEntry;
