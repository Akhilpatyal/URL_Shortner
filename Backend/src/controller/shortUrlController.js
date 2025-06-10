import { getShortUrl } from "../dao/shortUrl.js";
import { createShortUrlServices ,createShortUrlServiceswithUser} from "../service/shortUrl.service.js";
import wrapAsync from "../utilities/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const { data } = req.body;
  console.log(data);
  if (!data) {
    return res.status(400).json({ message: "Please provide a valid URL" });
  }
  if(data.user){
      const shortUrl = await createShortUrlServiceswithUser(data);
  }else{
      const shortUrl = await createShortUrlServices(data);
  }
  console.log(process.env.APP_URL + shortUrl);
  res.send(process.env.APP_URL + shortUrl);
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
