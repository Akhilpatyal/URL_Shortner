import ShortUrlModel from "../models/shortUrlModel.js";
import { ConflictError } from "../utilities/errorHandler.js";
export const saveShortUrl = (url, shortUrl, userId) => {
  // create a new instance of the ShortUrlModel
  try {
    const newUrl = new ShortUrlModel({
      full_url: url,
      shortUrl: shortUrl,
    });
    if (userId) {
      newUrl.userId = userId;
    }
    // and save it to the database
    newUrl.save();
  } catch (error) {
    if (err.code == 11000) {
      throw new ConflictError("Short URL already exists");
    }
    throw new Error(err);
  }
};

export const getShortUrl = async (id) => {
  return await ShortUrlModel.findOneAndUpdate(
    { shortUrl: id },
    { $inc: { clicks: 1 } }
  );
};
