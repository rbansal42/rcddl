// src/components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Message</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        />
      </div>
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;