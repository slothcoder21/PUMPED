'use client';

import { motion } from 'framer-motion';

export default function WorkoutCard({ workout, index, onClick }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors overflow-hidden">
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold">{workout.name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${
              workout.completed 
                ? 'bg-green-400/20 text-green-400' 
                : 'bg-yellow-400/20 text-yellow-400'
            }`}>
              {workout.completed ? 'Completed' : 'Planned'}
            </span>
          </div>
          
          <div className="text-sm text-gray-400 mb-4">
            {formatDate(workout.date)}
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{workout.exercises ? workout.exercises.length : 0} exercises</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{workout.duration} mins</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 