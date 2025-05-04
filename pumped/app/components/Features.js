'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Workout Tracking',
    description: 'Log your workouts, track sets, reps, and weights with an intuitive interface.',
    icon: '💪',
  },
  {
    title: 'Goal Setting',
    description: 'Set and track fitness goals with progress visualization and achievements.',
    icon: '🎯',
  },
  {
    title: 'AI Workout Generation',
    description: 'Get personalized workout plans created by AI based on your goals and preferences.',
    icon: '🤖',
  },
  {
    title: 'Progress Analytics',
    description: 'Visualize your progress over time with detailed charts and statistics.',
    icon: '📊',
  },
];

export function Features() {
  return (
    <section className="py-16 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Features
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to reach your fitness goals in one place
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 