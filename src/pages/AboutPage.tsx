import { motion } from "framer-motion";
import { Calendar, Heart, MapPin, User } from "lucide-react";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import PageTransition from "../components/PageTransition";

const AboutPage: React.FC = () => {
  const interests = [
    "Web Development",
    "Machine Learning",
    "Open Source",
    "UI/UX Design",
    "Cloud Computing",
    "Mobile Development",
    "DevOps",
    "Generative AI",
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "Always exploring new technologies and methodologies to solve complex problems.",
      icon: "🚀",
    },
    {
      title: "Quality",
      description:
        "Committed to writing clean, maintainable code and delivering exceptional results.",
      icon: "⭐",
    },
    {
      title: "Collaboration",
      description: "Believing in the power of teamwork and open communication.",
      icon: "🤝",
    },
    {
      title: "Learning",
      description:
        "Continuously growing and adapting to the ever-evolving tech landscape.",
      icon: "📚",
    },
  ];

  return (
    <PageTransition>
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get to know more about my journey, values, and what drives me as a
              developer.
            </p>
          </AnimatedSection>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Personal Info */}
            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <User className="w-8 h-8 mr-3 text-primary-400" />
                  My Story
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hi! I'm Michael with M12 Systems R&D, a passionate
                    full-stack developer with over 25 years of experience
                    building web applications that make a difference. My journey
                    into programming started during college when I discovered
                    the power of code to solve real-world problems.
                  </p>
                  <p>
                    What began as curiosity quickly turned into a deep passion
                    for creating innovative digital solutions. I've had the
                    privilege of working with startups and established
                    companies, helping them bring their visions to life through
                    clean, efficient code.
                  </p>
                  <p>
                    I'm an AI advocate its a game Changer, When I'm not at my
                    computer, you'll find me helping Animals, experimenting with
                    AI, or diving into the latest tech trends.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-primary-400" />
                  My Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-slate-700/50 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl mb-2">{value.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.4} className="space-y-8">
              {/* Quick Facts */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-primary-400" />
                    <span>Conroe, TX</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-3 text-primary-400" />
                    <span>20+ Years Experience</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <User className="w-5 h-5 mr-3 text-primary-400" />
                    <span>Full Stack Developer/Gen AI Developer</span>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-full text-sm text-primary-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Fun Fact</h3>
                <p className="text-gray-300 text-sm">
                  I believe knowledge is power.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default AboutPage;
