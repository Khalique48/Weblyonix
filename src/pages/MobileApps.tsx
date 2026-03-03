import { Smartphone, Wifi, Shield, Cpu, Download, Bell } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function MobileApps() {
    return (
        <ServicePageLayout
            icon={Smartphone}
            title="Mobile Apps"
            tagline="Native-quality mobile applications built with modern frameworks for both iOS and Android platforms."
            color="from-purple-500 to-pink-500"
            colorAccent="text-purple-600"
            overview="In a mobile-first world, having a powerful presence on iOS and Android isn't optional — it's essential. At Weblyonix, we build cross-platform and native mobile applications that deliver silky-smooth experiences your users will love. From real-time features and push notifications to offline capabilities and biometric authentication, we engineer apps that feel truly native on every device. Our mobile team combines deep platform expertise with modern development practices to ship your app faster without compromising quality."
            features={[
                {
                    icon: Smartphone,
                    title: 'Cross-Platform',
                    description: 'Build once, deploy everywhere. We use React Native and Flutter to deliver native performance on iOS and Android simultaneously.',
                },
                {
                    icon: Wifi,
                    title: 'Offline Support',
                    description: 'Robust offline-first architecture with smart data syncing ensures your app works flawlessly even without an internet connection.',
                },
                {
                    icon: Shield,
                    title: 'Secure & Encrypted',
                    description: 'End-to-end encryption, secure storage, and biometric authentication protect your users\' sensitive data at every layer.',
                },
                {
                    icon: Cpu,
                    title: 'High Performance',
                    description: 'Optimized rendering, efficient memory management, and lazy loading deliver smooth 60fps animations and instant interactions.',
                },
                {
                    icon: Bell,
                    title: 'Push Notifications',
                    description: 'Engage users with intelligent, personalized push notifications powered by Firebase Cloud Messaging and APNs.',
                },
                {
                    icon: Download,
                    title: 'App Store Ready',
                    description: 'We handle the entire submission process — screenshots, descriptions, compliance — for both the Apple App Store and Google Play.',
                },
            ]}
            process={[
                {
                    step: '1',
                    title: 'Requirements & Planning',
                    description: 'We deep-dive into your vision, define user personas, map out features, and create a comprehensive product roadmap with milestones.',
                },
                {
                    step: '2',
                    title: 'UI/UX Design',
                    description: 'Platform-specific design following Apple HIG and Material Design guidelines, with interactive prototypes for user testing before development.',
                },
                {
                    step: '3',
                    title: 'Agile Development',
                    description: 'Iterative sprints with regular demos, CI/CD pipelines, and automated testing ensure quality code and rapid delivery.',
                },
                {
                    step: '4',
                    title: 'QA & Store Deployment',
                    description: 'Comprehensive testing across devices and OS versions, performance profiling, and managed submission to Apple App Store and Google Play.',
                },
            ]}
            techStack={['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'TypeScript', 'Expo']}
            ctaText="Ready to launch your app on millions of devices? Let's make it happen."
        />
    );
}
