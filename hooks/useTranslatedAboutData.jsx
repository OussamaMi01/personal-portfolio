// hooks/useTranslatedAboutData.js
import { useTranslation } from 'next-i18next';
import { v4 as uuidv4 } from 'uuid';

export const useTranslatedAboutData = () => {
  const { t } = useTranslation('about');

  // Debug: Log what's being loaded
  console.log('Full about translation:', t('about', { returnObjects: true }));
  console.log('aboutMe data:', t('aboutMe', { returnObjects: true }));
  console.log('sections data:', t('sections', { returnObjects: true }));

  // Try different possible paths to find the about me data
  let aboutMeArray = [];
  
  // Check if data is in 'aboutMe' array (your French JSON structure)
  const aboutMeFromArray = t('aboutMe', { returnObjects: true });
  if (Array.isArray(aboutMeFromArray)) {
    aboutMeArray = aboutMeFromArray;
    console.log('Found aboutMe array with', aboutMeArray.length, 'items');
  }
  // Check if data is in 'sections' object (your English JSON structure)
  else if (t('sections', { returnObjects: true })) {
    const sections = t('sections', { returnObjects: true });
    // Convert sections object to array
    aboutMeArray = Object.entries(sections).map(([key, value]) => ({
      ...value,
      type: key,
      id: uuidv4()
    }));
    console.log('Converted sections to array with', aboutMeArray.length, 'items');
  }
  // Check if data is directly in 'about' (some other structure)
  else if (t('about', { returnObjects: true })) {
    const aboutData = t('about', { returnObjects: true });
    if (Array.isArray(aboutData)) {
      aboutMeArray = aboutData;
    } else if (aboutData.sections) {
      aboutMeArray = Object.entries(aboutData.sections).map(([key, value]) => ({
        ...value,
        type: key,
        id: uuidv4()
      }));
    }
  }

  // Build aboutMeData from the aboutMe array
  const aboutMeData = aboutMeArray.length > 0 
    ? aboutMeArray.map(item => ({
        id: uuidv4(),
        bio: item.bio || '',
        type: item.type || '',
        emoji: item.emoji || '📝',
        technologies: item.technologies || [],
        highlight: item.highlight || ''
      }))
    : []; // Empty array if no data

  console.log('Final aboutMeData:', aboutMeData);

  // Personal info from translations
  const personalInfo = t('personalInfo', { returnObjects: true }) || {
    name: "Oussama Missaoui",
    title: "Computer Science Graduate | Cybersecurity Master's Student",
    location: "Sfax, Tunisia",
    email: "oussama.missaoui.it@gmail.com",
    phone: "+216 23 257 784",
    status: "Actively seeking security-focused development roles",
    education: {
      bachelor: "Bachelor of Science in Computer Science",
      institution1: "ISSAT Kasserine",
      master: "Master's in Cybersecurity (Current Student)",
      institution2: "FSEG Sfax"
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

  // Skills breakdown from translations
  const skillsBreakdown = t('skillsBreakdown', { returnObjects: true }) || t('skills', { returnObjects: true }) || {
    development: {
      title: "Development Skills",
      items: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React/Next.js", level: 88 },
        { name: "Node.js/Express", level: 85 },
        { name: "Python", level: 82 },
        { name: "MongoDB/PostgreSQL", level: 80 },
        { name: "React Native", level: 78 },
        { name: "Docker", level: 75 },
        { name: "Git/GitHub", level: 90 }
      ]
    },
    cybersecurity: {
      title: "Cybersecurity Skills",
      items: [
        { name: "Secure Coding Practices", level: 85 },
        { name: "Network Security", level: 80 },
        { name: "Threat Modeling", level: 75 },
        { name: "Vulnerability Assessment", level: 78 },
        { name: "Cryptography Basics", level: 70 },
        { name: "Security Tools (Wireshark, Nmap)", level: 72 },
        { name: "OWASP Top 10", level: 85 },
        { name: "Security Compliance", level: 68 }
      ]
    },
    soft: {
      title: "Professional Skills",
      items: [
        { name: "Problem Solving", level: 92 },
        { name: "Security Mindset", level: 88 },
        { name: "Communication", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Adaptability", level: 95 },
        { name: "Continuous Learning", level: 95 }
      ]
    }
  };

  // Career philosophy from translations
  const careerPhilosophy = t('careerPhilosophy', { returnObjects: true }) || t('philosophy', { returnObjects: true }) || {
    mission: "To develop secure, resilient software systems by integrating cybersecurity principles throughout the development lifecycle, protecting digital assets while enabling innovation.",
    values: [
      { title: "Security by Design", description: "Believing that security should be integrated from the initial design phase, not bolted on at the end.", icon: "🛡️" },
      { title: "Continuous Learning", description: "Constantly updating both development and security skills in our rapidly evolving field.", icon: "📚" },
      { title: "Practical Application", description: "Applying academic cybersecurity knowledge to real-world development challenges.", icon: "🔧" },
      { title: "Collaboration", description: "Working with both development and security teams to create better, more secure products.", icon: "🤝" }
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

  // About Me Sections configuration
  const aboutMeSectionsConfig = t('aboutMeSections', { returnObjects: true }) || {
    short: { indices: [0, 5, 7] },
    technical: { types: ['technical', 'mobile', 'data-security'] },
    cybersecurity: { types: ['cybersecurity', 'devsecops', 'unique-value'] },
    jobSeeking: { types: ['intro', 'unique-value', 'career-goals'] }
  };

  // Build aboutMeSections based on the config
  const aboutMeSections = {
    short: aboutMeSectionsConfig.short?.indices 
      ? aboutMeSectionsConfig.short.indices.map(i => aboutMeData[i]).filter(Boolean)
      : [aboutMeData[0], aboutMeData[5], aboutMeData[7]].filter(Boolean),
    detailed: aboutMeData,
    technical: aboutMeData.filter(item => 
      aboutMeSectionsConfig.technical?.types?.includes(item.type) || 
      ['technical', 'mobile', 'data-security'].includes(item.type)
    ),
    cybersecurity: aboutMeData.filter(item => 
      aboutMeSectionsConfig.cybersecurity?.types?.includes(item.type) || 
      ['cybersecurity', 'devsecops', 'unique-value'].includes(item.type)
    ),
    jobSeeking: aboutMeData.filter(item => 
      aboutMeSectionsConfig.jobSeeking?.types?.includes(item.type) || 
      ['intro', 'unique-value', 'career-goals'].includes(item.type)
    )
  };

  // Helper functions
  const getBioByType = (type) => {
    return aboutMeData.filter(item => item.type === type);
  };

  const getRandomFunFact = () => {
    const facts = personalInfo.funFacts || [];
    if (facts.length > 0) {
      return facts[Math.floor(Math.random() * facts.length)];
    }
    return "Passionate about coding and cybersecurity!";
  };

  const getSkillsByCategory = (category) => {
    return skillsBreakdown[category]?.items || [];
  };

  const getDevelopmentSkills = () => {
    return skillsBreakdown.development?.items || [];
  };

  const getSecuritySkills = () => {
    return skillsBreakdown.cybersecurity?.items || [];
  };

  const getCombinedExpertise = () => {
    const combined = t('combinedExpertise', { returnObjects: true }) || {
      strength: "Development + Security Education",
      description: "Practical coding skills combined with formal cybersecurity training",
      idealFor: [
        "Roles requiring understanding of both development and security",
        "Building security into applications from the start",
        "Translating security requirements into working code"
      ]
    };
    return combined;
  };

  return {
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
};

export default useTranslatedAboutData;