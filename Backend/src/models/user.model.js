import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  //   avataar
  avataar: {
    type: String,
    required: false,
    default: "https://www.gravatar.com/avatar/${hash}?=mp",
  },
});
// function getGravatarUrl(email) {
//   const crypto = require('crypto'); // Fix: use require correctly
//   const hash = crypto.createHash('md5').update(email.trim().toLowerCase()).digest('hex'); // Fix: 'emial' -> 'email'
//   return `https://www.gravatar.com/avatar/${hash}?=mp`;
// }

const userModel = mongoose.model("User", userSchema);
export default userModel;

// here is the problem when our mongoDb [document] can store only 16 mb of data , or what if, user want to create more than 16 mb of data in his document ?
// In MongoDB (or any document DB), circular referencing means two or more documents reference each other in a loop:  ---> it's not goo practice
// Each user's data should live independently instead of packing it all into one shared record.
