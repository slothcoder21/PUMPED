'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import DashboardLayout from '../../components/DashboardLayout';

export default function CreateWorkoutPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [error, setError] = useState('');
  
  const [workoutData, setWorkoutData] = useState({
    name: '',
    category: 'strength',
    date: new Date().toISOString().split('T')[0],
    duration: 60,
    notes: '',
  });

  // Fetch available exercises
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('/api/exercises');
        if (!response.ok) {
          throw new Error('Failed to fetch exercises');
        }
        const data = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
          setExercises(data);
        } else {
          // Fallback to mock data if no exercises in database
          setExercises([
            { id: 'mock-1', name: 'Bench Press', muscleGroup: 'chest', equipment: 'barbell' },
            { id: 'mock-2', name: 'Squats', muscleGroup: 'legs', equipment: 'barbell' },
            { id: 'mock-3', name: 'Deadlift', muscleGroup: 'back', equipment: 'barbell' },
            { id: 'mock-4', name: 'Pull-ups', muscleGroup: 'back', equipment: 'bodyweight' },
            { id: 'mock-5', name: 'Push-ups', muscleGroup: 'chest', equipment: 'bodyweight' },
            { id: 'mock-6', name: 'Shoulder Press', muscleGroup: 'shoulders', equipment: 'dumbbell' },
            { id: 'mock-7', name: 'Lunges', muscleGroup: 'legs', equipment: 'bodyweight' },
            { id: 'mock-8', name: 'Bicep Curls', muscleGroup: 'arms', equipment: 'dumbbell' },
            { id: 'mock-9', name: 'Tricep Extensions', muscleGroup: 'arms', equipment: 'cable' },
            { id: 'mock-10', name: 'Plank', muscleGroup: 'core', equipment: 'bodyweight' },
          ]);
        }
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setError('Failed to load exercises. Please try again.');
        // Fallback to mock data
        setExercises([
          { id: 'mock-1', name: 'Bench Press', muscleGroup: 'chest', equipment: 'barbell' },
          { id: 'mock-2', name: 'Squats', muscleGroup: 'legs', equipment: 'barbell' },
          { id: 'mock-3', name: 'Deadlift', muscleGroup: 'back', equipment: 'barbell' },
          { id: 'mock-4', name: 'Pull-ups', muscleGroup: 'back', equipment: 'bodyweight' },
          { id: 'mock-5', name: 'Push-ups', muscleGroup: 'chest', equipment: 'bodyweight' },
          { id: 'mock-6', name: 'Shoulder Press', muscleGroup: 'shoulders', equipment: 'dumbbell' },
          { id: 'mock-7', name: 'Lunges', muscleGroup: 'legs', equipment: 'bodyweight' },
          { id: 'mock-8', name: 'Bicep Curls', muscleGroup: 'arms', equipment: 'dumbbell' },
          { id: 'mock-9', name: 'Tricep Extensions', muscleGroup: 'arms', equipment: 'cable' },
          { id: 'mock-10', name: 'Plank', muscleGroup: 'core', equipment: 'bodyweight' },
        ]);
      }
    };

    fetchExercises();
  }, []);

  const handleWorkoutChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData({
      ...workoutData,
      [name]: value
    });
  };

  const handleAddExercise = (exercise) => {
    // Check if the exercise ID is a mock ID
    const isMockExercise = exercise.id.startsWith('mock-');
    
    setSelectedExercises([
      ...selectedExercises,
      {
        exerciseId: exercise.id,
        name: exercise.name,
        sets: 3,
        reps: 10,
        weight: '',
        restTime: 60,
        notes: '',
        // For mock exercises, store the exercise details
        isMockExercise: isMockExercise,
        muscleGroup: exercise.muscleGroup,
        equipment: exercise.equipment
      }
    ]);
  };

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...selectedExercises];
    updatedExercises[index] = {
      ...updatedExercises[index],
      [field]: value
    };
    setSelectedExercises(updatedExercises);
  };

  const handleRemoveExercise = (index) => {
    setSelectedExercises(selectedExercises.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (selectedExercises.length === 0) {
      setError('Please add at least one exercise to your workout.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      if (!session?.user?.id) {
        throw new Error('You must be signed in to create a workout');
      }

      // Simplify exercise data for submission
      const simplifiedExercises = selectedExercises.map(exercise => ({
        exerciseId: exercise.exerciseId,
        name: exercise.name,
        sets: exercise.sets || 3,
        reps: exercise.reps || 10,
        weight: exercise.weight || null,
        restTime: exercise.restTime || 60,
        notes: exercise.notes || ''
      }));

      const response = await fetch('/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...workoutData,
          exercises: simplifiedExercises,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error details:", errorData);
        throw new Error(errorData.message || errorData.error || 'Failed to create workout');
      }

      router.push('/workouts');
    } catch (err) {
      setError(err.message || 'Failed to create workout. Please try again.');
      console.error('Workout creation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state
  if (status === 'loading') {
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
          <h1 className="text-3xl font-bold mb-8">Create New Workout</h1>

          {error && (
            <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 text-red-100 px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl shadow-md p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Workout Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Workout Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={workoutData.name}
                    onChange={handleWorkoutChange}
                    className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="e.g., Monday Upper Body"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={workoutData.category}
                    onChange={handleWorkoutChange}
                    className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  >
                    <option value="strength">Strength</option>
                    <option value="cardio">Cardio</option>
                    <option value="flexibility">Flexibility</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                    Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={workoutData.date}
                    onChange={handleWorkoutChange}
                    className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-1">
                    Duration (minutes)
                  </label>
                  <input
                    id="duration"
                    name="duration"
                    type="number"
                    min="5"
                    max="240"
                    value={workoutData.duration}
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
                  rows="3"
                  value={workoutData.notes}
                  onChange={handleWorkoutChange}
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="Additional notes about this workout..."
                ></textarea>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl shadow-md p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">Exercises</h2>
              
              {selectedExercises.length > 0 ? (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3 text-white">Selected Exercises</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead className="bg-gray-800/50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Exercise
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Sets
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Reps
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Weight
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Rest
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-800/30 divide-y divide-gray-700">
                        {selectedExercises.map((exercise, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                              {exercise.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <input
                                type="number"
                                min="1"
                                className="w-16 py-1 px-2 bg-gray-700 border border-gray-600 rounded text-white text-center"
                                value={exercise.sets}
                                onChange={(e) => handleExerciseChange(index, 'sets', parseInt(e.target.value))}
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <input
                                type="number"
                                min="1"
                                className="w-16 py-1 px-2 bg-gray-700 border border-gray-600 rounded text-white text-center"
                                value={exercise.reps}
                                onChange={(e) => handleExerciseChange(index, 'reps', parseInt(e.target.value))}
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <input
                                type="number"
                                step="0.5"
                                min="0"
                                className="w-20 py-1 px-2 bg-gray-700 border border-gray-600 rounded text-white text-center"
                                value={exercise.weight}
                                onChange={(e) => handleExerciseChange(index, 'weight', e.target.value)}
                                placeholder="kg/lb"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <input
                                type="number"
                                min="0"
                                step="5"
                                className="w-20 py-1 px-2 bg-gray-700 border border-gray-600 rounded text-white text-center"
                                value={exercise.restTime}
                                onChange={(e) => handleExerciseChange(index, 'restTime', parseInt(e.target.value))}
                                placeholder="sec"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                type="button"
                                onClick={() => handleRemoveExercise(index)}
                                className="text-red-400 hover:text-red-300"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 mb-4">No exercises added yet. Select from the list below.</p>
              )}
              
              <div>
                <h3 className="text-lg font-medium mb-3 text-white">Available Exercises</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {exercises.map((exercise) => (
                    <button
                      key={exercise.id}
                      type="button"
                      onClick={() => handleAddExercise(exercise)}
                      className="flex items-center p-3 border border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-left transition-colors"
                    >
                      <span className="text-sm text-white">{exercise.name}</span>
                      <span className="ml-2 text-xs bg-purple-600/30 text-purple-300 px-2 py-0.5 rounded">
                        {exercise.muscleGroup}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                {isLoading ? 'Creating...' : 'Create Workout'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 