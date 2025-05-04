'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import WorkoutCard from '../components/WorkoutCard';
import GoalProgressCard from '../components/GoalProgressCard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [userName, setUserName] = useState('');
  const [recentWorkouts, setRecentWorkouts] = useState([]);
  const [goals, setGoals] = useState([]);
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    activeGoals: 0,
    weeklyWorkouts: {
      completed: 0,
      total: 4
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  // New state for modals and deletion
  const [showWorkoutModal, setShowWorkoutModal] = useState(false);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          // Fetch user data
          const userResponse = await fetch(`/api/profile?userId=${session.user.id}`);
          const userData = await userResponse.json();
          if (userData?.name) {
            setUserName(userData.name);
          }

          // Fetch recent workouts
          const workoutsResponse = await fetch(`/api/workouts?userId=${session.user.id}&limit=3`);
          const workoutsData = await workoutsResponse.json();
          setRecentWorkouts(workoutsData || []);

          // Fetch goals
          const goalsResponse = await fetch(`/api/goals?userId=${session.user.id}&limit=3`);
          const goalsData = await goalsResponse.json();
          setGoals(goalsData || []);

          // Fetch stats
          const statsResponse = await fetch(`/api/stats?userId=${session.user.id}`);
          const statsData = await statsResponse.json();
          setStats({
            totalWorkouts: statsData.totalWorkouts || 0,
            activeGoals: statsData.activeGoals || 0,
            weeklyWorkouts: statsData.weeklyWorkouts || { completed: 0, total: 4 }
          });
        } catch (error) {
          console.error('Error fetching dashboard data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (status !== 'loading') {
      fetchDashboardData();
    }
  }, [status, session]);

  // Handlers for workout operations
  const handleViewWorkout = (workout) => {
    setSelectedWorkout(workout);
    setShowWorkoutModal(true);
  };

  const handleDeleteWorkout = async (workoutId, e) => {
    e.stopPropagation(); // Prevent opening the modal when clicking delete
    
    if (!confirm("Are you sure you want to delete this workout? This action cannot be undone.")) {
      return;
    }
    
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/workouts?id=${workoutId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setRecentWorkouts(recentWorkouts.filter(workout => workout.id !== workoutId));
        
        // Update stats
        setStats(prev => ({
          ...prev,
          totalWorkouts: Math.max(0, prev.totalWorkouts - 1)
        }));
        
        if (showWorkoutModal && selectedWorkout?.id === workoutId) {
          setShowWorkoutModal(false);
        }
      } else {
        console.error('Failed to delete workout');
        alert('Failed to delete workout. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting workout:', error);
      alert('Error deleting workout. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  // Handlers for goal operations
  const handleViewGoal = (goal) => {
    setSelectedGoal(goal);
    setShowGoalModal(true);
  };

  const handleDeleteGoal = async (goalId, e) => {
    e.stopPropagation(); // Prevent opening the modal when clicking delete
    
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
        
        // Update stats
        setStats(prev => ({
          ...prev,
          activeGoals: Math.max(0, prev.activeGoals - 1)
        }));
        
        if (showGoalModal && selectedGoal?.id === goalId) {
          setShowGoalModal(false);
        }
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

  const formatDate = (dateString) => {
    if (!dateString) return 'No date set';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Calculate progress for goals
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

  // Show a loading state if necessary
  if (status === 'loading' || isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-center">
            <p className="text-gray-400">Loading your dashboard...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout>
      <div className="px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, {userName || 'Fitness Enthusiast'}</h1>
          <p className="text-gray-400 mb-8">Let's check your progress today</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 p-6 rounded-xl border border-purple-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 className="text-gray-400 text-sm mb-1">Total Workouts</h3>
              <p className="text-3xl font-bold">{stats.totalWorkouts}</p>
              <p className="text-green-400 text-sm mt-2">Keep going strong!</p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 p-6 rounded-xl border border-blue-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-gray-400 text-sm mb-1">Active Goals</h3>
              <p className="text-3xl font-bold">{stats.activeGoals}</p>
              <div className="w-full bg-gray-700 rounded-full h-1.5 mt-3">
                <div className="bg-blue-500 h-1.5 rounded-full w-[65%]"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-r from-green-600/20 to-green-800/20 p-6 rounded-xl border border-green-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-gray-400 text-sm mb-1">This Week</h3>
              <p className="text-3xl font-bold">{stats.weeklyWorkouts.completed} / {stats.weeklyWorkouts.total}</p>
              <p className="text-gray-400 text-sm mt-2">Workouts completed</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Workouts</h2>
                <Link 
                  href="/workouts" 
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center"
                >
                  View all
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentWorkouts.length > 0 ? (
                  recentWorkouts.map((workout, index) => (
                    <div key={workout.id} className="relative">
                      <WorkoutCard 
                        workout={workout} 
                        index={index} 
                        onClick={() => handleViewWorkout(workout)}
                      />
                      <button
                        onClick={(e) => handleDeleteWorkout(workout.id, e)}
                        className="absolute top-3 right-3 p-1.5 bg-red-500/10 hover:bg-red-500/20 rounded-full text-red-400 z-10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="p-4 border border-dashed border-gray-600 rounded-xl text-center">
                    <p className="text-gray-400">No workouts yet. Create your first workout!</p>
                  </div>
                )}
                
                <Link href="/workouts/create" className="block">
                  <motion.div 
                    className="p-4 border border-dashed border-gray-600 rounded-xl text-center hover:border-purple-500 hover:bg-slate-700/30 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-gray-400">
                      <span className="text-purple-400">+</span> Create New Workout
                    </p>
                  </motion.div>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Goals Progress</h2>
                <Link 
                  href="/goals" 
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center"
                >
                  View all
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
              
              <div className="space-y-4">
                {goals.length > 0 ? (
                  goals.map((goal, index) => (
                    <div key={goal.id} className="relative">
                      <div className="cursor-pointer" onClick={() => handleViewGoal(goal)}>
                        <GoalProgressCard goal={goal} index={index} />
                      </div>
                      <button
                        onClick={(e) => handleDeleteGoal(goal.id, e)}
                        className="absolute top-3 right-3 p-1.5 bg-red-500/10 hover:bg-red-500/20 rounded-full text-red-400 z-10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="p-4 border border-dashed border-gray-600 rounded-xl text-center">
                    <p className="text-gray-400">No goals set yet. Set your first goal!</p>
                  </div>
                )}
                
                <Link href="/goals/create" className="block">
                  <motion.div 
                    className="p-4 border border-dashed border-gray-600 rounded-xl text-center hover:border-purple-500 hover:bg-slate-700/30 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-gray-400">
                      <span className="text-purple-400">+</span> Create New Goal
                    </p>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Workout Detail Modal */}
      {showWorkoutModal && selectedWorkout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-200">{selectedWorkout.name}</h2>
                <button 
                  onClick={() => setShowWorkoutModal(false)}
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
                  <p className="mt-1 text-lg text-gray-200">{selectedWorkout.category || 'General'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Duration</h3>
                  <p className="mt-1 text-lg text-gray-200">{selectedWorkout.duration || 0} minutes</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Date</h3>
                  <p className="mt-1 text-lg text-gray-200">{formatDate(selectedWorkout.date)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Status</h3>
                  <p className="mt-1 text-lg text-gray-200">{selectedWorkout.completed ? 'Completed' : 'Planned'}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-200 mb-3">Exercises</h3>
                {selectedWorkout.exercises && selectedWorkout.exercises.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead className="bg-slate-700/50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Exercise</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Sets</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Reps</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Weight</th>
                        </tr>
                      </thead>
                      <tbody className="bg-slate-800 divide-y divide-gray-700">
                        {selectedWorkout.exercises.map((exercise, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">{exercise.exercise?.name || exercise.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{exercise.sets}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{exercise.reps}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{exercise.weight || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-400">No exercises added to this workout yet.</p>
                )}
              </div>
              
              {selectedWorkout.notes && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-200 mb-2">Notes</h3>
                  <p className="text-gray-400 whitespace-pre-line">{selectedWorkout.notes}</p>
                </div>
              )}
              
              {/* Modal Footer with Actions */}
              <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-700">
                <button 
                  onClick={(e) => handleDeleteWorkout(selectedWorkout.id, e)}
                  disabled={isDeleting}
                  className="inline-flex items-center px-4 py-2 border border-red-500/30 text-sm font-medium rounded-md text-red-400 bg-transparent hover:bg-red-500/10 disabled:opacity-50"
                >
                  {isDeleting ? 'Deleting...' : 'Delete Workout'}
                </button>
                
                <div className="flex space-x-3">
                  <Link
                    href={`/workouts/${selectedWorkout.id}/edit`}
                    className="inline-flex items-center px-4 py-2 border border-slate-600 text-sm font-medium rounded-md text-gray-200 bg-transparent hover:bg-slate-700"
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/workouts/${selectedWorkout.id}/start`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Start Workout
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Goal Detail Modal */}
      {showGoalModal && selectedGoal && (
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
                  onClick={() => setShowGoalModal(false)}
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
                  <p className="mt-1 text-lg text-gray-200">{formatDate(selectedGoal.dueDate || selectedGoal.targetDate)}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-200 mb-2">Progress</h3>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">Current: {selectedGoal.currentValue} {selectedGoal.metric || selectedGoal.unit}</span>
                    <span className="text-gray-400">Target: {selectedGoal.targetValue} {selectedGoal.metric || selectedGoal.unit}</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div 
                      className={`h-2 rounded-full ${
                        selectedGoal.type === 'STRENGTH' ? 'bg-purple-500' :
                        selectedGoal.type === 'WEIGHT' ? 'bg-blue-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${calculateProgress(selectedGoal)}%` }}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-400">
                    {selectedGoal.type === 'WEIGHT' && selectedGoal.targetValue < selectedGoal.currentValue
                      ? `${selectedGoal.currentValue - selectedGoal.targetValue} ${selectedGoal.metric || selectedGoal.unit} to go`
                      : `${selectedGoal.targetValue - selectedGoal.currentValue} ${selectedGoal.metric || selectedGoal.unit} to go`
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
                  onClick={(e) => handleDeleteGoal(selectedGoal.id, e)}
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
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Update Progress
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </DashboardLayout>
  );
} 