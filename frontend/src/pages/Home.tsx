import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Exclusive</h1>
        <p className="text-gray-600 mb-4">
          This is a fully responsive navbar with mobile menu, sticky positioning, and smooth animations.
        </p>
        <div className="space-y-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Section {i + 1}</h2>
              <p className="text-gray-600">
                Scroll down to see the navbar stay fixed at the top of the page.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home