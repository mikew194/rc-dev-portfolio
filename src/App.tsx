//import React from 'react';
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { motion, AnimatePresence } from 'framer-motion';
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResumeDownloadComponent from "./components/ResumeDownloader";
import ScrollToTop from "./components/ScrollToTop";
import Spinner from "./components/Spinner";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  //const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      //setData('Your fetched data goes here!');
      setIsLoading(false);
    }, 3000); // Simulate 3 seconds of loading
  }, []);

  return (
    <Router basename="/rc-dev-portfolio">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
          <ScrollToTop />
          <Header />

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/download" element={<ResumeDownloadComponent />} />
            </Routes>
          </AnimatePresence>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
