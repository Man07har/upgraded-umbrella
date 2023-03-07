import React from "react";
import ImageOne from "../assets/image-1.jpg";
import ImageTwo from "../assets/image-2.jpg";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Welcome to our Landing Page!
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center">
              <img src={ImageOne} alt="ImageOne" className="rounded-lg shadow-lg mb-6"/>
              <p className="text-lg text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dapibus ante eget felis congue efficitur. Nam vel urna vitae
                magna bibendum lobortis. Duis blandit tincidunt dui quis
                condimentum.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={ImageTwo} alt="ImageTwo" className="rounded-lg shadow-lg mb-6"/>
              <p className="text-lg text-gray-700">
                Fusce at sem ac diam placerat pulvinar ut sed lorem. Aliquam
                erat volutpat. Nullam cursus nisi in sapien consectetur
                vestibulum.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={ImageTwo} alt="ImageTwo" className="rounded-lg shadow-lg mb-6"/>
              <p className="text-lg text-gray-700">
                Fusce at sem ac diam placerat pulvinar ut sed lorem. Aliquam
                erat volutpat. Nullam cursus nisi in sapien consectetur
                vestibulum.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={ImageTwo} alt="ImageTwo" className="rounded-lg shadow-lg mb-6"/>
              <p className="text-lg text-gray-700">
                Fusce at sem ac diam placerat pulvinar ut sed lorem. Aliquam
                erat volutpat. Nullam cursus nisi in sapien consectetur
                vestibulum.
              </p>
            </div>
          </div>
          <div className="px-4 py-6 sm:px-0">
            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-600 text-white hover:bg-indigo-700"
              >
                DOWNLOAD   
              </a>
            </div>
          </div>
        </div>
      </main>
   
    </div>
    </div>
  );
};

export default Home;