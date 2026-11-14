import React, { useEffect, useRef, useState } from 'react';

const Icons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z"/></svg>
  ),

  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.4c0-3.1-1.65-4.54-3.85-4.54-1.78 0-2.57.98-3.02 1.67V8.5h-3.37c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.69.13-.93.27-.69.89-1.4 1.94-1.4 1.37 0 1.92 1.05 1.92 2.59V20h3.38v-6.6Z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 4h3.2l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6V17a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14" />
    </svg>
  ),
};

function Magnetic({ className, label, children, onClick }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.35;
    const y = (e.clientY - r.top - r.height / 2) * 0.35;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => (ref.current.style.transform = '');
  return (
    <button type="button" ref={ref} className={className} aria-label={label} onMouseMove={onMove} onMouseLeave={reset} onClick={onClick}>
      {children}
    </button>
  );
}

export default function Contact() {
  const [resume, setResume] = useState('idle');
  useEffect(() => {
    if (resume !== 'busy') return;
    const a = setTimeout(() => setResume('done'), 1300);
    const b = setTimeout(() => setResume('idle'), 3800);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [resume]);
  return (
    <div className="ct">
      <span className="mono dim">(07) Contact</span>
      <h2 className="ct-title">
        <span className="ln">
          <span>Let’s build</span>
        </span>
        <span className="ln">
          <span>
            something <em>rare.</em>
          </span>
        </span>
      </h2>
      <div className="ct-row">
        <div className="socials">
          <a className="soc" href="https://github.com/sangwan99-a" target="_blank" rel="noreferrer" aria-label="GitHub">
            {Icons.github}
          </a>
        </div>
        <Magnetic className={`resume r-${resume}`} label="Résumé" onClick={() => resume === 'idle' && setResume('busy')}>
          <span className="resume-ic">{Icons.arrow}</span>
          <span className="resume-txt">{resume === 'idle' ? 'Résumé' : resume === 'busy' ? 'Preparing' : 'On request'}</span>
          <span className="resume-fill" />
        </Magnetic>
      </div>
      <footer className="foot">
        <span className="mono dim">© 2026 Sahil Sangwan</span>
        <span className="mono dim">Full Stack · Java · React</span>
      </footer>
    </div>
  );
}
