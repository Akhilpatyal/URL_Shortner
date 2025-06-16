import React from "react";
import { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api";
// import { useQuery, useMutation } from "@tanstack/react-query";
const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [copy, setCopy] = useState(false);
  const [shortUrl, setShorturl] = useState("");

  const handleSubmit = async () => {
  const data = await createShortUrl(url);
    console.log(data.shortUrl);
    setShorturl(data.shortUrl);
  };

  // tanstack query   usequery for data fetching  only for understanding 
  // const query = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: handleSubmit,
  // });

  // use mutation for data posting
  // const mutation = useMutation({
  //   mutationFn: handleSubmit,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  // });

  // to make feel like it copied
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <div className="space-y-4">
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
      {shortUrl && (
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Your shortened URL:</p>
          <div className="flex items-center">
            <input
              type="text"
              value={shortUrl}
              readOnly
              className="flex-1 p-2 border border-gray-300 rounded-l-lg bg-gray-50 text-sm"
            />
            <button
              onClick={handleCopy}
              className={` text-white px-3 py-2 rounded-r-lg text-sm  ${
                copy ? "bg-green-600" : "bg-indigo-600"
              }`}
            >
              {copy ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;

// uses of tanstack query
// 1. useQuery -> to fetch data from server
// 2. useQueryClient -> to get the query client
// 3. useQueryClientState-> to get the query client state
// 4. useQueryClientStateMutation-> to mutate the query client state
// 5. useQueryClientStateMutationOptions -> to mutate the query client state with options
// 6. useMutation -> to mutate the data
