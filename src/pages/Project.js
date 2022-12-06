import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Project = () => {
  return (
    <div>
      <section id="header">
        <Header />
      </section>

      <section id="content" className="w-full">
        <div className="container mx-auto">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none uppercase tracking-tight text-gray-900 lg:mt-12 sm:text-4xl md:mx-auto">
              Our Projects
            </h2>
          </div>

          <div className="px-4 py-16 lg:py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 md:gap-10 grid-cols-2 md:grid-cols-3">
              <div className="px-10 py-20 text-center transition duration-300 bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">Project 1</p>
              </div>
              <div className="px-10 py-20 text-center transition duration-300 bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">Project 2</p>
              </div>
              <div className="px-10 py-20 text-center transition duration-300 bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">Project 3</p>
              </div>
              <div className="px-10 py-20 text-center transition duration-300 bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">Project 4</p>
              </div>
              <div className="px-10 py-20 text-center transition duration-300 bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">Project 5</p>
              </div>
              <div className="px-10 py-20 text-center transition duration-300 bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">Project 6</p>
              </div>
              <div className="px-10 py-20 text-center transition duration-300 bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">Project 7</p>
              </div>
              <div className="px-10 py-20 text-center transition duration-300 bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200">Project 8</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Project;
