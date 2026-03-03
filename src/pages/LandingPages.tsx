import { Layout, MousePointerClick, BarChart3, Gauge, Layers, Target } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function LandingPages() {
    return (
        <ServicePageLayout
            icon={Layout}
            title="Landing Pages"
            tagline="Convert visitors into customers with high-performing, beautifully designed landing pages optimized for maximum conversions."
            color="from-blue-500 to-cyan-500"
            colorAccent="text-blue-600"
            overview="A landing page is your first impression — and we make it count. At Weblyonix, we design and develop conversion-focused landing pages that combine stunning visuals with persuasive copy and strategic UX. Whether you're launching a product, running a marketing campaign, or building an email list, our landing pages are engineered to turn traffic into measurable results. We use data-driven design principles, A/B testing strategies, and mobile-first development to ensure every pixel serves a purpose."
            features={[
                {
                    icon: MousePointerClick,
                    title: 'Conversion-Optimized',
                    description: 'Every element is strategically placed to guide visitors toward your desired action — signups, purchases, or inquiries.',
                },
                {
                    icon: Gauge,
                    title: 'Lightning Fast',
                    description: 'Optimized for speed with lazy loading, minified assets, and efficient code to ensure sub-2-second load times.',
                },
                {
                    icon: Layers,
                    title: 'Responsive Design',
                    description: 'Pixel-perfect layouts that adapt flawlessly across desktop, tablet, and mobile devices for every visitor.',
                },
                {
                    icon: BarChart3,
                    title: 'Analytics Integration',
                    description: 'Built-in tracking with Google Analytics, Meta Pixel, and custom events so you can measure every conversion.',
                },
                {
                    icon: Target,
                    title: 'A/B Testing Ready',
                    description: 'Structured for easy A/B testing so you can experiment with headlines, CTAs, and layouts to maximize performance.',
                },
                {
                    icon: Layout,
                    title: 'SEO Optimized',
                    description: 'Semantic HTML, proper meta tags, structured data, and fast loading to ensure your page ranks on search engines.',
                },
            ]}
            process={[
                {
                    step: '1',
                    title: 'Discovery & Strategy',
                    description: 'We analyze your target audience, goals, and competitors to craft a strategy that maximizes conversions and engagement.',
                },
                {
                    step: '2',
                    title: 'Wireframing & Design',
                    description: 'Interactive wireframes and high-fidelity mockups are created in Figma, giving you a clear vision before a single line of code is written.',
                },
                {
                    step: '3',
                    title: 'Development & Optimization',
                    description: 'We build your landing page with clean, fast code — optimized for performance, accessibility, and SEO from the ground up.',
                },
                {
                    step: '4',
                    title: 'Testing & Launch',
                    description: 'Rigorous cross-browser and device testing, performance audits, and analytics setup before we launch your page live.',
                },
            ]}
            techStack={['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'Figma', 'Google Analytics', 'Vercel', 'Lighthouse']}
            ctaText="Ready to skyrocket your conversions? Let's design your perfect landing page."
        />
    );
}
