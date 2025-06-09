import { Link } from "react-router"
import { FaAlignRight, FaArrowAltCircleRight, FaDotCircle } from "react-icons/fa"
import { FaArrowDownWideShort, FaArrowTurnDown } from "react-icons/fa6"
const NavBar = () => {
    return (
        <div className="w-full fixed  z-50  ">
            <div className="flex w-full h-[80px] bg-blue-900 text-white justify-around items-center ">
                {/* logo */}
                <div className="flex  gap-4">
                    <img src="https://fastootech.com/wp-content/uploads/2025/04/cropped-Icon-150x150.jpeg" className="w-12 h-12 rounded-full" alt="" />
                    <div className="text-white">
                        <p>Fastootech It </p>
                        <p>Solution </p>
                    </div>
                </div>
                {/* Navigation */}
                <nav className="hidden lg:block">
                    <ul className=" uppercase flex gap-10 text-md  ">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/About"}>ABOUT</Link>
                        <Link to={"/career"}>Career</Link>

                        <Link to={"/services"}>Services</Link>
                        <Link to={"/BLOGS"}>BLOGS</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </ul>
                </nav>
                {/* button */}
                <div className=" flex gap-3 items-center">
                    <a href="#_" class="relative inline-flex  items-center justify-start w-[150px] h-[40px]  overflow-hidden font-medium transition-all bg-blue-400 rounded hover:bg-blue-400 group">
                        <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 px-3.5 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0  group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full   text-white transition-colors duration-300 ease-in-out flex items-center justify-center gap-2 hover:text-gray-900 ">Talk To Us <FaArrowAltCircleRight /></span>
                    </a>
                    <div>
                        <FaAlignRight className="w-5 h-5 lg:hidden " />
                    </div>
                </div>
                {/* mobile Resposive */}

            </div>

        </div>
    )
}

export default NavBar