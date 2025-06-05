import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import TempleCard from './components/TempleCard'
import BookingCard from './components/BookingCard'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs';
function App() {
  const token = localStorage.getItem("token")
  return (
  <>
    <Router>
      
      <div className='mb-15'><Navbar/></div>
      <Routes>
        {!token?<Route path="/" element= {<Home/>}/>
        :<Route path="/" element= {<Home />}/>}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/bookingcard" element={<BookingCard />} />
         <Route path="/Home" element={<Home />} />
         <Route path='/contact' element={<ContactUs/>}/>

      </Routes>
        
      
    </Router>
    <Footer />
  </>
    
   
  )
}

export default App
