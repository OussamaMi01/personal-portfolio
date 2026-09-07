// data/achievementsData.js
// Add real credential URLs and image paths as you earn them.
// `image` = path under /public/images/achievements/ (or null to show emoji fallback)
// `link`  = verification URL (or null if no public link)

export const achievementsData = [
  // ─── Engineer Achievements ────────────────────────────────────────────────
  {
    id: 'cybersecurity',
    emoji: '🛡️',
    image: '/images/achievements/lfc108-cybersecurity-essentials.png',
    category: 'badge',
    title: 'Cybersecurity Essentials',
    issuer: 'The Linux Foundation',
    date: 'May 2026',
    status: 'completed',
    description: 'Core cybersecurity concepts covering threats, vulnerabilities, and security controls across enterprise environments.',
    tags: ['Cybersecurity', 'Threat Analysis', 'Firewalls', 'Encryption'],
    link: null,
    role: ['engineer'], // Added role
  },
  {
    id: 'aws-cloud-essentials',
    emoji: '☁️',
    image: '/images/achievements/CloudComputingEssentials.jpg',
    category: 'certification',
    title: 'AWS SimuLearn: Cloud Computing Essentials',
    issuer: 'AWS Training & Certification',
    date: 'February 2026',
    status: 'completed',
    description: 'AWS core services, cloud architecture, security, and pricing fundamentals aligned with the AWS Cloud Practitioner exam objectives.',
    tags: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'IAM'],
    link: null,
    role: ['engineer'], // Added role
  },
  {
    id: 'auth-authorization',
    emoji: '🔑',
    image: '/images/achievements/lfel1004-authentication-authorization-for-web-api.png',
    category: 'badge',
    title: 'Authentication and Authorization for Web/API',
    issuer: 'The Linux Foundation',
    date: 'March 2026',
    status: 'completed',
    description: 'Authentication and authorization concepts for web applications and APIs, covering OAuth 2.0, OpenID Connect, JWT, and best practices for secure access control.',
    tags: ['Authentication', 'Authorization', 'OAuth', 'OpenID', 'JWT', 'API Security'],
    link: null,
    role: ['engineer'], // Added role
  },
  {
    id: 'intro-to-kubernetes',
    emoji: '☸️',
    image: '/images/achievements/lfs158-introduction-to-kubernetes.png',
    category: 'badge',
    title: 'Introduction to Kubernetes',
    issuer: 'Linux Foundation',
    date: 'May 2026',
    status: 'completed',
    description: 'Learn the fundamentals of Kubernetes, including container orchestration, pod management, and cluster administration.',
    tags: ['Kubernetes', 'Container Orchestration', 'Cloud Native'],
    link: null,
    role: ['engineer'], // Added role
  }

];

// Category definitions — used by filter bar and i18n
export const achievementCategories = [
  { key: 'all',           icon: 'ti-layout-grid' },
  { key: 'certification', icon: 'ti-certificate' },
  { key: 'badge',         icon: 'ti-award'        },
  { key: 'achievement',   icon: 'ti-trophy'       },
  { key: 'course',        icon: 'ti-book'         },
];