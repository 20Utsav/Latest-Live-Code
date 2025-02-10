import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog/page";
import Blogcards from "../src/pages/Blogcards";
import Services from "./components/Services/Services.tsx";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail.tsx";
import ContactGetData from "./pages/ContactGetData";
import Portfolio from "./components/Portfolio/page.tsx";
import ProjectDetail from "./components/Portfolio/ProjectDetail.tsx";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";
import EmailTable from "./admin/EmailTable.tsx";
import Chatbox from "./components/ChatBox.tsx";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Show only for screens wider than 768px
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-gray-400">
        {isDesktop && (
          <AnimatedCursor
            innerSize={12}
            outerSize={24}
            color="255, 50, 150"
            outerAlpha={0.4}
            innerScale={1}
            outerScale={3}
            clickables={["a", "button", ".clickable"]}
          />
        )}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<Blogcards />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceKey" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectKey" element={<ProjectDetail />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-data" element={<ContactGetData />} />
          <Route path="/email-data" element={<EmailTable />} />
        </Routes>
        <Footer />
        <Chatbox />
      </div>
    </Router>
  );
}

export default App;
