import { saveShortUrl } from "../dao/shortUrl.js";
import { generateNanoid } from "../utilities/helper.js";

export const createShortUrlServices = async (url) => {
  const shortUrl =await generateNanoid(7);
  await saveShortUrl(url,shortUrl);
  console.log(shortUrl);
  return shortUrl;
};

export const createShortUrlServiceswithUser = async (url,userId) => {
  const shortUrl = generateNanoid(7);
 await saveShortUrl(url,shortUrl,userId);
  return shortUrl;
};
