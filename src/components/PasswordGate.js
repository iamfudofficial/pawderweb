import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'pawder_access_granted';
const PASSWORD = process.env.REACT_APP_SITE_PASSWORD || 'pawder2025';

export default function PasswordGate({ children }) {
  const [hasAccess, setHasAccess] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setHasAccess(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true');
      setHasAccess(true);
      setError('');
    } else {
      setError('Falsches Passwort.');
    }
  };

  if (hasAccess) return children;

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img
          src="/logo/WhatsApp Image 2025-04-27 at 09.58.57-Photoroom.png"
          alt="Pawder Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Wir sind bald online</h1>
        <p style={styles.subtitle}>Die Website befindet sich im Aufbau. Bitte gib das Passwort ein, um fortzufahren.</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="password"
            placeholder="Passwort"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
            autoFocus
          />
          <button type="submit" style={styles.button}>Weiter</button>
        </form>
        {error && <div style={styles.error}>{error}</div>}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #2565a6 0%, #1e4a8a 100%)',
    padding: '24px',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    background: 'rgba(255,255,255,0.95)',
    borderRadius: '16px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
    padding: '28px 24px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
  },
  logo: {
    height: '80px',
    objectFit: 'contain',
    marginBottom: '12px',
  },
  title: {
    margin: 0,
    fontSize: '1.6rem',
    color: '#2565a6',
    fontWeight: 900,
  },
  subtitle: {
    marginTop: '8px',
    marginBottom: '20px',
    color: '#4a4a4a',
    lineHeight: 1.5,
  },
  form: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    minWidth: 0,
    padding: '12px 14px',
    borderRadius: '12px',
    border: '1px solid #dfe3e8',
    outline: 'none',
    fontSize: '1rem',
  },
  button: {
    background: '#b7e000',
    color: '#2565a6',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 16px',
    fontWeight: 800,
    cursor: 'pointer',
  },
  error: {
    marginTop: '12px',
    color: '#b00020',
    fontWeight: 700,
  },
};


