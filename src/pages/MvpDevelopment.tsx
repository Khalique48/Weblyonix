import { Zap, Clock, Lightbulb, Users, TrendingUp, Rocket } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function MvpDevelopment() {
    return (
        <ServicePageLayout
            icon={Zap}
            title="MVP Development"
            tagline="Launch your startup idea quickly with a Minimum Viable Product to test the market and gather real-world feedback."
            color="from-orange-500 to-red-500"
            colorAccent="text-orange-600"
            overview="Your idea deserves to see the light of day — fast. At Weblyonix, we help startups and entrepreneurs validate their concepts by building lean, functional MVPs in record time. We focus on shipping the core features that matter most, so you can start getting real user feedback, attract investors, and iterate based on data instead of assumptions. Our MVP approach minimizes risk, reduces time-to-market, and sets the foundation for your product's future growth. We've helped dozens of founders go from idea to launch in as little as 4-6 weeks."
            features={[
                {
                    icon: Clock,
                    title: 'Rapid Development',
                    description: 'From concept to launch in 4-6 weeks. We prioritize speed without sacrificing code quality or user experience.',
                },
                {
                    icon: Lightbulb,
                    title: 'Lean Methodology',
                    description: 'We build only the features that validate your core hypothesis, saving you time and money on unnecessary complexity.',
                },
                {
                    icon: Users,
                    title: 'User-Validated',
                    description: 'Built-in analytics and feedback mechanisms so you can understand user behavior and iterate based on real data.',
                },
                {
                    icon: TrendingUp,
                    title: 'Scalable Foundation',
                    description: 'Clean architecture and modular code that scales seamlessly as you grow from 10 users to 10,000 users and beyond.',
                },
                {
                    icon: Rocket,
                    title: 'Investor-Ready',
                    description: 'A polished, demo-ready product with metrics tracking that helps you tell a compelling story to investors and stakeholders.',
                },
                {
                    icon: Zap,
                    title: 'Rapid Iteration',
                    description: 'Agile sprints with weekly releases let you test new ideas quickly and pivot based on market feedback.',
                },
            ]}
            process={[
                {
                    step: '1',
                    title: 'Ideation & Scoping',
                    description: 'We help you define your core value proposition, identify must-have features, and create a lean product roadmap focused on validation.',
                },
                {
                    step: '2',
                    title: 'Rapid Prototyping',
                    description: 'Interactive prototypes and wireframes created in days, not weeks — tested with potential users before development begins.',
                },
                {
                    step: '3',
                    title: 'Sprint Development',
                    description: 'Intensive development sprints with daily standups, weekly demos, and continuous deployment to get your MVP live fast.',
                },
                {
                    step: '4',
                    title: 'Launch & Iterate',
                    description: 'Managed launch with analytics setup, user onboarding, and a post-launch iteration plan based on real-world feedback.',
                },
            ]}
            techStack={['React', 'Next.js', 'Node.js', 'MongoDB', 'Firebase', 'Vercel', 'Stripe', 'Mixpanel']}
            ctaText="Have a startup idea? Let's turn it into reality in weeks, not months."
        />
    );
}
