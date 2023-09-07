import React from 'react'

const Navigation = () => {
  return (
    <div className='container mx-10 w-screen h-[80px] z-10'>
    <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
      <img 
            src="https://res.cloudinary.com/hafidkrntn/image/upload/v1664882363/rwid/image_2_wo7dq8.png"
            width={200}
            height={200}
            className="cursor-pointer object-contain"
            alt="logo"
          />
        <ul className='hidden md:flex'>
        <li><a href="/">Home</a></li>
        <li><a href="course">Jobs</a></li>
        <li><a href="bootcamp">Talent</a></li>
        <li><a href="jobs">About us</a></li>
        </ul>
      </div>
      <div className='hidden md:flex pr-20'>
      <a href="/login">
        <button className='buttonHeader text-black mr-20 border-solid border-2'>
          Sign In
        </button>
      </a>
      <a href="/register">
        <button className='buttonHeader bg-black text-white'>Sign Up</button>
      </a>
      </div>
    </div>

  </div>
  )
}

export default Navigation