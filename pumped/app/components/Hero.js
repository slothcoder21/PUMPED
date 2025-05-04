'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get <span className="text-purple-500">PUMPED</span> about your fitness journey
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Track your workouts, set goals, and get AI-powered workout recommendations to help you achieve your fitness goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/signup" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/features" 
                  className="border border-white/20 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-6 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [App Screenshot]
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 