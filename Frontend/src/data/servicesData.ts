// /data/servicesData.ts
import webLogo from "../../img/Services/web_logo.png";
import appLogo from "../../img/Services/app_logo.png";
import uiLogo from "../../img/Services/ui_logo.png";
import digiLogo from "../../img/Services/digi_logo.png";
import graphicLogo from "../../img/Services/graphic_logo.png";

interface Service {
    id: number;
    category: string[];
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    details: string[];
}

type Services = {
    [key: string]: Service; // Use a string key for dynamic access
};

export const services: Services = {
    "web-development": {
        id: 1,
        category: ["Web Development", "Technology"],
        imageSrc: webLogo,
        altText: "web-development",
        title: "Web Development",
        description:
            "Learn the latest trends and techniques in web development. Stay updated with modern frameworks and best practices.",
        details: [
            "Design",
            "Coding",
            "Testing",
            "Deployment",
            "Maintenance",
        ],
    },
    "mobile-app-development": {
        id: 2,
        category: ["Mobile Development", "Technology"],
        imageSrc: appLogo,
        altText: "mobile-app-development",
        title: "Mobile App Development",
        description:
            "Master UX design principles to create user-friendly mobile applications with seamless user experience.",
        details: [
            "Concept",
            "Development",
            "Testing",
            "Deployment",
            "Updates",
        ],
    },
    "ux-ui-design": {
        id: 3,
        category: ["UX/UI Design", "Technology"],
        imageSrc: uiLogo,
        altText: "ux-ui-design",
        title: "UX/UI Design",
        description:
            "Enhance your skills in modern UI design practices and create visually appealing user interfaces.",
        details: [
            "Research",
            "Wireframing",
            "Prototyping",
            "Visual Design",
            "User Testing",
        ],
    },
    "digital-marketing": {
        id: 4,
        category: ["Marketing", "Technology"],
        imageSrc: digiLogo,
        altText: "digital-marketing",
        title: "Digital Marketing",
        description:
            "Optimize your marketing strategies with the latest trends in digital marketing and analytics.",
        details: [
            "Strategy",
            "Targeting",
            "Implementing",
            "Analytics",
            "Optimizing",
        ],
    },
    "graphic-design": {
        id: 5,
        category: ["Support", "Technology"],
        imageSrc: graphicLogo,
        altText: "graphic-design",
        title: "graphic design",
        description:
            "Enhance efficiency in managing customer support tickets and streamline operations.",
        details: [
            "Typography and color theory",
            "Interactive design techniques",
            "Designing for mobile-first experiences",
        ],
    },
    "video-editing": {
        id: 6,
        category: ["Support", "Technology"],
        imageSrc: digiLogo,
        altText: "video-editing",
        title: "Video Editing",
        description:
            "Enhance efficiency in managing customer support tickets and streamline operations.",
        details: [
            "Typography and color theory",
            "Interactive design techniques",
            "Designing for mobile-first experiences",
        ],
    },
};
