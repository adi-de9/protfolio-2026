import React from 'react';
import { Mail } from 'lucide-react';

const ContactContent: React.FC = () => (
  <div className="h-full bg-gray-100 flex items-center justify-center p-4">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Mail className="text-blue-500" /> Contact Me
      </h2>
      <div className="mb-6 text-sm text-gray-600">
        <p>Email: adityadesh937@gmail.com</p>
        <p>Phone: +91 93737 82499</p>
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
          <input type="email" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500 transition" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Subject</label>
          <input type="text" className="w-full border p-2 rounded focus:outline-none focus:border-blue-500 transition" placeholder="Project Inquiry" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Message</label>
          <textarea className="w-full border p-2 rounded focus:outline-none focus:border-blue-500 transition h-32" placeholder="Hello Aditya..." />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition">Send Message</button>
      </form>
    </div>
  </div>
);

export default ContactContent;
