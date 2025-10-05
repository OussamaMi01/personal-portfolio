import { v4 as uuidv4 } from 'uuid';

export const experienceData = [
    {
        id: uuidv4(),
        title: 'Software Developer Intern',
        company: 'AL Idhafa Company',
        location: 'Kasserine, Tunisia',
        startDate: 'Feb 2025',
        endDate: 'May 2025',
        type: 'Internship',
        image: '/images/company-logos/al-idhafa.png',
        role: ['engineer'], // Added role
        description: [
            'Developing key features for a job portal and smart recruitment platform',
            'Implementing AI-powered resume screening and automated candidate matching',
            'Building real-time job recommendation algorithms to enhance user experience',
            'Designing an intuitive employer dashboard for streamlined hiring processes',
            'Optimizing search algorithms to improve job-candidate matching efficiency',
            'Collaborating with cross-functional teams to develop scalable solutions'
        ],
        technologies: [
            'JavaScript', 'Node.js', 'React', 'MongoDB',
            'AI Algorithms', 'Python', 'Express.js'
        ]
    },
    {
        id: uuidv4(),
        title: 'Web Developer',
        company: 'Upwork',
        location: 'Remote',
        startDate: 'Jun 2024',
        endDate: 'Present',
        type: 'Freelance',
        image: '/images/company-logos/upwork.png',
        role: ['engineer'], // Added role
        description: [
            'Developing scalable e-commerce platforms using Angular and Node.js',
            'Implementing responsive front-ends improving user accessibility by 40%',
            'Building secure payment gateways with 90% transaction reliability',
            'Designing MongoDB databases for product and order management',
            'Optimizing application performance for high-traffic scenarios'
        ],
        technologies: [
            'Angular', 'Node.js', 'TypeScript', 'MongoDB',
            'Payment Gateways', 'REST APIs', 'Responsive Design'
        ]
    },
    {
        id: uuidv4(),
        title: 'Marketing Manager',
        company: 'We Are Kasserine - Tunivisions Foundation',
        location: 'Kasserine, Tunisia',
        startDate: 'Nov 2022',
        endDate: 'Jun 2023',
        type: 'Part-time',
        image: '/images/company-logos/we_are_kasserine.png',
        role: ['creator'], // Added role
        description: [
            'Created 10+ digital campaigns achieving 30% brand visibility growth',
            'Boosted social media engagement by 20% through targeted strategies',
            'Designed marketing plans aligned with organizational objectives',
            'Managed content creation and distribution across multiple platforms',
            'Analyzed campaign performance metrics to optimize future initiatives'
        ],
        technologies: [
            'Digital Marketing', 'Social Media', 'Content Strategy',
            'Brand Management', 'Analytics', 'Campaign Planning'
        ]
    },
    {
        id: uuidv4(),
        title: 'Freelance Graphic Designer',
        company: 'Social Media Platforms',
        location: 'Remote',
        startDate: 'Mar 2020',
        endDate: 'Present',
        type: 'Freelance',
        image: '/images/company-logos/social-media.png',
        role: ['creator'], // Added role
        description: [
            'Delivered 20+ successful design projects for diverse clients',
            'Achieved 70% client retention through effective collaboration',
            'Developed brand identities increasing recognition by 50%',
            'Created marketing materials across digital and print media',
            'Maintained 80% first-draft approval rate through client communication'
        ],
        technologies: [
            'Adobe Photoshop', 'Illustrator', 'Brand Identity',
            'Marketing Design', 'UI/UX', 'Visual Communication'
        ]
    },
    {
        id: uuidv4(),
        title: 'Digital Content Creator',
        company: 'Independent Projects',
        location: 'Online',
        startDate: '2019',
        endDate: 'Present',
        type: 'Freelance',
        image: '/images/company-logos/freelancer.png',
        role: ['creator'], // Added role
        description: [
            'Produced engaging content across multiple digital platforms',
            'Grew audience engagement by 20% through strategic content planning',
            'Developed video content with 500k+ combined views',
            'Created social media campaigns boosting brand visibility by 30%',
            'Collaborated with brands to create sponsored content'
        ],
        technologies: [
            'Video Production', 'Content Strategy', 'Social Media',
            'Adobe Premiere', 'Motion Graphics', 'Audience Analytics'
        ]
    }
];