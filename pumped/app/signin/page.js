'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [debug, setDebug] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setDebug('');
    setIsLoading(true);
    
    try {
      console.log('Signing in with:', formData.email);
      
      // Direct call without CSRF check
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      
      console.log('SignIn result:', result);
      setDebug(JSON.stringify(result, null, 2));
      
      if (result?.error) {
        console.error('SignIn error:', result.error);
        setError(result.error || 'Invalid email or password');
        return;
      }
      
      // Redirect to dashboard
      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      console.error('Login error:', err);
      setError(`Authentication error: ${err.message || 'Please try again.'}`);
      setDebug(JSON.stringify(err, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 p-8 rounded-xl shadow-xl border border-white/10"
        >
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-bold">
                <span className="text-blue-500">PUMPED</span>
              </h1>
            </Link>
            <h2 className="text-2xl font-bold mt-6 mb-2 text-white">Welcome Back</h2>
            <p className="text-gray-400">Sign in to continue your fitness journey</p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white"
                placeholder="••••••••"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign Up
              </Link>
            </p>
          </div>
          
          {debug && (
            <div className="mt-6 p-3 bg-gray-800 rounded text-xs text-gray-400 overflow-auto max-h-40">
              <pre>{debug}</pre>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 