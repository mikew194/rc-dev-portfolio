import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import GradientButton from "../components/GradientButton";
import PageTransition from "../components/PageTransition";

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-accent-500/10 to-primary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                  Michael Wassermann
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
                  .Net Full Stack Developer / AI Developer
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Passionate about creating exceptional digital experiences
                through clean code, innovative solutions, and cutting-edge
                technologies. Let me build something amazing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link to="/projects">
                  <GradientButton size="lg" className="w-full sm:w-auto">
                    Go to Projects
                  </GradientButton>
                </Link>

                <a
                  href="./Resume-Michael-R-Wassermann.docx" // Replace with the actual path to your resume
                  download // Optional: prompts the browser to download the file
                >
                  <GradientButton
                    variant="outline"
                    icon={Download}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Download Resume
                  </GradientButton>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center space-x-6"
              >
                {[
                  {
                    icon: Github,
                    href: "https://github.com",
                    color: "hover:text-gray-400",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: Mail,
                    href: "mailto:john@example.com",
                    color: "hover:text-primary-400",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-gray-400 transition-all duration-200 ${social.color} hover:scale-110`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* Quick About Section */}
        <AnimatedSection className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                With over 25 years of experience in full-stack development, I
                specialize in creating scalable web applications using modern
                technologies like React, Angular Blazor, and Azure cloud
                platforms. I'm passionate about writing clean, efficient code
                and delivering exceptional user experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { number: "~37", label: "Projects Completed" },
                  { number: "25+", label: "Years Experience" },
                  { number: "~28", label: "Technologies Mastered" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </PageTransition>
  );
};

export default HomePage;
