import { Code, Database, Globe, Lock, Cloud, RefreshCcw } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function WebApplications() {
  return (
    <ServicePageLayout
      icon={Code}
      title="Web Applications"
      tagline="Scalable, secure web applications tailored to your business needs with cutting-edge technologies."
      color="from-green-500 to-emerald-500"
      colorAccent="text-green-600"
      overview="Modern businesses need more than static websites — they need dynamic, scalable web applications that power their operations. At Weblyonix, we engineer full-stack web applications using the MERN stack and modern frameworks that handle complex workflows, real-time data, and thousands of concurrent users. From SaaS platforms and admin dashboards to e-commerce solutions and internal tools, we build web apps that grow with your business and deliver exceptional user experiences at every scale."
      features={[
        {
          icon: Globe,
          title: 'Full-Stack Development',
          description: 'End-to-end development with React, Node.js, and MongoDB — from database design to interactive front-end, we handle every layer.',
        },
        {
          icon: Database,
          title: 'Database Architecture',
          description: 'Efficient, scalable database design with MongoDB, PostgreSQL, or Redis — optimized for your data patterns and query performance.',
        },
        {
          icon: Lock,
          title: 'Enterprise Security',
          description: 'JWT authentication, role-based access control, input validation, rate limiting, and OWASP-compliant security practices.',
        },
        {
          icon: Cloud,
          title: 'Cloud Deployment',
          description: 'Production-ready deployment on AWS, GCP, or Azure with auto-scaling, load balancing, and zero-downtime deployments.',
        },
        {
          icon: RefreshCcw,
          title: 'Real-time Features',
          description: 'WebSocket integration for live chat, notifications, collaborative editing, and real-time dashboards and data streaming.',
        },
        {
          icon: Code,
          title: 'API Development',
          description: 'RESTful and GraphQL APIs with comprehensive documentation, versioning, and rate limiting for seamless third-party integrations.',
        },
      ]}
      process={[
        {
          step: '1',
          title: 'Architecture Planning',
          description: 'System design, technology selection, database modeling, and API specification — building a rock-solid foundation before writing code.',
        },
        {
          step: '2',
          title: 'Backend Development',
          description: 'Building robust APIs, implementing business logic, setting up authentication, and establishing the data layer with comprehensive testing.',
        },
        {
          step: '3',
          title: 'Frontend Development',
          description: 'Creating responsive, accessible interfaces with React and modern state management, integrated with the backend via type-safe API calls.',
        },
        {
          step: '4',
          title: 'Deployment & Monitoring',
          description: 'CI/CD pipeline setup, cloud deployment, performance monitoring, error tracking, and ongoing maintenance and support.',
        },
      ]}
      techStack={['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'TypeScript', 'GraphQL', 'Docker', 'AWS', 'Redis']}
      ctaText="Need a powerful web application? Let's architect your solution together."
    />
  );
}
