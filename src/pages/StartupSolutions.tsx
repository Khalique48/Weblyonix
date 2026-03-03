import { Rocket, Target, BarChart3, Handshake, Megaphone, Settings } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function StartupSolutions() {
    return (
        <ServicePageLayout
            icon={Rocket}
            title="Startup Solutions"
            tagline="End-to-end solutions from ideation to launch, helping startups build their digital presence and scale."
            color="from-yellow-500 to-orange-500"
            colorAccent="text-orange-600"
            overview="Launching a startup is exhilarating — but the technical challenges can be overwhelming. At Weblyonix, we become your technical co-founder. From validating your idea and building your first product to scaling your infrastructure and growing your user base, we provide comprehensive solutions tailored to the unique needs of startups. We understand the startup ecosystem — limited budgets, tight timelines, and the need to pivot fast. Our team brings deep experience working with early-stage companies, helping them navigate the journey from zero to one with confidence, speed, and the right technology stack."
            features={[
                {
                    icon: Target,
                    title: 'Product Strategy',
                    description: 'Market analysis, competitive positioning, and product-market fit validation to ensure you\'re building something people actually want.',
                },
                {
                    icon: Settings,
                    title: 'Technical Architecture',
                    description: 'Scalable, cost-effective technology choices and infrastructure design that grows with your startup from day one.',
                },
                {
                    icon: BarChart3,
                    title: 'Growth Analytics',
                    description: 'Custom analytics dashboards, funnel tracking, and KPI monitoring to drive data-informed decisions at every growth stage.',
                },
                {
                    icon: Megaphone,
                    title: 'Launch Strategy',
                    description: 'Coordinated launch plans with landing pages, email sequences, social media assets, and PR-ready materials for maximum impact.',
                },
                {
                    icon: Handshake,
                    title: 'Investor Materials',
                    description: 'Pitch decks, product demos, and technical documentation that help you tell a compelling story to investors and accelerators.',
                },
                {
                    icon: Rocket,
                    title: 'Scale & Grow',
                    description: 'Performance optimization, infrastructure scaling, and team augmentation to support your growth from seed to Series A and beyond.',
                },
            ]}
            process={[
                {
                    step: '1',
                    title: 'Discovery Workshop',
                    description: 'A hands-on session to understand your vision, define success metrics, map your user journey, and create a prioritized feature roadmap.',
                },
                {
                    step: '2',
                    title: 'MVP & Validation',
                    description: 'Rapid development of your core product with built-in analytics, followed by user testing and iterative refinement based on feedback.',
                },
                {
                    step: '3',
                    title: 'Launch & Growth',
                    description: 'Strategic launch execution with marketing assets, SEO foundation, social media presence, and growth hacking strategies.',
                },
                {
                    step: '4',
                    title: 'Scale & Optimize',
                    description: 'Performance monitoring, infrastructure scaling, feature expansion, and ongoing technical support as your startup grows.',
                },
            ]}
            techStack={['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'SendGrid', 'Mixpanel', 'Vercel', 'GitHub Actions']}
            ctaText="Ready to transform your startup idea into reality? Let's build your future together."
        />
    );
}
