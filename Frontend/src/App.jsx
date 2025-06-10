import UrlForm from "./components/UrlForm"
import HomePage from "./pages/HomePage"


const App = () => {


  return (
    <HomePage/>
    // <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
    //   <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 space-y-8">
    //     <div className="text-center">
    //       <h1 className="text-3xl font-bold text-gray-800">URL Shortener</h1>
    //       <p className="mt-2 text-gray-600">Shorten your long URLs with just one click</p>
    //     </div>
        
    //     <UrlForm />
     
    //       <div className="p-4 bg-green-50 rounded-lg">
    //         <p className="text-sm text-gray-600 mb-1">Your shortened URL:</p>
    //         <div className="flex items-center">
    //           <input
    //             type="text"
    //             // value={shortUrl}
    //             readOnly
    //             className="flex-1 p-2 border border-gray-300 rounded-l-lg bg-gray-50 text-sm"
    //           />
    //           <button
    //             // onClick={() => {
    //             //   navigator.clipboard.writeText(shortUrl);
    //             //   alert('Copied to clipboard!');
    //             // }}
    //             className="bg-indigo-600 text-white px-3 py-2 rounded-r-lg text-sm hover:bg-indigo-700">
    //             Copy
    //           </button>
    //         </div>
    //       </div>
     
    //   </div>
    // </div>
  )
}

export default App
