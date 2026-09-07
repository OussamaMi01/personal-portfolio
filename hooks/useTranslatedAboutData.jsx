// hooks/useTranslatedAboutData.js
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

const useTranslatedAboutData = () => {
  const { t } = useTranslation('about');

  const aboutData = useMemo(() => ({
    // Direct translations using t() with default values
    aboutMe: [
      {
        bio: t('aboutMe.0.bio', "HI THERE! I'm Oussama Missaoui – a passionate Computer Science graduate and Cybersecurity Master's student who bridges the gap between software development and security engineering."),
        type: 'intro',
        emoji: '👋',
        highlight: t('aboutMe.0.highlight', 'bridges the gap between software development and security engineering')
      },
      {
        bio: t('aboutMe.1.bio', "As a Computer Science graduate, I specialize in creating responsive web applications using modern technologies like React, Next.js, Node.js, and MongoDB."),
        type: 'technical',
        emoji: '💻',
        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Security Best Practices'],
        highlight: t('aboutMe.1.highlight', 'implementing security best practices and secure coding standards')
      },
      {
        bio: t('aboutMe.2.bio', "Currently pursuing my Master's in Cybersecurity, I'm diving deep into network security, ethical hacking, cryptography, and threat analysis."),
        type: 'cybersecurity',
        emoji: '🛡️',
        technologies: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Threat Analysis'],
        highlight: t('aboutMe.2.highlight', 'security mindset needed for todays digital landscape')
      },
      {
        bio: t('aboutMe.3.bio', "My technical foundation includes mobile development with React Native and Android Studio, now viewed through the lens of mobile security, secure authentication, and data protection on mobile platforms."),
        type: 'mobile',
        emoji: '📱',
        technologies: ['React Native', 'Android Studio', 'Mobile Security'],
        highlight: t('aboutMe.3.highlight', 'mobile security, secure authentication, and data protection')
      },
      {
        bio: t('aboutMe.4.bio', "I leverage Python for security scripting, automation, and data analysis tasks."),
        type: 'data-security',
        emoji: '🔐',
        technologies: ['Python', 'Security Scripting', 'Security Analytics', 'Log Analysis'],
        highlight: t('aboutMe.4.highlight', 'security analytics and identifying patterns in security-related data')
      },
      {
        bio: t('aboutMe.5.bio', "What sets me apart is my unique combination of hands-on software development experience with formal cybersecurity education."),
        type: 'unique-value',
        emoji: '🚀',
        highlight: t('aboutMe.5.highlight', 'unique combination of software development with formal cybersecurity education')
      },
      {
        bio: t('aboutMe.6.bio', "I'm passionate about DevSecOps and integrating security into every phase of the development process."),
        type: 'devsecops',
        emoji: '🔧',
        highlight: t('aboutMe.6.highlight', 'integrating security into every phase of the development process')
      },
      {
        bio: t('aboutMe.7.bio', "I'm actively seeking opportunities where I can contribute my dual expertise in development and security."),
        type: 'career-goals',
        emoji: '🎯',
        highlight: t('aboutMe.7.highlight', 'dual expertise in development and security')
      }
    ],
    personalInfo: {
      name: t('personalInfo.name', 'Oussama Missaoui'),
      title: t('personalInfo.title', "Computer Science Graduate | Cybersecurity Master's Student"),
      location: t('personalInfo.location', 'Sfax, Tunisia'),
      email: t('personalInfo.email', 'oussama.missaoui.it@gmail.com'),
      phone: t('personalInfo.phone', '+216 23 257 784'),
      status: t('personalInfo.status', 'Actively seeking security-focused development roles'),
      experience: 3,
      education: {
        bachelor: t('personalInfo.education.bachelor', 'Bachelor of Science in Computer Science'),
        institution1: t('personalInfo.education.institution1', 'ISSAT Kasserine'),
        master: t('personalInfo.education.master', "Master's in Cybersecurity (Current Student)"),
        institution2: t('personalInfo.education.institution2', 'FSEG Sfax')
      },
      focusAreas: [
        t('personalInfo.focusAreas.0', 'Application Security'),
        t('personalInfo.focusAreas.1', 'Secure Software Development'),
        t('personalInfo.focusAreas.2', 'Full-Stack Development'),
        t('personalInfo.focusAreas.3', 'Network Security'),
        t('personalInfo.focusAreas.4', 'DevSecOps')
      ],
      currentlyLearning: [
        t('personalInfo.currentlyLearning.0', 'Advanced Cybersecurity Concepts'),
        t('personalInfo.currentlyLearning.1', 'Penetration Testing Methodologies'),
        t('personalInfo.currentlyLearning.2', 'Cloud Security (AWS/Azure Security)'),
        t('personalInfo.currentlyLearning.3', 'Security Compliance & Standards')
      ],
      certifications: [
        t('personalInfo.certifications.0', 'Planning: Security+, Network+, CySA+'),
        t('personalInfo.certifications.1', 'Future: OSCP, CISSP')
      ],
      funFacts: [
        t('personalInfo.funFacts.0', 'Can analyze code for vulnerabilities while writing it'),
        t('personalInfo.funFacts.1', 'Believe security should be a feature, not an afterthought'),
        t('personalInfo.funFacts.2', 'Enjoy participating in CTF competitions'),
        t('personalInfo.funFacts.3', 'Passionate about security awareness and education'),
        t('personalInfo.funFacts.4', 'Love breaking things to understand how to build them better')
      ]
    },
    skillsBreakdown: {
      development: {
        title: t('skillsBreakdown.development.title', 'Development Skills'),
        items: [
          { name: t('skillsBreakdown.development.items.0.name', 'JavaScript/TypeScript'), level: 90 },
          { name: t('skillsBreakdown.development.items.1.name', 'React/Next.js'), level: 88 },
          { name: t('skillsBreakdown.development.items.2.name', 'Node.js/Express'), level: 85 },
          { name: t('skillsBreakdown.development.items.3.name', 'Python'), level: 82 },
          { name: t('skillsBreakdown.development.items.4.name', 'MongoDB/PostgreSQL'), level: 80 },
          { name: t('skillsBreakdown.development.items.5.name', 'React Native'), level: 78 },
          { name: t('skillsBreakdown.development.items.6.name', 'Docker'), level: 75 },
          { name: t('skillsBreakdown.development.items.7.name', 'Git/GitHub'), level: 90 }
        ]
      },
      cybersecurity: {
        title: t('skillsBreakdown.cybersecurity.title', 'Cybersecurity Skills'),
        items: [
          { name: t('skillsBreakdown.cybersecurity.items.0.name', 'Secure Coding Practices'), level: 85 },
          { name: t('skillsBreakdown.cybersecurity.items.1.name', 'Network Security'), level: 80 },
          { name: t('skillsBreakdown.cybersecurity.items.2.name', 'Threat Modeling'), level: 75 },
          { name: t('skillsBreakdown.cybersecurity.items.3.name', 'Vulnerability Assessment'), level: 78 },
          { name: t('skillsBreakdown.cybersecurity.items.4.name', 'Cryptography Basics'), level: 70 },
          { name: t('skillsBreakdown.cybersecurity.items.5.name', 'Security Tools (Wireshark, Nmap)'), level: 72 },
          { name: t('skillsBreakdown.cybersecurity.items.6.name', 'OWASP Top 10'), level: 85 },
          { name: t('skillsBreakdown.cybersecurity.items.7.name', 'Security Compliance'), level: 68 }
        ]
      },
      soft: {
        title: t('skillsBreakdown.soft.title', 'Professional Skills'),
        items: [
          { name: t('skillsBreakdown.soft.items.0.name', 'Problem Solving'), level: 92 },
          { name: t('skillsBreakdown.soft.items.1.name', 'Security Mindset'), level: 88 },
          { name: t('skillsBreakdown.soft.items.2.name', 'Communication'), level: 85 },
          { name: t('skillsBreakdown.soft.items.3.name', 'Team Collaboration'), level: 90 },
          { name: t('skillsBreakdown.soft.items.4.name', 'Adaptability'), level: 95 },
          { name: t('skillsBreakdown.soft.items.5.name', 'Continuous Learning'), level: 95 }
        ]
      }
    },
    careerPhilosophy: {
      mission: t('careerPhilosophy.mission', 'To develop secure, resilient software systems by integrating cybersecurity principles throughout the development lifecycle.'),
      values: [
        { 
          title: t('careerPhilosophy.values.0.title', 'Security by Design'),
          description: t('careerPhilosophy.values.0.description', 'Believing that security should be integrated from the initial design phase, not bolted on at the end.'),
          icon: '🛡️'
        },
        {
          title: t('careerPhilosophy.values.1.title', 'Continuous Learning'),
          description: t('careerPhilosophy.values.1.description', 'Constantly updating both development and security skills in our rapidly evolving field.'),
          icon: '📚'
        },
        {
          title: t('careerPhilosophy.values.2.title', 'Practical Application'),
          description: t('careerPhilosophy.values.2.description', 'Applying academic cybersecurity knowledge to real-world development challenges.'),
          icon: '🔧'
        },
        {
          title: t('careerPhilosophy.values.3.title', 'Collaboration'),
          description: t('careerPhilosophy.values.3.description', 'Working with both development and security teams to create better, more secure products.'),
          icon: '🤝'
        }
      ],
      goals: [
        t('careerPhilosophy.goals.0', 'Become a bridge between development and security teams'),
        t('careerPhilosophy.goals.1', 'Master application security and secure coding practices'),
        t('careerPhilosophy.goals.2', 'Contribute to open-source security projects'),
        t('careerPhilosophy.goals.3', 'Obtain relevant security certifications (Security+, OSCP)'),
        t('careerPhilosophy.goals.4', 'Help organizations build more secure software systems')
      ],
      targetRoles: [
        t('careerPhilosophy.targetRoles.0', 'Security-focused Software Developer'),
        t('careerPhilosophy.targetRoles.1', 'Application Security Engineer'),
        t('careerPhilosophy.targetRoles.2', 'DevSecOps Engineer'),
        t('careerPhilosophy.targetRoles.3', 'Security Analyst with Development Background'),
        t('careerPhilosophy.targetRoles.4', 'Cybersecurity Consultant with Technical Implementation Skills')
      ]
    },
    aboutMeSections: {
      short: { indices: [0, 5, 7] },
      technical: { types: ['technical', 'mobile', 'data-security'] },
      cybersecurity: { types: ['cybersecurity', 'devsecops', 'unique-value'] },
      jobSeeking: { types: ['intro', 'unique-value', 'career-goals'] }
    },
    ui: {
      tabs: {
        overview: t('ui.tabs.overview', 'Overview'),
        technical: t('ui.tabs.technical', 'Development'),
        cybersecurity: t('ui.tabs.cybersecurity', 'Cybersecurity'),
        seeking: t('ui.tabs.seeking', 'Career Goals'),
        detailed: t('ui.tabs.detailed', 'Full Story')
      },
      profile: {
        education: t('ui.profile.education', 'Education'),
        current: t('ui.profile.current', 'Current'),
        focusAreas: t('ui.profile.focusAreas', 'Focus Areas'),
        connect: t('ui.profile.connect', "Let's Connect"),
        quickFact: t('ui.profile.quickFact', 'Quick Fact'),
        anotherFact: t('ui.profile.anotherFact', 'Show another fact'),
        currentlyLearning: t('ui.profile.currentlyLearning', 'Currently Learning')
      },
      content: {
        targetRoles: t('ui.content.targetRoles', 'Target Roles'),
        philosophy: t('ui.content.philosophy', 'My Security Philosophy'),
        noContent: t('ui.content.noContent', 'No content available for this section.')
      },
      page: {
        title: t('ui.page.title', 'About Me'),
        subtitle: t('ui.page.subtitle', 'Get to know the person behind the code')
      }
    },
    titles: {
      myJourneyInNumbers: t('titles.myJourneyInNumbers', 'My Journey in Numbers'),
      quantifyingGrowth: t('titles.quantifyingGrowth', 'Quantifying my growth as a developer and creator through measurable achievements'),
      yearsOfExperience: t('titles.yearsOfExperience', 'Years of experience'),
      combinedExperience: t('titles.combinedExperience', 'Combined professional and freelance'),
      projectsCompleted: t('titles.projectsCompleted', 'Projects completed'),
      softwareSolutions: t('titles.softwareSolutions', 'Software & design solutions'),
      clientSatisfaction: t('titles.clientSatisfaction', 'Client satisfaction'),
      positiveFeedback: t('titles.positiveFeedback', 'Positive feedback rate'),
      continuousLearning: t('titles.continuousLearning', 'Continuous learning'),
      hoursOfDevelopment: t('titles.hoursOfDevelopment', 'Hours of skill development')
    }
  }), [t]);

  return aboutData;
};

export default useTranslatedAboutData;