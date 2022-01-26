import React from 'react';

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center w-full h-full">
      <div className="h-[75vh]">
        <div className="flex flex-col justify-center h-full px-6 lg:px-0 max-w-6xl mx-auto">
          <h1 className="text-xl md:text-3xl lg:text-6xl text-white font-bold font-mont">
            Our business is <br />{' '}
            <span className="text-lg md:text-2xl lg:text-7xl font-extrabold font-beach tracking-wider">
              making memories
            </span>
          </h1>
          <button className="bg-gray-800 text-center px-6 p-1 w-[150px] my-4 text-white font-medium rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
