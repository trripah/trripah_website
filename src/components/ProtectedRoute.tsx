import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <NotFound />;
  }

  return <>{children}</>;
}

function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.message}>Page Not Found</p>
        <p style={styles.description}>The page you're looking for doesn't exist.</p>
        <a href="/" style={styles.link}>Go to Home</a>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7fafc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '120px',
    fontWeight: '700',
    margin: '0',
    color: '#2d3748',
  },
  message: {
    fontSize: '32px',
    fontWeight: '600',
    margin: '16px 0',
    color: '#1a202c',
  },
  description: {
    fontSize: '18px',
    color: '#718096',
    margin: '12px 0 32px 0',
  },
  link: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#0066ff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.2s',
  },
};
