import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Rocket, Layout, Smartphone, Zap, Palette, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: Layout,
        title: 'Landing Pages',
        description: 'Convert visitors into customers with high-performing, beautifully designed landing pages optimized for conversions.',
        color: 'from-blue-500 to-cyan-500',
        shadow: 'hover:shadow-blue-500/20',
        slug: 'landing-pages',
    },
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        description: 'Native-quality mobile applications built with modern frameworks for iOS and Android platforms.',
        color: 'from-purple-500 to-pink-500',
        shadow: 'hover:shadow-purple-500/20',
        slug: 'mobile-apps',
    },
    {
        icon: Code,
        title: 'Web Applications',
        description: 'Scalable, secure web applications tailored to your business needs with cutting-edge technologies.',
        color: 'from-green-500 to-emerald-500',
        shadow: 'hover:shadow-green-500/20',
        slug: 'web-applications',
    },
    {
        icon: Zap,
        title: 'MVP Development',
        description: 'Launch your startup idea quickly with a Minimum Viable Product to test the market and gather feedback.',
        color: 'from-orange-500 to-red-500',
        shadow: 'hover:shadow-orange-500/20',
        slug: 'mvp-development',
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Intuitive, user-centered designs that create delightful experiences and drive engagement.',
        color: 'from-indigo-500 to-blue-500',
        shadow: 'hover:shadow-indigo-500/20',
        slug: 'ui-ux-design',
    },
    {
        icon: Rocket,
        title: 'Startup Solutions',
        description: 'End-to-end solutions from ideation to launch, helping startups build their digital presence.',
        color: 'from-yellow-500 to-orange-500',
        shadow: 'hover:shadow-yellow-500/20',
        slug: 'startup-solutions',
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500/20 top-[-50px] left-[-100px]" />
                <div className="gradient-orb w-[300px] h-[300px] bg-purple-500/15 bottom-[0] right-[-50px]" style={{ animationDelay: '2s' }} />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-full mb-6 border border-cyan-500/20">
                        What We Do
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-tilt-in">
                        Our Services
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                        Comprehensive solutions to bring your digital vision to life
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    to={`/services/${service.slug}`}
                                    key={index}
                                    className={`group card-3d bg-white p-8 rounded-2xl border border-slate-100 hover:border-transparent cursor-pointer block ${service.shadow} hover:shadow-2xl relative`}
                                >
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    <span className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-2 transition-all duration-300`}>
                                        Learn More
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-10 left-20 w-80 h-80 bg-white rounded-full blur-3xl animate-float-delayed" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to bring your idea to life?
                    </h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        Let's discuss your project and find the perfect solution for your needs.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
