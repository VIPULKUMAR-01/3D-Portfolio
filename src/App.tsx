/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Terminal, 
  ChevronRight, 
  Menu, 
  X,
  Layers,
  Rocket,
  BrainCircuit,
  Briefcase,
  User,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram
} from 'lucide-react';

// --- Types ---

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  link?: string;
  image?: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'Programming' | 'Web' | 'Tools' | 'Concepts';
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'learning' | 'experience';
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    title: "Jarvis Voice Assistant",
    description: "A fully functional Python-based voice assistant that understands and executes real-time voice commands. Features speech recognition, text-to-speech responses, system-level automation, and live API integrations for web search and dynamic responses. Built with a modular architecture for easy feature extension.",
    tech: ["Python", "Speech Recognition", "TTS", "REST APIs", "Automation"],
    github: "https://github.com/VIPULKUMAR-01",
    image: "/projects/jarvis.png"
  },
  {
    title: "Amazon Clone",
    description: "A pixel-perfect, fully responsive replica of the Amazon e-commerce UI. Demonstrates professional-grade front-end skills: semantic HTML5, CSS Flexbox and Grid layouts, complete media query coverage across mobile, tablet, and desktop, and high-fidelity UI components.",
    tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive"],
    github: "https://github.com/VIPULKUMAR-01",
    image: "/projects/amazon.png"
  },
  {
    title: "Mystic Chess",
    description: "A feature-rich chess application with advanced move validation, real-time multiplayer capabilities, and a sleek modern UI.",
    tech: ["React", "Node.js", "Socket.io", "Tailwind"],
    github: "https://github.com/VIPULKUMAR-01/Mystic-Chess",
    link: "https://vipulkumar-01.github.io/Mystic-Chess/",
    image: "/projects/chess.png"
  },
  {
    title: "Snake Water Gun",
    description: "A classic game implementation using Python, demonstrating logic building and basic game mechanics.",
    tech: ["Python"],
    github: "https://github.com/VIPULKUMAR-01/Snake-Water-Gun-Project-using-python",
    image: "/projects/snake_water_gun.png"
  },
  {
    title: "Stone Paper Scissors",
    description: "Interactive Stone Paper Scissors game with a clean web interface and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/VIPULKUMAR-01/Stone-Paper-Scissors-Game-Project",
    link: "https://vipulkumar-01.github.io/Stone-Paper-Scissors-Game-Project/",
    image: "/projects/rock_paper_scissors.png"
  },
  {
    title: "Tic Tac Toe",
    description: "A polished Tic Tac Toe game featuring smooth animations and a minimalist aesthetic.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/VIPULKUMAR-01/Tic-Tac-Toe-Game-",
    link: "https://vipulkumar-01.github.io/Tic-Tac-Toe-Game-/",
    image: "/projects/tic_tac_toe.png"
  }
];

const SKILLS: Skill[] = [
  { name: "C++", icon: <Terminal className="w-5 h-5" />, category: "Programming" },
  { name: "Python", icon: <Code2 className="w-5 h-5" />, category: "Programming" },
  { name: "JavaScript", icon: <Globe className="w-5 h-5" />, category: "Programming" },
  { name: "React", icon: <Layers className="w-5 h-5" />, category: "Web" },
  { name: "HTML/CSS", icon: <Globe className="w-5 h-5" />, category: "Web" },
  { name: "Git", icon: <Github className="w-5 h-5" />, category: "Tools" },
  { name: "VS Code", icon: <Terminal className="w-5 h-5" />, category: "Tools" },
  { name: "DSA", icon: <BrainCircuit className="w-5 h-5" />, category: "Concepts" },
  { name: "Problem Solving", icon: <Cpu className="w-5 h-5" />, category: "Concepts" },
];

const TIMELINE: TimelineItem[] = [
  { year: "2024", title: "Exploring AI & ML", description: "Deep diving into neural networks and data science fundamentals.", type: "learning" },
  { year: "2022", title: "Started Coding Journey", description: "Mastered C++ and Data Structures & Algorithms.", type: "learning" },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Socials', href: '#socials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          VKS<span className="text-accent-blue">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-accent-blue hover:text-white transition-all"
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-accent-blue text-white text-center font-bold rounded-xl"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const roles = ["Developer", "ML Enthusiast", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const nameScrollOpacity = useTransform(scrollY, [0, 300], [0.5, 1]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = roleIndex % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setRoleIndex(roleIndex + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="relative h-auto min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-12">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />
      
      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] z-0" />

      {/* Background Image with Faded Edges */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden top-20"
      >
        <div 
          className="w-full h-full bg-no-repeat bg-cover relative"
          style={{ 
            backgroundImage: "url('/background.png')",
            backgroundPosition: 'center 15%',
            maskImage: 'radial-gradient(circle at center, black 100%, transparent)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 100%, transparent)'
          }}
        >
          {/* Dimming Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass text-xs font-bold tracking-widest uppercase mb-6 text-accent-cyan">
            Available for new opportunities
          </span>
          <motion.h1 
            style={{ opacity: nameScrollOpacity }}
            className="text-5xl md:text-7xl font-display font-extrabold mb-16 leading-[0.9] relative"
          >
            VIPUL&nbsp;&nbsp;KUMAR <br />
            <span className="text-gradient">SONI</span>
          </motion.h1>
          
          <div className="flex flex-col items-center gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-xl md:text-2xl font-body text-white mb-4 h-8 font-medium">
                Passionate {text}<span className="animate-pulse text-accent-blue">|</span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed glass p-5 rounded-2xl border-white/5 shadow-xl">
                Building Projects & Exploring AI, ML, and Software Development. 
                Focused on creating impactful digital experiences through clean code and innovative solutions.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-accent-blue hover:text-white transition-all flex items-center gap-2 group"
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 glass text-white text-sm font-bold rounded-full hover:bg-white/10 transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-10 md:left-20 text-accent-blue/30"
        >
          <Code2 size={48} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-10 md:right-20 text-accent-purple/30"
        >
          <BrainCircuit size={48} />
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-10">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-accent-blue font-bold tracking-widest uppercase text-sm"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-4xl md:text-5xl font-display font-bold mt-2"
    >
      {title}
    </motion.h2>
  </div>
);

const About = () => (
  <section id="about" className="pt-12 pb-24 bg-bg-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square rounded-3xl overflow-hidden glass p-4 group cursor-pointer"
        >
          <img 
            src="/profile.png" 
            alt="Vipul Kumar Soni" 
            className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
        </motion.div>
        <div>
          <SectionHeader title="A journey of constant learning" subtitle="/ ABOUT ME" />
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I'm a Computer Science Engineering student at LNCT Excellence, Bhopal, graduating in May 2025 with a strong academic record (CGPA: 8.34). I'm driven by a passion for creating software that solves real problems.
          </p>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            My focus areas span Python automation & scripting, front-end web development, and exploring the intersection of AI and everyday tools. I believe in learning by building — every project on this page started with curiosity and ended with a working product.
            <br /><br />
            Currently seeking full-time opportunities in software development, where I can contribute from day one and grow fast.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-2xl font-bold text-white mb-1">2+</h4>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Years Coding</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-2xl font-bold text-white mb-1">8+</h4>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Projects Built</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Technical Arsenal" subtitle="/ SKILLS" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center group hover:border-accent-blue/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 group-hover:text-accent-blue transition-all">
              {skill.icon}
            </div>
            <h3 className="font-bold text-white mb-1">{skill.name}</h3>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">{skill.category}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 bg-bg-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Featured Creations" subtitle="/ SELECTED WORK" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass rounded-3xl overflow-hidden hover-lift glow-border"
          >
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.github} className="p-3 bg-white text-black rounded-full hover:bg-accent-blue hover:text-white transition-all">
                  <Github size={20} />
                </a>
                {project.link && (
                  <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-accent-blue hover:text-white transition-all">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <a href={project.github} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-accent-blue transition-colors">
                View on GitHub <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const LearningJourney = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Growth & Milestones" subtitle="/ LEARNING JOURNEY" />
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
        <div className="space-y-12">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <div className={`glass p-8 rounded-3xl relative ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  <span className="text-accent-blue font-bold text-xl mb-2 block">{item.year}</span>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 justify-start md:justify-end">
                    {item.type === 'learning' ? <BrainCircuit className="text-accent-purple" /> : <Briefcase className="text-accent-cyan" />}
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  {i === 0 && (
                    <div className="mt-4 inline-block px-3 py-1 bg-accent-blue/20 text-accent-blue text-[10px] font-bold uppercase tracking-widest rounded-full">
                      Currently Learning
                    </div>
                  )}
                </div>
              </div>
              <div className="relative z-10 w-12 h-12 rounded-full glass border-2 border-accent-blue flex items-center justify-center bg-bg-primary hidden md:flex">
                <div className="w-3 h-3 rounded-full bg-accent-blue animate-pulse" />
              </div>
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SocialNetworks = () => {
  const socials = [
    { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/vipul-kumar-soni-a77b2a24a/', color: 'hover:text-[#0077B5]' },
    { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/VIPULKUMAR-01', color: 'hover:text-[#333]' },
    { name: 'X (Twitter)', icon: <Twitter size={24} />, url: 'https://x.com/VipulKumar_soni', color: 'hover:text-[#1DA1F2]' },
    { name: 'Instagram', icon: <Instagram size={24} />, url: 'https://instagram.com/the_vimpul_', color: 'hover:text-[#E4405F]' },
    { name: 'Facebook', icon: <Facebook size={24} />, url: 'https://www.facebook.com/share/1aZY6CQreg/', color: 'hover:text-[#1877F2]' },
    { name: 'Email', icon: <Mail size={24} />, url: 'mailto:vipulkumar1507@gmail.com', color: 'hover:text-accent-blue' },
  ];

  return (
    <section id="socials" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Connect with me" subtitle="/ SOCIAL NETWORKS" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-8 rounded-3xl flex flex-col items-center gap-4 group transition-all duration-300 hover:border-accent-blue/50 ${social.color}`}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-bg-secondary relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[100px]" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <SectionHeader title="Have a project in mind?" subtitle="/ CONTACT" />
        <p className="text-gray-400 text-lg">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass p-8 rounded-3xl flex items-center gap-6 group hover:border-accent-blue/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email Me</p>
              <a href="mailto:vipulkumar1507@gmail.com" className="text-xl font-bold hover:text-accent-blue transition-colors">
                vipulkumar1507@gmail.com
              </a>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl flex items-center gap-6 group hover:border-accent-blue/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
              <Github size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">GitHub Profile</p>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-accent-blue transition-colors">
                github.com/vipulkumar
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors resize-none" placeholder="Tell me about your project..." />
          </div>
          <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-accent-blue hover:text-white transition-all flex items-center justify-center gap-2 group">
            Send Message
            <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 text-center">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Vipul Kumar Soni. Built with <span className="text-accent-blue">React</span> & <span className="text-accent-cyan">Tailwind</span>.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-bg-primary min-h-screen selection:bg-accent-blue/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningJourney />
        <SocialNetworks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
