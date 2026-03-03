import { ArrowRight, Code2, Sparkles, Layout, Smartphone, Code, Zap, Palette, Rocket, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'High-converting landing pages that turn visitors into customers with stunning design and optimized performance.',
    image: '/images/service-landing-pages.png',
    color: 'from-cyan-500 to-blue-500',
    shadow: 'shadow-cyan-500/20',
    slug: 'landing-pages',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native-quality mobile apps built with modern frameworks for iOS and Android platforms.',
    image: '/images/service-mobile-apps.png',
    color: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/20',
    slug: 'mobile-apps',
  },
  {
    icon: Code,
    title: 'Web Applications',
    description: 'Scalable, secure web apps tailored to your business needs with cutting-edge technologies.',
    image: '/images/service-web-apps.png',
    color: 'from-green-500 to-emerald-500',
    shadow: 'shadow-green-500/20',
    slug: 'web-applications',
  },
  {
    icon: Zap,
    title: 'MVP Development',
    description: 'Launch your idea fast with a Minimum Viable Product to test the market and gather feedback.',
    image: '/images/service-mvp.png',
    color: 'from-orange-500 to-red-500',
    shadow: 'shadow-orange-500/20',
    slug: 'mvp-development',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered designs that create delightful experiences and drive engagement.',
    image: '/images/service-uiux.png',
    color: 'from-indigo-500 to-blue-500',
    shadow: 'shadow-indigo-500/20',
    slug: 'ui-ux-design',
  },
  {
    icon: Rocket,
    title: 'Startup Solutions',
    description: 'End-to-end solutions from ideation to launch, helping startups build their digital presence.',
    image: '/images/service-startup.png',
    color: 'from-yellow-500 to-orange-500',
    shadow: 'shadow-yellow-500/20',
    slug: 'startup-solutions',
  },
];

export default function Hero() {
  const whatsappLink = 'https://wa.me/919102479004?text=' + encodeURIComponent("Hi Weblyonix! I'm interested in your services.");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnptLTIgMnYyaDJ2LTJoLTJ6bTAtMnYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

        {/* 3D Gradient Orbs */}
        <div className="gradient-orb w-[500px] h-[500px] bg-cyan-500/30 top-[-100px] left-[-100px]" />
        <div className="gradient-orb w-[400px] h-[400px] bg-blue-600/20 bottom-[-50px] right-[-80px]" style={{ animationDelay: '2s' }} />
        <div className="gradient-orb w-[300px] h-[300px] bg-purple-500/15 top-[40%] right-[10%]" style={{ animationDelay: '4s' }} />

        {/* 3D Floating Geometric Shapes */}
        <div className="absolute top-[15%] left-[8%] perspective-1500">
          <div className="cube-wireframe">
            <div className="face" />
            <div className="face" />
            <div className="face" />
            <div className="face" />
          </div>
        </div>

        <div className="absolute top-[25%] right-[12%] perspective-1500">
          <div className="w-16 h-16 border-2 border-cyan-400/20 rounded-full animate-float-3d" style={{ animationDelay: '1s' }} />
        </div>

        <div className="absolute bottom-[25%] left-[15%] perspective-1500">
          <div className="w-12 h-12 border-2 border-purple-400/20 rotate-45 animate-float-3d" style={{ animationDelay: '3s' }} />
        </div>

        <div className="absolute bottom-[30%] right-[8%] perspective-1500">
          <div className="cube-wireframe" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
            <div className="face" style={{ borderColor: 'rgba(139, 92, 246, 0.25)' }} />
            <div className="face" style={{ borderColor: 'rgba(139, 92, 246, 0.25)' }} />
            <div className="face" style={{ borderColor: 'rgba(139, 92, 246, 0.25)' }} />
            <div className="face" style={{ borderColor: 'rgba(139, 92, 246, 0.25)' }} />
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}

        {/* Orbiting rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cyan-500/5 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-purple-500/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '35s' }} />

        {/* Main Content */}
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6 animate-tilt-in">
              <div className="relative">
                <Code2 className="w-14 h-14 text-cyan-400" strokeWidth={1.5} />
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-2xl animate-glow-pulse" />
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-tilt-in" style={{ animationDelay: '0.1s' }}>
              Build Your Digital{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                Dream
              </span>{' '}
              With Us
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              We craft stunning landing pages and powerful apps that help startups launch, grow, and succeed in the digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 overflow-hidden shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span className="relative">Message on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%]" />
                <span className="relative">Share Your Requirement</span>
                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </Link>
            </div>

            <div className="mt-16 flex items-center justify-center gap-2 text-slate-400 animate-slide-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <p className="text-sm">Trusted by innovative startups worldwide</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Services Showcase Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-50 text-cyan-600 text-sm font-semibold rounded-full mb-4 border border-cyan-100">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  to={`/services/${service.slug}`}
                  key={index}
                  className={`card-3d group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-transparent hover:shadow-2xl hover:${service.shadow} block`}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent`} />
                    <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>
                    <span className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-2 transition-all duration-300`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500/15 top-[-100px] right-[-100px]" />
        <div className="gradient-orb w-[300px] h-[300px] bg-purple-500/10 bottom-[-50px] left-[-50px]" style={{ animationDelay: '3s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-full mb-6 border border-cyan-500/20">
              Let's Work Together
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Turn Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Idea Into Reality?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free consultancy today and let's start building your digital success story together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Message on WhatsApp
              </a>
              <Link
                to="/request-demo"
                className="px-8 py-4 glass text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 flex items-center gap-2"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
