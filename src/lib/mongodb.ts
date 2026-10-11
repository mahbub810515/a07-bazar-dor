import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI");
}

const client = new MongoClient(uri);

export const db = client.db("bazar_dor");
export { client };