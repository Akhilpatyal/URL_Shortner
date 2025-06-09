import ShortUrlModel from "../models/shortUrlModel.js";

export const saveShortUrl=(url,shortUrl,userId)=>{
  // create a new instance of the ShortUrlModel
  const newUrl = new ShortUrlModel({
    full_url: url,
    shortUrl: shortUrl,
  });
  if(userId){
    newUrl.userId = userId;
  }
  // and save it to the database
  newUrl.save();
}


export const getShortUrl=async(id)=>{
  return await ShortUrlModel.findOneAndUpdate({ shortUrl: id },{$inc:{clicks:1}});
}
