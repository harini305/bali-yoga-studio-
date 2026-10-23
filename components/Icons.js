const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' };

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M20 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const Chevron = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={2.4} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const Close = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Play = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M7 4.5v15l13-7.5z" />
  </svg>
);
