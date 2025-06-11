import React from "react";
import { useState } from "react";
import axios from "axios";
const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl,setShorturl] = useState("");
const handleSubmit=async()=>{

const data=await axios.post("http://localhost:800/api/create",{url});
console.log(data);
setShorturl(data.data.shortUrl);
}
  return (
    <div className="space-y-4" >
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Enter your long URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com/very-long-url"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          required
        />
      </div>

      <button
        type="submit"
         onClick={handleSubmit}
        // disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {/* {loading ? "Shortening..." : "Shorten URL"} */} Shorten URL
      </button>

      {/*  */}
      {shortUrl && (<div className="p-4 bg-green-50 rounded-lg">
        <p className="text-sm text-gray-600 mb-1">Your shortened URL:</p>
        <div className="flex items-center">
          <input
            type="text"
            value={shortUrl}
            readOnly
            className="flex-1 p-2 border border-gray-300 rounded-l-lg bg-gray-50 text-sm"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(shortUrl);
              alert('Copied to clipboard!');
            }}
            className="bg-indigo-600 text-white px-3 py-2 rounded-r-lg text-sm hover:bg-indigo-700">
            Copy
          </button>
        </div>
      </div>)}
    </div>
  );
};

export default UrlForm;
