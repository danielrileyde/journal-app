import dbConnect from "../../lib/connect";
import JournalEntry from "../../lib/models/JournalEntry";
import User from "../../lib/models/User";

export default async function handler(req, res) {
  console.log(req.method);
  await dbConnect();
  if (req.method === "GET") {
    const entries = await JournalEntry.find();
    // console.log("entiries: ", entries);
    res.status(200).json(entries);
  }
  if (req.method === "POST") {
    console.log("req.body", req.body);
    try {
      const createdEntry = await JournalEntry.create(req.body);
      await User.findByIdAndUpdate(
        createdEntry.id,
        {
          $push: { entries: createdEntry._id },
        },
        { new: true }
      );

      return res.status(201).json({ message: "Entry created" });
    } catch (error) {
      console.log("error is", error);
    }
  }
}
