import mongo from "./app.js";
import { MongoClient } from 'mongodb';

let client;

export async function connectToDatabase() {
  if (!client) {
    client = await MongoClient.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true });
  }
  console.log("Starting Connection ...");
  console.log("Connected");
  return client.db();
}

export function closeDatabaseConnection() {
  if (client) {
    console.log("... Shutting down the connection")
    console.log("Disconnected");
    client.close();
  }
}
