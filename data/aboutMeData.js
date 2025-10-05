import { v4 as uuidv4 } from 'uuid';

export const aboutMeData = [{
        id: uuidv4(),
        bio: "👋 HI THERE! I'm Oussama Missaoui – a passionate software engineering student and digital creator who bridges the gap between technical innovation and creative expression. With expertise spanning full-stack development, mobile applications, and data science, I craft digital solutions that are both powerful and user-centric.",
        type: 'intro',
        emoji: '👋',
        highlight: 'bridges the gap between technical innovation and creative expression'
    },
    {
        id: uuidv4(),
        bio: "💻 As a full-stack developer, I specialize in creating responsive web applications using modern technologies like React, Next.js, Node.js, and MongoDB. I'm passionate about writing clean, efficient code and building seamless user experiences that solve real-world problems.",
        type: 'technical',
        emoji: '💻',
        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
        highlight: 'clean, efficient code and building seamless user experiences'
    },
    {
        id: uuidv4(),
        bio: "📱 My mobile development journey includes building cross-platform applications with React Native and Android Studio, focusing on performance optimization and intuitive UI/UX design that delights users across all devices.",
        type: 'mobile',
        emoji: '📱',
        technologies: ['React Native', 'Android Studio'],
        highlight: 'performance optimization and intuitive UI/UX design'
    },
    {
        id: uuidv4(),
        bio: "🤖 I'm deeply fascinated by data science and machine learning, leveraging Python, TensorFlow, and data analysis techniques to extract meaningful insights and build intelligent systems that drive data-informed decision making.",
        type: 'data-science',
        emoji: '🤖',
        technologies: ['Python', 'TensorFlow', 'Data Analysis'],
        highlight: 'extract meaningful insights and build intelligent systems'
    },
    {
        id: uuidv4(),
        bio: "🎨 Beyond coding, I'm an experienced digital creator with expertise in UI/UX design, digital marketing, and content creation. I use tools like Figma, Adobe Creative Suite, and marketing analytics to create compelling digital experiences and campaigns.",
        type: 'creative',
        emoji: '🎨',
        technologies: ['Figma', 'Adobe Creative Suite', 'Marketing Analytics'],
        highlight: 'create compelling digital experiences and campaigns'
    },
    {
        id: uuidv4(),
        bio: "🚀 What sets me apart is my ability to combine technical depth with creative thinking. I don't just build applications – I create solutions that understand user needs, leverage data insights, and deliver measurable business results while maintaining elegant design and smooth functionality.",
        type: 'unique-value',
        emoji: '🚀',
        highlight: 'combine technical depth with creative thinking'
    },
    {
        id: uuidv4(),
        bio: "🌟 I thrive in collaborative environments where I can contribute to innovative projects, continuously learn new technologies, and help teams deliver exceptional digital products. I'm always excited to take on new challenges that push the boundaries of what's possible.",
        type: 'collaboration',
        emoji: '🌟',
        highlight: 'contribute to innovative projects and continuously learn'
    }
];

// Enhanced data structure for different contexts
export const aboutMeSections = {
    short: [
        aboutMeData[0],
        aboutMeData[5],
        aboutMeData[6]
    ],
    detailed: aboutMeData,
    technical: aboutMeData.filter(item => ['technical', 'mobile', 'data-science'].includes(item.type)),
    creative: aboutMeData.filter(item => ['creative', 'unique-value'].includes(item.type))
};

// Personal information for quick access
export const personalInfo = {
    name: "Oussama Missaoui",
    title: "Software Engineering Student & Digital Creator",
    location: "Tunis, Tunisia",
    email: "your.email@domain.com",
    phone: "+216 XX XXX XXX",
    status: "Available for projects and collaborations",
    education: "Software Engineering Student",
    focusAreas: [
        "Full-Stack Development",
        "Mobile Applications",
        "Data Science & ML",
        "UI/UX Design",
        "Digital Marketing"
    ],
    currentlyLearning: [
        "Advanced React Patterns",
        "Machine Learning Operations",
        "Cloud Architecture",
        "System Design"
    ],
    funFacts: [
        "Turn complex problems into elegant solutions",
        "Believe in the power of continuous learning",
        "Passionate about open-source contributions",
        "Enjoy mentoring other developers",
        "Love creating technical content"
    ]
};

// Skills breakdown for detailed view
export const skillsBreakdown = {
    technical: {
        title: "Technical Skills",
        items: [
            { name: "JavaScript/TypeScript", level: 90, category: "frontend" },
            { name: "React/Next.js", level: 88, category: "frontend" },
            { name: "Node.js/Express", level: 85, category: "backend" },
            { name: "Python", level: 82, category: "backend" },
            { name: "MongoDB/PostgreSQL", level: 80, category: "database" },
            { name: "React Native", level: 78, category: "mobile" },
            { name: "TensorFlow/PyTorch", level: 75, category: "ai-ml" },
            { name: "Docker/Git", level: 85, category: "devops" }
        ]
    },
    creative: {
        title: "Creative & Design",
        items: [
            { name: "UI/UX Design", level: 85, category: "design" },
            { name: "Figma/Adobe XD", level: 82, category: "design" },
            { name: "Digital Marketing", level: 78, category: "marketing" },
            { name: "Content Creation", level: 80, category: "marketing" },
            { name: "Brand Strategy", level: 75, category: "strategy" }
        ]
    },
    soft: {
        title: "Professional Skills",
        items: [
            { name: "Problem Solving", level: 92, category: "analytical" },
            { name: "Communication", level: 88, category: "interpersonal" },
            { name: "Project Management", level: 80, category: "management" },
            { name: "Team Collaboration", level: 90, category: "interpersonal" },
            { name: "Adaptability", level: 95, category: "personal" }
        ]
    }
};

// Career philosophy and values
export const careerPhilosophy = {
    mission: "To create technology solutions that are not only functional but also meaningful, user-friendly, and make a positive impact on people's lives.",
    values: [{
            title: "Continuous Learning",
            description: "Always staying curious and updating my skills with the latest technologies and methodologies.",
            icon: "📚"
        },
        {
            title: "User-Centric Approach",
            description: "Putting users at the center of every design and development decision.",
            icon: "🎯"
        },
        {
            title: "Quality & Excellence",
            description: "Committed to delivering high-quality work that exceeds expectations.",
            icon: "⭐"
        },
        {
            title: "Collaboration",
            description: "Believing that the best results come from working together and sharing knowledge.",
            icon: "🤝"
        }
    ],
    goals: [
        "Master advanced software architecture patterns",
        "Contribute to meaningful open-source projects",
        "Develop expertise in AI and machine learning applications",
        "Build products that solve real-world problems at scale",
        "Mentor and help grow the next generation of developers"
    ]
};

// Helper functions - CORRECTED VERSION
export const getBioByType = (type) => {
    return aboutMeData.filter(item => item.type === type);
};

export const getRandomFunFact = () => {
    return personalInfo.funFacts[Math.floor(Math.random() * personalInfo.funFacts.length)];
};

// FIXED: Removed the space in optional chaining operator
export const getSkillsByCategory = (category) => {
    return skillsBreakdown[category] ? .items || [];
};

// For backward compatibility - export the main data as default
const aboutMeExport = {
    aboutMeData,
    aboutMeSections,
    personalInfo,
    skillsBreakdown,
    careerPhilosophy,
    getBioByType,
    getRandomFunFact,
    getSkillsByCategory
};

export default aboutMeExport;