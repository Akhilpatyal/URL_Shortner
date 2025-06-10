import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
     <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">URL Shortener</h1>
          <p className="mt-2 text-gray-600">Shorten your long URLs with just one click</p>
        </div>
        
        <UrlForm/>
     
      </div>
    </div>
  )
}

export default HomePage