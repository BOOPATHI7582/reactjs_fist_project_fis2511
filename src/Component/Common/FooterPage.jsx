import { FaStar } from "react-icons/fa"


function FooterPage() {
  return (
    <div className="flex flex-col bg-blue-900 gap-3 mt-7">
      <div className="w-full  text-white h-[300px] flex flex-col mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-16 place-items-center h-full gap-10 mb-7">
          <div className=" space-y-3">
            <h3 className="text-2xl font-bold">About</h3>
            <p className="text-xl font-mono ">Fastootech was founded by a passionate team that aims to revolutionize IT solutions and empower businesses.</p>
          </div>
          <div className=" space-y-3">
            <h3 className="text-2xl font-bold">Contact</h3>
            <p className="text-xl font-mono ">contact@fastootech.com</p>
            <p className="text-xl font-mono ">7760408321</p>
          </div>
          <div className=" space-y-3">
            <h3 className="text-2xl font-bold">Address</h3>
            <p className="text-xl font-mono ">Site No. 26 Laskar, Hosur Rd, next to Nexus Mall, Chikku Lakshmaiah Layout, Adugodi, Bengaluru, Karnataka 560029</p>
          </div>
        </div>

      </div>

      {/* midle section */}

      <div className="mx-16 border-[1px] border-blue-400 bg-blue-900 shadow-xl rounded-lg  py-10 px-6 text-white flex justify-between items-center ">
        <div className="flex gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xl space-y-2 flex gap-6"><FaStar className="text-yellow-400 w-7 h-7 " /> 4.5</p>
            <p className="text-3xl">Google</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl space-y-2 flex gap-6"><FaStar className="text-yellow-400 w-7 h-7 " /> 4.6</p>
            <p className="text-3xl">Clutch</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl space-y-2 flex gap-6"><FaStar className="text-yellow-400 w-7 h-7 " /> 4.5</p>
            <p className="text-3xl">GoodFirms</p>
          </div>
        </div>
        {/* righ side part */}
        <div className="flex gap-9 items-center ">
          <div className="text-xl">
            <p className="">Google Partner</p>
          </div>
          <div className="flex gap-9">
            <img src="	https://www.nextwebi.com/assets/images/icons/google-partner.png" alt="" className="w-[150px] h-[100px] object-contain" />
            <img src="https://www.nextwebi.com/assets/images/icons/gdpr.webp" alt="" className="w-[100px] h-[100px] object-contain" />

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-6 place-items-center">
        {/* Services */}
        <div className="flex flex-col gap-3.5">
          <h3 className="font-bold text-xl text-white">Services</h3>
          <ul className="text-md text-white space-y-1">
            <li>Offshore Software Development</li>
            <li>Custom Software Development</li>
            <li>ERP Application Development</li>
            <li>CRM Application Development</li>
            <li>Mobile App Development</li>
            <li>Fullstack Development</li>
            <li>Ecommerce App Development</li>
          </ul>
        </div>

        {/* Hire Developers */}
        <div className="flex flex-col gap-3.5">
          <h3 className="font-bold text-xl text-white">Hire Developers</h3>
          <ul className="text-md text-white space-y-1">
            <li>Hire React Developers</li>
            <li>Hire Angular Developers</li>
            <li>Hire Vue.js Developers</li>
            <li>Hire Next.js Developers</li>
            <li>Hire Android Developers</li>
            <li>Hire Fullstack Developers</li>
            <li>Hire Flutter Developers</li>
            <li>Hire ASP.Net Developers</li>
          </ul>
        </div>

        {/* Learn */}
        <div className="flex flex-col gap-3.5">
          <h3 className="font-bold text-xl text-white">Learn</h3>
          <ul className="text-md text-white space-y-1">
            <li>Our Work</li>
            <li>About Us</li>
            <li>Case Studies</li>
            <li>Blogs</li>
            <li>Clients</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Customer Onboarding</li>
            <li>Pay Online</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="flex flex-col gap-3.5">
          <h3 className="font-bold text-xl text-white">Solutions</h3>
          <ul className="text-md text-white space-y-1">
            <li>Retail eCommerce</li>
            <li>CRM</li>
            <li>B2B OMS</li>
            <li>Travel Solutions</li>
            <li>Hotels & Resorts</li>
            <li>Ed-Tech</li>
            <li>Job Portals</li>
          </ul>
        </div>
      </div>

      {/*  */}
      <div className="border-t-2 border-t-white  flex justify-between text-white f items-center h-22">
        <p className="text-sm font-bold  text-white">Copyright © 2025 Fastootech</p>
        <p className="">Sitemap | Privacy Policy</p>
      </div>
    </div>
  )
}

export default FooterPage