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
    tag: 'Java · Management',
    title: 'Picture Hall Management',
    em: 'Bookings',
    desc: 'A Java-based application for managing movies, ticket pricing, and bookings.',
    stack: ['Java'],
    url: 'https://github.com/sangwan99-a/picture-hall-management',
  },
  {
    tag: 'Kotlin · Messaging',
    title: 'Secure Chat',
    em: 'Messaging',
    desc: 'A Kotlin-based chat application for messaging and conversation workflows.',
    stack: ['Kotlin'],
    url: 'https://github.com/sangwan99-a/Secure-chat',
  },
  {
    tag: 'Java · Microservices',
    title: 'File Management Microservices App',
    em: 'Cloud',
    desc: 'A Java file-management project structured around a microservices architecture.',
    stack: ['Java', 'Microservices'],
    url: 'https://github.com/sangwan99-a/file-management-microservices-app',
  },
];

export const STATS = [];

export const JOURNEY = [
  { year: '2024', role: 'Bachelor of Arts (B.A.)', place: 'SGT University, Gurugram', note: 'Completed in 2024' },
  { year: '2026', role: 'Master of Arts (M.A.)', place: 'SGT University, Gurugram', note: 'Completed in 2026' },
  { year: '2026', role: 'Full Stack Developer', place: 'Personal Projects', note: 'Java · Spring Boot · React · AWS' },
];

export const CERTS = [];
