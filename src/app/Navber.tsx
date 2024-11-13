import React from 'react'
import Image from "next/image";

const Navber = () => {
  return (
    <div className='h-[80px] w-full bg-[#044e83] flex justify-between items-center px-14 fixed z-30	'>
      <div className='mt-20'>
        <Image src="/logo.png"
            width={90}
            height={90}
            alt="Picture of the author" />
      </div>
      <div className='xl-lg:text-xl font-extrabold text-[#b9d8f3]'>
        <h5>Tuition Free Education Program on Latest Technologies</h5>
      </div>
      <div className='text-white'>
        <ul className='flex justify-between items-center gap-10'>
            <li><a href="./">Home</a></li>
            <li><a href="">Apply</a></li>
            <li><a href="">Jobs</a></li>
            <li><a href="">Result</a></li>
            <li><a href="">Courses</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navber