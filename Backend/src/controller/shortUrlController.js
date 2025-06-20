import { getShortUrl } from "../dao/shortUrl.js";
import {
  createShortUrlServices,
  createShortUrlServiceswithUser,
} from "../service/shortUrl.service.js";
import wrapAsync from "../utilities/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const { url, user } = req.body;
  console.log("URL:", url, "User:", user);

  if (!url) {
    return res.status(400).json({ message: "Please provide a valid URL" });
  }

  if (req.user) {
    const shortUrl = await createShortUrlServiceswithUser(url, req.user._id);
  } else {
    const shortUrl = await createShortUrlServices(url);
  }

  const fullShortUrl = process.env.APP_URL + shortUrl;
  console.log("Short URL:", fullShortUrl);
  res.status(201).json({ shortUrl: fullShortUrl });
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const url = await getShortUrl(id);
  if (url) {
    console.log("Redirecting to:", url.full_url); // Moved above the return
    res.redirect(url.full_url);
  } else {
    res.status(404).json({ message: "URL not found" });
  }
});

export const createCustomeShortUrl = wrapAsync(async (req, res) => {
  const { url, slug } = req.body;
  console.log("URL:", url, "User:", user);

  if (!url) {
    return res.status(400).json({ message: "Please provide a valid URL" });
  }

  let shortUrl;

  if (user) {
    shortUrl = await createShortUrlServiceswithUser(url, user);
  } else {
    shortUrl = await createShortUrlServices(url);
  }

  const fullShortUrl = process.env.APP_URL + shortUrl;
  console.log("Short URL:", fullShortUrl);
  res.status(201).json({ shortUrl: fullShortUrl });
});
