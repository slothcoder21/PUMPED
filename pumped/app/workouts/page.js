"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import WorkoutCard from '../components/WorkoutCard';

export default function WorkoutsPage() {
  const { data: session, status } = useSession();
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [filterType, setFilterType] = useState('All');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          const response = await fetch(`/api/workouts?userId=${session.user.id}`);
          const data = await response.json();
          setWorkouts(data || []);
        } catch (error) {
          console.error('Error fetching workouts:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (status !== 'loading') {
      fetchWorkouts();
    }
  }, [status, session]);

  const handleViewWorkout = (workout) => {
    setSelectedWorkout(workout);
    setShowModal(true);
  };

  const handleDeleteWorkout = async (workoutId) => {
    if (!confirm("Are you sure you want to delete this workout? This action cannot be undone.")) {
      return;
    }
    
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/workouts?id=${workoutId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setWorkouts(workouts.filter(workout => workout.id !== workoutId));
        setShowModal(false);
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

  const filteredWorkouts = filterType === 'All' 
    ? workouts 
    : workouts.filter(workout => workout.type === filterType);

  // Loading state
  if (status === 'loading' || isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-center">
            <p className="text-gray-400">Loading your workouts...</p>
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
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Workouts
          </motion.h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <label htmlFor="filter" className="text-sm font-medium text-gray-700 mr-2">
                Filter:
              </label>
              <select
                id="filter"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Types</option>
                <option value="Strength">Strength</option>
                <option value="Cardio">Cardio</option>
                <option value="Flexibility">Flexibility</option>
              </select>
            </div>
            
            <Link 
              href="/workouts/start"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Start Workout
            </Link>
            
            <Link 
              href="/ai-workouts"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              AI Workout
            </Link>
            
            <Link
              href="/workouts/create"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Create Workout
            </Link>
          </div>
        </div>

        {filteredWorkouts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">No workouts found</h3>
            <p className="text-gray-500 mt-2">Try changing the filter or create a new workout</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkouts.map((workout, index) => (
              <div key={workout.id} onClick={() => handleViewWorkout(workout)}>
                <WorkoutCard workout={workout} index={index} />
              </div>
            ))}
          </div>
        )}
        
        {/* Workout Detail Modal */}
        {showModal && selectedWorkout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedWorkout.name}</h2>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Type</h3>
                    <p className="mt-1 text-lg">{selectedWorkout.category || 'General'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Duration</h3>
                    <p className="mt-1 text-lg">{selectedWorkout.duration || 0} minutes</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Exercises</h3>
                  {selectedWorkout.exercises && selectedWorkout.exercises.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exercise</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sets</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reps</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {selectedWorkout.exercises.map((exercise, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exercise.exercise?.name || exercise.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exercise.sets}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exercise.reps}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exercise.weight || '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-500">No exercises added to this workout yet.</p>
                  )}
                </div>
                
                {/* Modal Footer with Actions */}
                <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => handleDeleteWorkout(selectedWorkout.id)}
                    disabled={isDeleting}
                    className="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 disabled:opacity-50"
                  >
                    {isDeleting ? 'Deleting...' : 'Delete Workout'}
                  </button>
                  
                  <div className="flex space-x-3">
                    <Link
                      href={`/workouts/${selectedWorkout.id}/edit`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/workouts/${selectedWorkout.id}/start`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Start Workout
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