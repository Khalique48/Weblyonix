import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User, Share2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface BlogArticleProps {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    color: string;
    children: React.ReactNode;
}

export default function BlogArticle({
    title,
    category,
    date,
    readTime,
    author,
    color,
    children,
}: BlogArticleProps) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Banner */}
            <section className={`relative pt-32 pb-24 bg-gradient-to-br ${color} overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnptLTIgMnYyaDJ2LTJoLTJ6bTAtMnYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>

                        <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
                            {category}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight animate-tilt-in">
                            {title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {readTime}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
            </section>

            {/* Article Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <article className="prose prose-lg prose-slate max-w-none
              [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6
              [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-8 [&>h3]:mb-4
              [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-[17px]
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:text-slate-600 [&>ul>li]:mb-2 [&>ul>li]:text-[17px] [&>ul>li]:leading-relaxed
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:text-slate-600 [&>ol>li]:mb-2 [&>ol>li]:text-[17px] [&>ol>li]:leading-relaxed
              [&>blockquote]:border-l-4 [&>blockquote]:border-cyan-500 [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:bg-cyan-50 [&>blockquote]:rounded-r-xl [&>blockquote>p]:text-slate-700 [&>blockquote>p]:italic [&>blockquote>p]:text-lg
              [&>hr]:my-10 [&>hr]:border-slate-200
            ">
                            {children}
                        </article>

                        {/* Share & Nav */}
                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                <Link
                                    to="/blogs"
                                    className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-500 transition-colors font-medium"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to All Posts
                                </Link>
                                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-sm transition-colors">
                                    <Share2 className="w-4 h-4" />
                                    Share this article
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Want to build something amazing?</h2>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                        Let our expert team turn your vision into reality with cutting-edge technology.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
