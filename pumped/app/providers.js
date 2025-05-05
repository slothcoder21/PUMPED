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
    
    // Add window error handler to catch authentication-related errors
    const handleError = (event) => {
      if (event.message && event.message.includes('next-auth')) {
        console.error('NextAuth error captured in providers:', event);
        setError(event.message);
      }
    };
    
    // Add error monitoring for unhandled promise rejections related to authentication
    const handleUnhandledRejection = (event) => {
      if (event.reason && (
        event.reason.message?.includes('next-auth') || 
        (typeof event.reason === 'string' && event.reason.includes('next-auth'))
      )) {
        console.error('Unhandled auth rejection:', event.reason);
        setError(event.reason.message || event.reason);
      }
    };
    
    // Add event listeners for error monitoring
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  useEffect(() => {
    // Function to verify API endpoints are working properly
    const checkApiStatus = async () => {
      try {
        // Attempt to fetch from a test endpoint
        const res = await fetch('/api/test');
        if (res.ok) {
          setApiStatus('API endpoints working');
        } else {
          // Handle HTTP error responses
          setApiStatus(`API error: ${res.status} ${res.statusText}`);
        }
      } catch (err) {
        // Handle network or other fetch errors
        setApiStatus(`API connection error: ${err.message}`);
      }
    };

    // Only check API status after component has mounted
    if (mounted) {
      checkApiStatus();
    }
  }, [mounted]);

  // Return null during server-side rendering to prevent hydration errors
  if (!mounted) {
    return null;
  }

  return (
    // Set up authentication context with NextAuth SessionProvider
    // Disable automatic refetching to improve performance
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false} basePath="/api/auth">
      {/* Display authentication error banner if an error occurs */}
      {error && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-4 z-50">
          Authentication error: {error}
        </div>
      )}
      {/* Display API error banner if API endpoints are not working */}
      {apiStatus && apiStatus.includes('error') && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-white p-4 z-50 mt-12">
          {apiStatus}
        </div>
      )}
      {/* Add page transition animations using Framer Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Render the application content */}
          {children}
        </motion.div>
      </AnimatePresence>
    </SessionProvider>
  );
} 