import React from 'react';

export default function Join() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Join Rotaract Club</h1>
      <p className="mb-4">
        Fill out the form below to start your journey with us!
      </p>
      {/* Dummy form */}
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block font-medium mb-2">Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}