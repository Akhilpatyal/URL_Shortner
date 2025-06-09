import mongoose from "mongoose";
const schema = mongoose.Schema({
  full_url: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

});

const ShortUrlModel = mongoose.model("ShortUrl", schema);
export default ShortUrlModel;

// index true means it will create an index for the field // it help in faster searching of the field
// unique true means it will create a unique index for the field