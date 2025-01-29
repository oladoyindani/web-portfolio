import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

const Home = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold">Home Page</h1>
    <p>Welcome to Manifesto Trading and Contracting Services.</p>
    <p className="text-right">مرحبا بكم في مانيفستو لخدمات التجارة والمقاولات</p>
  </div>
);

const About = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold">About Us</h1>
    <p className="service-item">We sell CCTV Cameras and we also run installations for them.<span >نحن نبيع كاميرات المراقبة ونقوم أيضًا بتركيبها</span></p>
  </div>
);

const Services = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold">Our Services</h1>
    <ul className="list-disc pl-6">
      <li className="service-item"><span>Hospitality</span> <span>ضيافة</span></li>
      <li className="service-item"><span>Cleaning Services</span> <span>خدمات التنظيف</span></li>
      <li className="service-item"><span>Man Power Supply</span> <span>رجل إمدادات الطاقة</span></li>
      <li className="service-item"><span>Building Construction</span> <span>تشييد المباني</span></li>
      <li className="service-item"><span>Maintenance Work</span> <span>أعمال الصيانة</span></li>
      <li className="service-item"><span>Electrical & Plumbing</span> <span>الكهرباء والسباكة</span></li>
      <li className="service-item"><span>ELV Solutions</span> <span>حلول الجان</span></li>
      <li className="service-item"><span>Lighting Control</span> <span>التحكم في الإضاءة</span></li>
      <li className="service-item"><span>General Services</span> <span>خدمات عامة</span></li>
    </ul>
  </div>
);


const Contact = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold">Contact Us</h1>
    <h3>Have questions? Reach out to us at:</h3>
    <p>Email: <a href="mailto:manifestotrading@outlook.com" className="text-blue-500 underline">manifestotrading@outlook.com</a>.</p>
    <p>Phone Number: +974-5058-1621</p>
    <p>Shop Address: C.R.No:204728, Doha-Qatar</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          &copy; 2025 Manifesto Trading & Contracting Services. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
