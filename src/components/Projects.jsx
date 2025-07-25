import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and customer insights.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced filtering options.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "TypeScript", "API Integration"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work with smooth animations and modern design principles.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time messaging application with group chats, file sharing, and end-to-end encryption for secure communication.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile app for tracking workouts, setting fitness goals, and monitoring progress with detailed analytics and social features.",
      image: "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Chart.js"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className={`flex space-x-4 p-1 rounded-full ${
            isDark ? 'bg-gray-700' : 'bg-gray-100'
          }`}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : isDark 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDark ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  isDark 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-gray-800 group-hover:text-blue-600'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 line-clamp-3 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ${
                        isDark 
                          ? 'bg-gray-600 text-gray-200 hover:bg-blue-600 hover:text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;