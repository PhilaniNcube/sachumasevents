import React, { Fragment } from 'react';
import Link from 'next/link';

const navigation = [
  {
    page: 'Home',
    url: '/',
  },
  {
    page: 'About Us',
    url: '/#about',
  },
  {
    page: 'Services',
    url: '/#services',
  },
  {
    page: 'FAQs',
    url: '/#faq',
  },
  {
    page: 'Contact us',
    url: '/#contact',
  },
];

const CELL_NUMBER = '27817551279';

const Navbar = () => {
  return (
    <div className="bg-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center space-x-5 py-4">
        <div className="h-full">
          <h3 className="font-bold text-xl text-violet-700 italic">
            Sachuma's
          </h3>
        </div>
        <ul className="hidden lg:flex lg:flex-1 h-full justify-center items-center space-x-4 text-gray-900">
          {navigation.map((link) => {
            return (
              <li key={link.url}>
                <Link href={link.url}>
                  <a className="text-sm font-medium">{link.page}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Fragment>
            <Link href={`https://wa.me/${CELL_NUMBER}`} passHref>
              <div className="flex items-center cursor-pointer">
                <p className="bg-violet-800 text-white pl-2 pr-4 rounded-lg -mr-5">
                  Get A Quote
                </p>
                <div className="mx-2 my-2 flex items-center bg-violet-800 transition duration-150 ease-in-out hover:bg-gray-200 rounded-full p-2 text-white text-sm">
                  <span className="h-6 w-6 rounded-full bg-white text-violet-800 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M16.6,14c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1
	                    c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7c-0.1-0.2,0-0.4,0.1-0.5
	                    c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.6-1.3-0.8-1.8C9.4,7.3,9.2,7.3,9,7.3
	                    c-0.1,0-0.3,0-0.5,0C8.3,7.3,8,7.5,7.9,7.6C7.3,8.2,7,8.9,7,9.7c0.1,0.9,0.4,1.8,1,2.6c1.1,1.6,2.5,2.9,4.2,3.7
	                    c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1c0.7-0.1,1.3-0.6,1.7-1.2c0.2-0.4,0.2-0.8,0.1-1.2C17,14.2,16.8,14.1,16.6,14
	                    M19.1,4.9C15.2,1,8.9,1,5,4.9c-3.2,3.2-3.8,8.1-1.6,12L2,22l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c5.5,0,9.9-4.4,9.9-9.9
	                    C22,9.3,20.9,6.8,19.1,4.9 M16.4,18.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3l-0.2-0.3
	                    C2.6,12.4,3.8,7.4,7.7,4.9S16.6,3.7,19,7.5C21.4,11.4,20.3,16.5,16.4,18.9"
                      />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </Fragment>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
