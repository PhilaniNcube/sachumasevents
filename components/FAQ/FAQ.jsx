import React from 'react';

const FAQ = () => {
  return (
    <section className="">
      <div className="max-w-4xl flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-3xl font-bold leading-none md:text-4xl font-mont">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-0 divide-coolGray-700">
          <details className="">
            <summary className="py-2 outline-none cursor-pointer bg-gray-300 shadow-md mb-3 px-3 rounded-lg">
              What are your areas of expertise?
            </summary>
            <div className="px-4 pb-4 ">
              <p className="pl-8">
                We work from start to finish on both corporate and personal
                events. These range from year end functions, conferences and
                company award evenings to celebratory birthday, weddings and
                anniversary events.
              </p>
            </div>
          </details>
          <details className="">
            <summary className="py-2 outline-none cursor-pointer bg-gray-300 shadow-md mb-3 px-3 rounded-lg">
              What services do you offer?
            </summary>
            <div className="px-4 pb-4">
              <p className="pl-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aspernatur quae, eos explicabo odit minima libero veniam
                similique quibusdam doloribus facilis ipsa accusantium vel
                maiores corrupti! Libero voluptate a doloribus?
              </p>
            </div>
          </details>
          <details className="">
            <summary className="py-2 outline-none cursor-pointer bg-gray-300 shadow-md mb-3 px-3 rounded-lg">
              What are your fees?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="pl-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                voluptates aspernatur dolores in consequatur doloremque
                inventore reprehenderit, consequuntur perspiciatis architecto.
              </p>
              <p>
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                autem eaque unde possimus quae.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
