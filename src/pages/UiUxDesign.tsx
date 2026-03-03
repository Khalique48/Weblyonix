import { Palette, Figma, Eye, MousePointerClick, Accessibility, PenTool } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function UiUxDesign() {
    return (
        <ServicePageLayout
            icon={Palette}
            title="UI/UX Design"
            tagline="Intuitive, user-centered designs that create delightful experiences and drive meaningful engagement."
            color="from-indigo-500 to-blue-500"
            colorAccent="text-indigo-600"
            overview="Great design is invisible — it just works. At Weblyonix, our UI/UX team creates digital experiences that feel natural, look stunning, and drive measurable results. We combine deep user research with modern design methodologies to craft interfaces that users love to interact with. From user persona development and journey mapping to high-fidelity prototypes and design systems, we ensure every touchpoint is thoughtful, accessible, and aligned with your brand identity. Our designs don't just look beautiful — they solve real problems and make complex tasks feel effortless."
            features={[
                {
                    icon: Eye,
                    title: 'User Research',
                    description: 'In-depth user interviews, surveys, and competitive analysis to understand your audience\'s needs, pain points, and behaviors.',
                },
                {
                    icon: Figma,
                    title: 'Figma Prototyping',
                    description: 'Interactive high-fidelity prototypes in Figma with realistic interactions, animations, and user flows for stakeholder review.',
                },
                {
                    icon: PenTool,
                    title: 'Design Systems',
                    description: 'Scalable, reusable component libraries with consistent tokens for colors, typography, spacing, and interactions across your product.',
                },
                {
                    icon: Accessibility,
                    title: 'Accessibility (WCAG)',
                    description: 'Designs that meet WCAG 2.1 AA standards — ensuring your product is usable by everyone, including users with disabilities.',
                },
                {
                    icon: MousePointerClick,
                    title: 'Interaction Design',
                    description: 'Thoughtful micro-interactions, transitions, and animations that provide feedback, guide users, and add delight to the experience.',
                },
                {
                    icon: Palette,
                    title: 'Visual Identity',
                    description: 'Cohesive visual language including color palettes, typography, iconography, and illustration styles that define your brand.',
                },
            ]}
            process={[
                {
                    step: '1',
                    title: 'Research & Discovery',
                    description: 'User interviews, competitive audits, and stakeholder workshops to define design goals, user personas, and key success metrics.',
                },
                {
                    step: '2',
                    title: 'Information Architecture',
                    description: 'Site maps, user flows, and wireframes that establish the structure and navigation of your product before visual design begins.',
                },
                {
                    step: '3',
                    title: 'Visual Design',
                    description: 'High-fidelity mockups with your brand identity, thoughtful layout, and attention to micro-interactions and responsive behavior.',
                },
                {
                    step: '4',
                    title: 'Usability Testing',
                    description: 'Moderated and unmoderated user testing with real users to validate designs, identify friction points, and iterate before handoff.',
                },
            ]}
            techStack={['Figma', 'Adobe XD', 'Framer', 'Principle', 'Maze', 'Hotjar', 'Lottie', 'Storybook']}
            ctaText="Ready for a design that users will love? Let's create something extraordinary."
        />
    );
}
