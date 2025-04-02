import React from 'react'

const page = () => {
  return (
    <>
     {/* Features Header  */}
<section className="pt-32 pb-12 px-4 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-6 text-blue-500">Powerful Features For Every Need</h1>
    <p className="text-xl text-gray-600">
      Our app adapts to your needs, whether you're looking for love, professional connections, 
      or new friends.
    </p>
  </div>
</section>

 {/* Features Grid  */}
<section className="py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12">
       {/* Feature 1  */}
      <div className="flex flex-row justify-center">
        <div className="mr-6">
          <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center text-blue-600">
            📍
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Real-Time Proximity</h3>
          <p className="text-gray-600">
            See who's around you right now in different categories. Perfect for when you need to:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Find a professional (doctor, lawyer, etc.) nearby</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Meet someone with shared interests in your area</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Connect with potential band members or teammates</span>
            </li>
          </ul>
        </div>
      </div>
      
       {/* Feature 2  */}
      <div className="flex">
        <div className="mr-6">
          <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center text-purple-600">
            🔍
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Advanced Filters</h3>
          <p className="text-gray-600">
            Narrow down your search with precise filters:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>By profession, skills, or services</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>By interests and hobbies</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>By distance and availability</span>
            </li>
          </ul>
        </div>
      </div>
      
       {/* Feature 3  */}
      <div className="flex">
        <div className="mr-6">
          <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center text-green-600">
            🛡️
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Privacy Controls</h3>
          <p className="text-gray-600">
            You're in complete control of your visibility and connections:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Choose when and to whom you're visible</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Different profiles for different purposes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Incognito mode for professional searches</span>
            </li>
          </ul>
        </div>
      </div>
      
       {/* Feature 4  */}
      <div className="flex">
        <div className="mr-6">
          <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center text-yellow-600">
            💬
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Smart Messaging</h3>
          <p className="text-gray-600">
            Context-aware communication system:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>Different icebreakers for different connection types</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>Professional templates for business inquiries</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>Safe and moderated environment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* CTA Section  */}
<section className="py-16 px-4 bg-blue-600 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Ready to Connect Differently?</h2>
    <p className="text-xl mb-8">
      Join thousands of users who are making meaningful connections every day.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
        Download Now
      </button>
      <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition">
        See How It Works
      </button>
    </div>
  </div>
</section></>
  )
}

export default page