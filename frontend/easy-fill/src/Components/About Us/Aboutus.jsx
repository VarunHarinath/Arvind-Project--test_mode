import React from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];
  const features = [
    {
      title: "Convenience at Your Doorstep",
      desc: " Skip the trip to the gas station. Fuel X delivers high-quality petrol, diesel, and other fuel types directly to your location, whether you're at home, work, or on the go.",
    },
    {
      title: "Flexible Scheduling",
      desc: "Order fuel on your terms with our easy-to-use online platform that lets you schedule deliveries for when it's most convenient for you. Never worry about running out of fuel again.",
    },
    {
      title: "Safety First",
      desc: " Safety is our top priority. Our delivery professionals are highly trained and our operations meet all regulatory standards to ensure safe handling and delivery of fuel.",
    },
    {
      title: "Competitive Pricing",
      desc: "Get the best prices for fuel with no hidden fees. Our transparent pricing model ensures that you know exactly what you’re paying for.",
    },
    {
      title: "Eco-friendly Options",
      desc: "Committed to sustainability, Fuel X also offers eco-friendly alternatives to traditional fuels, helping you reduce your carbon footprint without compromising on efficiency.",
    },
    {
      title: "24/7 Customer Support",
      desc: "Our dedicated customer service team is always available to help you with any questions or assistance you may need.",
    },
  ];
  return (
    <>
      <div className="bg-gray-900 mt-16 p-10">
        <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
              Fuel X<span className="text-indigo-400"> Digital agency</span>
            </h1>
            <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
              Welcome to Fuel X, your premier online destination for doorstep
              fuel delivery. At Fuel X, we understand that time is precious, and
              convenience is key. That’s why we offer a fast, safe, and reliable
              way to order petrol, diesel, and other fuels right from the
              comfort of your home. Our commitment to providing exceptional
              service and adhering to the highest safety standards ensures that
              your fuel needs are met with the utmost efficiency and care.
              Whether you're avoiding the hassle of visiting a gas station or
              simply planning ahead, Fuel X is here to fuel your journey,
              wherever it may lead. Trust us to power your day—safely and
              conveniently.
            </p>
            <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <Link
                to="/booking"
                className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
              >
                Book Now
              </Link>
              <Link
                to="/o"
                className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
              >
                Feautres
              </Link>
            </div>
          </div>
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              className="w-full mx-auto sm:w-10/12  lg:w-full"
            />
          </div>
        </section>
      </div>
      {/*  */}
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h3 className="font-semibold text-sm text-gray-600 text-center">
            TRUSTED BY Petrol Bunks arround the India
          </h3>
          <div className="mt-6">
            <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
              <li>
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://banner2.cleanpng.com/20180714/eht/kisspng-indian-oil-corporation-business-petroleum-logo-nat-spicy-logo-5b4a0a3d55a078.8326729615315789413507.jpg"
                  alt="Transissssor"
                  width={158}
                  height={48}
                />
              </li>
              <li>
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://e7.pngegg.com/pngimages/214/533/png-clipart-bharat-petroleum-petroleum-logo-company-others-miscellaneous-company.png"
                  alt="Reform"
                  width={158}
                  height={48}
                />
              </li>
              <li>
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://img.favpng.com/15/16/3/logo-india-hindustan-petroleum-gasoline-png-favpng-RaC5A517VZEP5Drm984hHRNXM.jpg"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
              </li>
              <li>
                <img
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src="https://img.favpng.com/17/15/15/reliance-petroleum-logo-reliance-industries-petroleum-industry-png-favpng-czPxVgLUH9yeW8pwFcFcKxTVe.jpg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
              </li>
              <li>
                <img
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://e7.pngegg.com/pngimages/533/767/png-clipart-logo-royal-dutch-shell-filling-station-shell-oil-company-brand-castrol-emblem-company.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*  */}
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-xl space-y-3">
            <h3 className="text-indigo-600 font-semibold">Features</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              What does FuleX Offer
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="relative py-28 bg-blue-600">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-blue-100 font-semibold pb-6">
              What people are saying
            </h3>
            <figure>
              <blockquote>
                <p className="text-white text-xl font-semibold sm:text-2xl">
                  “At Fuel X, we're not just delivering fuel; we're fueling the
                  future. Every delivery is a step towards more convenience,
                  safety, and sustainability. Join us as we drive forward,
                  transforming the way you think about fuel. Together, we're not
                  just moving, we're leading the way“
                </p>
              </blockquote>
              <div className="mt-6">
                <img
                  src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                  className="w-16 h-16 mx-auto rounded-full"
                />
                <div className="mt-3">
                  <span className="block text-white font-semibold">
                    Arvind P
                  </span>
                  <span className="block text-blue-100 text-sm mt-0.5">
                    Founder of Fuel X
                  </span>
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div
          className="absolute top-0 w-full h-full"
          style={{
            background:
              "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
          }}
        ></div>
      </section>
      {/*  */}
      <section className="py-14 max-w-screen-xl mx-auto">
        <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-blue-600 md:px-8 md:mx-8">
          <div className="relative z-10 max-w-xl mx-auto sm:text-center">
            <div className="space-y-3">
              <h3 className="text-3xl text-white font-bold">
                Let us Know You Thoughts
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Your Voice Matters: Share Your Feedback Help Us Innovate and
                Improve
              </p>
            </div>
            <div className="mt-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-gray-500 w-full p-2 outline-none"
                />
                <button className="p-2 px-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4">
                  Reach us
                </button>
              </form>
              <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
                No spam ever, we are care about the protection of your data.
                Read our{" "}
                <a className="underline" href="javascript:void(0)">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </p>
            </div>
          </div>
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
