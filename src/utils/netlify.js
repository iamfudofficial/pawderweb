const trimRightSlash = (u) => (u || '').replace(/\/$/, '');

export function functionsBase() {
  const envBase = process.env.REACT_APP_FUNCTIONS_BASE;
  if (envBase) return trimRightSlash(envBase);

  const isLocal = typeof window !== 'undefined' && window.location && window.location.hostname === 'localhost';
  if (isLocal) {
    const dev = process.env.NETLIFY_DEV_URL || 'http://localhost:8888';
    return trimRightSlash(dev);
  }
  // Production: gleiche Origin
  return '';
}

export function functionUrl(name) {
  const base = functionsBase();
  return `${base}/.netlify/functions/${name}`;
}


