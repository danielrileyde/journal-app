// Create GET method, find journel entirs .find

import dbConnect from "../../../lib/connect";
import JournalEntry from "../../../lib/models/JournalEntry";

//@ts-ignore
export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const entries = await JournalEntry.find();

    return response.status(200).json(entries);
  }

  if (request.method === "POST") {
    try {
      const entryData = request.body;
      await JournalEntry.create(entryData);

      return response.status(201).json({ status: "Journal Entry created." });
    } catch (error) {
      //@ts-ignore
      return response.status(500).json({ error: error.message });
    }
  }
}
