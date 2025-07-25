import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${
          isDark ? 'bg-blue-600' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${
          isDark ? 'bg-purple-600' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute -bottom-8 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${
          isDark ? 'bg-pink-600' : 'bg-pink-300'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8 ">
            <img 
              src="https://github.com/boukra-younes/portfolio/blob/main/public/dd.JPG?raw=true"
              alt="Younes Abdessamad Boukra"
              className=" w-[250px] h-[250px] rounded-full mx-auto shadow-xl ring-4 ring-white mt-16 "
            />
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Younes Abdessamad Boukra
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A passionate <span className="font-semibold text-blue-600">Full-Stack Web Developer</span> crafting 
            beautiful, functional web experiences with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
            </button>
            <button className={`border-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              isDark 
                ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400' 
                : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
            }`}>
              Download CV
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com"
              className={`transition-colors duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              className={`transition-colors duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className={`transition-colors duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
          className={`animate-bounce transition-colors duration-300 ${
            isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
          }`}
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;