import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Request a Demo', href: '/request-demo' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const handleNavClick = (_e: React.MouseEvent, _href: string) => {
        setMobileOpen(false);
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                scrolled
                    ? 'glass-dark shadow-lg shadow-black/10'
                    : 'bg-transparent'
            )}
        >
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <Code2 className="w-9 h-9 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            Weblyonix
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;

                            return (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={cn(
                                        'nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                                        'hover:text-cyan-400 hover:bg-white/5',
                                        isActive ? 'text-cyan-400' : 'text-slate-300'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        <Link
                            to="/contact"
                            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={cn(
                    'md:hidden overflow-hidden transition-all duration-400 ease-in-out',
                    mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                <div className="glass-dark border-t border-white/10 px-6 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block px-4 py-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/5 text-sm font-medium transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="block mt-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg text-center"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}
