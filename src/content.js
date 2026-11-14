export const GROUPS = {
  Languages: ['Java'],
  Frontend: ['React'],
  Backend: ['Spring Boot'],
  Data: ['MongoDB', 'PostgreSQL'],
  Cloud: ['AWS'],
  Tools: ['Git', 'Jenkins'],
};
export const SKILLS = Object.entries(GROUPS).flatMap(([g, ws]) => ws.map((w) => ({ w, g })));

export const PROJECTS = [
  {
    tag: 'MICROSERVICES · JAVA',
    title: 'File Management Microservices',
    em: 'Cloud',
    desc: 'A modular file-management platform built around Spring Boot services, including authentication, configuration, service discovery, and file operations, with a React frontend.',
    stack: ['Java', 'Spring Boot', 'Microservices', 'React'],
    url: 'https://github.com/sangwan99-a/file-management-microservices-app',
  },
  {
    tag: 'FULL-STACK · TYPESCRIPT',
    title: 'Backend Platform',
    em: 'Services',
    desc: 'A multi-service application with a React, TypeScript, and Electron frontend, an API gateway, and dedicated services for billing, chat, email, file management, and logs.',
    stack: ['TypeScript', 'React', 'Electron', 'Microservices'],
    url: 'https://github.com/sangwan99-a/Backend',
  },
  {
    tag: 'BACKEND · JAVA',
    title: 'Elite School',
    em: 'Management',
    desc: 'A Spring Boot school-management backend with student, class, and user APIs, plus integrations and infrastructure for AWS, Kafka, and Memcached.',
    stack: ['Java', 'Spring Boot', 'AWS', 'Kafka', 'Memcached'],
    url: 'https://github.com/sangwan99-a/elite-school',
  },
];

// Verified profile facts only; no unprovided coding-platform metrics are shown.
export const STATS = [
  { label: 'Featured projects', value: 3, suffix: '', h: 0.7 },
  { label: 'Degrees completed', value: 2, suffix: '', h: 0.55 },
  { label: 'Core technologies', value: 8, suffix: '', h: 0.85 },
  { label: 'GitHub profile', value: 1, suffix: '', h: 0.4 },
];

export const JOURNEY = [
  { year: '2024', role: 'Bachelor of Arts (B.A.)', place: 'SGT University, Gurugram', note: 'Completed in 2024' },
  { year: '2026', role: 'Master of Arts (M.A.)', place: 'SGT University, Gurugram', note: 'Completed in 2026' },
  { year: 'NOW', role: 'Full Stack Development', place: 'Independent project work', note: 'Building with Java, Spring Boot, React, and cloud technologies' },
];

export const CERTS = [];
