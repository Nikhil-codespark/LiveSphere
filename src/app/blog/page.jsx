"use client";
import React, {useRef, useEffect} from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Introducing LiveSphere: The Future of Networking",
    excerpt:
      "Discover how LiveSphere's revolutionary geolocation technology is transforming real-world connections. Our platform eliminates awkward introductions by showing you compatible people nearby - whether you're at a conference, coffee shop, or coworking space. Learn how instant, meaningful networking works without business cards.",
    date: "May 15, 2024",
    readTime: "4 min read",
    category: "Announcements",
    image: "/assets/images/blog1.jpg",
  },
  {
    id: 2,
    title: "5 Ways LiveSphere Can Boost Your Professional Network",
    excerpt:
      "Professional networking just got smarter. LiveSphere helps you identify potential collaborators, clients, or mentors within your vicinity in real-time. From automatic icebreakers based on shared interests to discreet professional mode for sensitive connections, we're redefining how careers grow through technology.",
    date: "April 28, 2024",
    readTime: "6 min read",
    category: "Tips & Tricks",
    image: "/assets/images/blog2.jpg",
  },
  {
    id: 3,
    title: "The Technology Behind LiveSphere's Real-Time Matching",
    excerpt:
      "Our proprietary geolocation algorithms analyze multiple factors including profession density, movement patterns, and shared connections to suggest the most relevant people around you. All processing happens on-device for privacy, with optional precision controls to balance discovery and battery life.",
    date: "April 10, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "/assets/images/blog3.jpg",
  },
  {
    id: 4,
    title: "Success Stories: How Users Are Benefiting from LiveSphere",
    excerpt:
      "Meet Sarah who found her startup co-founder at a airport lounge, and David who landed his dream job after connecting with a recruiter at a baseball game. These real user stories demonstrate how spontaneous, location-based networking creates opportunities traditional apps can't match.",
    date: "March 22, 2024",
    readTime: "5 min read",
    category: "Case Studies",
    image: "/assets/images/blog4.jpg",
  },
  {
    id: 5,
    title: "LiveSphere vs Traditional Networking Apps: What Sets Us Apart",
    excerpt:
      "Unlike swipe-based apps that encourage endless browsing, LiveSphere focuses on facilitating real-world interactions. Our data shows 3x higher meeting conversion rates when connections begin with proximity and shared context rather than profile photos alone.",
    date: "March 15, 2024",
    readTime: "7 min read",
    category: "Comparisons",
    image: "/assets/images/blog5.jpg",
  },
  {
    id: 6,
    title: "Privacy First: How LiveSphere Protects Your Data",
    excerpt:
      "Your location data never leaves your device without explicit permission. We use Bluetooth/Wi-Fi scanning instead of continuous GPS, and all profile information is encrypted. Learn about our 'Incognito Mode' for sensitive professional situations and temporary visibility windows.",
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "Security",
    image: "/assets/images/blog6.jpg",
  },
  {
    id: 7,
    title: "Using LiveSphere at Industry Conferences: A Guide",
    excerpt:
      "Transform overwhelming conferences into targeted networking opportunities. Pre-set your professional interests to filter relevant attendees, use session-based matching to find discussion partners, and our post-event analytics helps you follow up effectively.",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Guides",
    image: "/assets/images/blog7.jpg",
  },
  {
    id: 8,
    title: "The Psychology of Real-Time Connections",
    excerpt:
      "Neuroscience shows that face-to-face meetings create stronger neural impressions than virtual interactions. LiveSphere's approach taps into this by facilitating spontaneous encounters with prepared context - the perfect blend of digital convenience and human chemistry.",
    date: "February 20, 2024",
    readTime: "8 min read",
    category: "Psychology",
    image: "/assets/images/blog8.jpg",
  },
  {
    id: 9,
    title: "LiveSphere for Remote Teams: Bridging the Distance",
    excerpt:
      "Distributed teams using LiveSphere in coworking spaces report 40% more cross-team collaboration. The app helps remote workers identify colleagues with complementary skills nearby, turning chance encounters into productive partnerships.",
    date: "February 12, 2024",
    readTime: "5 min read",
    category: "Remote Work",
    image: "/assets/images/blog9.jpg",
  },
  {
    id: 10,
    title: "Customizing Your LiveSphere Profile for Maximum Impact",
    excerpt:
      "Your dynamic profile adapts to different contexts - professional mode highlights skills and experience, while social mode shows hobbies and interests. We guide you through optimizing each version with keywords and verification badges.",
    date: "February 5, 2024",
    readTime: "4 min read",
    category: "Optimization",
    image: "/assets/images/blog10.jpg",
  },
  {
    id: 11,
    title: "The Future of Location-Based Networking",
    excerpt:
      "Coming soon: AR glasses integration to identify connections in your field of view, AI-powered conversation starters based on mutual interests, and smart scheduling that suggests optimal meetup times when multiple connections are nearby.",
    date: "January 28, 2024",
    readTime: "7 min read",
    category: "Future Tech",
    image: "/assets/images/blog11.jpg",
  },
  {
    id: 12,
    title: "LiveSphere for Event Organizers: A Game Changer",
    excerpt:
      "Event planners using LiveSphere see 60% higher attendee satisfaction scores. Our organizer dashboard provides real-time connection analytics, heatmaps of networking activity, and tools to facilitate topic-based meetups during your event.",
    date: "January 20, 2024",
    readTime: "6 min read",
    category: "Events",
    image: "/assets/images/blog12.jpg",
  },
];

const page = () => {

    const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (leftColumnRef.current && rightColumnRef.current) {
        // Left column scrolls at normal speed
        leftColumnRef.current.style.transform = `translateY(${-window.scrollY * 0.5}px)`;
        // Right column scrolls faster
        rightColumnRef.current.style.transform = `translateY(${-window.scrollY * 0.8}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split blogs into two columns
  const leftColumnBlogs = blogs.filter((_, index) => index % 2 === 0);
  const rightColumnBlogs = blogs.filter((_, index) => index % 2 !== 0);

    return (
        <div className="min-h-screen bg-dark">
          {/* Hero Section (unchanged) */}
          <section className="bg-dark text-white py-24 mt-24 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-la font-bold mb-6">Blog</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Insights, stories, and updates about connecting people through technology
              </p>
            </div>
          </section>
    
          {/* Dual Column Blog Section */}
          <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-dark rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 lg:h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-blue-600 font-semibold">{blog.category}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold mb-3 hover:text-blue-600 transition">
                    <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h2>
                  <p className="text-gray-400 mb-4 lg:text-lg">{blog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{blog.readTime}</span>
                    {/* <Link 
                      href={`/blog/${blog.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    );
};

export default page;
