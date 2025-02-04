import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog/page';
import Blogcards from '../src/pages/Blogcards'
import Services from './components/Services/Services.tsx';
import ServiceDetail  from './components/ServiceDetail/ServiceDetail.tsx';
import ContactGetData from "./pages/ContactGetData";

import Portfolio from './components/Portfolio/page.tsx';
import ProjectDetail from './components/Portfolio/ProjectDetail.tsx';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AnimatedCursor from "react-animated-cursor";
import EmailTable from './admin/EmailTable.tsx';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-gray-400">
         {/* Custom Animated Cursor */}
      <AnimatedCursor
        innerSize={12} // Size of the inner cursor
        outerSize={24} // Size of the outer cursor
        color="255, 50, 150" // RGB color of the cursor
        outerAlpha={0.4} // Transparency of the outer cursor
        innerScale={1} // Scale of the inner cursor on hover
        outerScale={3} // Scale of the outer cursor on hover
        clickables={[
          "a",
          "button",
          ".clickable", // Specify additional elements that should trigger hover effects
        ]}
      />
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* Add this route */}
          <Route path="/blog" element={<Blog />} /> {/* Add this route */}
          <Route path="/blog/:blogId"  element={<Blogcards />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceKey" element={<ServiceDetail  />} /> {/* UX Design Course route */}
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectKey" element={<ProjectDetail />} />
          <Route path="/process" element={<Process />} /> {/* Process page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        {/* <Route path="/contact-data" element={<ContactGetData />} /> */}
        <Route path="/contact-data" element={<ContactGetData />} />
          <Route path="/email-data" element={<EmailTable />} />

        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;