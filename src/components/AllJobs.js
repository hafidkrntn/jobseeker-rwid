import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AllJobs = () => {
  return (
    <div className="space-y-4">
      <div className="text-white flex justify-around">
        <h2 className="text-bold text-2xl pt-6">Jobs</h2>
        <button className="flex text-2xl pt-6">
          View All <BsArrowRight className="w-[54.5px] h-[20px]" />
        </button>
      </div>
      <div className="flex justify-around mx-auto">
        <div className="w-[314px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665512895/rwid/VkO7v6X3_400x400_apj1ns.jpg"
            alt="remote worker"
          />
          <a href="/">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              UI UX Designer
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Fulltime
          </p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Jakarta
            <br />
            IDR 5.000.0000 - 7.000.000/Bulan
          </p>
          <a
            href="/"
            className="rounded-full bg-black items-center text-white px-5"
          >
            View
          </a>
        </div>

        <div className="w-[314px] justify-around bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665512895/rwid/VkO7v6X3_400x400_apj1ns.jpg"
            alt="remote worker"
          />
          <a href="/">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              React Developer
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Fulltime
          </p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Jakarta
            <br />
            IDR 5.000.0000 - 7.000.000/Bulan
          </p>
          <a
            href="/"
            className="rounded-full bg-black items-center text-white px-5"
          >
            View
          </a>
        </div>

        <div className="w-[314px] justify-around bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665512895/rwid/VkO7v6X3_400x400_apj1ns.jpg"
            alt="remote worker"
          />
          <a href="/">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Python Developer
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Fulltime
          </p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Jakarta
            <br />
            IDR 5.000.0000 - 7.000.000/Bulan
          </p>
          <a
            href="/"
            className="rounded-full bg-black items-center text-white px-5"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
