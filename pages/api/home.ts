import dbConnect from "../../lib/connect";
import JournalEntry from "../../lib/models/JournalEntry";
import User from "../../lib/models/User";

export default async function handler(req, res) {
  console.log("ARE WE HERE?");

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
      // console.log("entries", entries);
      // return res.status(200).json(entries);
    }
  } catch (error) {
    console.log(error);
  }
}
