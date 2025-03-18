import {React,useRef  } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
import { useNavigate, useLocation, Routes ,Route } from "react-router-dom";   
const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};



const MainApp = () => {
 
  const galleryRef = useRef(null);
  const pricingRef = useRef(null);


  return (
    <>
      <Navbar />
      <Hero galleryRef={galleryRef} pricingRef={pricingRef}/>
      <WorkoutSessions />
      <Contact />
      <BMICalculator />
      <Gallery ref={galleryRef}/>
      <Pricing ref={pricingRef}/>
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </>
  );
};






export default App;
