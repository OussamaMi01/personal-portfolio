import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
    {
        id: 'dfs-project-id', // Unique ID
        title: 'Distributed File System (DFS)',
        url: 'distributed-file-system-dfs',
        category: 'Distributed Systems',
        img: '/images/projects/dfs.jpg',
        role: ['engineer'],
        status: 'done', // ✅ Statut ajouté
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
        status: 'done', // ✅ Statut ajouté
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
        status: 'done', // ✅ Statut ajouté
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
        status: 'done', // ✅ Statut ajouté
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
        status: 'done', // ✅ Statut ajouté
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
        status: 'done', // ✅ Statut ajouté
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
        status: 'done', // ✅ Statut ajouté
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
        img: '/images/projects/behance/behance_project1.jpg',
        role: ['creator'],
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/203025723/We-Are-Siliana-Kasserine-Collaborative-Digital-Art',
        ProjectHeader: {
            title: 'We Are Siliana-Kasserine: Collaborative Digital Art',
            publishDate: 'May 2024',
            tags: ['Digital Art', 'Collaboration', 'Community Project', 'Photoshop'],
        },
        ProjectImages: [
            { id: uuidv4(), title: 'Siliana-Kasserine Image 1', img: '/images/projects/behance/behance_project1.jpg' },
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
        img: '/images/projects/behance/behance_project2.jpg',
        role: ['creator'],
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/203025239/We-Are-Tunis-Kasserine-Collaborative-Digital-Art',
        ProjectHeader: {
            title: 'We Are Tunis-Kasserine: Collaborative Digital Art',
            publishDate: 'January 2024',
            tags: ['Digital Art', 'Collaboration', 'Community Project', 'Photoshop'],
        },
        ProjectImages: [
            { id: uuidv4(), title: 'Tunis-Kasserine Image 1', img: '/images/projects/behance/behance_project2.jpg' },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'A unique digital art collaboration project focusing on the cultural essence of Tunis and Kasserine, promoting local heritage through digital mediums.',
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
        img: '/images/projects/behance/behance_project3.jpg',
        role: ['creator'],
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/202751727/We-Are-Tunis-Kasserine-Collaborative-Digital-Art',
        ProjectHeader: {
            title: 'We Are Tunis-Kasserine: Collaborative Digital Art',
            publishDate: 'January 2023',
            tags: ['Digital Art', 'Collaboration', 'Community Project', 'Photoshop'],
        },
        ProjectImages: [
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
        img: '/images/projects/behance/behance_project4.jpg',
        role: ['creator'],
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/201257041/We-are-Kasserine-Theme-N12-Nature',
        ProjectHeader: {
            title: 'We are Kasserine: Thème N°12 - Nature',
            publishDate: 'January 2023',
            tags: ['Digital Art', 'Collaboration', 'Community Project', 'Photoshop'],
        },
        ProjectImages: [
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
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/203027843/Passage-Radio-We-are-Kasserine-(mandat-2223)',
        ProjectHeader: {
            title: 'Radio Talk: We are Kasserine (mandat 22/23)',
            publishDate: 'May 2023',
            tags: ['Digital Art', 'Collaboration', 'Community Project', 'Photoshop', 'Illustrator'],
        },
        ProjectImages: [
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
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/203027843/Passage-Radio-We-are-Kasserine-(mandat-2223)',
        ProjectHeader: {
            title: 'Spider-man X Samy Chaffai',
            publishDate: 'June 2023',
            tags: ['Digital Art', 'Photoshop', 'Illustrator'],
        },
        ProjectImages: [
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
                    details: 'Explore the creative process of this art work initiative. Click the link below to view the detailed case study and all artworks on Behance for a comprehensive understanding.',
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
        id: 'editing-challenge',
        title: 'Video Editor Challenge',
        url: 'editing-challenge',
        category: 'Video Production',
        img: '/images/projects/cover/video_cover1.jpg',
        role: ['creator'],
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Video Editor Challenge',
            publishDate: 'July 2024',
            tags: ['Video Production', 'Editing', 'Motion Graphics'],
        },
        ProjectImages: null,
        ProjectVideos: [
            {
                id: uuidv4(),
                title: 'My edit video',
                thumbnail: '/images/projects/cover/video_cover1.jpg',
                driveEmbedUrl: 'https://drive.google.com/file/d/1Ac9o2Vpn1B-fiagdmwxFyCJfTQYjUgG0/preview',
            },
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
        id: 'carry-trading',
        title: 'Carry Trading',
        url: 'carry-trading',
        category: 'Video Production',
        img: '/images/projects/cover/video_cover2.jpg',
        role: ['creator'],
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Carry Trading',
            publishDate: 'August 2024',
            tags: ['Video Production', 'Editing', 'Motion Graphics'],
        },
        ProjectImages: null,
        ProjectVideos: [
            {
                id: uuidv4(),
                title: 'Carry Trading',
                thumbnail: '/images/projects/cover/video_cover2.jpg',
                driveEmbedUrl: 'https://drive.google.com/file/d/19nEujBnbxFcMrN0_8mtS_D_dJg1y83qS/preview',
            },
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
        img: '/images/projects/cover/video_cover5.jpg',
        role: ['creator'],
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Optimize your SEO Keywords',
            publishDate: 'August 2024',
            tags: ['Video Production', 'Editing'],
        },
        ProjectImages: null,
        ProjectVideos: [
            {
                id: uuidv4(),
                title: 'Optimize your SEO Keywords (Arabic Version)',
                thumbnail: '/images/projects/cover/video_cover5.jpg',
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
                    techs: ['CapCut'],
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
        id: 'e-book-promo-video',
        title: 'E-book Promo',
        url: 'e-book-promo',
        category: 'Video Production',
        img: '/images/projects/cover/video_cover4.jpg',
        role: ['creator'],
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'E-book Promo',
            publishDate: 'August 2024',
            tags: ['Video Production', 'Editing', 'Motion Graphics'],
        },
        ProjectImages: null,
        ProjectVideos: [
            {
                id: uuidv4(),
                title: 'E-book Promo',
                thumbnail: '/images/projects/cover/video_cover3.jpg',
                driveEmbedUrl: 'https://drive.google.com/file/d/19vhL9Tb6F6dS_VQfM8-gOTE5Xtt6T3_t/preview',
            },
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
        status: 'done', // ✅ Statut ajouté
        isBehanceProject: true,
        behanceUrl: 'https://www.behance.net/gallery/230308875/Youtube-Thumbnail',
        ProjectHeader: {
            title: 'Youtube Thumbnail',
            publishDate: 'Sep 2024',
            tags: ['Thumbnail', 'Photoshop', 'Picsart', 'Digital Art'],
        },
        ProjectImages: [
            { id: uuidv4(), title: 'Youtube Thumbnail', img: '/images/projects/behance/behance_project7.png' }
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'This Youtube thumbnail is designed to highlight the creative process and final artworks of this collaborative digital art initiative with a content creator.',
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
                    details: 'Explore the creative process of this art work initiative. Click the link below to view the detailed case study and all artworks on Behance for a comprehensive understanding.',
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
    // ==================== NOUVEAUX PROJETS À AJOUTER ====================

    // 1. Audit de sécurité d'application web (OWASP ASVS)
    {
        id: 'web-security-audit-owasp',
        title: 'Audit de sécurité OWASP ASVS',
        url: 'web-security-audit-owasp',
        category: 'Cybersecurity',
        img: '/images/projects/security-audit.jpg', // À créer
        role: ['engineer'],
        status: 'done', // ✅ Terminé (projet de l'examen d'audit)
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Audit de sécurité selon OWASP ASVS',
            publishDate: 'March 2026',
            tags: ['Cybersecurity', 'OWASP', 'Security Audit', 'Risk Assessment'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Security Audit Main Image',
                img: '/images/projects/security-audit.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Conducted a comprehensive security audit of a web application following the OWASP ASVS (Application Security Verification Standard) methodology. The audit covered authentication, session management, access control, input validation, and cryptographic controls.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['OWASP ASVS', 'Nmap', 'Burp Suite', 'OWASP ZAP', 'Security Testing'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Identified 15+ security vulnerabilities including SQL injection, XSS, and misconfigured security headers, with criticality assessment and remediation recommendations.',
                },
                {
                    id: uuidv4(),
                    details: 'Delivered a complete security audit report with executive summary, findings, risk assessment matrix, and prioritized remediation plan.',
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

    // 2. LPIC-2 (auto-apprentissage - concepts clés)
    {
        id: 'lpic2-self-study',
        title: 'LPIC-2 - Administration système avancée',
        url: 'lpic2-self-study',
        category: 'System Administration',
        img: '/images/projects/lpic2.jpg', // À créer
        role: ['engineer'],
        status: 'in-progress', // 🟡 En cours
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'LPIC-2 - Administration système avancée',
            publishDate: 'March 2026',
            tags: ['Linux', 'System Administration', 'Kernel', 'DNS', 'Filesystems'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'LPIC-2 Main Image',
                img: '/images/projects/lpic2.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Self-study and hands-on practice for LPIC-2 certification (Linux Professional Institute Certification Level 2). Focused on kernel management, filesystem administration, and DNS/BIND configuration.',
            Technologies: [
                {
                    title: 'Topics Covered',
                    techs: ['Linux Kernel (modules, compilation)', 'Filesystems (ext4, XFS, LVM, RAID)', 'DNS (BIND9, zones, records)', 'System Performance', 'Network Configuration'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Mastered kernel module management, compilation, and troubleshooting through hands-on labs.',
                },
                {
                    id: uuidv4(),
                    details: 'Configured and secured DNS servers with BIND9, including forward/reverse zones and security best practices.',
                },
                {
                    id: uuidv4(),
                    details: 'Implemented advanced filesystem management including LVM, software RAID, and filesystem repair techniques.',
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

    // 3. Projet Cloud (AWS Academy / Virtualisation)
    {
        id: 'aws-cloud-security',
        title: 'Sécurisation d\'infrastructure Cloud AWS',
        url: 'aws-cloud-security',
        category: 'Cloud Computing',
        img: '/images/projects/aws-cloud.png', // À créer
        role: ['engineer'],
        status: 'in-progress', // 🟡 En cours
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Sécurisation d\'infrastructure Cloud AWS',
            publishDate: 'March 2026',
            tags: ['AWS', 'Cloud Security', 'DevSecOps', 'Virtualization'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'AWS Cloud Security Main Image',
                img: '/images/projects/aws-cloud.png',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Deployed and secured a cloud infrastructure on AWS following best practices. Implemented network security, identity management, and data protection for a multi-tier web application.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['AWS (EC2, S3, VPC, IAM, WAF)', 'Security Groups', 'TLS/SSL', 'Cloud Security Best Practices'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Designed and implemented a secure VPC with public/private subnets, NAT gateways, and security groups following least-privilege principles.',
                },
                {
                    id: uuidv4(),
                    details: 'Configured IAM roles and policies for fine-grained access control, implemented MFA, and set up CloudTrail for audit logging.',
                },
                {
                    id: uuidv4(),
                    details: 'Deployed a web application with HTTPS termination using Application Load Balancer and AWS Certificate Manager.',
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

    // 4. IAM - Contrôle d'accès (projet de la fiche)
    {
        id: 'iam-access-control',
        title: 'Système d\'authentification avec IAM et MFA',
        url: 'iam-access-control',
        category: 'Cybersecurity',
        img: '/images/projects/iam.jpg', // À créer
        role: ['engineer'],
        status: 'done', // ✅ Terminé (projet de la fiche)
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Système d\'authentification avec IAM et MFA',
            publishDate: 'March 2026',
            tags: ['IAM', 'Authentication', 'MFA', 'Cybersecurity', 'RBAC'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'IAM System Main Image',
                img: '/images/projects/iam.jpg',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Built a complete identity and access management system with role-based access control (RBAC), multi-factor authentication (MFA), and secure session management.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['JWT', 'OAuth2', 'MFA (TOTP)', 'RBAC', 'Password Hashing (bcrypt)'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Implemented role-based access control with granular permissions for admin, manager, and user roles.',
                },
                {
                    id: uuidv4(),
                    details: 'Integrated time-based one-time password (TOTP) for MFA using Google Authenticator.',
                },
                {
                    id: uuidv4(),
                    details: 'Designed secure session management with JWT tokens, including proper expiration and refresh mechanisms.',
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

    // 5. Projet ITIL v3 (pour l'examen - mais pas à mettre en avant)
    // Optionnel : tu peux l'ajouter si tu veux montrer ta capacité à apprendre des frameworks IT
    {
        id: 'itil-process-implementation',
        title: 'Implémentation de processus ITIL ',
        url: 'itil-process-implementation',
        category: 'IT Service Management',
        img: '/images/projects/itil.png', // À créer
        role: ['engineer'],
        status: 'done', // ✅ Terminé (projet du cours)
        isBehanceProject: false,
        behanceUrl: null,
        ProjectHeader: {
            title: 'Implémentation de processus ITIL',
            publishDate: 'March 2026',
            tags: ['ITIL', 'Service Management', 'SLA', 'IT Processes'],
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'ITIL Implementation Main Image',
                img: '/images/projects/itil.png',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Overview',
            CompanyInfo: [],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'Studied and documented the implementation of key ITIL processes including Service Level Management, Availability Management, and Security Management.',
            Technologies: [
                {
                    title: 'Processes Covered',
                    techs: ['SLA/SLR/OLA/UC', 'MTBF/MTRS', 'CIA (Confidentiality, Integrity, Availability)', 'RACI Matrix'],
                },
            ],
            ProjectDetailsHeading: 'Key Achievements',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: 'Designed SLA templates and monitoring charts for service level agreements.',
                },
                {
                    id: uuidv4(),
                    details: 'Applied ITIL concepts to real-world scenarios through case studies and exercises.',
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
];