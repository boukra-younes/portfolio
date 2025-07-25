import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Innovation",
      description: "Always exploring new technologies and best practices"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    },
    {
      icon: <Coffee className="w-8 h-8 text-orange-600" />,
      title: "Dedication",
      description: "Passionate about delivering exceptional user experiences"
    }
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Crafting Digital Experiences with Purpose
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive applications that solve real-world problems. My journey began 
              with a curiosity for how things work, and has evolved into a passion for building 
              innovative solutions that make a difference.
            </p>
            <p className={`text-lg mb-8 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I believe in the power of clean code, user-centered design, and continuous learning. 
              Whether it's a complex web application or a simple landing page, I approach every 
              project with attention to detail and a commitment to excellence.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-lg transition-colors duration-300 ${
                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>{item.title}</h4>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;