import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import LayOut from './Component/Layout/LayOut'
import AboutPage from './Component/Page/AboutPage'
import HomePage from './Component/Page/HomePage'
import Contact from './Component/Page/Contact'
import Services from './Component/Page/services'
import CareerPage from './Component/Page/CareerPage'

function App() {


  return (
    <BrowserRouter>
      {/* layout */}
      <Routes>
        <Route path='/' element={<LayOut />} >
        <Route index element={<HomePage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/career' element={<CareerPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
