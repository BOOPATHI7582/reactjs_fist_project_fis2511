import React from 'react'
import { FaIndianRupeeSign, FaSquarePhone } from 'react-icons/fa6'
const ServicesForm = () => {
  return (
     <div className="bg-gray-100 w-full  grid grid-cols-1 lg:grid-cols-2 px-16 place-content-center py-5">
                <div className="w-[50%] flex">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300 text-4xl font-bold'>Get in Touch</h1>
                        <div className=" space-y-3">
                            <h2 className='text-xl font-bold text-black'>What Drive Us ?</h2>
                            <p className=" text-md text-gray-700">Creativity is our heartbeat. We constantly challange ourselves to further our technical prowess and help our customers to deliver execeptional customer experience.</p>
                        </div>
                        <div className="flex flex-col  gap-4">
                            <div className="flex gap-3 items-baseline">
                                <FaSquarePhone className='bg-blue-950 w-5 h-5 text-white rounded gap-3' />
                                <div className=' space-y-1'>
                                    <p className="text-gray-950 text-2xl font-bold">Call</p>
                                    <p className="text-xl text-gray-700"><a href="">+91 6369973575</a></p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-baseline">
                                <FaWhatsapp className='bg-blue-950 w-5 h-5 text-white rounded gap-3' />
                                <div className=' space-y-1'>
                                    <p className="text-gray-950 text-2xl font-bold">WhatApp</p>
                                    <p className="text-xl text-gray-700"><a href="" className='flex'>  +91 6369973575 | +1223234225345 </a></p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-baseline">
                                <CgMail className='bg-blue-950 w-5 h-5 text-white rounded gap-3' />
                                <div className=' space-y-1'>
                                    <p className="text-gray-950 text-2xl font-bold">Mail</p>
                                    <p className="text-xl text-gray-700"><a href="">boopathisiva990@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* collbration form  */}
                <form action="" className="bg-white shadow-xl rounded-2xl relative w-full max-w-5xl mx-auto p-8">
                    <div className="absolute top-0 left-0 bg-blue-800 h-[60px] w-full rounded-t-2xl flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">Collaborate with Nextwebi</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20 px-4">
                        <label className="flex flex-col gap-2">
                            Enter Your Name
                            <input type="text" className="border rounded-md h-10 px-2" />
                        </label>

                        <label className="flex flex-col gap-2">
                            Company Name
                            <input type="text" className="border rounded-md h-10 px-2" />
                        </label>

                        <label className="flex flex-col gap-2">
                            Email
                            <input type="email" className="border rounded-md h-10 px-2" />
                        </label>

                        <label className="flex flex-col gap-2">
                            Your Contact Number
                            <input type="tel" className="border rounded-md h-10 px-2" />
                        </label>

                        <label className="flex flex-col gap-2 col-span-1 lg:col-span-2">
                            Describe Your Project Briefly
                            <textarea maxLength="1000" className="border rounded-md h-24 px-2 py-1 resize-none" />
                        </label>

                        <label className="flex flex-col gap-2 col-span-1 lg:col-span-2">
                            Upload File
                            <input type="file" className="border border-dashed rounded-md px-2 py-1 w-full max-w-md" />
                        </label>

                        <div className="flex flex-wrap items-center justify-center col-span-1 lg:col-span-2 gap-4">
                            <span className="bg-orange-600 text-white px-4 py-2 font-bold rounded-2xl">
                                {9} + {7}
                            </span>
                            <button type="button" className="text-xl">
                                <RxReload />
                            </button>
                            <label className="flex flex-col gap-2 w-full max-w-sm">
                                Enter The Captcha
                                <input type="number" className="border rounded-md h-10 px-2" />
                            </label>
                        </div>

                        <label className="flex items-center gap-2 col-span-1 lg:col-span-2">
                            <input type="checkbox" className="h-4 w-4" />
                            Click here to quickly get portfolio in your inbox
                        </label>

                        <div className="col-span-1 lg:col-span-2 flex justify-center">
                            <button type="submit" className="bg-orange-700 text-white font-bold py-2 px-8 rounded hover:bg-orange-800 transition">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

            </div>
  )
}

export default ServicesForm