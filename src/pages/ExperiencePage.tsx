import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Calendar,
  GraduationCap,
  MapPin,
} from "lucide-react";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import PageTransition from "../components/PageTransition";

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "M12 Systems R&D",
      location: "Conroe TX",
      duration: "May 2023 - Present",
      type: "Full-time",
      description:
        "Time Off to upskill. working with Python, Node.js, Angular, React, Blazor. Working with AI to drive technical decisions.",
      achievements: [
        "Working with Blazor WASM/Server v8 to v10+",
        "Working with React JSX and TSX v18+",
        "Working with Angular v14 to v18+",
        "Working with MongoDB and CosmosDB",
        "Learning with Python and Django",
        "Learning Node and Express",
        "Working with Docker",
        "Working with Azure DevOpps",
      ],
      technologies: [
        "React",
        "Blazor",
        "Angular",
        "Node.js",
        "Azure DevOpps",
        "Docker",
        "MongoDB",
      ],
    },
    {
      t: "Hexaware / Ernst & Young | Atlanta, GA / Remote Lead Software Consultant | 07/2022 – 05/2023",
      title: "Full Stack Developer",
      company: "Hexaware / Ernst & Young",
      location: "Remote",
      duration: "07/2022 – 05/2023",
      type: "Full-time",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with devopps and product teams to deliver high-quality user experiences.",
      achievements: [
        "Built responsive web applications with Blazor",
        "This app allowed non-technical memebers of the team to analyze meta data.",
        "This Meta Data was used to define corprate reports",
        "Optimized database queries improving response time by 35%",
      ],
      technologies: ["Angular", "Blazor", "MSSQL", "MongoDB", "WebAPI"],
    },
    // {
    //   title: "Frontend Developer",
    //   company: "Digital Agency Pro",
    //   location: "New York, NY",
    //   duration: "2019 - 2020",
    //   type: "Full-time",
    //   description:
    //     "Specialized in creating pixel-perfect, responsive web interfaces for various clients across different industries. Worked closely with designers to bring creative visions to life.",
    //   achievements: [
    //     "Delivered 25+ client projects on time and within budget",
    //     "Improved website loading speed by 45% through optimization",
    //     "Created reusable component library used across projects",
    //     "Maintained 98% client satisfaction rate",
    //   ],
    //   technologies: ["HTML5", "CSS3", "JavaScript", "React", "SASS"],
    // },
    // {
    //   title: "Junior Web Developer",
    //   company: "Code Academy Inc",
    //   location: "Boston, MA",
    //   duration: "2018 - 2019",
    //   type: "Full-time",
    //   description:
    //     "Started my professional journey developing educational web applications. Gained experience in full-stack development and agile methodologies.",
    //   achievements: [
    //     "Contributed to platform used by 10K+ students",
    //     "Implemented automated testing increasing code coverage to 85%",
    //     "Collaborated in daily standups and sprint planning",
    //     "Participated in code reviews and knowledge sharing sessions",
    //   ],
    //   technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"],
    // },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Electrical Engineering",
      school: "University of New Orleans",
      location: "New Orleans, LA",
      duration: "2081 - 1986",
      gpa: "2.6",
      honors: "",
      relevant: ["Analog Electronics", "Digital Electronics"],
    },
  ];

  const awards = [
    {
      title: "",
      organization: "",
      year: "",
      description: "",
    },
  ];

  return (
    <PageTransition>
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-6">
              Experience
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My professional journey, education, and achievements in software
              development.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Experience Timeline */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Briefcase className="w-8 h-8 mr-3 text-primary-400" />
                  Work Experience
                </h2>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Timeline connector */}
                      {index !== experiences.length - 1 && (
                        <div className="absolute left-6 bottom-0 w-0.5 h-8 bg-gradient-to-b from-primary-500 to-transparent transform translate-y-full" />
                      )}

                      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <p className="text-primary-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="text-gray-400 text-sm flex items-start"
                              >
                                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary-500/10 border border-primary-500/20 rounded text-xs text-primary-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Education */}
              <AnimatedSection delay={0.2}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-3 text-primary-400" />
                    Education
                  </h2>

                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-400 font-medium">
                          {edu.school}
                        </p>
                        <div className="text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {edu.duration}
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {edu.location}
                          </div>
                          {edu.gpa && (
                            <div className="mt-1">GPA: {edu.gpa}</div>
                          )}
                          {edu.honors && (
                            <div className="mt-1 text-accent-400">
                              {edu.honors}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {edu.relevant.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-2 py-0.5 bg-secondary-500/10 border border-secondary-500/20 rounded text-xs text-secondary-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                        {index !== education.length - 1 && (
                          <div className="border-b border-slate-700 mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Awards */}
              <AnimatedSection delay={0.4}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Award className="w-6 h-6 mr-3 text-primary-400" />
                    Awards & Recognition
                  </h2>

                  <div className="space-y-4">
                    {awards.map((award, index) => (
                      <motion.div
                        key={index}
                        className="p-4 bg-slate-700/50 rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="font-semibold text-white">
                          {award.title}
                        </h3>
                        <p className="text-primary-400 text-sm">
                          {award.organization} • {award.year}
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          {award.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Stats */}
              <AnimatedSection delay={0.6}>
                <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-6 border border-primary-500/20">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Quick Stats
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Years of Experience</span>
                      <span className="text-primary-400 font-bold">5+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Projects Completed</span>
                      <span className="text-secondary-400 font-bold">50+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Technologies Used</span>
                      <span className="text-accent-400 font-bold">20+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Client Satisfaction</span>
                      <span className="text-green-400 font-bold">98%</span>
                    </div>
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

export default ExperiencePage;
