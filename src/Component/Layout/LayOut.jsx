import { Outlet } from "react-router"
import FooterPage from "../Common/FooterPage"
import NavBar from "../Common/NavBar"




const LayOut = () => {
  return (
   <>
   <header>
    <NavBar/>
   </header>

   <main>
      <Outlet/>
   </main>
   <footer>
    <FooterPage/>
   </footer>
   </>
  )
}

export default LayOut