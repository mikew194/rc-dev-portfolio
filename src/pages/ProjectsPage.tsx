import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github } from "lucide-react";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import GradientButton from "../components/GradientButton";
import PageTransition from "../components/PageTransition";

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "AStain Flooring",
      description:
        "An e-commerce solution with React, that lets a user get a flooring job estimate.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "TSX", "Javascript", ""],
      githubUrl: "https://github.com/mikew194/CustomerOrderApp",
      liveUrl: "https://mikew194.github.io/CustomerOrderApp/",
      featured: true,
      date: "2025",
    },
    {
      title: "Ferrell Colony Manager",
      description:
        "A web application used to track and manage ferrell cat colonies.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TailWindCSS", "TSX", "Vite"],
      githubUrl:
        "https://github.com/mikew194/ferrell-colony-manager/tree/main/src",
      liveUrl: "https://mikew194.github.io/ferrell-colony-manager/",
      featured: true,
      date: "2025",
    },
    {
      title: "Cat Manager",
      description:
        "A responsive application with used to track an record details regarding ferrell cats.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TSX", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/mikew194/cat-manager/tree/main/src",
      liveUrl: "https://mikew194.github.io/cat-manager/",
      featured: false,
      date: "2025",
    },
    // {
    //   title: "Social Media Dashboard",
    //   description:
    //     "Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.",
    //   image:
    //     "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://example.com",
    //   featured: false,
    //   date: "2023",
    // },
    {
      title: "Blazor Test App",
      description:
        "A demo website built with Blazor WASM. Used to test deployment",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Blazor Wasm"],
      githubUrl: "",
      liveUrl: "https://mikew194.github.io/bz-gh-pages-app/",
      featured: false,
      date: "2025",
    },
    {
      title: "AI Chat Application",
      description:
        "Intelligent chatbot application with natural language processing, context awareness, and multi-language support.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      date: "2025",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <PageTransition>
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work, featuring web applications, mobile
              apps, and open-source contributions.
            </p>
          </AnimatedSection>

          {/* Featured Projects */}
          <AnimatedSection className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Featured Projects
            </h2>
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.date}
                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-full text-sm text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <GradientButton
                        href={project.liveUrl}
                        icon={ExternalLink}
                        size="sm"
                      >
                        Live Demo
                      </GradientButton>
                      <GradientButton
                        href={project.githubUrl}
                        variant="outline"
                        icon={Github}
                        size="sm"
                      >
                        Source Code
                      </GradientButton>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Other Projects */}
          <AnimatedSection delay={0.4}>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-gray-300 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary-500/10 border border-primary-500/20 rounded text-xs text-primary-300"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 transition-colors text-sm flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection delay={0.6} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-8 border border-primary-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and interesting
                projects. Let's create something amazing together!
              </p>
              <GradientButton href="/contact" size="lg">
                Get In Touch
              </GradientButton>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </PageTransition>
  );
};

export default ProjectsPage;
