// hooks/useTranslatedAboutData.js
import { useTranslation } from 'next-i18next';
import { v4 as uuidv4 } from 'uuid';

// Type guard — returns obj if it's a real object, otherwise null
const safeObj = (val) => (val && typeof val === 'object' && !Array.isArray(val) ? val : null);
const safeArr = (val) => (Array.isArray(val) ? val : null);

export const useTranslatedAboutData = () => {
  const { t } = useTranslation('about');

  // ── Bio sections ────────────────────────────────────────────────────────────
  // Both en and fr about.json have an `aboutMe` array — use it directly.
  // This avoids Object.entries ordering issues with the `sections` object.
  const rawAboutMe = t('aboutMe', { returnObjects: true });
  const aboutMeArray = safeArr(rawAboutMe) || (() => {
    // Fallback: convert sections object to array if aboutMe isn't present
    const sections = safeObj(t('sections', { returnObjects: true }));
    if (sections) {
      return Object.entries(sections).map(([key, value]) => ({
        ...value,
        type: key,
        id: uuidv4(),
      }));
    }
    return [];
  })();

  const aboutMeData = aboutMeArray.map(item => ({
    id: uuidv4(),
    bio:          item.bio          || '',
    type:         item.type         || '',
    emoji:        item.emoji        || '📝',
    technologies: item.technologies || [],
    highlight:    item.highlight    || '',
  }));

  // ── personalInfo ────────────────────────────────────────────────────────────
  const personalInfo = safeObj(t('personalInfo', { returnObjects: true })) || {
    name:     'Oussama Missaoui',
    title:    "Computer Science Graduate | Cybersecurity Master's Student",
    location: 'Sfax, Tunisia',
    email:    'oussama.missaoui.it@gmail.com',
    phone:    '+216 23 257 784',
    status:   'Actively seeking security-focused development roles',
    education: {
      bachelor:     'Bachelor of Science in Computer Science',
      institution1: 'ISSAT Kasserine',
      master:       "Master's in Cybersecurity (Current Student)",
      institution2: 'FSEG Sfax',
    },
    focusAreas: [
      'Application Security', 'Secure Software Development',
      'Full-Stack Development', 'Network Security', 'DevSecOps',
    ],
    currentlyLearning: [
      'Advanced Cybersecurity Concepts', 'Penetration Testing Methodologies',
      'Cloud Security (AWS/Azure Security)', 'Security Compliance & Standards',
    ],
    certifications: ['Planning: Security+, Network+, CySA+', 'Future: OSCP, CISSP'],
    funFacts: [
      'Can analyze code for vulnerabilities while writing it',
      'Believe security should be a feature, not an afterthought',
      'Enjoy participating in CTF competitions',
      'Passionate about security awareness and education',
      'Love breaking things to understand how to build them better',
    ],
  };

  // ── skillsBreakdown ─────────────────────────────────────────────────────────
  const skillsBreakdown = safeObj(t('skillsBreakdown', { returnObjects: true })) || {
    development: {
      title: 'Development Skills',
      items: [
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'React/Next.js', level: 88 },
        { name: 'Node.js/Express', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'MongoDB/PostgreSQL', level: 80 },
        { name: 'React Native', level: 78 },
        { name: 'Docker', level: 75 },
        { name: 'Git/GitHub', level: 90 },
      ],
    },
    cybersecurity: {
      title: 'Cybersecurity Skills',
      items: [
        { name: 'Secure Coding Practices', level: 85 },
        { name: 'Network Security', level: 80 },
        { name: 'Threat Modeling', level: 75 },
        { name: 'Vulnerability Assessment', level: 78 },
        { name: 'Cryptography Basics', level: 70 },
        { name: 'Security Tools (Wireshark, Nmap)', level: 72 },
        { name: 'OWASP Top 10', level: 85 },
        { name: 'Security Compliance', level: 68 },
      ],
    },
    soft: {
      title: 'Professional Skills',
      items: [
        { name: 'Problem Solving', level: 92 },
        { name: 'Security Mindset', level: 88 },
        { name: 'Communication', level: 85 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Adaptability', level: 95 },
        { name: 'Continuous Learning', level: 95 },
      ],
    },
  };

  // ── careerPhilosophy ────────────────────────────────────────────────────────
  const careerPhilosophy = safeObj(t('careerPhilosophy', { returnObjects: true })) || {
    mission: 'To develop secure, resilient software systems by integrating cybersecurity principles throughout the development lifecycle, protecting digital assets while enabling innovation.',
    values: [
      { title: 'Security by Design',   description: 'Believing that security should be integrated from the initial design phase, not bolted on at the end.', icon: '🛡️' },
      { title: 'Continuous Learning',  description: 'Constantly updating both development and security skills in our rapidly evolving field.', icon: '📚' },
      { title: 'Practical Application',description: 'Applying academic cybersecurity knowledge to real-world development challenges.', icon: '🔧' },
      { title: 'Collaboration',        description: 'Working with both development and security teams to create better, more secure products.', icon: '🤝' },
    ],
    goals: [
      'Become a bridge between development and security teams',
      'Master application security and secure coding practices',
      'Contribute to open-source security projects',
      'Obtain relevant security certifications (Security+, OSCP)',
      'Help organizations build more secure software systems',
    ],
    targetRoles: [
      'Security-focused Software Developer',
      'Application Security Engineer',
      'DevSecOps Engineer',
      'Security Analyst with Development Background',
      'Cybersecurity Consultant with Technical Implementation Skills',
    ],
  };

  // ── aboutMeSections config ──────────────────────────────────────────────────
  const sectionsConfig = safeObj(t('aboutMeSections', { returnObjects: true })) || {
    short:        { indices: [0, 5, 7] },
    technical:    { types: ['technical', 'mobile', 'data-security'] },
    cybersecurity:{ types: ['cybersecurity', 'devsecops', 'unique-value'] },
    jobSeeking:   { types: ['intro', 'unique-value', 'career-goals'] },
  };

  const aboutMeSections = {
    short: sectionsConfig.short?.indices
      ? sectionsConfig.short.indices.map(i => aboutMeData[i]).filter(Boolean)
      : [aboutMeData[0], aboutMeData[5], aboutMeData[7]].filter(Boolean),
    detailed: aboutMeData,
    technical: aboutMeData.filter(item =>
      sectionsConfig.technical?.types?.includes(item.type) ||
      ['technical', 'mobile', 'data-security'].includes(item.type)
    ),
    cybersecurity: aboutMeData.filter(item =>
      sectionsConfig.cybersecurity?.types?.includes(item.type) ||
      ['cybersecurity', 'devsecops', 'unique-value'].includes(item.type)
    ),
    jobSeeking: aboutMeData.filter(item =>
      sectionsConfig.jobSeeking?.types?.includes(item.type) ||
      ['intro', 'unique-value', 'career-goals'].includes(item.type)
    ),
  };

  // ── Helpers ─────────────────────────────────────────────────────────────────
  const getBioByType = (type) => aboutMeData.filter(item => item.type === type);

  const getRandomFunFact = () => {
    const facts = personalInfo.funFacts || [];
    return facts.length > 0
      ? facts[Math.floor(Math.random() * facts.length)]
      : 'Passionate about coding and cybersecurity!';
  };

  const getSkillsByCategory = (category) => skillsBreakdown[category]?.items || [];
  const getDevelopmentSkills = () => skillsBreakdown.development?.items || [];
  const getSecuritySkills    = () => skillsBreakdown.cybersecurity?.items || [];

  const getCombinedExpertise = () =>
    safeObj(t('combinedExpertise', { returnObjects: true })) || {
      strength:    'Development + Security Education',
      description: 'Practical coding skills combined with formal cybersecurity training',
      idealFor: [
        'Roles requiring understanding of both development and security',
        'Building security into applications from the start',
        'Translating security requirements into working code',
      ],
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
    getCombinedExpertise,
  };
};

export default useTranslatedAboutData;