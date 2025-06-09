import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDb from "./src/config/mongoConfig.js";
import ShortUrlModel from "./src/models/shortUrlModel.js";

const app = express();
dotenv.config({ path: "./.env" });

// conect database
connectDb();

const PORT = process.env.PORT || 800;

//for parsing application/json
app.use(express.json());
//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// post route to create a new short URL
app.post("/api/create", (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ message: "Please provide a valid URL" });
  }
  const shortUrl = nanoid(7);
  // create a new instance of the ShortUrlModel

  const newShortUrl = new ShortUrlModel({
    full_url: url,
    shortUrl: shortUrl,
  });

  // and save it to the database
  newShortUrl
    .save()
    .then(() => {
      res
        .status(201)
        .json({ message: "Short URL created successfully", shortUrl });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error creating short URL", error });
    });
});

// get url by id
app.get("/:id", async (req, res) => {
  const { id } = req.params;

  const url = await ShortUrlModel.findOne({ shortUrl: id });

  if (url) {
    console.log("Redirecting to:", url.full_url); // Moved above the return
    res.redirect(url.full_url);
  } else {
    res.status(404).json({ message: "URL not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});

//
// app.js -> mongoConnection -> .env -> schema ->model
// app.get("/api/create", (req, res) => {
//   res.send(`your new id ${nanoid(10)}`);
// });

// simple route
// app.get("/:name", (req, res) => {
//   const params = req.params;
//   res.send(`Hy ${params.name || "Gest"}`);
// });

// short url store krne ke baad ab use get kro using id
