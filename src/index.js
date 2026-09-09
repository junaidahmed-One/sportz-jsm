import express from "express";
import { matchRouter } from "./routes/matches";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express server");
});

app.use("/matches", matchRouter);

app.listen(8000, () => {
  console.log(`Server is running at http://localhost:8000`);
});
