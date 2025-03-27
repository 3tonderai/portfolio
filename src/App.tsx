import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, User, Briefcase, GraduationCap, Code, Award, MessageSquare, Phone, ExternalLink } from 'lucide-react';
import { personalDetails } from './config/personal';

function App() {
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', feedbackForm);
    setFeedbackForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Tonderai Mabasa Gonyora</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#resume" className="text-gray-600 hover:text-gray-900 transition-colors">Resume</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-fit py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-20">
          <div className="flex items-center gap-12">
            <div className="flex-1">
              <div className="mb-4">
                <h2 className="text-5xl font-bold text-gray-900 animate-typing inline-block">TONDERAI MABASA GONYORA</h2>
              </div>
              <div>
                <p className="text-xl text-gray-600 mb-8 animate-profession inline-block">Data Scientist • Data Analyst • Full Stack Developer</p>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/tonderaigonyora" target="_blank" rel="noopener noreferrer" 
                   className="p-2 text-gray-600 hover:text-gray-900 group relative transition-transform hover:scale-110">
                  <Github size={24} />
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    GitHub Profile
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/tonderai-gonyora-97348b21b/" target="_blank" rel="noopener noreferrer" 
                   className="p-2 text-gray-600 hover:text-gray-900 group relative transition-transform hover:scale-110">
                  <Linkedin size={24} />
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    LinkedIn Profile
                  </span>
                </a>
                <a href="mailto:tonderaimabasagonyora@gmail.com" 
                   className="p-2 text-gray-600 hover:text-gray-900 group relative transition-transform hover:scale-110">
                  <Mail size={24} />
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Send Email
                  </span>
                </a>
              </div>
              <div className="mt-8">
                <a href="#contact" 
                   className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Let's Connect
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                  alt="Tonderai Mabasa Gonyora"
                  className="rounded-lg shadow-xl w-full h-auto object-cover transform transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <User className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I am a passionate technologist with expertise spanning Data Science, Data Analysis, and Full Stack Development. With a deep understanding of both data and web technologies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I possess expertise in Python, SQL, ETL processes, data warehousing, Dijkstra's algorithm, data visualization using Power BI, statistical analysis, scikit-learn, TensorFlow, and various other technologies.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-blue-600 mb-4">Data Science</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    <li>Machine Learning</li>
                    <li>Statistical Analysis</li>
                    <li>Predictive Modeling</li>
                    <li>Data Visualization</li>
                    <li>ETL Processes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-600 mb-4">Development</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    <li>Full Stack Development</li>
                    <li>API Design</li>
                    <li>Database Architecture</li>
                    <li>Cloud Computing</li>
                    <li>System Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="text-blue-600" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">Experience</h3>
              </div>

              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-lg font-semibold text-gray-900">Data Centre & Networking Intern</h4>
                  <p className="text-gray-600">Ministry of ICTPCS Zimbabwe • 2024 - present</p>
                  <ul className="mt-2 text-gray-700 list-disc list-inside space-y-2">
                    <li>Server room and government IT maintenance</li>
                    <li>Government SAP and other software maintenance</li>
                    <li>Repairing and maintaining government network systems</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-lg font-semibold text-gray-900">Stores Assistant</h4>
                  <p className="text-gray-600">Legend Lounge • 2021 - 2022</p>
                  <ul className="mt-2 text-gray-700 list-disc list-inside space-y-2">
                    <li>Managed receipt, issuance, and dispatch of materials</li>
                    <li>Implemented data-driven inventory solutions</li>
                    <li>Established systematic data management protocols</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-lg font-semibold text-gray-900">Sales Agent</h4>
                  <p className="text-gray-600">Old Mutual • 2024</p>
                  <ul className="mt-2 text-gray-700 list-disc list-inside space-y-2">
                    <li>Managed client projects and relationships</li>
                    <li>Marketed insurance and financial products</li>
                    <li>Led social media marketing initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education and Certifications Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="text-blue-600" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">Education & Certifications</h3>
              </div>
              
              {/* Education - Displayed on top */}
              <div className="border-l-2 border-blue-600 pl-4 mb-12">
                <h4 className="text-lg font-semibold text-gray-900">Bachelor's in Data Science and informatics</h4>
                <p className="text-gray-600">University of Zimbabwe • 2022 - 2026</p>
              </div>

              {/* Certifications Title */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Award className="text-blue-600" size={20} />
                  Online Certifications
                </h4>
              </div>

              {/* Certifications Table */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">ZGCE Advanced Level</h5>
                      <p className="text-sm text-gray-600">ZIMSEC • 2020</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">ZGCE Ordinary Level</h5>
                      <p className="text-sm text-gray-600">ZIMSEC • 2018</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">Operating System Basics</h5>
                      <p className="text-sm text-gray-600">CISCO • 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">Introduction to Cyber Security</h5>
                      <p className="text-sm text-gray-600">CISCO • 2022</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">Financial Awareness</h5>
                      <p className="text-sm text-gray-600">Lactera • 2022</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">CPA-Marketing</h5>
                      <p className="text-sm text-gray-600">Lactera • 2022</p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">Introduction to Data Science for Complete Beginners</h5>
                      <p className="text-sm text-gray-600">Tutorials Point • 2022</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">Python Essentials 1</h5>
                      <p className="text-sm text-gray-600">CISCO • 2022</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">Business Intelligence</h5>
                      <p className="text-sm text-gray-600">CERTIPROF • 2022</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">Statistics for Data Science</h5>
                      <p className="text-sm text-gray-600">Great Learning • 2022</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h5 className="font-medium text-gray-700">Data Science Foundations</h5>
                      <p className="text-sm text-gray-600">Great Learning • 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code className="text-blue-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-800">Technical Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { skill: "Python", level: "Advanced" },
                { skill: "Data Analysis", level: "Advanced" },
                { skill: "Machine Learning", level: "Intermediate" },
                { skill: "SQL", level: "Advanced" },
                { skill: "Power BI", level: "Advanced" },
                { skill: "React/Next.js", level: "Intermediate" },
                { skill: "Node.js", level: "Intermediate" },
                { skill: "ETL Processes", level: "Advanced" },
                { skill: "Driver", level: "Advanced" },
                { skill: "Biker", level: "Advanced" },
                { skill: "Graphic Design", level: "Advanced"},
                { skill: "Photographer", level: "Advanced" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                  <div className="text-gray-800 font-medium">{item.skill}</div>
                  <div className="text-sm text-gray-600">{item.level}</div>
                  <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full"
                      style={{
                        width: item.level === "Advanced" ? "90%" : "75%"
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcasing my expertise in Data Science and Development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalDetails.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      Live Demo
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    >
                      Source Code
                      <Github className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="text-blue-600" size={28} />
              <h3 className="text-3xl font-bold text-gray-900">Let's Connect</h3>
            </div>
            <p className="text-gray-600">I'm always open to discussing new projects and opportunities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <a href={`mailto:${personalDetails.email}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>{personalDetails.email}</span>
                  </a>
                  <div className="space-y-2">
                    <a href={`tel:${personalDetails.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <Phone className="w-5 h-5" />
                      <span>{personalDetails.phone}</span>
                    </a>
                    <a href={`tel:${personalDetails.phone2}`} className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                      <Phone className="w-5 h-5" />
                      <span>{personalDetails.phone2}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Social Links</h4>
                <div className="flex gap-4">
                  <a
                    href={personalDetails.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={personalDetails.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{personalDetails.name}</h3>
              <p className="text-gray-400">{personalDetails.bio}</p>
            </div> <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#resume" className="text-gray-400 hover:text-white transition-colors">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <a
                    href={personalDetails.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={personalDetails.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
                <div className="space-y-2">
                  <a
                    href={`tel:${personalDetails.phone}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{personalDetails.phone}</span>
                  </a>
                  <a
                    href={`tel:${personalDetails.phone2}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{personalDetails.phone2}</span>
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-400 text-sm">
                  Available for freelance projects and full-time opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;