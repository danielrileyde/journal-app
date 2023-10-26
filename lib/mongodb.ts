import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to env.local");
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR ( Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  //In production mode, it's best to not use a gobal varibale.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// const connectedClient = await clientPromise;
// const db = connectedClient.db("Cluster0");

// Export a module-scoped MongoClient promise. By doing this in a
// seperate module, the client can be shared accross functions.

// export default db;
export default clientPromise;
