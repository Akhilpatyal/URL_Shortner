import axios from "axios";

export const createShortUrl = async (url) => {
  const {data}= await axios.post("http://localhost:800/api/create", { url });
  return data;
};
