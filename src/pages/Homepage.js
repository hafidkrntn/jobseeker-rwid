import React from "react";
import AllJobs from "../components/AllJobs";
import AllProject from "../components/AllProject";
import AllTalent from "../components/AllTalent";
import './Homepage.css'



const Homepage = () => {
  return (
    <div name="home" className="w-full h-screen flex flex-col justify-between">
    <div className="container grid md:grid-cols-2 max-w-[1460px] m-auto">
      <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
        <h1 className="py-3 text-4xl md:text-6xl font-bold">
          Good Reputation
        </h1>
        <h1 className="py-3 text-5xl md:text-7xl font-bold text-[#FC7F7F]">
          is More Valuable
        </h1>
        <h1 className="py-3 text-5xl md:text-7xl font-bold">Than Money</h1>
        <p className="text-2xl pt-6">-Publilius Syrus-</p>
        <div>
          <form className="relative pt-6 w-[566px]">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-[#FC7F7F] sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-[#FC7F7F] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Jobs, Talent, Project..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-[#FC7F7F] hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <img
          src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665471124/rwid/image_7_h5yezn.png"
          className="image1"
          alt="image1"
        />
        <img
          src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665471124/rwid/image_6_w5blbs.png"
          alt="image2"
          className="image2"
        />
        <div className="circle "></div>
        <div className="triangle-up"></div>
        <div className="circle2"></div>
        <div className="triangle-2"></div>
        <div className="square"></div>
        <div className="circle3"></div>
      </div>
    </div>
    <div className="container max-w-[1280px] h-[1400px] relative bg-black rounded-lg pb-8 my-8">
      <AllJobs />
    </div>
    <div className="container max-w-[1280px] h-[1400px] relative bg-[#F68B8B] rounded-lg pb-8 my-8">
      <AllTalent />
    </div>
    <div className="container max-w-[1280px] h-[1400px] relative bg-black rounded-lg pb-8 my-8">
      <AllProject />
    </div>
  </div>
  );
};

export default Homepage;
