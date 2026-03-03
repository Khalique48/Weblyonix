import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Code2 className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold text-white">Weblyonix</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Crafting exceptional digital experiences for startups and businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/landing-pages" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-apps" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services/web-applications" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="text-sm hover:text-cyan-400 transition-colors duration-200">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-500"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-500"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-500"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-500"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Weblyonix. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
