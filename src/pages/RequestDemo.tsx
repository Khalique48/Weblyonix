import { useState } from 'react';
import { Send, Mail, User, Phone, Building2, MessageSquare, CheckCircle2, Rocket } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RequestDemo() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/demo-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error('Failed to submit');
            setSubmitted(true);
        } catch {
            setError('Something went wrong. Please try again or contact us directly.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500/20 top-[-50px] right-[-100px]" />
                <div className="gradient-orb w-[300px] h-[300px] bg-purple-500/15 bottom-[0] left-[-50px]" style={{ animationDelay: '2s' }} />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                        <Rocket className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-tilt-in">
                        Request a Demo
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                        See how Weblyonix can help bring your digital vision to life
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
            </section>

            {/* Form section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto">
                        {submitted ? (
                            <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-slate-100 p-12">
                                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
                                <p className="text-slate-600 text-lg mb-8">
                                    We've received your demo request. Our team will reach out to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', message: '' }); }}
                                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                                >
                                    Submit Another Request
                                </button>
                            </div>
                        ) : (
                            <div className="relative group">
                                {/* Animated gradient border */}
                                <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-[length:200%_100%] animate-gradient-x blur-sm" />

                                <form onSubmit={handleSubmit} className="relative bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Tell Us About Your Project</h2>
                                        <p className="text-slate-500">Fill out the form and our team will schedule a personalized demo</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm">
                                                <User className="w-4 h-4 text-cyan-500" />
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm">
                                                <Mail className="w-4 h-4 text-cyan-500" />
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm">
                                                <Phone className="w-4 h-4 text-cyan-500" />
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>

                                        <div>
                                            <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm">
                                                <Building2 className="w-4 h-4 text-cyan-500" />
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                                                placeholder="Acme Inc."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm">
                                            <MessageSquare className="w-4 h-4 text-cyan-500" />
                                            Project Details
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300 resize-none"
                                            placeholder="Tell us about your project, goals, and timeline..."
                                        />
                                    </div>

                                    {error && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer bg-[length:200%_100%]" />
                                        <span className="relative">{loading ? 'Sending...' : 'Schedule Demo'}</span>
                                        {!loading && <Send className="w-5 h-5 relative" />}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
