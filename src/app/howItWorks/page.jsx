import React from 'react'

const page = () => {
  return (
    <>
     {/* Steps Section */}
<section className="py-32 px-4">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-12">How It Works</h1>
    
    <div className="space-y-12">
       {/* Step 1 */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">
            1
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Create Your Profile(s)</h2>
          <p className="text-gray-500 mb-4">
            Set up different profiles for different purposes - dating, professional, friendship, etc.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Add photos and information relevant to each profile type</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Set your visibility preferences for each profile</span>
            </li>
          </ul>
        </div>
      </div>
      
       {/* Step 2 */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold">
            2
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Discover People Nearby</h2>
          <p className="text-gray-500 mb-4">
            The app shows you people around you based on your current profile selection.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>See who's in your vicinity right now</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Filter by distance, interests, profession, etc.</span>
            </li>
          </ul>
        </div>
      </div>
      
       {/* Step 3 */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold">
            3
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Make Meaningful Connections</h2>
          <p className="text-gray-500 mb-4">
            Reach out to people who interest you with context-appropriate messages.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Use suggested icebreakers or write your own</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Connect for dates, professional collaboration, or friendships</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* Use Cases Section */}
<section className="py-16 px-4 bg-gray-50 text-gray-600">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Real World Use Cases</h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       {/* Use Case 1 */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">❤️</span>
          Dating
        </h3>
        <p className="text-gray-500">
          Meet people you've crossed paths with in real life. See who frequents the same cafes, gyms, or events as you.
        </p>
      </div>
      
       {/* Use Case 2 */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-green-100 text-green-600 p-2 rounded-full mr-3">💼</span>
          Professional Help
        </h3>
        <p className="text-gray-500">
          Need a doctor, lawyer, or other professional urgently? Find verified professionals nearby.
        </p>
      </div>
      
       {/* Use Case 3 */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3">👥</span>
          Friends & Hobbies
        </h3>
        <p className="text-gray-500">
          Connect with people who share your hobbies. Find tennis partners, band members, or hiking buddies.
        </p>
      </div>
      
       {/* Use Case 4 */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-yellow-100 text-yellow-600 p-2 rounded-full mr-3">✈️</span>
          Travel
        </h3>
        <p className="text-gray-500">
          Visiting a new city? Connect with locals or fellow travelers for recommendations and meetups.
        </p>
      </div>
      
       {/* Use Case 5 */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-red-100 text-red-600 p-2 rounded-full mr-3">🎵</span>
          Music & Events
        </h3>
        <p className="text-gray-500">
          At a concert or festival? Connect with other attendees who share your music taste.
        </p>
      </div>
      
       {/* Use Case 6 */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="bg-indigo-100 text-indigo-600 p-2 rounded-full mr-3">🏙️</span>
          Local Business
        </h3>
        <p className="text-gray-500">
          Business owners can connect with potential customers or collaborators in their area.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default page