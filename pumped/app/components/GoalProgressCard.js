'use client';

import { motion } from 'framer-motion';

export default function GoalProgressCard({ goal, index }) {
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateProgress = () => {
    if (goal.type === 'WEIGHT' && goal.targetValue < goal.currentValue) {
      // For weight loss goals
      const total = goal.currentValue - goal.targetValue;
      const progress = goal.currentValue - goal.currentValue;
      return Math.max(0, Math.min(100, (progress / total) * 100));
    } else {
      // For all other goals
      return Math.max(0, Math.min(100, (goal.currentValue / goal.targetValue) * 100));
    }
  };

  const progress = calculateProgress();
  
  // Get color based on goal type
  const getGoalColor = () => {
    switch(goal.type) {
      case 'STRENGTH':
        return 'from-purple-600/20 to-purple-800/20 border-purple-500/30';
      case 'WEIGHT':
        return 'from-blue-600/20 to-blue-800/20 border-blue-500/30';
      case 'CARDIO':
        return 'from-green-600/20 to-green-800/20 border-green-500/30';
      default:
        return 'from-gray-600/20 to-gray-800/20 border-gray-500/30';
    }
  };

  // Get progress bar color based on goal type
  const getProgressColor = () => {
    switch(goal.type) {
      case 'STRENGTH':
        return 'bg-purple-500';
      case 'WEIGHT':
        return 'bg-blue-500';
      case 'CARDIO':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="block h-full"
    >
      <div className={`bg-gradient-to-r ${getGoalColor()} rounded-xl border p-5 hover:border-opacity-50 transition-all h-full`}>
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold">{goal.name}</h3>
          <span className="text-xs text-gray-400">
            Due: {formatDate(goal.dueDate || goal.targetDate)}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm mb-2">
          <span>Progress</span>
          <span>
            {goal.currentValue} / {goal.targetValue} {goal.metric || goal.unit}
          </span>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <motion.div 
            className={`h-2 rounded-full ${getProgressColor()}`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="flex items-center text-xs text-gray-400">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>
              {goal.type === 'WEIGHT' && goal.targetValue < goal.currentValue
                ? `${goal.currentValue - goal.targetValue} ${goal.metric || goal.unit} to go`
                : `${goal.targetValue - goal.currentValue} ${goal.metric || goal.unit} to go`
              }
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 