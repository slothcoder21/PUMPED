'use client';

import { motion } from 'framer-motion';
import SvgIcon from './SvgIcon';

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
      <div className="bg-white rounded-xl border border-[#CDE0EA] hover:border-[#4D8DAA] transition-colors overflow-hidden shadow-md hover:shadow-lg">
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-[#305C74]">{workout.name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${
              workout.completed 
                ? 'bg-[#9EC4D6]/30 text-[#305C74]' 
                : 'bg-[#6FA8C1]/20 text-[#3B728E]'
            }`}>
              {workout.completed ? 'Completed' : 'Planned'}
            </span>
          </div>
          
          <div className="text-sm text-[#6FA8C1] mb-4">
            {formatDate(workout.date)}
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <SvgIcon 
                name="lightning" 
                className="h-4 w-4 mr-1 text-[#9EC4D6]" 
              />
              <span className="text-[#3B728E]">{workout.exercises ? workout.exercises.length : 0} exercises</span>
            </div>
            
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