
import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-zinc-100 w-full overflow-hidden mt-20'>
        <div className='w-[95%] block m-auto'>
            <div className='grid grid-cols-3 gap-10 py-20'>
                <div className='text-zinc-800'>
                    <ul className='flex flex-col gap-2'>
                        <h4 className='text-xl font-bold mb-3'>Core Courses</h4>
                        <li className='text-lg font-normal'><a href="javascript:;">Programming Fundamentals</a></li>
                        <li className='text-lg font-normal'><a href="javascript:;">Web2 Using NextJS</a></li>
                        <li className='text-lg font-normal'><a href="javascript:;">Earn as You Learn</a></li>
                    </ul>
                </div>
                <div className='text-zinc-800'>
                    <ul className='flex flex-col gap-2'>
                        <h4 className='text-xl font-bold mb-3'>Advanced Courses</h4>
                        <li className='text-lg font-normal'><a href="javascript:;" >Web 3 and Metaverse</a></li>
                        <li className='text-lg font-normal'><a href="javascript:;">Cloud-Native Computing</a></li>
                        <li className='text-lg font-normal'><a href="javascript:;">Artificial Intelligence (AI) and Deep Learning</a></li>
                        <li className='text-lg font-normal'><a href="javascript:;">Ambient Computing and IoT</a></li>
                        <li className='text-lg font-normal'><a href="javascript:;">Genomics and Bioinformatics</a></li>
                        <li className='text-lg font-normal'><a href="javascript:;">Network Programmability and Automation</a></li>
                    </ul>
                </div>
                <div className='text-zinc-800'>
                    <ul className='flex flex-col gap-2'>
                       <h4 className='text-xl font-bold mb-3'>Social Links</h4>
                        <div>
                            <ul className='flex items-center gap-4 text-white text-xl'>
                                <li className='bg-[#4267b2] h-10 w-10 flex items-center justify-center rounded-full'><a href="javascript:;"><FaFacebookF /></a></li>
                                <li className='bg-[#ff0000] h-10 w-10 flex items-center justify-center rounded-full'><a href="javascript:;"><FaYoutube /></a></li>
                                <li className='bg-[#1da1f2] h-10 w-10 flex items-center justify-center rounded-full'><a href="javascript:;"><FaTwitter /></a></li>
                                <li className='bg-[#ff0000] h-10 w-10 flex items-center justify-center rounded-full'><a href="javascript:;"><FaInstagram /></a></li>
                                <li className='bg-black h-10 w-10 flex items-center justify-center rounded-full'><a href="javascript:;"><FaTiktok /></a></li>
                            </ul>
                        </div>
                        <div className='mt-3'>
                            <ul className='flex items-center gap-2 text-lg text-[#14598b] underline decoration-solid'>
                                <li className='text-2xl'><a href="javascript:;"><MdOutlineMail /></a></li>
                                <li><a href="javascript:;">education@governorsindh.com</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer