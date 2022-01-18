import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 py-6 px-6 lg:px-0">
        <div className="col-span-1 border-r-2 border-gray-900 pr-8">
          <p className="font-mont text-xl md:text-5xl text-violet-500 text-right font-extrabold leading-3">
            About
            <span className="font-beach block text-xl md:text-5xl mb-1">
              {' '}
              the company
            </span>
          </p>
          <div className="bg-violet-500 text-white text-sm p-4 rounded-lg">
            <p>
              Our Goal is to create employment, Build Women Empowerment through
              our exceptional service.
            </p>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <p className="text-sm leading-4">
            Our Company is located in Gqeberha (formerly known as Port
            Elizabeth). Our Event Planning company has been serving
            EXTRA-ORDINARY events since 2018. We cater for all types of
            events, including corporate events. We take pride in everything we do
            and aim to make our clients happy at all times.
          </p>
          <p className="text-sm font-bold mt-6">Our Vision & Mission</p>
          <ul className="text-sm">
            <li>
              To provide our clients & companies with the highest level of Event
              Planning.
            </li>
            <li>
              To adhere to a maxim that will make sure that everything else
              falls into place.
            </li>
            <li>
              To ensure that our services exceed the expectations of our
              clients.
            </li>
            <li>
              To provide & transform our clients functions into an elegant,
              beautiful & extraordinary events.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
