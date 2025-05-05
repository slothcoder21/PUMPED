'use client';

import { motion } from 'framer-motion';
import SvgIcon from './SvgIcon';

export default function WorkoutCard({ workout, index, onClick }) {
  // Function to format date into a readable string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    // Animated container with staggered animation based on index
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      {/* Card container with styling and hover effects */}
      <div className="bg-white rounded-xl border border-[#CDE0EA] hover:border-[#4D8DAA] transition-colors overflow-hidden shadow-md hover:shadow-lg">
        <div className="p-5">
          {/* Header with workout name and status badge */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-[#305C74]">{workout.name}</h3>
            {/* Status badge with conditional styling */}
            <span className={`text-xs px-2 py-1 rounded-full ${
              workout.completed 
                ? 'bg-[#9EC4D6]/30 text-[#305C74]' 
                : 'bg-[#6FA8C1]/20 text-[#3B728E]'
            }`}>
              {workout.completed ? 'Completed' : 'Planned'}
            </span>
          </div>
          
          {/* Workout date display */}
          <div className="text-sm text-[#6FA8C1] mb-4">
            {formatDate(workout.date)}
          </div>
          
          {/* Workout metrics section */}
          <div className="flex flex-wrap gap-4 text-sm">
            {/* Number of exercises indicator */}
            <div className="flex items-center">
              <SvgIcon 
                name="lightning" 
                className="h-4 w-4 mr-1 text-[#9EC4D6]" 
              />
              <span className="text-[#3B728E]">{workout.exercises ? workout.exercises.length : 0} exercises</span>
            </div>
            
            {/* Workout duration indicator */}
            <div className="flex items-center">
              <SvgIcon 
                name="clock" 
                className="h-4 w-4 mr-1 text-[#9EC4D6]"  
              />
              <span className="text-[#3B728E]">{workout.duration} mins</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 