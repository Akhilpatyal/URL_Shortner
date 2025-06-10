import React from "react";
import { useState } from "react";

const UrlForm = () => {
  const [url, setUrl] = useState("");

  return (
    <form className="space-y-4">
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
        // disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {/* {loading ? "Shortening..." : "Shorten URL"} */} Shorten URL
      </button>
    </form>
  );
};

export default UrlForm;
