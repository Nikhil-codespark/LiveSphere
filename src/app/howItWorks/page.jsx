import React from 'react'

const page = () => {
  return (
    <>
     {/* Steps Section */}
<section className="py-32 px-4">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl lg:text-5xl font-bold text-center my-12">How It Works</h1>
    
    
    <div className="flex bg-dark flex-col justify-between gap-24 my-24 text-center">
                        {/* Step 1 */}
                        <div className="bg-blue-50 p-4  w-[60rem] md:max-w-full m-auto rounded-lg relative">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                                1
                            </div>
                            <h3 className="font-semibold text-blue-900 my-2 text-lg sm:text-2xl">Create Your Profile(s)</h3>
                            <p className="text-blue-700 text-lg">
                            Set up different profiles for different purposes - dating, professional, friendship, etc.</p>
                           
                            <ul className="flex flex-col space-y-2 my-4 items-center">
            <li className="flex items-start text-blue-500">
              <span className="text-blue-500 mr-2">•</span>
              <span>Add photos and information relevant to each profile type</span>
            </li>
            <li className="flex items-start text-blue-500">
              <span className="text-blue-500 mr-2">•</span>
              <span>Set your visibility preferences for each profile</span>
            </li>
          </ul>
                            {/* <img src={arrow} loading="lazy" alt="" className='transform scale-x-[-1] -mt-[75px] absolute -ml-52 left-4 z-10 rotate-180'/> */}

                        </div>

                        {/* Arrow 1 */}
                        {/* <div className='absolute left-[28%] top-1/2 transform -translate-y-1/2 sm:left-[42%]'>
              <ArrowRight className='w-8 h-8 text-blue-400' />
            </div> */}

                        {/* Step 2 */}
                        <div className="bg-green-50 p-4 w-[60rem] md:max-w-full m-auto rounded-lg relative">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                                2
                            </div>
                            <h3 className="font-semibold text-green-900 my-2 text-lg sm:text-2xl">
                            Discover People Nearby
                            </h3>
                            <p className="text-green-700 text-lg">
                            The app shows you people around you based on your current profile selection.
                            </p>
                            <ul className="flex flex-col space-y-2 my-4 items-center">
            <li className="flex items-start text-green-500">
              <span className="text-green-500 mr-2">•</span>
              <span>See who's in your vicinity right now</span>
            </li>
            <li className="flex items-start text-green-500">
              <span className="text-green-500 mr-2">•</span>
              <span>Filter by distance, interests, profession, etc.</span>
            </li>
          </ul>
                        </div>

                        {/* Arrow 2 */}
                        {/* <div className="absolute left-[61%] top-1/2 transform -translate-y-1/2 sm:left-[72%]">
              <ArrowRight className="w-8 h-8 text-blue-400" />
            </div> */}

                        {/* Step 3 */}
                        <div className="bg-purple-50 p-4 w-[60rem]  md:max-w-full m-auto rounded-lg relative">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                                3
                            </div>
                            <h3 className="font-semibold text-purple-900 my-2 text-lg sm:text-2xl">
                            Make Meaningful Connections
                            </h3>
                            <p className="text-purple-700 text-lg">
                              
Make Meaningful Connections
Reach out to people who interest you with context-appropriate messages.
                            </p>
                            <ul className="flex flex-col space-y-2 my-4 items-center">
            <li className="flex items-start text-purple-500">
              <span className="text-purple-500 mr-2">•</span>
              <span>Use suggested icebreakers or write your own</span>
            </li>
            <li className="flex items-start text-purple-500">
              <span className="text-purple-500 mr-2">•</span>
              <span>Connect for dates, professional collaboration, or friendships</span>
            </li>
          </ul>
                            {/* <img src={arrow} loading="lazy" alt="" className='-mt-[340px] absolute -mr-52 right-4 z-10 rotate-180'/> */}

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