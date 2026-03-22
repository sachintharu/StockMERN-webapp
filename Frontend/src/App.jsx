import React from 'react'
import Homepage from './landing_page/home/Homepage'
import Signup from './landing_page/signup/Signup'
import Login from './landing_page/signup/Login'
import About from './landing_page/about/About'
import ProductPage from './landing_page/products/ProductPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './landing_page/NotFound'
import Home from "./dashboard/Home"




const App = () => {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Homepage />} />


        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
  

        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
     </BrowserRouter>
  )
}

export default App
