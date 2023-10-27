import dbConnect from "../../lib/connect";
import JournalEntry from "../../lib/models/JournalEntry";
import User from "../../lib/models/User";

export default async function handler(req, res) {
  try {
    await dbConnect();
    if (req.method === "GET") {
      const entries = await JournalEntry.find();
      return res.status(200).json(entries);
    }
    if (req.method === "POST") {
      console.log("req.body", req.body);
      const createdEntry = await JournalEntry.create(req.body);
      await User.findByIdAndUpdate(
        createdEntry.id,
        {
          $push: { entries: createdEntry._id },
        },
        { new: true }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
