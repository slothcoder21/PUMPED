'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import DashboardLayout from '../../components/DashboardLayout';

export default function LogWorkoutPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [recentWorkouts, setRecentWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState('');
  
  const [workoutLog, setWorkoutLog] = useState({
    date: new Date().toISOString().split('T')[0],
    notes: '',
    exercises: []
  });

  // Fetch recent workouts for quick logging
  useEffect(() => {
    const fetchData = async () => {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          setIsLoading(true);
          
          // Fetch recent workouts
          const workoutsResponse = await fetch(`/api/workouts?userId=${session.user.id}&limit=5`);
          const workoutsData = await workoutsResponse.json();
          
          if (Array.isArray(workoutsData)) {
            setRecentWorkouts(workoutsData);
          }
          
          // Fetch available exercises
          const exercisesResponse = await fetch('/api/exercises');
          const exercisesData = await exercisesResponse.json();
          
          if (Array.isArray(exercisesData)) {
            setExercises(exercisesData);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Failed to load data. Please try again.');
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [status, session]);

  const handleQuickLog = (workout) => {
    setSelectedWorkout(workout);
    
    // Pre-fill the workout log with the selected workout's exercises
    const exerciseData = workout.exercises.map(ex => ({
      exerciseId: ex.exercise.id,
      name: ex.exercise.name,
      sets: ex.sets,
      reps: ex.reps,
      weight: ex.weight || '',
      restTime: ex.restTime || 60,
      notes: '',
      isCompleted: false
    }));
    
    setWorkoutLog({
      workoutId: workout.id,
      name: workout.name,
      date: new Date().toISOString().split('T')[0],
      notes: '',
      exercises: exerciseData
    });
  };

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...workoutLog.exercises];
    updatedExercises[index] = {
      ...updatedExercises[index],
      [field]: value
    };
    setWorkoutLog({
      ...workoutLog,
      exercises: updatedExercises
    });
  };

  const toggleExerciseCompletion = (index) => {
    const updatedExercises = [...workoutLog.exercises];
    updatedExercises[index] = {
      ...updatedExercises[index],
      isCompleted: !updatedExercises[index].isCompleted
    };
    setWorkoutLog({
      ...workoutLog,
      exercises: updatedExercises
    });
  };

  const handleWorkoutChange = (e) => {
    const { name, value } = e.target;
    setWorkoutLog({
      ...workoutLog,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (workoutLog.exercises.length === 0) {
      setError('Please add at least one exercise to your workout log.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      if (!session?.user?.id) {
        throw new Error('You must be signed in to log a workout');
      }

      console.log('Submitting workout log:', {
        ...workoutLog,
        userId: session.user.id,
        isCompleted: true
      });

      const response = await fetch('/api/workouts/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...workoutLog,
          userId: session.user.id,
          isCompleted: true
        }),
      });

      // Log the raw response for debugging
      const responseText = await response.text();
      console.log('Raw API response:', responseText);
      
      if (!response.ok) {
        try {
          // Try to parse as JSON
          const errorData = JSON.parse(responseText);
          throw new Error(errorData.error || 'Failed to log workout');
        } catch (parseError) {
          // If it's not valid JSON, use the text response
          throw new Error(`Server error: ${response.status} - ${responseText.substring(0, 100)}...`);
        }
      }

      // Success! Parse the response and redirect
      const data = JSON.parse(responseText);
      console.log('Workout logged successfully:', data);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to log workout. Please try again.');
      console.error('Workout logging error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state
  if (status === 'loading' || isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-center">
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Log Your Workout</h1>

          {error && (
            <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 text-red-100 px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}

          {!selectedWorkout ? (
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl shadow-md p-6 mb-8 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Select a Recent Workout to Log</h2>
              
              {recentWorkouts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentWorkouts.map((workout) => (
                    <motion.div
                      key={workout.id}
                      className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-lg p-4 cursor-pointer hover:bg-purple-700/20 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleQuickLog(workout)}
                    >
                      <h3 className="font-medium text-lg mb-1">{workout.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        {workout.exercises.length} exercises • {workout.duration} min
                      </p>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs bg-purple-600/30 text-purple-300 px-2 py-0.5 rounded">
                          {workout.category || 'Workout'}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No recent workouts found. Create a workout first.</p>
              )}
              
              <div className="mt-6">
                <button
                  onClick={() => router.push('/workouts/create')}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Create New Workout
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl shadow-md p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4 text-white">Workout Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Workout Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={workoutLog.name}
                      onChange={handleWorkoutChange}
                      className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      readOnly
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                      Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={workoutLog.date}
                      onChange={handleWorkoutChange}
                      className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-1">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="2"
                    value={workoutLog.notes}
                    onChange={handleWorkoutChange}
                    className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="How was your workout? Any PRs or challenges?"
                  ></textarea>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl shadow-md p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4 text-white">Exercises</h2>
                
                <div className="space-y-6">
                  {workoutLog.exercises.map((exercise, index) => (
                    <div 
                      key={index}
                      className={`p-4 border rounded-lg transition-colors ${
                        exercise.isCompleted 
                          ? 'border-green-500/50 bg-green-900/10' 
                          : 'border-gray-700 bg-gray-800/30'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium text-lg">{exercise.name}</h3>
                        <button
                          type="button"
                          onClick={() => toggleExerciseCompletion(index)}
                          className={`px-3 py-1 rounded text-sm ${
                            exercise.isCompleted
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-700 text-gray-300'
                          }`}
                        >
                          {exercise.isCompleted ? 'Completed' : 'Mark Complete'}
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-400 mb-1">
                            Sets
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={exercise.sets}
                            onChange={(e) => handleExerciseChange(index, 'sets', parseInt(e.target.value))}
                            className="w-full px-3 py-1.5 bg-gray-800 border border-gray-700 rounded focus:ring-1 focus:ring-purple-500 text-white text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-400 mb-1">
                            Reps
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={exercise.reps}
                            onChange={(e) => handleExerciseChange(index, 'reps', parseInt(e.target.value))}
                            className="w-full px-3 py-1.5 bg-gray-800 border border-gray-700 rounded focus:ring-1 focus:ring-purple-500 text-white text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-400 mb-1">
                            Weight
                          </label>
                          <input
                            type="number"
                            step="0.5"
                            min="0"
                            value={exercise.weight}
                            onChange={(e) => handleExerciseChange(index, 'weight', e.target.value)}
                            className="w-full px-3 py-1.5 bg-gray-800 border border-gray-700 rounded focus:ring-1 focus:ring-purple-500 text-white text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-400 mb-1">
                            Rest (sec)
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="5"
                            value={exercise.restTime}
                            onChange={(e) => handleExerciseChange(index, 'restTime', parseInt(e.target.value))}
                            className="w-full px-3 py-1.5 bg-gray-800 border border-gray-700 rounded focus:ring-1 focus:ring-purple-500 text-white text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          Notes
                        </label>
                        <input
                          type="text"
                          value={exercise.notes || ''}
                          onChange={(e) => handleExerciseChange(index, 'notes', e.target.value)}
                          placeholder="How did it feel? Any PRs?"
                          className="w-full px-3 py-1.5 bg-gray-800 border border-gray-700 rounded focus:ring-1 focus:ring-purple-500 text-white text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedWorkout(null)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Log Workout
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 