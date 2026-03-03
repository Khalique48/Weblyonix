import { useState, useEffect, useRef } from 'react';
import { Target, Users, Award, TrendingUp, Heart, Globe, Lightbulb, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stats = [
    { icon: Users, value: 50, suffix: '+', label: 'Happy Clients', color: 'from-cyan-500 to-blue-500' },
    { icon: Award, value: 100, suffix: '+', label: 'Projects Delivered', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, value: 95, suffix: '%', label: 'Client Satisfaction', color: 'from-green-500 to-emerald-500' },
    { icon: Target, value: 24, suffix: '/7', label: 'Support Available', color: 'from-orange-500 to-red-500' },
];

const values = [
    { icon: Lightbulb, title: 'Innovation First', description: 'We embrace cutting-edge technologies and creative thinking to deliver solutions that stand out.' },
    { icon: Heart, title: 'Client Focused', description: 'Your success is our success. We listen, understand, and deliver beyond expectations.' },
    { icon: Shield, title: 'Quality Driven', description: 'Every line of code, every pixel, every interaction is crafted with precision and care.' },
    { icon: Globe, title: 'Global Reach', description: 'We serve clients worldwide, bringing diverse perspectives to every project we undertake.' },
];

function useCountUp(target: number, duration = 2000, trigger = false) {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!trigger || hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = performance.now();
        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };
        requestAnimationFrame(step);
    }, [trigger, target, duration]);

    return count;
}

function StatCard({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
    const Icon = stat.icon;
    const count = useCountUp(stat.value, 2000, isVisible);

    return (
        <div
            className="card-3d relative bg-white p-8 rounded-2xl shadow-lg text-center group overflow-hidden"
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2 tabular-nums">
                {count}{stat.suffix}
            </div>
            <div className="text-slate-500 font-medium">
                {stat.label}
            </div>
        </div>
    );
}

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500/20 top-[-50px] right-[-100px]" />
                <div className="gradient-orb w-[300px] h-[300px] bg-purple-500/15 bottom-[0] left-[-50px]" style={{ animationDelay: '2s' }} />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-full mb-6 border border-cyan-500/20">
                        About Us
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-tilt-in">
                        Who We Are
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                        A passionate team of developers and designers building digital excellence
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
            </section>

            {/* Story */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                            Building Digital{' '}
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Excellence
                            </span>{' '}
                            Since Day One
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed text-center">
                            At Weblyonix, we're passionate about helping startups and businesses establish their digital presence. Our team of experienced developers and designers work together to create solutions that are not just functional, but exceptional.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed text-center">
                            We believe in the power of great design combined with robust technology. Every project we undertake is an opportunity to push boundaries and deliver something truly remarkable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 bg-cyan-50 text-cyan-600 text-sm font-semibold rounded-full mb-4">
                            Our Numbers
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Numbers That Speak
                        </h2>
                    </div>
                    <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto perspective-1000">
                        {stats.map((stat, index) => (
                            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 bg-cyan-50 text-cyan-600 text-sm font-semibold rounded-full mb-4">
                            Our Values
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            What Drives Us
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto perspective-1000">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="card-3d group bg-white p-8 rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-2xl relative">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
