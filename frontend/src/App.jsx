import React from "react";
import "./App.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CookiesProvider } from "react-cookie";

/* AUTH */
import { AuthProvider } from "../context/AuthContext.jsx";
import ProtectedRoute from "../routes/ProtectedRoute";

/* LANDING PAGES */
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";
import SupportPage from "./landing_page/support/SupportPage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";



function App() {
  return (
    <CookiesProvider>
      <AuthProvider>
        <BrowserRouter>
          {/* ✅ Toast global */}
          <ToastContainer position="top-right" autoClose={2000} />

          {/* Public Navbar */}
          <Navbar />

          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />

            {/* PROTECTED ROUTE */}
       
            

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </CookiesProvider>
  );
}

export default App;
