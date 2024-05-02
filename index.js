import express from "express";
import dotenv from "dotenv";
import { getNotes, getNote } from "./database.js";

dotenv.config();
const app = express();

app.get("/expenses", (req, res) => {
  const result = getNotes();
  result
    .then((data) => {
      console.log(data);
      res.status(200).json({ result: data });
    })
    .catch((err) => {
      res.status(404).json({ result: "not found" });
    });
});

app.get("/expense/:id", (req, res) => {
  const id = req.params.id;
  const result = getNote(id);
  result
    .then((data) => {
      console.log(data);
      res.status(200).json({ result: data });
    })
    .catch((err) => {
      res.status(404).json({ result: "not found" });
    });
});

app.listen("8080", () => {
  console.log("Listening on PORT 8080");
});
