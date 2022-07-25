import React from 'react'
import {
  Route,
  Routes,
  Navigate,

} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/utils/Navbar';
import Product from "./components/product/Product";
import Footer from "./components/utils/Footer";
import Home from './components/home/Home'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Profile from './components/profile/Profile';
import CartProvider from './context/cart-provider'
import CheckOut from './Pages/CheckOut/CheckOut'
import SuccessAfterCheckOut from './Pages/successCheckout/SuccessCheckOut';



import "./App.css";
import './style.css'


function App() {
  

  

  return (
   
      
      <CartProvider>
        <section>

          <div className="App">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path='/shop' element={<Product />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
              <Route path='/resetpassword' element={<ResetPassword />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/checkout' element={<CheckOut />} />
              <Route path='/success' element={<SuccessAfterCheckOut />} />
            </Routes>

            <Footer />

          </div>

        </section>
      </CartProvider>

  )
}

export default App;
