export const GROUPS = {
  Languages: ['Java'],
  Frontend: ['React'],
  Backend: ['Spring Boot'],
  Data: ['MongoDB', 'PostgreSQL'],
  Cloud: ['AWS'],
  Tools: ['Git', 'Jenkins'],
};
export const SKILLS = Object.entries(GROUPS).flatMap(([g, ws]) => ws.map((w) => ({ w, g })));

// Replace these starter cards with links and details for your real projects.
export const PROJECTS = [
  { tag: 'Add your project', title: 'Project One', em: 'Soon', desc: 'Add a short summary of a project you have built, the problem it solves, and your contribution.', stack: ['Java', 'Spring Boot', 'React'] },
  { tag: 'Add your project', title: 'Project Two', em: 'Soon', desc: 'Add another project description here. Include the technologies you used and what makes the project useful.', stack: ['MongoDB', 'PostgreSQL'] },
  { tag: 'Add your project', title: 'Project Three', em: 'Soon', desc: 'Showcase a third project here. Replace this starter content with your own work before publishing.', stack: ['AWS', 'Jenkins', 'Git'] },
];

// No coding-platform totals or credentials were supplied, so these remain neutral placeholders.
export const STATS = [
  { label: 'Add platform', value: 0, suffix: '', h: 0.4 },
  { label: 'Add total', value: 0, suffix: '', h: 0.4 },
  { label: 'Add platform', value: 0, suffix: '', h: 0.4 },
  { label: 'Add total', value: 0, suffix: '', h: 0.4 },
];

export const JOURNEY = [
  { year: '01', role: 'Add your education', place: 'Add institution and qualification', note: 'Add dates and relevant details' },
  { year: '02', role: 'Add your experience', place: 'Add company, internship, or role', note: 'Add dates and key contributions' },
  { year: '03', role: 'Add your next milestone', place: 'Add another education or career milestone', note: 'Add dates and relevant details' },
];

export const CERTS = [
  ['Add issuer', 'Add certification name'],
  ['Add issuer', 'Add certification name'],
  ['Add issuer', 'Add certification name'],
  ['Add issuer', 'Add certification name'],
  ['Add issuer', 'Add certification name'],
  ['Add issuer', 'Add certification name'],
  ['Add issuer', 'Add certification name'],
  ['Add issuer', 'Add certification name'],
];
