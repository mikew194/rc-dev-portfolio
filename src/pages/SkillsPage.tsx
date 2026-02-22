import { motion } from "framer-motion";
import { Cloud, Code, Database, Palette, Smartphone, Zap } from "lucide-react";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import PageTransition from "../components/PageTransition";

const SkillsPage: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-primary-500 to-blue-500",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Angular", level: 85 },
        { name: "Blazor", level: 75 },
        { name: "Tailwind CSS", level: 70 },
        { name: "CSS/SASS/SCSS", level: 79 },
        { name: "Javascript", level: 88 },
        { name: "Django", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-secondary-500 to-green-500",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Python", level: 55 },
        { name: "Express.js", level: 50 },
        { name: "PyTorch", level: 50 },
        { name: "GraphQL", level: 50 },
        { name: "REST APIs", level: 90 },
        { name: "Entity Framework", level: 85 },
        { name: "WebAPI", level: 85 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: Cloud,
      color: "from-accent-500 to-orange-500",
      skills: [
        { name: "PostgreSQL", level: 55 },
        { name: "MongoDB", level: 80 },
        { name: "Azure DB", level: 70 },
        { name: "Docker", level: 78 },
        { name: "MSSQL", level: 90 },
        { name: "CosmosDB", level: 70 },
      ],
    },
    {
      title: "AI Assisted",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "GH Copilot", level: 80 },
        { name: "Gemini", level: 80 },
        { name: "MS Copilot", level: 85 },
        { name: "Code Cat", level: 65 },
        { name: "Black Box", level: 80 },
      ],
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "from-pink-500 to-red-500",
      skills: [
        { name: "Prototyping", level: 80 },
        { name: "User Research", level: 65 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      title: "Dev Tools",
      icon: Zap,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Visual Studio", level: 80 },
        { name: "Visual Studio Code", level: 80 },
        { name: "C#", level: 80 },
        { name: "PyCharm", level: 68 },
        { name: "Javascript", level: 85 },
        { name: "Typescript", level: 85 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Zap,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Git", level: 92 },
        { name: "Node", level: 80 },
        { name: "Webpack", level: 78 },
        { name: "Azure", level: 80 },
        { name: "CI/CD", level: 70 },
        { name: "GitHub", level: 85 },
      ],
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "React Developer Certification",
  ];

  return (
    <PageTransition>
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-6">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and
              technologies I work with to bring ideas to life.
            </p>
          </AnimatedSection>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection
                key={categoryIndex}
                delay={categoryIndex * 0.1}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <AnimatedSection delay={0.2}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Certifications
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center p-4 bg-slate-700/50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3" />
                      <span className="text-gray-300">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Learning Philosophy */}
            <AnimatedSection delay={0.4}>
              <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-8 border border-primary-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Learning Philosophy
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I believe in continuous learning and staying updated with
                    the latest technologies. My approach combines theoretical
                    understanding with hands-on practice.
                  </p>
                  <p>
                    I dedicate time each week to exploring new frameworks,
                    contributing to open-source projects, and participating in
                    developer communities.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-400">
                        50+
                      </div>
                      <div className="text-sm text-gray-400">
                        Courses Completed
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary-400">
                        500+
                      </div>
                      <div className="text-sm text-gray-400">
                        Hours of Learning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default SkillsPage;
