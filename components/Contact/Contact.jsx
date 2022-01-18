import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]" id="contact">
      <div
        className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/images/icon.jpg")' }}
      ></div>
      <div className="bg-violet-600 p-10 text-white">
        <p className="font-bold font-mont text-3xl">Contact Us</p>
        <form className="w-4/5 py-4">
          <div className="flex flex-col mt-6">
            <label className="text-md" htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              className="border-b-2 border-white w-full bg-transparent py-2"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-md" htmlFor="contact-number">
              Contact Number
            </label>

            <input
              type="text"
              id="contact-number"
              name="contact-number"
              className="border-b-2 border-white w-full bg-transparent py-2"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-md" htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="border-b-2 border-white w-full bg-transparent py-2"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-md" htmlFor="message">
              Message
            </label>

            <input
              type="text"
              id="message"
              name="message"
              className="border-b-2 border-white w-full bg-transparent py-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
