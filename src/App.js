import React from "react"
import "style.css"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import LandingPage from "pages/LandingPage"
import LoginPage from "pages/LoginPage"
import DashboardPage from "pages/DashboardPage"
import { HashRouter, Routes, Route } from "react-router-dom"
import SignUp from "pages/SignUpPage"
import HomePage from "pages/HomePage"
import NewCamp from "pages/NewCampPage"
import Cart from "pages/CartPage"


function App() {
  return (
  <HashRouter>
    <Routes>
        <Route exact path="/nix" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/newcamp" element = {<NewCamp />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
  </HashRouter>

  );
}

export default App