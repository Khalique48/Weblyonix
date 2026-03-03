import { useState, useEffect, useRef } from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: 50, suffix: '+', label: 'Happy Clients', color: 'from-cyan-500 to-blue-500' },
  { icon: Award, value: 100, suffix: '+', label: 'Projects Delivered', color: 'from-purple-500 to-pink-500' },
  { icon: TrendingUp, value: 95, suffix: '%', label: 'Client Satisfaction', color: 'from-green-500 to-emerald-500' },
  { icon: Target, value: 24, suffix: '/7', label: 'Support Available', color: 'from-orange-500 to-red-500' },
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
      // Ease-out cubic for a satisfying deceleration
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
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      {/* Top accent line */}
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

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-cyan-50 text-cyan-600 text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Building Digital{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Excellence
              </span>{' '}
              Since Day One
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Weblyonix, we're passionate about helping startups and businesses establish their digital presence. Our team of experienced developers and designers work together to create solutions that are not just functional, but exceptional.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe in the power of great design combined with robust technology. Every project we undertake is an opportunity to push boundaries and deliver something truly remarkable.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow duration-300 hover:scale-105 transform transition-transform">
                Innovation First
              </div>
              <div className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-800 rounded-xl font-semibold hover:border-cyan-300 hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
                Client Focused
              </div>
              <div className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-800 rounded-xl font-semibold hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
                Quality Driven
              </div>
            </div>
          </div>

          <div ref={sectionRef} className="grid grid-cols-2 gap-6 perspective-1000">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
