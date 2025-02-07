// // /data/servicesData.ts
// import webLogo from "../../img/Services/web_logo.png";
// import appLogo from "../../img/Services/app_logo.png";
// import uiLogo from "../../img/Services/ui_logo.png";
// import digiLogo from "../../img/Services/digi_logo.png";
// import graphicLogo from "../../img/Services/graphic_logo.png";

// interface Service {
//     id: number;
//     category: string[];
//     imageSrc: string;
//     altText: string;
//     title: string;
//     description: string;
//     details: string[];
// }

// type Services = {
//     [key: string]: Service; // Use a string key for dynamic access
// };

// export const services: Services = {
//     "web-development": {
//         id: 1,
//         category: ["Web Development", "Technology"],
//         imageSrc: webLogo,
//         altText: "web-development",
//         title: "Web Development",
//         description:
//             "Learn the latest trends and techniques in web development. Stay updated with modern frameworks and best practices.",
//         details: [
//             "Design",
//             "Coding",
//             "Testing",
//             "Deployment",
//             "Maintenance",
//         ],
//     },
//     "mobile-app-development": {
//         id: 2,
//         category: ["Mobile Development", "Technology"],
//         imageSrc: appLogo,
//         altText: "mobile-app-development",
//         title: "Mobile App Development",
//         description:
//             "Master UX design principles to create user-friendly mobile applications with seamless user experience.",
//         details: [
//             "Concept",
//             "Development",
//             "Testing",
//             "Deployment",
//             "Updates",
//         ],
//     },
//     "ux-ui-design": {
//         id: 3,
//         category: ["UX/UI Design", "Technology"],
//         imageSrc: uiLogo,
//         altText: "ux-ui-design",
//         title: "UX/UI Design",
//         description:
//             "Enhance your skills in modern UI design practices and create visually appealing user interfaces.",
//         details: [
//             "Research",
//             "Wireframing",
//             "Prototyping",
//             "Visual Design",
//             "User Testing",
//         ],
//     },
//     "digital-marketing": {
//         id: 4,
//         category: ["Marketing", "Technology"],
//         imageSrc: digiLogo,
//         altText: "digital-marketing",
//         title: "Digital Marketing",
//         description:
//             "Optimize your marketing strategies with the latest trends in digital marketing and analytics.",
//         details: [
//             "Strategy",
//             "Targeting",
//             "Implementing",
//             "Analytics",
//             "Optimizing",
//         ],
//     },
//     "graphic-design": {
//         id: 5,
//         category: ["Support", "Technology"],
//         imageSrc: graphicLogo,
//         altText: "graphic-design",
//         title: "graphic design",
//         description:
//             "Enhance efficiency in managing customer support tickets and streamline operations.",
//         details: [
//             "Typography and color theory",
//             "Interactive design techniques",
//             "Designing for mobile-first experiences",
//         ],
//     },
//     "video-editing": {
//         id: 6,
//         category: ["Support", "Technology"],
//         imageSrc: digiLogo,
//         altText: "video-editing",
//         title: "Video Editing",
//         description:
//             "Enhance efficiency in managing customer support tickets and streamline operations.",
//         details: [
//             "Typography and color theory",
//             "Interactive design techniques",
//             "Designing for mobile-first experiences",
//         ],
//     },
// };

import webLogo from "../../img/Services/web_logo.png";
import appLogo from "../../img/Services/app_logo.png";
import uiLogo from "../../img/Services/ui_logo.png";
import digiLogo from "../../img/Services/digi_logo.png";
import graphicLogo from "../../img/Services/graphic_logo.png";
import videoEditingLogo from "../../img/Services/app_logo.png";

import webVideo from "../../img/video/webdev.mp4";
import appVideo from "../../img/video/appdev.mp4";
import uiVideo from "../../img/video/videoweb.mp4";
import digiVideo from "../../img/video/digitalweb.mp4";
import graphicVideo from "../../img/video/videoweb.mp4";
import videoEditingVideo from "../../img/video/videoweb.mp4";

interface Service {
    id: number;
    category: string[];
    imageSrc: string;  
    videoSrc?: string; 
    altText: string;
    title: string;
    description: string;
    details: string[];
}

type Services = {
    [key: string]: Service;
};

export const services: Services = {
    "web-development": {
        id: 1,
        category: ["Web Development", "Technology"],
        imageSrc: webLogo, 
        videoSrc: webVideo,
        altText: "web-development",
        title: "Web Development",
        description:
            "Learn the latest trends and techniques in web development. Stay updated with modern frameworks and best practices.",
        details: ["Design", "Coding", "Testing", "Deployment", "Maintenance"],
    },
    "mobile-app-development": {
        id: 2,
        category: ["Mobile Development", "Technology"],
        imageSrc: appLogo,
        videoSrc: appVideo,
        altText: "mobile-app-development",
        title: "Mobile App Development",
        description:
            "Master UX design principles to create user-friendly mobile applications with seamless user experience.",
        details: ["Concept", "Development", "Testing", "Deployment", "Updates"],
    },
    "ux-ui-design": {
        id: 3,
        category: ["UX/UI Design", "Technology"],
        imageSrc: uiLogo,
        videoSrc: uiVideo,
        altText: "ux-ui-design",
        title: "UX/UI Design",
        description:
            "Enhance your skills in modern UI design practices and create visually appealing user interfaces.",
        details: ["Research", "Wireframing", "Prototyping", "Visual Design", "User Testing"],
    },
    "digital-marketing": {
        id: 4,
        category: ["Marketing", "Technology"],
        imageSrc: digiLogo,
        videoSrc: digiVideo,
        altText: "digital-marketing",
        title: "Digital Marketing",
        description:
            "Optimize your marketing strategies with the latest trends in digital marketing and analytics.",
        details: ["Strategy", "Targeting", "Implementing", "Analytics", "Optimizing"],
    },
    "graphic-design": {
        id: 5,
        category: ["Design", "Technology"],
        imageSrc: graphicLogo,
        videoSrc: graphicVideo,
        altText: "graphic-design",
        title: "Graphic Design",
        description:
            "Enhance efficiency in managing customer support tickets and streamline operations.",
        details: ["Typography and color theory", "Interactive design techniques", "Mobile-first design"],
    },
    "video-editing": {
        id: 6,
        category: ["Editing", "Technology"],
        imageSrc: videoEditingLogo,
        videoSrc: videoEditingVideo,
        altText: "video-editing",
        title: "Video Editing",
        description:
            "Learn to edit professional-grade videos with advanced effects and transitions.",
        details: ["Storyboarding", "Editing Techniques", "Color Grading", "Transitions", "Exporting"],
    },
};

