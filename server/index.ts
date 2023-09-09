import { PrismaClient, Talk } from "@prisma/client";
import cors from "cors";
import express, { json } from "express";

const app = express();
app.use(cors());
app.use(json());

const port = 8000;
const prisma = new PrismaClient();

app.post("/api/talks", async (req, res) => {
  const data = req.body as Talk;
  const talk = await prisma.talk.create({
    data: { title: data.title, description: data.description },
  });
  res.send(talk);
});

app.get("/api/talks", async (req, res) => {
  const result = await prisma.talk.findMany();
  res.send(result);
});

app.options("/healthcheck", (req, res) => res.send());

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("SIGTERM", (e) => {
  server.close();
});
process.on("SIGINT", (e) => {
  server.close();
});
