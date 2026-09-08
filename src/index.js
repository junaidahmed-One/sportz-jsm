import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express server");
});

app.listen(8000, () => {
  console.log(`Server is running at http://localhost:8000`);
});
