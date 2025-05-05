'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import GoalProgressCard from '../components/GoalProgressCard';

export default function GoalsPage() {
  const { data: session, status } = useSession();
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [filterType, setFilterType] = useState('All');

  useEffect(() => {
    const fetchGoals = async () => {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          const response = await fetch(`/api/goals?userId=${session.user.id}`);
          const data = await response.json();
          setGoals(data || []);
        } catch (error) {
          console.error('Error fetching goals:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (status !== 'loading') {
      fetchGoals();
    }
  }, [status, session]);

  const handleViewGoal = (goal) => {
    setSelectedGoal(goal);
    setShowModal(true);
  };

  const handleDeleteGoal = async (goalId) => {
    if (!confirm("Are you sure you want to delete this goal? This action cannot be undone.")) {
      return;
    }
    
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/goals?id=${goalId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setGoals(goals.filter(goal => goal.id !== goalId));
        setShowModal(false);
      } else {
        console.error('Failed to delete goal');
        alert('Failed to delete goal. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting goal:', error);
      alert('Error deleting goal. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredGoals = filterType === 'All' 
    ? goals 
    : goals.filter(goal => goal.type === filterType);

  const formatDate = (dateString) => {
    if (!dateString) return 'No date set';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateProgress = (goal) => {
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

  // Loading state
  if (status === 'loading' || isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-center">
            <p className="text-gray-400">Loading your goals...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            className="text-3xl font-bold text-gray-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Goals
          </motion.h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <label htmlFor="filter" className="text-sm font-medium text-gray-300 mr-2">
                Filter:
              </label>
              <select
                id="filter"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Types</option>
                <option value="STRENGTH">Strength</option>
                <option value="WEIGHT">Weight</option>
                <option value="CARDIO">Cardio</option>
              </select>
            </div>
            
            <Link
              href="/goals/create"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Create Goal
            </Link>
          </div>
        </div>

        {filteredGoals.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-300">No goals found</h3>
            <p className="text-gray-400 mt-2">Try changing the filter or create a new goal</p>
            <Link
              href="/goals/create"
              className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Create New Goal
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGoals.map((goal, index) => (
              <div key={goal.id} className="cursor-pointer" onClick={() => handleViewGoal(goal)}>
                <GoalProgressCard goal={goal} index={index} />
              </div>
            ))}
          </div>
        )}
        
        {/* Goal Detail Modal */}
        {showModal && selectedGoal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-200">{selectedGoal.name}</h2>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Type</h3>
                    <p className="mt-1 text-lg text-gray-200">{selectedGoal.type || 'General'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Due Date</h3>
                    <p className="mt-1 text-lg text-gray-200">{formatDate(selectedGoal.dueDate)}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-200 mb-2">Progress</h3>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Current: {selectedGoal.currentValue} {selectedGoal.metric}</span>
                      <span className="text-gray-400">Target: {selectedGoal.targetValue} {selectedGoal.metric}</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                      <div 
                        className={`h-2 rounded-full ${
                          selectedGoal.type === 'STRENGTH' ? 'bg-blue-500' :
                          selectedGoal.type === 'WEIGHT' ? 'bg-blue-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${calculateProgress(selectedGoal)}%` }}
                      />
                    </div>
                    
                    <p className="text-sm text-gray-400">
                      {selectedGoal.type === 'WEIGHT' && selectedGoal.targetValue < selectedGoal.currentValue
                        ? `${selectedGoal.currentValue - selectedGoal.targetValue} ${selectedGoal.metric} to go`
                        : `${selectedGoal.targetValue - selectedGoal.currentValue} ${selectedGoal.metric} to go`
                      }
                    </p>
                  </div>
                </div>
                
                {selectedGoal.description && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-200 mb-2">Description</h3>
                    <p className="text-gray-400 whitespace-pre-line">{selectedGoal.description}</p>
                  </div>
                )}
                
                {/* Modal Footer with Actions */}
                <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-700">
                  <button 
                    onClick={() => handleDeleteGoal(selectedGoal.id)}
                    disabled={isDeleting}
                    className="inline-flex items-center px-4 py-2 border border-red-500/30 text-sm font-medium rounded-md text-red-400 bg-transparent hover:bg-red-500/10 disabled:opacity-50"
                  >
                    {isDeleting ? 'Deleting...' : 'Delete Goal'}
                  </button>
                  
                  <div className="flex space-x-3">
                    <Link
                      href={`/goals/${selectedGoal.id}/edit`}
                      className="inline-flex items-center px-4 py-2 border border-slate-600 text-sm font-medium rounded-md text-gray-200 bg-transparent hover:bg-slate-700"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/goals/${selectedGoal.id}/update-progress`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Update Progress
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 