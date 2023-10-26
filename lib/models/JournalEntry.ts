import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const journalEntrySchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  create_at: { type: Date, default: Date.now },
});

const JournalEntry =
  models.JournalEntry || model("JournalEntry", journalEntrySchema);
export default JournalEntry;
