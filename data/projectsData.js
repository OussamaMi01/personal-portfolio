import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
    {
        id: 'dfs-project-id', // Unique ID
        title: 'Distributed File System (DFS)',
        url: 'distributed-file-system-dfs',
        category: 'Distributed Systems',
        img: '/images/projects/dfs.jpg',
        role: ['engineer'],
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Distributed File System (DFS)',
            publishDate: 'Dec 2024',
            tags: ['Distributed Systems', 'Java', 'Networking'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Distributed File System Main Image',
                img: '/images/projects/dfs.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Designed and implemented a robust Distributed File System (DFS) using Java RMI for distributed data storage and retrieval, focusing on high availability and fault tolerance.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['Java', 'Java RMI', 'Distributed Systems', 'Fault Tolerance', 'Load Balancing'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Achieved 99.9% data availability and 20% faster retrieval by implementing fault tolerance and load balancing mechanisms.',
                },
                {
                    id: uuidv4(),
                    details: 'Reduced network overhead by 15% via efficient data transfer mechanisms, optimizing overall system performance.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/DFS',
                website: null,
                behance: null,
            },
        },
    },
    {
        id: 'corba-distributed-system-id', // Unique ID
        title: 'CORBA Distributed System',
        url: 'corba-distributed-system',
        category: 'Distributed Systems',
        img: '/images/projects/corba.jpg',
        role: ['engineer'],
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'CORBA Distributed System',
            publishDate: 'Dec 2024',
            tags: ['Distributed Systems', 'CORBA'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'CORBA Distributed System Main Image',
                img: '/images/projects/corba.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Built a CORBA-based distributed system, enabling seamless communication and interoperability between multiple client applications and a central server.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['CORBA', 'Distributed Systems', 'IDL'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Reduced latency by 25% by optimizing object invocation mechanisms.',
                },
                {
                    id: uuidv4(),
                    details: 'Demonstrated robust client-server interactions in a heterogeneous environment.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/CORBA-Distributed-System',
                website: null,
                behance: null,
            },
        },
    },
    {
        id: 'contact-management-app-id', // Unique ID
        title: 'Contact Management App',
        url: 'contact-management-app',
        category: 'Mobile Application',
        img: '/images/projects/contact-app.jpg',
        role: ['engineer'],
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Contact Management App',
            publishDate: 'Dec 2024',
            tags: ['Mobile App', 'Android', 'Java'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Contact Management App Main Image',
                img: '/images/projects/contact-app.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Developed an intuitive Android application in Java that allows users to securely store, efficiently edit, and quickly search contacts.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['Android Studio', 'Java', 'SQLite'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Optimized data retrieval by 35% for improved user experience, ensuring fast access to contact information.',
                },
                {
                    id: uuidv4(),
                    details: 'Achieved a 50% user satisfaction rate in initial testing, leading to further app refinements based on valuable feedback.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/Contact-Management-App',
                website: null,
                behance: null,
            },
        },
    },
    {
        id: 'ichri-ecommerce-website-id', // Unique ID
        title: 'Ichri.tn E-Commerce Website',
        url: 'ichri-ecommerce-website',
        category: 'Web Application',
        img: '/images/projects/ichri.jpg',
        role: ['engineer'],
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Ichri.tn E-Commerce Website',
            publishDate: 'Jan 2025',
            tags: ['Web Development', 'E-commerce', 'Spring Boot', 'Angular'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Ichri.tn E-Commerce Website Main Image',
                img: '/images/projects/ichri.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Developed a full-stack e-commerce platform for Ichri.tn, focusing on a seamless user experience, secure transactions, and efficient product management.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['Spring Boot', 'Angular', 'RESTful APIs', 'MySQL', 'JWT Authentication'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Implemented a robust back-end using Spring Boot and a dynamic front-end with Angular, ensuring high performance and scalability.',
                },
                {
                    id: uuidv4(),
                    details: 'Enabled smooth product browsing, secure checkout processes, and improved overall user experience by 30% through intuitive design and efficient API interactions.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/Ichri.tn-E-Commerce-Website',
                website: null,
                behance: null,
            },
        },
    },
    {
        id: 'credit-card-fraud-detection-id', // Unique ID
        title: 'Credit Card Fraud Detection',
        url: 'credit-card-fraud-detection',
        category: 'AI & Data Science',
        img: '/images/projects/fraud-detection.jpg',
        role: ['engineer'],
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Credit Card Fraud Detection',
            publishDate: 'Jan 2025',
            tags: ['Machine Learning', 'Python', 'Data Science'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Credit Card Fraud Detection Main Image',
                img: '/images/projects/fraud-detection.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Developed and trained a machine learning model to accurately detect fraudulent credit card transactions, minimizing financial risks.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['Python', 'Scikit-learn', 'Pandas', 'Numpy', 'Jupyter Notebook'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Achieved improved accuracy in fraud detection by analyzing complex transaction patterns and anomalies, reducing false positives.',
                },
                {
                    id: uuidv4(),
                    details: 'Implemented various classification algorithms and evaluated their performance to select the most effective model for real-time detection.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/Credit-Card-Fraud-Detection',
                website: null,
                behance: null,
            },
        },
    },
    {
        id: 'ai-matching-algorithm-id', // Unique ID
        title: 'AI Matching Algorithm For A Recruitment Platform',
        url: 'ai-matching-algorithm-for-recruitment',
        category: 'AI & Data Science',
        img: '/images/projects/ner-spacy.jpg',
        role: ['engineer'],
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'AI Matching Algorithm for Recruitment',
            publishDate: 'Feb 2025',
            tags: ['NLP', 'Machine Learning', 'Python', 'spaCy'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'AI Matching Algorithm Main Image',
                img: '/images/projects/ner-spacy.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Built a sophisticated AI-powered matching algorithm for a recruitment platform, leveraging NLP to accurately match candidates with job descriptions.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['Python', 'spaCy', 'NLP', 'Machine Learning', 'Text Mining'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Developed a Named Entity Recognition (NER) model using spaCy to extract key entities from resumes and job postings, significantly enhancing text analysis and data extraction capabilities.',
                },
                {
                    id: uuidv4(),
                    details: 'Improved candidate-job matching accuracy by 20%, leading to more relevant recommendations and a streamlined recruitment process.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/Matching-Algorithm-For-A-Recruitment-Platform',
                website: null,
                behance: null,
            },
        },
    },
    {
        id: 'car-selling-price-analysis-id', // Unique ID
        title: 'Analyzing Selling Price Of Used Cars',
        url: 'analyzing-selling-price-used-cars',
        category: 'AI & Data Science',
        img: '/images/projects/car-price-analysis.jpg',
        role: ['engineer'],
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Analyzing Selling Price Of Used Cars',
            publishDate: 'Feb 2025',
            tags: ['Data Analysis', 'Python', 'Predictive Modeling'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Analyzing Selling Price Of Used Cars Main Image',
                img: '/images/projects/car-price-analysis.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Conducted a comprehensive data analysis project in Python to identify and analyze factors affecting the selling price of used cars.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Built robust predictive models to accurately estimate car prices based on features like mileage, make, model, and condition, achieving high prediction accuracy.',
                },
                {
                    id: uuidv4(),
                    details: 'Provided key insights into market trends and pricing strategies through detailed data visualization and statistical analysis.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: 'https://github.com/OussamaMi01/Analyzing-Selling-Price-Of-Used-Cars',
                website: null,
                behance: null,
            },
        },
    },
    {
        id: 'siliana-kasserine-digital-art-behance-1', // Unique ID
        title: 'We Are Siliana-Kasserine: Collaborative Digital Art',
        url: null,
        category: 'Digital Art',
        img: '/images/projects/behance/behance_project1.jpg', // Cover image
        role: ['creator'],
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/203025723/We-Are-Siliana-Kasserine-Collaborative-Digital-Art',
        ProjectHeader: {
            title: 'We Are Siliana-Kasserine: Collaborative Digital Art',
            publishDate: 'May 2024',
            tags: ['Digital Art', 'Collaboration', 'Community Project', 'Photoshop'],
        },
        ProjectImages: [ // Images for detail page
            { id: uuidv4(), title: 'Siliana-Kasserine Image 1', img: '/images/projects/behance/behance_project1.jpg' },
            // Add more images for this project's gallery if needed
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'A unique digital art collaboration project focusing on the cultural essence of Siliana and Kasserine, promoting local heritage through digital mediums.',
            Technologies: [
                {
                    title: 'Tools Used',
                    techs: ['Adobe Photoshop', 'Digital Painting Software', 'Community Engagement Platforms'],
                },
            ],
            ProjectDetailsHeading: 'View Full Project on Behance',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Explore the creative process and final artworks of this collaborative digital art initiative. Click the link below to view the detailed case study and all artworks on Behance.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: null,
                website: null,
                behance: 'https://www.behance.net/gallery/203025723/We-Are-Siliana-Kasserine-Collaborative-Digital-Art',
            },
        },
    },
    {
        id: 'tunis-kasserine-digital-art-behance-1', // Unique ID
        title: 'We Are Tunis-Kasserine: Collaborative Digital Art 1',
        url: null,
        category: 'Digital Art',
        img: '/images/projects/behance/behance_project2.jpg', // Cover image
        role: ['creator'],
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/203025239/We-Are-Tunis-Kasserine-Collaborative-Digital-Art',
        ProjectHeader: {
            title: 'We Are Tunis-Kasserine: Collaborative Digital Art',
            publishDate: 'January 2024',
            tags: ['Digital Art', 'Collaboration', 'Community Project', 'Photoshop'],
        },
        ProjectImages: [ // Images for detail page
            { id: uuidv4(), title: 'Tunis-Kasserine Image 1', img: '/images/projects/behance/behance_project2.jpg' },
            // Add more images for this project's gallery if needed
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'A unique digital art collaboration project focusing on the cultural essence of Siliana and Kasserine, promoting local heritage through digital mediums.',
            Technologies: [
                {
                    title: 'Tools Used',
                    techs: ['Adobe Photoshop', 'Digital Painting Software', 'Community Engagement Platforms'],
                },
            ],
            ProjectDetailsHeading: 'View Full Project on Behance',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Explore the creative process and final artworks of this collaborative digital art initiative. Click the link below to view the detailed case study and all artworks on Behance.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: null,
                website: null,
                behance: 'https://www.behance.net/gallery/203025239/We-Are-Tunis-Kasserine-Collaborative-Digital-Art',
            },
        },
    },
    {
        id: 'tunis-kasserine-digital-art-behance-2', // Unique ID
        title: 'We Are Tunis-Kasserine: Collaborative Digital Art 2',
        url: null,
        category: 'Digital Art',
        img: '/images/projects/behance/behance_project3.jpg', // Cover image
        role: ['creator'],
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/202751727/We-Are-Tunis-Kasserine-Collaborative-Digital-Art',
        ProjectHeader: {
            title: 'We Are Tunis-Kasserine: Collaborative Digital Art',
            publishDate: 'January 2023',
            tags: ['Digital Art', 'Collaboration', 'Community Project', 'Photoshop'],
        },
        ProjectImages: [ // Images for detail page
            { id: uuidv4(), title: 'Tunis-Kasserine Image 2', img: '/images/projects/behance/behance_project3.jpg' },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'This design captures the essence of the Tunis and Kasserine architectural heritage in a surreal and captivating way.',
            Technologies: [
                {
                    title: 'Tools Used',
                    techs: ['Adobe Photoshop', 'Illustrator', 'Digital Painting Software', 'Community Engagement Platforms'],
                },
            ],
            ProjectDetailsHeading: 'View Full Project on Behance',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Explore the creative process and final artworks of this collaborative digital art initiative. Click the link below to view the detailed case study and all artworks on Behance.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: null,
                website: null,
                behance: 'https://www.behance.net/gallery/202751727/We-Are-Tunis-Kasserine-Collaborative-Digital-Art',
            },
        },
    },
    {
        id: 'we-are-kasserine-theme-nature-behance', // Unique ID
        title: 'We are Kasserine: Thème N°12 - Nature',
        url: null,
        category: 'Digital Art',
        img: '/images/projects/behance/behance_project4.jpg', // Cover image
        role: ['creator'],
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/201257041/We-are-Kasserine-Theme-N12-Nature',
        ProjectHeader: {
            title: 'We are Kasserine: Thème N°12 - Nature', // Corrected title
            publishDate: 'January 2023',
            tags: ['Digital Art', 'Collaboration', 'Community Project', 'Photoshop'],
        },
        ProjectImages: [ // Images for detail page
            { id: uuidv4(), title: 'Kasserine Nature Image', img: '/images/projects/behance/behance_project4.jpg' },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'This design features a vibrant vortex of natural elements, blending colors and abstract forms, created to represent the "Nature" theme for the "We are Kasserine" project.',
            Technologies: [
                {
                    title: 'Tools Used',
                    techs: ['Adobe Photoshop', 'Illustrator'],
                },
            ],
            ProjectDetailsHeading: 'View Full Project on Behance',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Explore the creative process and final artworks of this collaborative digital art initiative. Click the link below to view the detailed case study and all artworks on Behance.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: null,
                website: null,
                behance: 'https://www.behance.net/gallery/201257041/We-are-Kasserine-Theme-N12-Nature',
            },
        },
    },
    {
        id: 'radio-talk-kasserine-behance', 
        title: 'Radio Talk: We are Kasserine (mandat 22/23)',
        url: null,
        category: 'Digital Art',
        img: '/images/projects/behance/behance_project5.jpg', 
        role: ['creator'],
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/203027843/Passage-Radio-We-are-Kasserine-(mandat-2223)',
        ProjectHeader: {
            title: 'Radio Talk: We are Kasserine (mandat 22/23)', 
            publishDate: 'May 2023',
            tags: ['Digital Art', 'Collaboration', 'Community Project', 'Photoshop', 'Illustrator'],
        },
        ProjectImages: [ // Images for detail page
            { id: uuidv4(), title: 'Radio Talk Image 1', img: '/images/projects/behance/behance_project5.jpg' },
            { id: uuidv4(), title: 'Radio Talk Image 2', img: '/images/projects/behance/behance_project6.jpg' },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'This design features a vibrant vortex of natural elements, blending colors and abstract forms, created for the "We are Kasserine" radio talk during the 2022/2023 mandate.',
            Technologies: [
                {
                    title: 'Tools Used',
                    techs: ['Adobe Photoshop', 'Adobe Illustrator'],
                },
            ],
            ProjectDetailsHeading: 'Project Details',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Explore the creative process and final artworks of this collaborative digital art initiative. The project aims to visually represent the dynamic essence of Kasserine through digital mediums. Click the link below to view the detailed case study and all artworks on Behance for a comprehensive understanding.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: null,
                website: null,
                behance: 'https://www.behance.net/gallery/203027843/Passage-Radio-We-are-Kasserine-(mandat-2223)',
            },
        },
    },

    {
        id: 'spiderman-samy-chaffai-artwork-behance', 
        title: 'Spider-man X Samy Chaffai',
        url: null,
        category: 'Digital Art',
        img: '/images/projects/artwork/artwork1.jpg', 
        role: ['creator'],
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/203027843/Passage-Radio-We-are-Kasserine-(mandat-2223)',
        ProjectHeader: {
            title: 'Spider-man X Samy Chaffai', 
            publishDate: 'June 2023',
            tags: ['Digital Art' , 'Photoshop', 'Illustrator'],
        },
        ProjectImages: [ // Images for detail page
            { id: uuidv4(), title: 'Samy Chaffai Artwork', img: '/images/projects/artwork/artwork1.jpg' }
           
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'This art work is an inspiration from Spiderman movie, dedicated to the creative and hardworker person in Tunisia "Samy Chaffai".',
            Technologies: [
                {
                    title: 'Tools Used',
                    techs: ['Adobe Photoshop', 'Adobe Illustrator'],
                },
            ],
            ProjectDetailsHeading: 'Project Details',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Explore the creative process  of this  art work initiative. Click the link below to view the detailed case study and all artworks on Behance for a comprehensive understanding.',
                },
            ],
            SocialSharingHeading: null,
            SocialSharing: [],
            SocialLinks: {
                github: null,
                website: null,
                behance: 'https://www.behance.net/gallery/203027843/Passage-Radio-We-are-Kasserine-(mandat-2223)',
            },
        },
    },

{
    id: 'editing-challenge', // Unique ID for this video project
    title: 'Video Editor Challenge',
    url: 'editing-challenge', // Internal Next.js page slug
    category: 'Video Production',
    img: '/images/projects/cover/video_cover1.jpg', 
    role: ['creator'],
    isBehanceProject: false,
    behanceUrl: null,
    ProjectHeader: {
        title: 'Video Editor Challenge',
        publishDate: 'July 2024',
        tags: ['Video Production', 'Editing', 'Motion Graphics'],
    },
    ProjectImages: null, // Set to null if this project is primarily video-based and has no static images in its gallery
    ProjectVideos: [ // NEW: Array to hold video information
        
        {
            id: uuidv4(),
            title: 'My edit video',
            thumbnail: '/images/projects/cover/video_cover1.jpg', // Local thumbnail for this video
            driveEmbedUrl: 'https://drive.google.com/file/d/1Ac9o2Vpn1B-fiagdmwxFyCJfTQYjUgG0/preview', // <--- REPLACE WITH ACTUAL GOOGLE DRIVE EMBED URL
        },
        // Add more video objects as needed
    ],
    ProjectInfo: {
        ClientHeading: 'Project Overview',
        CompanyInfo: [],
        ObjectivesHeading: 'Objective',
       
        Technologies: [
            {
                title: 'Tools Used',
                techs: ['Adobe Premiere Pro', 'CapCut'],
            },
        ],
        ProjectDetailsHeading: 'Video Gallery',
        ProjectDetails: [
            {
                id: uuidv4(),
                details: 'This section highlights my expertise in video creation, including corporate videos, promotional content, and short documentaries. Click on any thumbnail to watch the video.',
            },
        ],
        SocialSharingHeading: null,
        SocialSharing: [],
        SocialLinks: {
            github: null,
            website: null,
            behance: null, 
        },
    },
},
{
    id: 'carry-trading', // Unique ID for this video project
    title: 'Carry Trading',
    url: 'carry-trading', // Internal Next.js page slug
    category: 'Video Production',
    img: '/images/projects/cover/video_cover2.jpg', // Cover image for the project card
    role: ['creator'],
    isBehanceProject: false,
    behanceUrl: null,
    ProjectHeader: {
        title: 'Carry Trading',
        publishDate: 'August 2024',
        tags: ['Video Production', 'Editing', 'Motion Graphics'],
    },
    ProjectImages: null, // Set to null if this project is primarily video-based and has no static images in its gallery
    ProjectVideos: [ // NEW: Array to hold video information
        
        {
            id: uuidv4(),
            title: 'Carry Trading',
            thumbnail: '/images/projects/cover/video_cover2.jpg', // Local thumbnail for this video
            driveEmbedUrl: 'https://drive.google.com/file/d/19nEujBnbxFcMrN0_8mtS_D_dJg1y83qS/preview',
        },
        // Add more video objects as needed
    ],
    ProjectInfo: {
        ClientHeading: 'Project Overview',
        CompanyInfo: [],
        ObjectivesHeading: 'Objective',
       
        Technologies: [
            {
                title: 'Tools Used',
                techs: ['Adobe Premiere Pro', 'CapCut'],
            },
        ],
        ProjectDetailsHeading: 'Video Gallery',
        ProjectDetails: [
            {
                id: uuidv4(),
                details: 'This section highlights my expertise in video creation, including corporate videos, promotional content, and short documentaries. Click on any thumbnail to watch the video.',
            },
        ],
        SocialSharingHeading: null,
        SocialSharing: [],
        SocialLinks: {
            github: null,
            website: null,
            behance: null, 
        },
    },
},
{
    id: 'digital-marketing-with-rabii', 
    title: 'Optimize your SEO Keywords',
    url: 'digital-marketing-with-rabii', 
    category: 'Video Production',
    img: '/images/projects/cover/video_cover5.jpg', // Cover image for the project card
    role: ['creator'],
    isBehanceProject: false,
    behanceUrl: null,
    ProjectHeader: {
        title: 'Optimize your SEO Keywords',
        publishDate: 'August 2024',
        tags: ['Video Production', 'Editing'],
    },
    ProjectImages: null, // Set to null if this project is primarily video-based and has no static images in its gallery
    ProjectVideos: [ // NEW: Array to hold video information
        
        {
            id: uuidv4(),
            title: 'Optimize your SEO Keywords (Arabic Version)',
            thumbnail: '/images/projects/cover/video_cover5.jpg', // Local thumbnail for this video
            driveEmbedUrl: 'https://drive.google.com/file/d/1AHH9RW1Nulrg_zbvtInV2K4eSBNvpUei/preview',
        },
        
    ],
    ProjectInfo: {
        ClientHeading: 'Project Overview',
        CompanyInfo: [],
        ObjectivesHeading: 'Objective',
       
        Technologies: [
            {
                title: 'Tools Used',
                techs: [ 'CapCut'],
            },
        ],
        ProjectDetailsHeading: 'Video Gallery',
        ProjectDetails: [
            {
                id: uuidv4(),
                details: 'This section highlights my expertise in video creation, including corporate videos, promotional content, and short documentaries. Click on any thumbnail to watch the video.',
            },
        ],
        SocialSharingHeading: null,
        SocialSharing: [],
        SocialLinks: {
            github: null,
            website: null,
            behance: null, 
        },
    },
},

{
    id: 'e-book-promo-video', // Unique ID for this video project
    title: 'E-book Promo',
    url: 'carry-trading', 
    category: 'Video Production',
    img: '/images/projects/cover/video_cover4.jpg', // Cover image for the project card
    role: ['creator'],
    isBehanceProject: false,
    behanceUrl: null,
    ProjectHeader: {
        title: 'E-book Promo',
        publishDate: 'August 2024',
        tags: ['Video Production', 'Editing', 'Motion Graphics'],
    },
    ProjectImages: null, // Set to null if this project is primarily video-based and has no static images in its gallery
    ProjectVideos: [ // NEW: Array to hold video information
        
        {
            id: uuidv4(),
            title: 'E-book Promo',
            thumbnail: '/images/projects/cover/video_cover3.jpg', 
            driveEmbedUrl: 'https://drive.google.com/file/d/19vhL9Tb6F6dS_VQfM8-gOTE5Xtt6T3_t/preview',
        },
        // Add more video objects as needed
    ],
    ProjectInfo: {
        ClientHeading: 'Project Overview',
        CompanyInfo: [],
        ObjectivesHeading: 'Objective',
       
        Technologies: [
            {
                title: 'Tools Used',
                techs: ['Adobe Premiere Pro', 'CapCut'],
            },
        ],
        ProjectDetailsHeading: 'Video Gallery',
        ProjectDetails: [
            {
                id: uuidv4(),
                details: 'This section highlights my expertise in video creation, including corporate videos, promotional content, and short documentaries. Click on any thumbnail to watch the video.',
            },
        ],
        SocialSharingHeading: null,
        SocialSharing: [],
        SocialLinks: {
            github: null,
            website: null,
            behance: null, 
        },
    },
},

{
    id: 'youtube-thumbnail', 
    title: 'Youtube Thumbnail',
    url: null,
    category: 'Digital Art',
    img: '/images/projects/behance/behance_project7.png', 
    role: ['creator'],
    isBehanceProject: true,
    behanceUrl: 'https://www.behance.net/gallery/230308875/Youtube-Thumbnail',
    ProjectHeader: {
        title: 'Youtube Thumbnail', 
        publishDate: 'Sep 2024',
        tags: ['Thumbnail' , 'Photoshop', 'Picsart', 'Digital Art'],
    },
    ProjectImages: [ // Images for detail page
        { id: uuidv4(), title: 'Youtube Thumbnail', img: '/images/projects/behance/behance_project7.png' }
       
    ],
    ProjectInfo: {
        ClientHeading: 'Project Overview',
        CompanyInfo: [],
        ObjectivesHeading: 'Objective',
        ObjectivesDetails: 'This Youtube thumbnail is designed to highlight the creative process and final artworks of this collaborative digital art initiative with a content creator .',
        Technologies: [
            {
                title: 'Tools Used',
                techs: ['Adobe Photoshop', 'Picsart'],
            },
        ],
        ProjectDetailsHeading: 'Project Details',
        ProjectDetails: [
            {
                id: uuidv4(),
                details: 'Explore the creative process  of this  art work initiative. Click the link below to view the detailed case study and all artworks on Behance for a comprehensive understanding.',
            },
        ],
        SocialSharingHeading: null,
        SocialSharing: [],
        SocialLinks: {
            github: null,
            website: null,
            behance: 'https://www.behance.net/gallery/230308875/Youtube-Thumbnail',
        },
    },
},



    
];