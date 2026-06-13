export const Search = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);

export const Heart = ({ filled, ...p }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M19 14c1.5-1.5 3-3.4 3-5.5A4.5 4.5 0 0 0 12 5.5 4.5 4.5 0 0 0 2 8.5C2 10.6 3.5 12.5 5 14l7 7Z" />
  </svg>
);

export const Arrow = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

export const External = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Bolt = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
  </svg>
);

export const Menu = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
