import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', to: '/about' },
        { name: 'Careers', to: '/careers' },
        { name: 'Press', to: '/press' },
        { name: 'Blog', to: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help / FAQ', to: '/help' },
        { name: 'Contact', to: '/contact' },
        { name: 'Terms of Service', to: '/terms' },
        { name: 'Privacy Policy', to: '/privacy' },
      ],
    },
    {
      title: 'For Professionals',
      links: [
        { name: 'Register', to: '/professional-register' },
        { name: 'How It Works', to: '/how-it-works' },
        { name: 'Benefits', to: '/benefits' },
      ],
    },
  ];

  return (
    <motion.footer 
      className="bg-slate-900 border-t border-slate-700/50 pt-16 pb-8 text-slate-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-slate-100">
              <Briefcase className="h-8 w-8 text-green-400" />
              <span>ServiFlex</span>
            </Link>
            <p className="text-sm">Connecting you with the best service professionals in your region.</p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-slate-400 hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-slate-200 mb-4 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.to}
                      className="hover:text-green-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700/50 text-center text-sm">
          <p className="mt-1">Made with <span className="text-red-500">&hearts;</span> by ServiFlex</p>
          <p>&copy; {new Date().getFullYear()} ServiFlex. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
