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

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-50 text-cyan-600 text-sm font-semibold rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                to={`/services/${service.slug}`}
                key={index}
                className={`group card-3d bg-white p-8 rounded-2xl border border-slate-100 hover:border-transparent cursor-pointer block ${service.shadow} hover:shadow-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient top border on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
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
  );
}
