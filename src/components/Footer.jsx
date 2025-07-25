import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:alex@example.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 ${
      isDark ? 'bg-black text-white' : 'bg-gray-900 text-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">&lt;</span>
              Yoones
              <span className="text-blue-400">/&gt;</span>
            </div>
            <p className={`mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-400'
            }`}>
              Passionate web developer creating beautiful, functional experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`transition-colors duration-200 ${
                    isDark 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-400 hover:text-blue-400'
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`transition-colors duration-200 transform hover:scale-110 ${
                    isDark 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-400 hover:text-blue-400'
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className={`my-8 ${
          isDark ? 'border-gray-600' : 'border-gray-700'
        }`} />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm mb-4 md:mb-0 ${
            isDark ? 'text-gray-300' : 'text-gray-400'
          }`}>
            © {currentYear} Yoones. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <p className={`text-sm flex items-center ${
              isDark ? 'text-gray-300' : 'text-gray-400'
            }`}>
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
            <button
              onClick={scrollToTop}
              className={`transition-colors duration-200 ${
                isDark 
                  ? 'text-gray-300 hover:text-blue-400' 
                  : 'text-gray-400 hover:text-blue-400'
              }`}
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;