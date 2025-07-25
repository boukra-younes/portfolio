import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "boukrayounes69@gmail.com",
      link: "mailto:boukrayounes69@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+213 560889543",
      link: "tel:+213560889543"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Mostaganem, Algeria",
      link: "#"
    }
  ];

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss your next project or just say hello. I'm always excited to work on new challenges!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Let's Start a Conversation
            </h3>
            <p className={`text-lg mb-8 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Whether you have a project in mind, need technical consultation, or just want to 
              connect, I'd love to hear from you. Drop me a message and I'll get back to you 
              as soon as possible.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-center space-x-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>{info.title}</h4>
                    <p className={`${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className={`mt-8 p-6 rounded-lg ${
              isDark 
                ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50'
            }`}>
              <h4 className={`font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Available for</h4>
              <ul className={`space-y-1 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>• Full-stack web development</li>
                <li>• Frontend consulting</li>
                <li>• Code reviews and mentoring</li>
                <li>• Technical discussions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl shadow-lg p-8 ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            {isSubmitted ? (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>Message Sent!</h3>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        isDark 
                          ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                          : 'border-gray-300 bg-white text-gray-900'
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        isDark 
                          ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                          : 'border-gray-300 bg-white text-gray-900'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      isDark 
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                        : 'border-gray-300 bg-white text-gray-900'
                    }`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                      isDark 
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                        : 'border-gray-300 bg-white text-gray-900'
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;