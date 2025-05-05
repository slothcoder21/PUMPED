'use client';

import { motion } from 'framer-motion';
import SvgIcon from './SvgIcon';

export default function GoalProgressCard({ goal, index }) {
  // Format date to a readable string, handling null dates
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Calculate progress percentage based on goal type and values
  const calculateProgress = () => {
    if (goal.type === 'WEIGHT' && goal.targetValue < goal.currentValue) {
      // For weight loss goals (where target is lower than current)
      const total = goal.currentValue - goal.targetValue;
      const progress = goal.currentValue - goal.currentValue;
      return Math.max(0, Math.min(100, (progress / total) * 100));
    } else {
      // For all other goals (where target is higher than current)
      return Math.max(0, Math.min(100, (goal.currentValue / goal.targetValue) * 100));
    }
  };

  // Get the calculated progress percentage
  const progress = calculateProgress();
  
  // Determine background gradient and border colors based on goal type
  const getGoalColor = () => {
    switch(goal.type) {
      case 'STRENGTH':
        return 'from-blue-600/20 to-blue-800/20 border-blue-500/30';
      case 'WEIGHT':
        return 'from-blue-600/20 to-blue-800/20 border-blue-500/30';
      case 'CARDIO':
        return 'from-green-600/20 to-green-800/20 border-green-500/30';
      default:
        return 'from-gray-600/20 to-gray-800/20 border-gray-500/30';
    }
  };

  // Determine progress bar color based on goal type
  const getProgressColor = () => {
    switch(goal.type) {
      case 'STRENGTH':
        return 'bg-blue-500';
      case 'WEIGHT':
        return 'bg-blue-500';
      case 'CARDIO':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    // Animated container with staggered delay based on index
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="block h-full"
    >
      {/* Card container with dynamic gradient background based on goal type */}
      <div className={`bg-gradient-to-r ${getGoalColor()} rounded-xl border p-5 hover:border-opacity-50 transition-all h-full`}>
        {/* Card header with goal name and due date */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold">{goal.name}</h3>
          <span className="text-xs text-gray-400">
            Due: {formatDate(goal.dueDate || goal.targetDate)}
          </span>
        </div>
        
        {/* Progress metrics display */}
        <div className="flex items-center justify-between text-sm mb-2">
          <span>Progress</span>
          <span>
            {goal.currentValue} / {goal.targetValue} {goal.metric || goal.unit}
          </span>
        </div>
        
        {/* Progress bar with animated fill */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <motion.div 
            className={`h-2 rounded-full ${getProgressColor()}`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Remaining progress information */}
        <div className="flex items-center text-xs text-gray-400">
          <div className="flex items-center">
            <SvgIcon 
              name="chart" 
              className="h-3 w-3 mr-1" 
            />
            <span>
              {/* Different text for weight loss vs other goals */}
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