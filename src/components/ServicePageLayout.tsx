import { Link } from 'react-router-dom';
import { Code2, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Footer from './Footer';

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

interface ServicePageLayoutProps {
    icon: LucideIcon;
    title: string;
    tagline: string;
    color: string;
    colorAccent: string;
    overview: string;
    features: Feature[];
    process: ProcessStep[];
    techStack: string[];
    ctaText?: string;
}

export default function ServicePageLayout({
    icon: Icon,
    title,
    tagline,
    color,
    colorAccent,
    overview,
    features,
    process,
    techStack,
    ctaText = 'Ready to get started? Let\'s build something amazing together.',
}: ServicePageLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Service Page Navbar (inline back-nav) */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/5">
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <Code2 className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xl font-bold text-white">Weblyonix</span>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Banner */}
            <section className={`relative pt-32 pb-20 bg-gradient-to-br ${color} overflow-hidden`}>
                {/* Decorative 3D elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
                </div>

                {/* Floating 3D shapes */}
                <div className="absolute top-[20%] right-[10%] perspective-1500">
                    <div className="w-16 h-16 border-2 border-white/10 rounded-lg animate-float-3d" style={{ animationDelay: '1s' }} />
                </div>
                <div className="absolute bottom-[30%] left-[8%] perspective-1500">
                    <div className="w-10 h-10 border-2 border-white/10 rounded-full animate-float-3d" style={{ animationDelay: '2s' }} />
                </div>

                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnptLTIgMnYyaDJ2LTJoLTJ6bTAtMnYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-8 animate-tilt-in">
                            <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-tilt-in" style={{ animationDelay: '0.1s' }}>
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                            {tagline}
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
            </section>

            {/* Overview */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-4">
                            <span className={`inline-block text-sm font-semibold tracking-wider uppercase ${colorAccent}`}>
                                Overview
                            </span>
                        </div>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-center">
                            {overview}
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className={`inline-block text-sm font-semibold tracking-wider uppercase ${colorAccent} mb-3`}>
                            What We Offer
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Key Features
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000">
                        {features.map((feature, index) => {
                            const FeatureIcon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="card-3d group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-2xl"
                                >
                                    {/* Gradient top accent */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                        <FeatureIcon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process / How We Work */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className={`inline-block text-sm font-semibold tracking-wider uppercase ${colorAccent} mb-3`}>
                            Our Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            How We Work
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {process.map((step, index) => (
                            <div key={index} className="flex gap-6 mb-12 last:mb-0 group">
                                <div className="flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {step.step}
                                    </div>
                                    {index < process.length - 1 && (
                                        <div className={`w-0.5 h-full mt-4 bg-gradient-to-b ${color} opacity-20`} />
                                    )}
                                </div>
                                <div className="pb-12 last:pb-0">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className={`inline-block text-sm font-semibold tracking-wider uppercase ${colorAccent} mb-3`}>
                            Technologies
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Tools & Technologies
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className={`px-6 py-3 rounded-full bg-gradient-to-r ${color} text-white font-medium text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`py-24 bg-gradient-to-br ${color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-10 left-20 w-80 h-80 bg-white rounded-full blur-3xl animate-float-delayed" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {ctaText}
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="group px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Get in Touch
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/25 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 text-center"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Badges */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Why Choose Weblyonix?</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                'Expert Team',
                                'On-time Delivery',
                                '24/7 Support',
                                'Competitive Pricing',
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 justify-center bg-white p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                    <CheckCircle2 className={`w-5 h-5 ${colorAccent}`} />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
