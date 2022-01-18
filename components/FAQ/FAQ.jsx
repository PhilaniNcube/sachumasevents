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
                We offer a comprehensive event planning service. We’re able to
                find venues, organise catering, décor, staffing, equipment and
                even hire speakers for corporate events. We offer a tailor made
                service to fit your requirements. Every event is unique and we
                have the capacity to fulfill your requirements from start to
                finish.
              </p>
            </div>
          </details>
          <details className="">
            <summary className="py-2 outline-none cursor-pointer bg-gray-300 shadow-md mb-3 px-3 rounded-lg">
              What are your fees?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="pl-8">
                We will discuss all your event requirements before giving a
                quotation as obviously fees charged will depend on the scale and
                nature of the event, complexity of planning and our level of
                involvement. We’ll keep in contact with you regarding our time,
                hours spent, and liaise with you on specific items, but we’ll
                also work to your budget and plan accordingly. You’ll never be
                charged more than we agree upon and there will be no hidden
                extras or surprises.
              </p>
            </div>
          </details>
          <details className="">
            <summary className="py-2 outline-none cursor-pointer bg-gray-300 shadow-md mb-3 px-3 rounded-lg">
              Why do I need an event planning?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="pl-8">
                An experienced event planner saves you time and money. Using an
                event planner takes away stress and worry, and gives you peace
                of mind to enjoy your event.
              </p>
            </div>
          </details>
          <details className="">
            <summary className="py-2 outline-none cursor-pointer bg-gray-300 shadow-md mb-3 px-3 rounded-lg">
              How do you keep budgets on track?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="pl-8">
                We are meticulous about keeping track of everything we need to
                spend money on. This is done by constant monitoring and updating
                spreadsheets, knowing where to prioritise spending and keeping
                aside a budget to cater for emergency contingencies.
              </p>
            </div>
          </details>
          <details className="">
            <summary className="py-2 outline-none cursor-pointer bg-gray-300 shadow-md mb-3 px-3 rounded-lg">
              What factors do you consider when selecting a venue?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="pl-8">
                We consider the size and capacity of venue needed for the number
                of guests, facilities provided, parking, technical needs and
                budget constraints. We visit venues to check on the quality of
                the facilities and liaise with clients, keeping them informed of
                decisions made.
              </p>
            </div>
          </details>
          <details className="">
            <summary className="py-2 outline-none cursor-pointer bg-gray-300 shadow-md mb-3 px-3 rounded-lg">
              Can you cope with last minute changes of plan or emergency
              situations?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="pl-8">
                We have extensive experience in dealing with the unexpected. We
                build in contingency measures for all our events and are
                constantly formulating plans to cope with emergency situations.
                Rest assured your event is always in the most capable hands.
              </p>
            </div>
          </details>
          <details className="">
            <summary className="py-2 outline-none cursor-pointer bg-gray-300 shadow-md mb-3 px-3 rounded-lg">
              What is your refund and cancellation policy?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p className="pl-8">
                We’re aware that sometimes things happen which are outside of
                your control. In the event of needing a refund for a cancelled
                event, do discuss this with your event planner as early as
                possible, before extra services and products may have been
                ordered. We will discuss our policies with you before entering
                into contracts and then liaise with you in the unfortunate event
                of an event being cancelled.
              </p>
              <p className="pl-8">
                We believe it’s important that all parties are aware of their
                obligations and responsibilities. This goes a long way towards
                maintaining professionalism, enjoying healthy relationships with
                loyal vendors and suppliers and ensuring our customers are
                always delighted with our service to them.
              </p>
              <p className="pl-8">
                As event planners, we totally understand your concerns. We’re
                always happy to answer any questions you may have and seek to
                put your mind at rest.
              </p>
              <p className="pl-8">
                No event is too small and all our clients matter.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
