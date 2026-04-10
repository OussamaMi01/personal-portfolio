// hooks/useToolkitData.js
import { useTranslation } from 'next-i18next';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as FiIcons from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';

// Icon mapping
const iconMap = {
  // Fa Icons
  FaGitAlt: FaIcons.FaGitAlt,
  FaAndroid: FaIcons.FaAndroid,
  FaLaptopCode: FaIcons.FaLaptopCode,
  FaGoogle: FaIcons.FaGoogle,
  FaLinux: FaIcons.FaLinux,
  FaWindows: FaIcons.FaWindows,
  FaFigma: FaIcons.FaFigma,
  FaDocker: FaIcons.FaDocker,
  FaAws: FaIcons.FaAws,
  FaReact: FaIcons.FaReact,
  FaNodeJs: FaIcons.FaNodeJs,
  FaPython: FaIcons.FaPython,
  FaNpm: FaIcons.FaNpm,
  FaYarn: FaIcons.FaYarn,
  FaTrello: FaIcons.FaTrello,
  FaSlack: FaIcons.FaSlack,
  FaJira: FaIcons.FaJira,
  FaConfluence: FaIcons.FaConfluence,
  FaChrome: FaIcons.FaChrome,
  FaMicrosoft: FaIcons.FaMicrosoft,
  FaApple: FaIcons.FaApple,
  FaUbuntu: FaIcons.FaUbuntu,
  FaJenkins: FaIcons.FaJenkins,
  FaGitlab: FaIcons.FaGitlab,
  FaGithub: FaIcons.FaGithub,
  
  // Si Icons
  SiVisualstudiocode: SiIcons.SiVisualstudiocode,
  SiPostman: SiIcons.SiPostman,
  SiInsomnia: SiIcons.SiInsomnia,
  SiFigma: SiIcons.SiFigma,
  SiAdobexd: SiIcons.SiAdobexd,
  SiAdobeillustrator: SiIcons.SiAdobeillustrator,
  SiAdobephotoshop: SiIcons.SiAdobephotoshop,
  SiAdobepremierepro: SiIcons.SiAdobepremierepro,
  SiAdobeaftereffects: SiIcons.SiAdobeaftereffects,
  SiCanva: SiIcons.SiCanva,
  SiNotion: SiIcons.SiNotion,
  SiObsidian: SiIcons.SiObsidian,
  SiDiscord: SiIcons.SiDiscord,
  SiZoom: SiIcons.SiZoom,
  SiTeamspeak: SiIcons.SiTeamspeak,
  SiGooglemeet: SiIcons.SiGooglemeet,
  SiMicrosoftteams: SiIcons.SiMicrosoftteams,
  SiVercel: SiIcons.SiVercel,
  SiNetlify: SiIcons.SiNetlify,
  SiHeroku: SiIcons.SiHeroku,
  SiMongodb: SiIcons.SiMongodb,
  SiPostgresql: SiIcons.SiPostgresql,
  SiMysql: SiIcons.SiMysql,
  SiSqlite: SiIcons.SiSqlite,
  SiRedis: SiIcons.SiRedis,
  SiFirebase: SiIcons.SiFirebase,
  SiSupabase: SiIcons.SiSupabase,
  SiTailwindcss: SiIcons.SiTailwindcss,
  SiNextdotjs: SiIcons.SiNextdotjs,
  SiExpress: SiIcons.SiExpress,
  SiNestjs: SiIcons.SiNestjs,
  SiFastapi: SiIcons.SiFastapi,
  SiFlask: SiIcons.SiFlask,
  SiDjango: SiIcons.SiDjango,
  SiSpringboot: SiIcons.SiSpringboot,
  SiKotlin: SiIcons.SiKotlin,
  SiSwift: SiIcons.SiSwift,
  SiTypescript: SiIcons.SiTypescript,
  SiJavascript: SiIcons.SiJavascript,
  SiCplusplus: SiIcons.SiCplusplus,
  SiRust: SiIcons.SiRust,
  SiGo: SiIcons.SiGo,
  SiRuby: SiIcons.SiRuby,
  SiPhp: SiIcons.SiPhp,
  SiWordpress: SiIcons.SiWordpress,
  SiShopify: SiIcons.SiShopify,
  SiWebflow: SiIcons.SiWebflow,
  
  // Fi Icons
  FiTool: FiIcons.FiTool,
  FiCode: FiIcons.FiCode,
  FiDatabase: FiIcons.FiDatabase,
  FiServer: FiIcons.FiServer,
  FiCloud: FiIcons.FiCloud,
  FiTerminal: FiIcons.FiTerminal,
  FiLayout: FiIcons.FiLayout,
  FiSmartphone: FiIcons.FiSmartphone,
  FiMonitor: FiIcons.FiMonitor,
  FiBox: FiIcons.FiBox,
  FiMessageSquare: FiIcons.FiMessageSquare,
  FiVideo: FiIcons.FiVideo,
  FiImage: FiIcons.FiImage,
  FiMusic: FiIcons.FiMusic,
  FiFilm: FiIcons.FiFilm,
  FiPenTool: FiIcons.FiPenTool,
  FiSettings: FiIcons.FiSettings,
  FiCpu: FiIcons.FiCpu,
  FiHardDrive: FiIcons.FiHardDrive,
};

// Color mapping for proficiency levels
const proficiencyColors = {
  expert: 'from-green-500 to-emerald-500',
  advanced: 'from-blue-500 to-cyan-500',
  intermediate: 'from-yellow-500 to-orange-500',
  beginner: 'from-gray-400 to-gray-600',
};

export const useToolkitData = () => {
  const { t } = useTranslation('about');

 
  // Get toolkit data from translations
  const toolkit = t('toolkit', { returnObjects: true }) || {
    heading: "Development Toolkit & Ecosystem",
    categories: {
      all: "All Tools",
      development: "Development",
      design: "Design",
      system: "Operating Systems",
      devops: "DevOps",
      deployment: "Deployment",
      cloud: "Cloud Services",
      database: "Databases",
      collaboration: "Collaboration",
      productivity: "Productivity",
      versionControl: "Version Control"
    },
    proficiency: {
      expert: "Expert",
      advanced: "Advanced",
      intermediate: "Intermediate",
      beginner: "Beginner"
    },
    tools: []
  };

  // Get tools array
  const toolsArray = toolkit.tools || [];

  // Transform tools data by adding icon components and IDs
  const clientsData = toolsArray.map((tool) => ({
    id: tool.id || uuidv4(),
    title: tool.title || '',
    icon: iconMap[tool.icon] || FiIcons.FiCode, // Fallback icon
    category: tool.category || 'development',
    description: tool.description || '',
    proficiency: tool.proficiency || 'intermediate',
    color: proficiencyColors[tool.proficiency] || proficiencyColors.intermediate,
  }));

  // Get categories from translations
  const toolkitCategories = toolkit.categories || {};

  // Proficiency levels with labels from translations
  const proficiencyLevels = {
    expert: { 
      label: toolkit.proficiency?.expert || 'Expert', 
      color: proficiencyColors.expert 
    },
    advanced: { 
      label: toolkit.proficiency?.advanced || 'Advanced', 
      color: proficiencyColors.advanced 
    },
    intermediate: { 
      label: toolkit.proficiency?.intermediate || 'Intermediate', 
      color: proficiencyColors.intermediate 
    },
    beginner: { 
      label: toolkit.proficiency?.beginner || 'Beginner', 
      color: proficiencyColors.beginner 
    },
  };

  // Helper functions
  const getToolsByCategory = (category = 'all') => {
    if (category === 'all') return clientsData;
    return clientsData.filter(tool => tool.category === category);
  };

  const getToolsByProficiency = (proficiency) => {
    return clientsData.filter(tool => tool.proficiency === proficiency);
  };

  // Featured tools (most used/important)
  const featuredTools = clientsData
    .filter(tool => ['expert', 'advanced'].includes(tool.proficiency))
    .slice(0, 12);

  return {
    clientsHeading: toolkit.heading || 'Development Toolkit & Ecosystem',
    clientsData,
    toolkitCategories,
    proficiencyLevels,
    getToolsByCategory,
    getToolsByProficiency,
    featuredTools,
  };
};

export default useToolkitData;