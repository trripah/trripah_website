import React, { useState } from 'react';
import { FiMail, FiLock, FiCheckCircle } from 'react-icons/fi'; // Importing standard Feather icons
import LoginBG from '../assets/bg.webp';
import Logo from '../assets/trripah-logo.png';

export function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        
        {/* Glassmorphism Card */}
        <div style={styles.glassCard}>
          
          {/* Header */}
          <div style={styles.header}>
            <img src={Logo} alt="Trripah Logo" style={styles.logo} />
            {/* <h2 style={styles.title}>
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2> */}
            <p style={styles.subtitle}>
              {isLogin ? 'Welcome Back, Please enter Your details' : 'Please enter details to create account'}
            </p>
          </div>

          {/* Segmented Toggle Switch */}
          <div style={styles.toggleContainer}>
            <button 
              style={isLogin ? styles.toggleButtonActive : styles.toggleButtonInactive} 
              onClick={() => setIsLogin(true)}>
              Sign In
            </button>
            <button 
              style={!isLogin ? styles.toggleButtonActive : styles.toggleButtonInactive} 
              onClick={() => setIsLogin(false)}>
              Signup
            </button>
          </div>

          {/* Form */}
          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            
            {/* Username Input */}
            <div style={styles.inputWrapper}>
              <div style={styles.iconLeft}>
                <FiMail size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Username or Email" 
                style={styles.bareInput} 
              />
              {/* Optional Success Checkmark */}
              {/* <div style={styles.iconRight}>
                <FiCheckCircle size={20} color="#38a169" />
              </div> */}
            </div>

            {/* Password Input */}
            <div style={styles.inputWrapper}>
              <div style={styles.iconLeft}>
                <FiLock size={20} />
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                style={styles.bareInput} 
              />
            </div>

             {/* Confirm Password (Sign up only) */}
            {!isLogin && (
               <div style={styles.inputWrapper}>
               <div style={styles.iconLeft}>
                 <FiLock size={20} />
               </div>
               <input 
                 type="password" 
                 placeholder="Confirm Password" 
                 style={styles.bareInput} 
               />
             </div>
            )}

            <button type="submit" style={styles.continueButton}>
              Continue
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

// --- Styles ---
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${LoginBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(30px) saturate(180%)',
    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
    border: 'none',
    padding: '20px 15px',
    borderRadius: '5px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    width: '100%',
    maxWidth: '420px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '12px',
  },
  logo: {
    height: '60px',
    marginBottom: '8px',
    objectFit: 'contain',
  },
  title: {
    margin: '0 0 10px 0',
    color: '#000000',
    fontSize: '28px',
    fontWeight: '700',
  },
  subtitle: {
    margin: '0',
    color: '#fff',
    fontSize: '14px',
  },
  toggleContainer: {
    display: 'flex',
    backgroundColor: '#edf2f7',
    borderRadius: '5px',
    padding: '3px',
    width: '100%',
    marginBottom: '12px',
  },
  toggleButtonActive: {
    flex: 1,
    border: 'none',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontWeight: '600',
    padding: '6px',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
  },
  toggleButtonInactive: {
    flex: 1,
    border: 'none',
    backgroundColor: 'transparent',
    color: '#718096',
    fontWeight: '600',
    padding: '6px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  form: {
    width: '100%',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '5px',
    padding: '4px 8px',
    marginBottom: '10px',
    transition: 'border-color 0.2s',
  },
  iconLeft: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '8px',
    color: '#718096',
  },
  iconRight: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '8px',
  },
  bareInput: {
    flex: 1,
    width: '100%',
    padding: '8px 0',
    border: 'none',
    fontSize: '15px',
    fontWeight: '500',
    backgroundColor: 'transparent',
    outline: 'none',
    color: '#1a202c',
  },
  continueButton: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#0066ff',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '8px',
  },
};