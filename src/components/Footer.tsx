// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold mb-4">Rotaract Club</h3>
            <p>Making a difference together</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p>Email: info@rotaract.org</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Rotaract Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;