import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/config/mongoConfig.js";
import ShortUrlModel from "./src/models/shortUrlModel.js";

// import routes
import shortUrl from "./src/routes/shortUrl.route.js";
import {redirectFromShortUrl} from "./src/controller/shortUrlController.js";

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
app.use("/api/create", shortUrl);

// get url by id
app.get("/:id",redirectFromShortUrl);

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
// use Conecpt for DAO --->dividing sofware development and applicatoin business logic
