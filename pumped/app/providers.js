'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }) {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(null);
  const [apiStatus, setApiStatus] = useState(null);

  useEffect(() => {
    setMounted(true);
    
    // Add window error handler to catch auth errors
    const handleError = (event) => {
      if (event.message && event.message.includes('next-auth')) {
        console.error('NextAuth error captured in providers:', event);
        setError(event.message);
      }
    };
    
    // Add error monitoring for unhandled rejections
    const handleUnhandledRejection = (event) => {
      if (event.reason && (
        event.reason.message?.includes('next-auth') || 
        (typeof event.reason === 'string' && event.reason.includes('next-auth'))
      )) {
        console.error('Unhandled auth rejection:', event.reason);
        setError(event.reason.message || event.reason);
      }
    };
    
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  useEffect(() => {
    // Simple test to check if the /api/test endpoint works
    const checkApiStatus = async () => {
      try {
        const res = await fetch('/api/test');
        if (res.ok) {
          setApiStatus('API endpoints working');
        } else {
          setApiStatus(`API error: ${res.status} ${res.statusText}`);
        }
      } catch (err) {
        setApiStatus(`API connection error: ${err.message}`);
      }
    };

    if (mounted) {
      checkApiStatus();
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false} basePath="/api/auth">
      {error && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-4 z-50">
          Authentication error: {error}
        </div>
      )}
      {apiStatus && apiStatus.includes('error') && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-white p-4 z-50 mt-12">
          {apiStatus}
        </div>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </SessionProvider>
  );
} 