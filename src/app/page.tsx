import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Rotaract Club
          </h1>
          <p className="text-xl mb-8">
            Empowering young leaders to create positive change
          </p>
          <Link 
            href="/join"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
          >
            Join Us Today
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
          {/* Dummy content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white p-6 shadow rounded">
              <h3 className="font-semibold mb-2">Community Outreach</h3>
              <p>
                We organize regular events to help our local community.
              </p>
            </article>
            <article className="bg-white p-6 shadow rounded">
              <h3 className="font-semibold mb-2">Youth Leadership</h3>
              <p>
                Our leadership workshops empower future changemakers.
              </p>
            </article>
            <article className="bg-white p-6 shadow rounded">
              <h3 className="font-semibold mb-2">Fundraising</h3>
              <p>
                We raise funds to support education and healthcare initiatives.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Cards */}
            {[1, 2, 3].map((event) => (
              <div key={event} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/event-${event}.jpg`}
                  alt="Event"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Community Service Day</h3>
                  <p className="text-gray-600 mb-4">Join us for a day of giving back to our community</p>
                  <Link 
                    href="/events"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join our community of young leaders and help create positive change.</p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
