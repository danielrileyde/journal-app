import dbConnect from "../../lib/connect";
import JournalEntry from "../../lib/models/JournalEntry";

export default async function handler(req, res) {
  try {
    await dbConnect();
    if (req.method === "GET") {
      const entries = await JournalEntry.find();
      console.log("entries", entries);
      return res.status(200).json(entries);
    }
    if (req.method === "POST") {
      console.log("req.body", req.body);
      const createdEntry = await JournalEntry.create(req.body);
    }
  } catch (error) {
    console.log(error);
  }
}
