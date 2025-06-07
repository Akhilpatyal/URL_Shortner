import express from "express";
import { nanoid } from "nanoid";
const app = express();

const PORT = process.env.PORT || 300;
//for parsing application/json
app.use(express.json());
//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/:name", (req, res) => {
    const params=req.params;
  res.send(`Hy ${params.name || "Gest"}`);
  // console.log(req);
});
app.get("/api/create", (req, res) => {
  res.send(`your new id ${nanoid(10)}`);
  
});
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
