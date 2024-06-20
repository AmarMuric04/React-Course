import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req !== "POST") return;

  const data = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://muricamar2004:Kolosseum123@cluster0.hhpzhqe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.insertOne(data);

  client.close();

  res.status(201).json({ message: "Meetup inserted." });
}
