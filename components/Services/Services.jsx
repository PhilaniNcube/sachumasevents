import React, { useState } from 'react';
import Cake from '../Modal/Cake';
import Party from '../Modal/Party';
import Engagement from '../Modal/Engagement';
import Graduation from '../Modal/Graduation';
import Selfie from '../Modal/Selfie';
import Bridal from '../Modal/Bridal';

const Services = () => {
  const [openCake, setOpenCake] = useState(false);
  const [openParty, setOpenParty] = useState(false);
  const [openEngagement, setOpenEngagement] = useState(false);
  const [openGraduation, setOpenGraduation] = useState(false);
  const [openBridal, setOpenBridal] = useState(false);
  const [openSelfie, setOpenSelfie] = useState(false);

  return (
    <div
      id="services"
      className="bg-services min-h-100vh bg-cover bg-center bg-no-repeat"
    >
      <Cake open={openCake} setOpen={setOpenCake} />
      <Party open={openParty} setOpen={setOpenParty} />
      <Engagement open={openEngagement} setOpen={setOpenEngagement} />
      <Graduation open={openGraduation} setOpen={setOpenGraduation} />
      <Bridal open={openBridal} setOpen={setOpenBridal} />
      <Selfie open={openSelfie} setOpen={setOpenSelfie} />

      <div className="max-w-6xl mx-auto py-10">
        <h2 className="font-mont text-xl md:text-3xl lg:text-4xl py-6 text-white font-bold">
          Our{' '}
          <span className="font-beach text-2xl md:text-4xl lg:text-5xl">
            services
          </span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-white z-0">
          <div
            className="border-4 border-white min-h-[40vw] lg:min-h-[26vw] bg-center bg-cover bg-no-repeat box-1"
            onClick={() => setOpenCake(true)}
          >
            <div className="hidden flex-col justify-center items-center h-full px-16 space-y-4 hover:bg-violet-600 hover:bg-opacity-70 hover:backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-3xl uppercase text-center">Baby Showers</p>
            </div>
          </div>
          <div
            className="border-4 border-white min-h-[40vw] lg:min-h-[26vw] bg-center bg-cover bg-no-repeat box-2 md:translate-y-6"
            onClick={() => setOpenParty(true)}
          >
            <div className="hidden flex-col justify-center items-center h-full px-16 space-y-4 hover:bg-violet-600 hover:bg-opacity-70 hover:backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-3xl uppercase text-center">
                Parties & Birthdays
              </p>
            </div>
          </div>
          <div
            className="border-4 border-white min-h-[40vw] lg:min-h-[26vw] bg-center bg-cover bg-no-repeat box-3"
            onClick={() => setOpenEngagement(true)}
          >
            <div className="hidden flex-col justify-center items-center h-full px-16 space-y-4 hover:bg-violet-600 hover:bg-opacity-70 hover:backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-3xl uppercase text-center">
                Engagement Parties
              </p>
            </div>
          </div>
          <div
            className="border-4 border-white min-h-[40vw] lg:min-h-[26vw] bg-center bg-cover bg-no-repeat box-4"
            onClick={() => setOpenGraduation(true)}
          >
            <div className="hidden flex-col justify-center items-center h-full px-16 space-y-4 hover:bg-violet-600 hover:bg-opacity-70 hover:backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-3xl uppercase text-center">
                Graduation Parties
              </p>
            </div>
          </div>
          <div
            className="border-4 border-white min-h-[40vw] lg:min-h-[26vw] bg-center bg-cover bg-no-repeat box-5 md:translate-y-6"
            onClick={() => setOpenSelfie(true)}
          >
            <div className="hidden flex-col justify-center items-center h-full px-16 space-y-4 hover:bg-violet-600 hover:bg-opacity-70 hover:backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-3xl uppercase text-center">
                Anniversary & Weddings
              </p>
            </div>
          </div>
          <div
            className="border-4 border-white min-h-[40vw] lg:min-h-[26vw] bg-center bg-cover bg-no-repeat box-6"
            onClick={() => setOpenBridal(true)}
          >
            <div className="hidden flex-col justify-center items-center h-full px-16 space-y-4 hover:bg-violet-600 hover:bg-opacity-70 hover:backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-3xl uppercase text-center">Bridal Showers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
