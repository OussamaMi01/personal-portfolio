import { v4 as uuidv4 } from 'uuid';

export const aboutMeData = [{
        id: uuidv4(),
        bio: " HI THERE! I'm Oussama Missaoui – a passionate Computer Science graduate and Cybersecurity Master's student who bridges the gap between software development and security engineering. With expertise spanning full-stack development, application security, and cybersecurity principles, I build resilient digital solutions that are both innovative and secure by design.",
        type: 'intro',
        emoji: '👋',
        highlight: 'bridges the gap between software development and security engineering'
    },
    {
        id: uuidv4(),
        bio: "As a Computer Science graduate, I specialize in creating responsive web applications using modern technologies like React, Next.js, Node.js, and MongoDB. My focus has shifted toward implementing security best practices, secure coding standards, and building applications with security built-in from the ground up.",
        type: 'technical',
        emoji: '💻',
        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Security Best Practices'],
        highlight: 'implementing security best practices and secure coding standards'
    },
    {
        id: uuidv4(),
        bio: "Currently pursuing my Master's in Cybersecurity, I'm diving deep into network security, ethical hacking, cryptography, and threat analysis. This academic journey complements my development skills by providing the security mindset needed for today's digital landscape.",
        type: 'cybersecurity',
        emoji: '🛡️',
        technologies: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Threat Analysis'],
        highlight: 'security mindset needed for today\'s digital landscape'
    },
    {
        id: uuidv4(),
        bio: "My technical foundation includes mobile development with React Native and Android Studio, now viewed through the lens of mobile security, secure authentication, and data protection on mobile platforms.",
        type: 'mobile',
        emoji: '📱',
        technologies: ['React Native', 'Android Studio', 'Mobile Security'],
        highlight: 'mobile security, secure authentication, and data protection'
    },
    {
        id: uuidv4(),
        bio: "I leverage Python for security scripting, automation, and data analysis tasks. My data science skills are now applied to security analytics, log analysis, and identifying patterns in security-related data.",
        type: 'data-security',
        emoji: '🔐',
        technologies: ['Python', 'Security Scripting', 'Security Analytics', 'Log Analysis'],
        highlight: 'security analytics and identifying patterns in security-related data'
    },
    {
        id: uuidv4(),
        bio: " What sets me apart is my unique combination of hands-on software development experience with formal cybersecurity education. I don't just build applications – I build secure, resilient systems that consider threat models, implement proper controls, and maintain security throughout the development lifecycle.",
        type: 'unique-value',
        emoji: '🚀',
        highlight: 'unique combination of software development with formal cybersecurity education'
    },
    {
        id: uuidv4(),
        bio: " I'm passionate about DevSecOps and integrating security into every phase of the development process. I thrive in environments where I can apply both my development skills and security knowledge to create products that are not only functional but also trustworthy and secure.",
        type: 'devsecops',
        emoji: '🔧',
        highlight: 'integrating security into every phase of the development process'
    },
    {
        id: uuidv4(),
        bio: " I'm actively seeking opportunities where I can contribute my dual expertise in development and security. Whether it's as a Security-focused Developer, Application Security Engineer, or in a role that bridges development and security teams, I'm excited to tackle security challenges in modern software systems.",
        type: 'career-goals',
        emoji: '🎯',
        highlight: 'dual expertise in development and security'
    }
];

// Enhanced data structure for different contexts
export const aboutMeSections = {
    short: [
        aboutMeData[0],
        aboutMeData[5],
        aboutMeData[7]
    ],
    detailed: aboutMeData,
    technical: aboutMeData.filter(item => ['technical', 'mobile', 'data-security'].includes(item.type)),
    cybersecurity: aboutMeData.filter(item => ['cybersecurity', 'devsecops', 'unique-value'].includes(item.type)),
    jobSeeking: aboutMeData.filter(item => ['intro', 'unique-value', 'career-goals'].includes(item.type))
};

// Personal information for quick access
export const personalInfo = {
    name: "Oussama Missaoui",
    title: "Computer Science Graduate | Cybersecurity Master's Student",
    location: "Sfax, Tunisia",
    email: "oussama.missaoui.it@domain.com",
    phone: "+216 23 257 784",
    status: "Actively seeking security-focused development roles",
    education: {
        bachelor: "Bachelor of Science in Computer Science",
        master: "Master's in Cybersecurity (Current Student)",
        institution: "FSEG Sfax"
    },
    focusAreas: [
        "Application Security",
        "Secure Software Development",
        "Full-Stack Development",
        "Network Security",
        "DevSecOps"
    ],
    currentlyLearning: [
        "Advanced Cybersecurity Concepts",
        "Penetration Testing Methodologies",
        "Cloud Security (AWS/Azure Security)",
        "Security Compliance & Standards"
    ],
    certifications: [
        "Planning: Security+, Network+, CySA+",
        "Future: OSCP, CISSP"
    ],
    funFacts: [
        "Can analyze code for vulnerabilities while writing it",
        "Believe security should be a feature, not an afterthought",
        "Enjoy participating in CTF competitions",
        "Passionate about security awareness and education",
        "Love breaking things to understand how to build them better"
    ]
};

// Skills breakdown for detailed view - UPDATED for security focus
export const skillsBreakdown = {
    development: {
        title: "Development Skills",
        items: [
            { name: "JavaScript/TypeScript", level: 90, category: "programming" },
            { name: "React/Next.js", level: 88, category: "frontend" },
            { name: "Node.js/Express", level: 85, category: "backend" },
            { name: "Python", level: 82, category: "programming" },
            { name: "MongoDB/PostgreSQL", level: 80, category: "database" },
            { name: "React Native", level: 78, category: "mobile" },
            { name: "Docker", level: 75, category: "devops" },
            { name: "Git/GitHub", level: 90, category: "tools" }
        ]
    },
    cybersecurity: {
        title: "Cybersecurity Skills",
        items: [
            { name: "Secure Coding Practices", level: 85, category: "application" },
            { name: "Network Security", level: 80, category: "network" },
            { name: "Threat Modeling", level: 75, category: "analysis" },
            { name: "Vulnerability Assessment", level: 78, category: "analysis" },
            { name: "Cryptography Basics", level: 70, category: "fundamentals" },
            { name: "Security Tools (Wireshark, Nmap)", level: 72, category: "tools" },
            { name: "OWASP Top 10", level: 85, category: "knowledge" },
            { name: "Security Compliance", level: 68, category: "governance" }
        ]
    },
    soft: {
        title: "Professional Skills",
        items: [
            { name: "Problem Solving", level: 92, category: "analytical" },
            { name: "Security Mindset", level: 88, category: "mindset" },
            { name: "Communication", level: 85, category: "interpersonal" },
            { name: "Team Collaboration", level: 90, category: "interpersonal" },
            { name: "Adaptability", level: 95, category: "personal" },
            { name: "Continuous Learning", level: 95, category: "personal" }
        ]
    }
};

// Career philosophy and values - UPDATED
export const careerPhilosophy = {
    mission: "To develop secure, resilient software systems by integrating cybersecurity principles throughout the development lifecycle, protecting digital assets while enabling innovation.",
    values: [{
            title: "Security by Design",
            description: "Believing that security should be integrated from the initial design phase, not bolted on at the end.",
            icon: "🛡️"
        },
        {
            title: "Continuous Learning",
            description: "Constantly updating both development and security skills in our rapidly evolving field.",
            icon: "📚"
        },
        {
            title: "Practical Application",
            description: "Applying academic cybersecurity knowledge to real-world development challenges.",
            icon: "🔧"
        },
        {
            title: "Collaboration",
            description: "Working with both development and security teams to create better, more secure products.",
            icon: "🤝"
        }
    ],
    goals: [
        "Become a bridge between development and security teams",
        "Master application security and secure coding practices",
        "Contribute to open-source security projects",
        "Obtain relevant security certifications (Security+, OSCP)",
        "Help organizations build more secure software systems"
    ],
    targetRoles: [
        "Security-focused Software Developer",
        "Application Security Engineer",
        "DevSecOps Engineer",
        "Security Analyst with Development Background",
        "Cybersecurity Consultant with Technical Implementation Skills"
    ]
};

// Helper functions
export const getBioByType = (type) => {
    return aboutMeData.filter(item => item.type === type);
};

export const getRandomFunFact = () => {
    return personalInfo.funFacts[Math.floor(Math.random() * personalInfo.funFacts.length)];
};

export const getSkillsByCategory = (category) => {
    return skillsBreakdown[category]?.items || [];
};

// New helper functions specific to your profile
export const getDevelopmentSkills = () => {
    return skillsBreakdown.development.items;
};

export const getSecuritySkills = () => {
    return skillsBreakdown.cybersecurity.items;
};

export const getCombinedExpertise = () => {
    return {
        strength: "Development + Security Education",
        description: "Practical coding skills combined with formal cybersecurity training",
        idealFor: [
            "Roles requiring understanding of both development and security",
            "Building security into applications from the start",
            "Translating security requirements into working code"
        ]
    };
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
    getSkillsByCategory,
    getDevelopmentSkills,
    getSecuritySkills,
    getCombinedExpertise
};

export default aboutMeExport;