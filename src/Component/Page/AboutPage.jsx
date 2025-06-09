import React from 'react'
import CartSection from '../Common/CartSection'
import { LiaQuoteRightSolid } from 'react-icons/lia'
import SwiperSlider from '../Common/SwiperSlider'
import CultrueImagesSlider from '../Common/CultrueImagesSlider'
import { FaCheckCircle, FaMailchimp, FaPhoenixFramework, FaPhone, FaPhoneSlash, FaPhoneVolume, FaStar, FaWhatsapp } from 'react-icons/fa'
import { RxReload } from 'react-icons/rx'
import { FaIndianRupeeSign, FaSquarePhone } from 'react-icons/fa6'
import { BsInboxFill } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'

const AboutPage = () => {

    const image = [
        "https://www.nextwebi.com/assets/images/home/iso-27001.png",
        "https://www.nextwebi.com/assets/images/home/iso-9001.png",
        "https://www.nextwebi.com/assets/images/home/nist.png",
        "https://www.nextwebi.com/assets/images/home/duns-registered.png",
        "https://www.nextwebi.com/assets/images/home/google-partners.png"
    ]


    return (
        <section className='w-full  flex flex-col gap-14'>
            <div className="relative h-96 mb-16">
                <img
                    src="https://www.nextwebi.com/assets/images/about-us/bg1.jpg"
                    alt="Background"
                    className='w-full h-full object-cover'
                />
                <div className="absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black/40">
                    <h1 className="text-white text-4xl font-bold">Empowering IT Solutions</h1>
                </div>
            </div>

            {/* partner */}
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 ' >
                {/* left side content */}
                <div className='flex flex-col w-[50%] gap-6 justify-center '>
                    <h3 className='text-3xl font-semibold   '>About Us</h3>
                    <p className='text-gray-950 text-md font-300'>Fastootech is dedicated to delivering high-quality, on-time project outcomes that exceed client expectations. We provide flexible resource outsourcing through direct or contract models, customized to meet specific client needs. With collaborations across numerous IT companies and clients, we have built a strong network of experienced, industry-ready professionals skilled in various tech stacks and programming languages.</p>
                </div>
                {/* right side content */}
                <div className='flex items-center justify-center '>
                    <img src="https://fastootech.com/wp-content/uploads/2024/12/html-css-collage-concept-with-person-1.jpg" alt="About illustration" className=' w-[90%] h-full object-cover rounded' />
                </div>
            </div>

            {/* Quality & Security Standards */}
            <div className='w-full relative flex flex-col '>
                <div className=' w-full relative'>
                    <div className='flex justify-center w-full  sm:top-20 px-2'>
                        <div className="w-full max-w-screen-xl bg-white shadow-2xl rounded flex flex-col px-4 md:px-8 py-6">

                            {/* card section */}
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 p-4 mt-10 place-items-center'>
                                <CartSection number={1600} text={"Completed Projects"} />
                                <CartSection number={1500} text={"Customers Reviews"} />
                                <CartSection number={50} text={"Team Members"} />
                                <CartSection number={9} text={"Years of Experience"} />
                            </div>

                            {/* Section with images */}
                            <div className='w-full flex flex-col justify-center mt-10'>
                                <h3 className='text-xl md:text-3xl text-center text-black'>
                                    Due Diligence with <span className='font-bold'>Quality & Security Standards</span>
                                </h3>
                                <div className='flex flex-wrap justify-center gap-5 mt-6'>
                                    {image.map((e, index) => (
                                        <img key={index} src={e} alt={`logo-${index}`} className='w-20 h-20 object-cover sm:w-24 sm:h-24' />
                                    ))}
                                </div>
                            </div>

                            {/* Quote Section */}
                            <div className="flex flex-col justify-center items-center w-full mt-10 px-4">
                                <LiaQuoteRightSolid className='w-10 h-10 text-blue-600' />
                                <p className='text-lg md:text-2xl font-semibold text-center w-[90%] md:w-[70%] mb-6'>
                                    We proudly say with our custom development approach and experienced team, our solutions are successfully running in more than 1000+ places since many years and now it has become an essential backbone for the businesses, and with our constant maintenance and support our solutions are constantly growing.
                                </p>
                            </div>

                            {/* Swiper Section */}
                            <div className='flex flex-col w-full mt-5'>
                                <h3 className='text-xl md:text-2xl text-gray-600/50 text-center'>
                                    We Are <span className='text-gray-500'>Featured in</span>
                                </h3>
                                <div className='mb-6 w-full px-4 overflow-hidden'>
                                    <SwiperSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-orange-100 w-full h-44 absolute -top-8 -z-30"></div>

                </div>


            </div>
            {/* EVENT  */}
            <div className='w-full  '>
                <h3 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 text-center py-4 font-bold">
                    Life @Nextwebi
                </h3>

                <div className='w-full overflow-hidden mt-3'>
                    <CultrueImagesSlider />
                </div>
            </div>

            {/* Compliant and aligned */}
            <div className="px-3 rounded-2xl py-3 mx-4 bg-white shadow-[10px_10px_20px_10px] shadow-black/20 ">
                <div className="flex flex-col mb-4 mt-2.5">
                    <p className="text-5xl text-black font-bold">Compliant and aligned</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-800 text-5xl font-bold">with ethical business practices</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4  px-4 py-4">
                    <div className=" space-y-4 w-full">
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8 ' /> All employees are trained and aware of the data protection policies</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8 ' /> Compliant with government laws</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8 ' /> ISO 270001 - 2022 & ISO 9001 - 2015 Certified</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8 ' /> Employee wellness program (ESI, PF, PT, etc.)</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8 ' /> POSH training for employees and employers</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8 ' /> Interpersonal skill & behavior training</p>


                    </div>
                    <div className=" gap-5 w-full space-y-4">
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' />Whistleblower Policies</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' /> GDPR Compliant</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' /> Data Security Standards</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' /> NDA Protected.</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' /> Regular due diligence audit.</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' /> Vendor & partner integrity</p>
                    </div>
                    <div className=" gap-5 w-full space-y-4">
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' /> Promoting diversity and equity.</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' /> Ethical Marketing</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' /> Fair Employment Practices</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' /> Environmental Responsibility</p>
                        <p className=' space-x-2 flex items-center gap-3 font-semibold'><FaCheckCircle className='bg-green-600 text-white text-3xl rounded-full w-8 h-8' /> Organize like a pro and never lose a lead.</p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}

            <div className="grid grid-cols-1 lg:grid-cols-2 px-5 gap-4 ">
                <div className="flex flex-col px-4 py-8 gap-3 bg-white shadow-[1px_1px_10px_1px] shadow-blue-200">
                    <div className=''>
                        <img src="https://www.nextwebi.com/assets/images/about-us/target.png" alt="" className='w-[100px] h-[100px]' />
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-800 text-5xl'>Mission</p>
                        <p className='text-xl font-sans'>Our mission is to deliver excellence in product and service-based projects by managing a team of skilled resources on our payroll. Through dependable project management and resource outsourcing services, driving client success with precision, integrity, and a commitment to quality, allowing our clients to achieve their vision free from operational constraints.</p>
                    </div>
                </div>
                <div className="flex flex-col px-4 py-8 gap-3 bg-white shadow-[1px_1px_10px_1px] shadow-blue-200">
                    <div className=''>
                        <img src="https://www.nextwebi.com/assets/images/about-us/vision.png" alt="" className='w-[100px] h-[100px]' />
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-800 text-5xl'>Vsion</p>
                        <p className='text-xl font-sans'>To be the leading partner for businesses seeking reliable project management, resource outsourcing, and customized IT solutions. We aim to empower clients to focus on their strategic goals while we manage the complexities of execution and delivery with professionalism and integrity.</p>
                    </div>
                </div>
            </div>

            {/* Client Triminal */}
            <div className="mt-5 w-full  bg-gray-300">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-2xl font-bold mt-3">Clients' Testimonials</p>
                    <p className="text-xl text-blue-950 font-bold mt-3 mb-3">Our customer experience while working with our tech experts.</p>
                </div>
                <div className="grid h-auto mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 px-5">
                    <div className="bg-white w-full flex flex-col px-10 py-10 rounded gap-7">
                        <div className=' space-y-3'>
                            <p className='text-xl font-medium '>We have been working with Nextwebi for the last 6 years. All our applications and digital assets are managed via them. The team is very knowledgeable and they provide ontime support. I...</p>
                            <button className='text-xl text-red-700 font-mono'>Read More</button>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className="flex text-yellow-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-xl text-black font-medium ">BOOPATHI S</p>
                            <p className="text-sm text-gray-400 ">Software Developer</p>
                        </div>
                    </div>
                    <div className="bg-white w-full flex flex-col px-10 py-10 rounded gap-7">
                        <div className=' space-y-3'>
                            <p className='text-xl font-medium '>We have been working with Nextwebi for the last 6 years. All our applications and digital assets are managed via them. The team is very knowledgeable and they provide ontime support. I...</p>
                            <button className='text-xl text-red-700 font-mono'>Read More</button>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className="flex text-yellow-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-xl text-black font-medium ">BOOPATHI S</p>
                            <p className="text-sm text-gray-400 ">Software Developer</p>
                        </div>
                    </div>
                    <div className="bg-white w-full flex flex-col px-10 py-10 rounded gap-7">
                        <div className=' space-y-3'>
                            <p className='text-xl font-medium '>We have been working with Nextwebi for the last 6 years. All our applications and digital assets are managed via them. The team is very knowledgeable and they provide ontime support. I...</p>
                            <button className='text-xl text-red-700 font-mono'>Read More</button>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className="flex text-yellow-500">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-xl text-black font-medium ">BOOPATHI S</p>
                            <p className="text-sm text-gray-400 ">Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature */}
            <div className="flex flex-col px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-around gap-5 mb-5">
                    <p className=" text-4xl font-bold ">Our Core Features</p>
                    <p className=" text-xl font-semibold">Nextwebi IT Solutions Pvt. Ltd. is constantly delivering custom based digital solutions to the leading businesses around the world for more than 9 years; we have crafted many business software solutions and simplified the business processes with help of the latest technologies and our domain expertise.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-6">
                    <div className="flex flex-col px-5 py-5 gap-4 border rounded shadow-md shadow-gray-400 bg-white">
                        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100 text-2xl font-bold'>Agile model</h2>
                        <p className="">We continuously take feedback from our clients and focus on iterative development through collaboration between self-organizing cross-functional teams and evolve and implement changes. We enable teams to deliver fast and effective solutions with greater quality and greater aptitude to respond to change.</p>
                    </div>
                    <div className="flex flex-col px-5 py-5 gap-4 border rounded shadow-md shadow-gray-400 bg-white">
                        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100 text-2xl font-bold'>Data protection</h2>
                        <p className="">We assure absolute confidentiality and privacy of your data, by signing our data protection agreement. Our data protection policy includes necessary terms and conditions stated by DMCA, (GDPR) General Data Protection Regulation laid by European Union and Information Technology Rules, 2011 to deliver the best services to our clients.</p>
                    </div>
                    <div className="flex flex-col px-5 py-5 gap-4 border rounded shadow-md shadow-gray-400 bg-white">
                        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100 text-2xl font-bold'>Sustainability</h2>
                        <p className="">We focus on creating long-term stakeholder value by implementing a business strategy that emphasizes the ethical, environmental, social, cultural, and economic dimensions of doing business.</p>
                    </div>
                    <div className="flex flex-col px-5 py-5 gap-4 border rounded shadow-md shadow-gray-400 bg-white">
                        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100 text-2xl font-bold'>Innovation</h2>
                        <p className="">We focus on innovative agile methods by putting the user at the center of our every process. We systematically create change by developing workflows to constantly produce, organize and nurture new ideas..</p>
                    </div>
                    <div className="flex flex-col px-5 py-5 gap-4 border rounded shadow-md shadow-gray-400 bg-white">
                        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100 text-2xl font-bold'>Cost-effective strategy</h2>
                        <p className="">We focus on providing the best solutions that are customer-oriented, competition-oriented, or resource and skills-oriented. We deliver the best services to our customers at friendly cost-friendly prices.</p>
                    </div>
                    <div className="flex flex-col px-5 py-5 gap-4 border rounded shadow-md shadow-gray-400 bg-white">
                        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100 text-2xl font-bold'>User centric interface</h2>
                        <p className="">We create solutions that blend creative mindset and analytical strategy to deliver effective results for our customers. We engage in delivering excellence after analyzing a plethora of research and design techniques to provide highly accessible and usable solutions.</p>
                    </div>
                </div>
            </div>

            {/* contect   & collabo*/}
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
        </section>
    )
}

export default AboutPage
