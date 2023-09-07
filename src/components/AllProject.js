import React from 'react'
import { BsArrowRight, BsFillLightningChargeFill } from "react-icons/bs";

const AllProject = () => {
  return (
    <div className="space-y-4">
    <div className="text-white flex justify-around">
      <h2 className="text-bold text-2xl pt-6">Project</h2>
      <button className="flex text-2xl pt-6">
        View All <BsArrowRight className="w-[54.5px] h-[20px]" />
      </button>
    </div>
    <div className="flex justify-around mx-auto">
     
      <div className="w-[314px]  bg-white pt-6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665512895/rwid/VkO7v6X3_400x400_apj1ns.jpg"
          alt="remote worker"
          className="rounded-full w-[170px] mx-20"
        />
        <a href="/">
          <h5 className="mb-2 text-2xl pt-6 font-semibold tracking-tight text-[#5125FF] dark:text-white">
            Davided G
          </h5>
        </a>
        <p className="mb-3 w-[160px] space-x-2 mx-auto place-content-center flex font-normal rounded-full border border-red-400 text-[#5125FF] dark:text-gray-400">
         <BsFillLightningChargeFill className="" /> <p>Avaible Now</p>
        </p>
        <h1 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
           UI Designer | Jakarta
        </h1>
        <p className="my-8">Hello for all! My name is Davide! I'm a uiux designer. I live in Jakarta, in Indonesia. I work as a</p>
        <a
          href="/"
          className="rounded-full bg-black items-center text-white px-5"
        >
          View
        </a>
      </div>

      <div className="w-[314px]  bg-white pt-6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665512895/rwid/VkO7v6X3_400x400_apj1ns.jpg"
          alt="remote worker"
          className="rounded-full w-[170px] mx-20"
        />
        <a href="/">
          <h5 className="mb-2 text-2xl pt-6 font-semibold tracking-tight text-[#5125FF] dark:text-white">
            Davided G
          </h5>
        </a>
        <p className="mb-3 w-[160px] space-x-2 mx-auto place-content-center flex font-normal rounded-full border border-red-400 text-[#5125FF] dark:text-gray-400">
         <BsFillLightningChargeFill className="" /> <p>Avaible Now</p>
        </p>
        <h1 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
           UI Designer | Jakarta
        </h1>
        <p className="my-8">Hello for all! My name is Davide! I'm a uiux designer. I live in Jakarta, in Indonesia. I work as a</p>
        <a
          href="/"
          className="rounded-full bg-black items-center text-white px-5"
        >
          View
        </a>
      </div>

      <div className="w-[314px]  bg-white pt-6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665512895/rwid/VkO7v6X3_400x400_apj1ns.jpg"
          alt="remote worker"
          className="rounded-full w-[170px] mx-20"
        />
        <a href="/">
          <h5 className="mb-2 text-2xl pt-6 font-semibold tracking-tight text-[#5125FF] dark:text-white">
            Davided G
          </h5>
        </a>
        <p className="mb-3 w-[160px] space-x-2 mx-auto place-content-center flex font-normal rounded-full border border-red-400 text-[#5125FF] dark:text-gray-400">
         <BsFillLightningChargeFill className="" /> <p>Avaible Now</p>
        </p>
        <h1 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
           UI Designer | Jakarta
        </h1>
        <p className="my-8">Hello for all! My name is Davide! I'm a uiux designer. I live in Jakarta, in Indonesia. I work as a</p>
        <a
          href="/"
          className="rounded-full bg-black items-center text-white px-5"
        >
          View
        </a>
      </div>

     
    </div>
  </div>
  )
}

export default AllProject