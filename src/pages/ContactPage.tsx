import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import GradientButton from "../components/GradientButton";
import PageTransition from "../components/PageTransition";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "mikew194@protonmail.com",
      href: "mailto:mikew194@protonmail.com",
      color: "text-primary-400",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (936) 662-4441",
      href: "tel:+19366624441",
      color: "text-secondary-400",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Conroe TX 77302",
      href: "https://maps.google.com",
      color: "text-accent-400",
    },
  ];

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
  ];

  return (
    <PageTransition>
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to
              bring your ideas to life.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200"
                      placeholder="Project discussion"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <GradientButton
                    type="submit"
                    icon={Send}
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Send Message
                  </GradientButton>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <AnimatedSection delay={0.2}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={index}
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-200 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div
                          className={`p-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg mr-4 group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-200`}
                        >
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">
                            {info.title}
                          </h3>
                          <p className={`text-sm ${info.color}`}>
                            {info.content}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Social Links */}
              <AnimatedSection delay={0.4}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Follow Me
                  </h2>

                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 bg-slate-700/50 rounded-lg text-gray-400 transition-all duration-200 ${social.color} hover:bg-slate-700 flex-1 flex items-center justify-center`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>

                  <p className="text-gray-400 text-sm mt-4 text-center">
                    Let's connect and share ideas about technology and
                    development.
                  </p>
                </div>
              </AnimatedSection>

              {/* Availability */}
              <AnimatedSection delay={0.6}>
                <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-6 border border-primary-500/20">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Availability
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Status</span>
                      <span className="text-green-400 font-medium flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                        Available
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-primary-400 font-medium">
                        Within 24 hours
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Time Zone</span>
                      <span className="text-secondary-400 font-medium">
                        PST (UTC-8)
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                    <p className="text-gray-300 text-sm">
                      Currently accepting new projects and collaborations. Feel
                      free to reach out for freelance work or full-time
                      opportunities.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default ContactPage;
