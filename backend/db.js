import mongo from "./app.js";

const { MongoClient } = require('mongodb');

let client;

async function connectToDatabase() {
  if (!client) {
    client = await MongoClient.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true });
  }
  console.log("Starting Connection ...");
  return client.db();
}

function closeDatabaseConnection() {
  if (client) {
    console.log("... Shutting down the connection")
    client.close();
  }
}

module.exports = { connectToDatabase, closeDatabaseConnection };
