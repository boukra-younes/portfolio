import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 75, color: "bg-blue-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "HTML", level: 95, color: "bg-orange-500" },
        { name: "CSS", level: 95, color: "bg-blue-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },   
        { name: "Sass", level: 75, color: "bg-pink-500" },
        
      ]
    },
    {
      title: "Backend",
      skills: [
        
        { name: "Django", level: 80, color: "bg-green-950" },
        { name: "MySQL", level: 85, color: "bg-blue-200" },
        { name: "MongoDB", level: 50, color: "bg-green-700" },
        { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
        { name: "PHP", level: 90, color: "bg-indigo-400" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "bg-red-600" },
        
        { name: "Figma", level: 85, color: "bg-purple-500" },
     
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive toolkit built through years of learning and hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
                      <div className="flex flex-col items-center gap-4 mb-8">
          <div className="h-20 w-full flex items-center justify-center mb-2">
          <img
            src={`https://skillicons.dev/icons?i=${category.skills
              .map((skill) => skill.name.toLowerCase().replace(/\s+/g, ''))
              .join(',')}&theme=${isDark ? 'dark' : 'light'}`}
            alt={`${category.title} icons`}
            className="h-full object-contain"
          />
        </div>
          <h3 className={`text-2xl font-bold text-center ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            {category.title}
          </h3>
        </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}>{skill.name}</span>
                      <span className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-3 overflow-hidden ${
                      isDark ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-x-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className={`text-lg mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Always learning and staying up-to-date with the latest technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React Native", "Next.js", "Svelte", "Rust", "GraphQL", "Kubernetes"].map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-900 to-purple-900 text-gray-200 hover:from-blue-800 hover:to-purple-800' 
                    : 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 hover:from-blue-200 hover:to-purple-200'
                }`}
              >
                Currently Learning: {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;