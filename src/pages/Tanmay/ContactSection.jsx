import React, { useState } from 'react';
import { HiOutlineOfficeBuilding, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Information */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Get in touch</h1>
          <p className="text-lg text-gray-600 mb-12">
            Proin volutpat consequat porttitor cras nullam gravida at. 
            Orci molestie a eu arcu. Sed ut tincidunt integer 
            elementum id sem. Arcu sed malesuada et magna.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-violet-50 rounded-lg group-hover:bg-violet-100 transition-colors">
                <HiOutlineOfficeBuilding className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <p className="text-gray-700">545 Mavis Island</p>
                <p className="text-gray-700">Chicago, IL 99191</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-violet-50 rounded-lg group-hover:bg-violet-100 transition-colors">
                <HiOutlinePhone className="w-6 h-6 text-violet-600" />
              </div>
              <p className="text-gray-700">+1 (555) 234-5678</p>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-violet-50 rounded-lg group-hover:bg-violet-100 transition-colors">
                <HiOutlineMail className="w-6 h-6 text-violet-600" />
              </div>
              <p className="text-gray-700">hello@example.com</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="mt-12 lg:mt-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-violet-800 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
