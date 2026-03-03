import { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle2, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500/20 top-[-50px] left-[-100px]" />
                <div className="gradient-orb w-[300px] h-[300px] bg-purple-500/15 bottom-[0] right-[-50px]" style={{ animationDelay: '2s' }} />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-full mb-6 border border-cyan-500/20">
                        Get In Touch
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-tilt-in">
                        Contact Us
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                        Ready to turn your idea into reality? Let's talk.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
            </section>

            {/* Contact Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Let's Build Something Amazing</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Whether you have a project in mind or just want to chat about possibilities, we'd love to hear from you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                                        <p className="text-slate-600">khaliqueabdul481@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                                        <p className="text-slate-600">+91 9102479004</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
                                        <p className="text-slate-600">Remote-First Company</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="relative group">
                                <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-[length:200%_100%] animate-gradient-x blur-sm" />

                                <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                                    {submitStatus === 'success' ? (
                                        <div className="text-center py-12">
                                            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h3>
                                            <p className="text-slate-600 text-lg mb-8">
                                                We've received your message and will get back to you shortly.
                                            </p>
                                            <button
                                                onClick={() => setSubmitStatus('idle')}
                                                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                                            >
                                                Send Another Message
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <label htmlFor="name" className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm">
                                                    <User className="w-4 h-4 text-cyan-500" />
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm">
                                                    <Mail className="w-4 h-4 text-cyan-500" />
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                                                    placeholder="john@example.com"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm">
                                                    <MessageSquare className="w-4 h-4 text-cyan-500" />
                                                    Your Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={6}
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300 resize-none"
                                                    placeholder="Tell us about your project..."
                                                />
                                            </div>

                                            {submitStatus === 'error' && (
                                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                                                    There was an error submitting your message. Please try again.
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer bg-[length:200%_100%]" />
                                                {isSubmitting ? (
                                                    'Sending...'
                                                ) : (
                                                    <>
                                                        <span className="relative">Send Message</span>
                                                        <Send className="w-5 h-5 relative" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
