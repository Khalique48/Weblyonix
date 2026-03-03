import { BookOpen, Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
    {
        title: 'Why Your Startup Needs a Great Landing Page',
        excerpt: 'First impressions matter. Learn how a conversion-optimized landing page can dramatically increase your startup\'s growth rate.',
        category: 'Marketing',
        date: 'Feb 28, 2026',
        readTime: '5 min read',
        color: 'from-cyan-500 to-blue-500',
        slug: 'startup-landing-page',
    },
    {
        title: 'The Future of Web Development in 2026',
        excerpt: 'From AI-assisted coding to WebAssembly, explore the technologies shaping the next generation of web experiences.',
        category: 'Technology',
        date: 'Feb 25, 2026',
        readTime: '8 min read',
        color: 'from-purple-500 to-pink-500',
        slug: 'future-web-development',
    },
    {
        title: 'Building MVPs That Actually Scale',
        excerpt: 'The art of building a Minimum Viable Product that\'s lean enough to launch fast but robust enough to grow.',
        category: 'Startups',
        date: 'Feb 20, 2026',
        readTime: '6 min read',
        color: 'from-green-500 to-emerald-500',
        slug: 'building-mvps-that-scale',
    },
    {
        title: 'UI/UX Design Principles Every Developer Should Know',
        excerpt: 'Great design isn\'t just about aesthetics — it\'s about creating intuitive experiences that delight users.',
        category: 'Design',
        date: 'Feb 15, 2026',
        readTime: '7 min read',
        color: 'from-orange-500 to-red-500',
        slug: 'ui-ux-design-principles',
    },
    {
        title: 'Mobile-First Development: Beyond Responsive Design',
        excerpt: 'Why thinking mobile-first isn\'t just about screen sizes — it\'s about rethinking the entire user experience.',
        category: 'Development',
        date: 'Feb 10, 2026',
        readTime: '5 min read',
        color: 'from-indigo-500 to-blue-500',
        slug: 'mobile-first-development',
    },
    {
        title: 'How to Choose the Right Tech Stack for Your Project',
        excerpt: 'React, Next.js, Vue, or Svelte? We break down the pros and cons to help you make the right choice.',
        category: 'Technology',
        date: 'Feb 5, 2026',
        readTime: '9 min read',
        color: 'from-yellow-500 to-orange-500',
        slug: 'choosing-tech-stack',
    },
];

export default function Blogs() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500/20 top-[-50px] left-[-100px]" />
                <div className="gradient-orb w-[300px] h-[300px] bg-purple-500/15 bottom-[0] right-[-50px]" style={{ animationDelay: '2s' }} />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                        <BookOpen className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-tilt-in">
                        Our Blog
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                        Insights, tutorials, and industry trends from the Weblyonix team
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                        {blogPosts.map((post, index) => (
                            <Link
                                to={`/blog/${post.slug}`}
                                key={index}
                                className="card-3d group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-transparent hover:shadow-2xl block"
                            >
                                {/* Color accent bar */}
                                <div className={`h-1.5 bg-gradient-to-r ${post.color}`} />

                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white text-xs font-semibold rounded-full`}>
                                            {post.category}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-slate-400">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center gap-1 text-cyan-500 font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                                        Read More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
