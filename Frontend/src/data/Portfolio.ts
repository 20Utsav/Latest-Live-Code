export interface Project {
    id: number;
    category: string;
    imageSrc: string;
    altText: string;
    title: string;
    project: {
        description: string;
        tech: string[];
        demoUrl: string;
        githubUrl: string;
    };
    additionalImages: string[];
}

export const projects: Record<string, Project> = {
    "ecommerce-platform": {
        id: 1,
        category: "Web",
        imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
        altText: "E-Commerce Platform",
        title: "E-Commerce Platform",
        project: {
            description: "A full-featured online shopping platform with real-time inventory management, secure payments, and advanced analytics dashboard.",
            tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
            demoUrl: "#",
            githubUrl: "#",
        },
        additionalImages: [
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
        ],
    },
    "social-media-dashboard": {
        id: 2,
        category: "UI/UX",
        imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        altText: "Social Media Dashboard",
        title: "Social Media Dashboard",
        project: {
            description: "Analytics dashboard for social media management with content scheduling, engagement metrics,An e-learning platform with video streaming, quizzes, and progress tracking for studentsAn e-learning platform with video streaming, quizzes, and progress tracking for studentsAn e-learning platform with video streaming, quizzes, and progress tracking for studentsAn e-learning platform with video streaming, quizzes, and progress tracking for students and AI-powered insights.",
            tech: ["React", "Node.js", "MongoDB", "Socket.io"],
            demoUrl: "#",
            githubUrl: "#",
        },
        additionalImages: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        ],
    },
    "healthcare-portal": {
        id: 3,
        category: "Mobile",
        imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
        altText: "Healthcare Portal",
        title: "Healthcare Portal",
        project: {
            description: "Secure patient management system with real-time appointment scheduling, telemedicine integration, and medical records management.",
            tech: ["MERN Stack", "WebRTC", "JWT"],
            demoUrl: "#",
            githubUrl: "#",
        },
        additionalImages: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
        ],
    },
    "learning-management-system": {
        id: 4,
        category: "Mobile",
        imageSrc: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
        altText: "Learning Management System",
        title: "Learning Management System",
        project: {
            description: "An e-learning platform with video streaming, quizzes, and progress tracking for students and instructors.",
            tech: ["React", "Node.js", "GraphQL", "AWS S3"],
            demoUrl: "#",
            githubUrl: "#",
        },
        additionalImages: [
            "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80"
        ],
    },
    "personal-finance-app": {
        id: 5,
        category: "UI/UX",
        imageSrc: "https://images.unsplash.com/photo-1563013544-fc4a22895cf4?auto=format&fit=crop&w=800&q=80",
        altText: "Personal Finance App",
        title: "Personal Finance App",
        project: {
            description: "Track expenses, manage budgets, and analyze spending habits with this user-friendly finance app.",
            tech: ["React Native", "Node.js", "Firebase"],
            demoUrl: "#",
            githubUrl: "#",
        },
        additionalImages: [
            "https://images.unsplash.com/photo-1563013544-fc4a22895cf4?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1563013544-fc4a22895cf4?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1563013544-fc4a22895cf4?auto=format&fit=crop&w=800&q=80"
        ],
    },
    "weather-forecast-app": {
        id: 6,
        category: "Graphic",
        imageSrc: "https://images.unsplash.com/photo-1551516594-cc56ec006b19?auto=format&fit=crop&w=800&q=80",
        altText: "Weather Forecast App",
        title: "Weather Forecast App",
        project: {
            description: "A modern weather app with real-time forecasts, maps, and severe weather alerts.",
            tech: ["React", "Node.js", "OpenWeather API"],
            demoUrl: "#",
            githubUrl: "#",
        },
        additionalImages: [
            "https://images.unsplash.com/photo-1551516594-cc56ec006b19?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551516594-cc56ec006b19?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551516594-cc56ec006b19?auto=format&fit=crop&w=800&q=80"
        ],
    },
    "inventory-management-system": {
        id: 7,
        category: "Web",
        imageSrc: "https://images.unsplash.com/photo-1581091012184-e27b9d327fc1?auto=format&fit=crop&w=800&q=80",
        altText: "Inventory Management System",
        title: "Inventory Management System",
        project: {
            description: "A cloud-based inventory tracking solution with barcode scanning and reporting features.",
            tech: ["Angular", "Node.js", "MySQL"],
            demoUrl: "#",
            githubUrl: "#",
        },
        additionalImages: [
            "https://images.unsplash.com/photo-1581091012184-e27b9d327fc1?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581091012184-e27b9d327fc1?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581091012184-e27b9d327fc1?auto=format&fit=crop&w=800&q=80"
        ],
    },
    "fitness-tracker-app": {
        id: 8,
        category: "Mobile",
        imageSrc: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
        altText: "Fitness Tracker App",
        title: "Fitness Tracker App",
        project: {
            description: "Monitor workouts, set fitness goals, and track progress with this intuitive fitness app.",
            tech: ["Flutter", "Firebase", "Cloud Functions"],
            demoUrl: "#",
            githubUrl: "#",
        },
        additionalImages: [
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
        ],
    },
    "project-management-tool": {
        id: 9,
        category: "UI/UX",
        imageSrc: "https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=800&q=80",
        altText: "Project Management Tool",
        title: "Project Management Tool",
        project: {
            description: "Collaborate with your team using Kanban boards, timelines, and task prioritization.",
            tech: ["Vue.js", "Node.js", "PostgreSQL"],
            demoUrl: "#",
            githubUrl: "#",
        },
        additionalImages: [
            "https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=800&q=80"
        ],
    },
};
