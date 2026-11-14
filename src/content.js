export const GROUPS = {
  Languages: ['Java'],
  Frontend: ['React'],
  Backend: ['Spring Boot'],
  Databases: ['MongoDB', 'PostgreSQL'],
  'Cloud & DevOps': ['AWS', 'Jenkins'],
  Tools: ['Git'],
};
export const SKILLS = Object.entries(GROUPS).flatMap(([g, ws]) => ws.map((w) => ({ w, g })));

export const PROJECTS = [
  {
    tag: 'Education · Web Application',
    title: 'Elite School',
    em: 'Education',
    desc: 'A school-focused application for managing education workflows.',
    stack: ['Java', 'Spring Boot'],
    url: 'https://github.com/sangwan99-a/elite-school',
  },
  {
    tag: 'Cloud · Microservices',
    title: 'File Management Microservices App',
    em: 'Cloud',
    desc: 'A file-management application built around a microservices architecture.',
    stack: ['Java', 'Microservices', 'AWS'],
    url: 'https://github.com/sangwan99-a/file-management-microservices-app',
  },
  {
    tag: 'Messaging · Security',
    title: 'Secure Chat',
    em: 'Messaging',
    desc: 'A secure chat application for real-time messaging and conversations.',
    stack: ['Kotlin'],
    url: 'https://github.com/sangwan99-a/Secure-chat',
  },
  {
    tag: 'Smart Home · Application',
    title: 'Smart Home Application',
    em: 'IoT',
    desc: 'An application concept for managing smart-home functionality.',
    stack: ['Java'],
    url: 'https://github.com/sangwan99-a/Smart-home-application',
  },
  {
    tag: 'Java · Management',
    title: 'Picture Hall Management',
    em: 'Bookings',
    desc: 'A Java-based application for managing movie-hall operations.',
    stack: ['Java'],
    url: 'https://github.com/sangwan99-a/picture-hall-management',
  },
  {
    tag: 'Java · Docker',
    title: 'Hello World Java Docker',
    em: 'DevOps',
    desc: 'A starter Java application packaged and run with Docker.',
    stack: ['Java', 'Docker'],
    url: 'https://github.com/sangwan99-a/hello-world-java-docker',
  },
];

export const STATS = [];

export const JOURNEY = [
  { year: '2024', role: 'Bachelor of Arts (B.A.)', place: 'SGT University, Gurugram', note: 'Completed in 2024' },
  { year: '2026', role: 'Master of Arts (M.A.)', place: 'SGT University, Gurugram', note: 'Completed in 2026' },
  { year: '2026', role: 'Full Stack Developer', place: 'Personal Projects', note: 'Java · Spring Boot · React · AWS' },
];

export const CERTS = [];
