import { motion } from "framer-motion";
import { Code2, Github, Heart, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
      color: "hover:text-primary-400",
    },
  ];

  return (
    <motion.footer
      className="bg-slate-900/50 backdrop-blur-md border-t border-primary-500/20 mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                DevPortfolio
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate software developer creating innovative solutions with
              modern technologies. Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800 rounded-lg text-gray-400 transition-all duration-200 ${social.color} hover:bg-slate-700 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using
            React & Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Last Modified: 02/21/2026
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
