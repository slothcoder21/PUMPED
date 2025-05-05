'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#305C74]">
                Get <span className="text-[#4D8DAA]">PUMPED</span> about your fitness journey
              </h1>
              <p className="text-xl text-[#6FA8C1] mb-8">
                Track your workouts, set goals, and get AI-powered workout recommendations to help you achieve your fitness goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/signup" 
                  className="bg-[#4D8DAA] hover:bg-[#3B728E] text-white font-bold py-3 px-8 rounded-lg text-center transition-colors shadow-md"
                >
                  Get Started
                </Link>
                <Link 
                  href="/features" 
                  className="border border-[#CDE0EA] hover:bg-[#F4F8FB] text-[#305C74] font-bold py-3 px-8 rounded-lg text-center transition-colors shadow-sm"
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
              className="bg-gradient-to-br from-[#9EC4D6]/20 to-[#4D8DAA]/20 p-6 rounded-2xl border border-[#CDE0EA] shadow-xl"
            >
              <div className="aspect-[4/3] bg-[#F4F8FB] rounded-xl overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center text-[#6FA8C1]">
                  <Image src="/screenshot.png" alt="App Screenshot" width={1000} height={1000} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 