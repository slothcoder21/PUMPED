'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, PlayIcon, PlusIcon, XIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';

export default function StartWorkout() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [availableExercises, setAvailableExercises] = useState([]);
  const [currentSet, setCurrentSet] = useState({ reps: '', weight: '' });
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  // Fetch available exercises and user's saved workouts on mount
  useEffect(() => {
    const fetchData = async () => {
      if (status === 'authenticated') {
        try {
          // Fetch exercises
          const exercisesResponse = await fetch('/api/exercises');
          const exercisesData = await exercisesResponse.json();
          setAvailableExercises(exercisesData);

          // Fetch user's workouts
          const workoutsResponse = await fetch(`/api/workouts?userId=${session.user.id}`);
          const workoutsData = await workoutsResponse.json();
          setSavedWorkouts(workoutsData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (status !== 'loading') {
      fetchData();
    }
  }, [status, session]);

  // Timer functionality
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  // Sample workout templates - now combined with user's saved workouts
  const getWorkoutTemplates = () => {
    const defaultTemplates = [
      { id: 'template-1', name: 'Upper Body', exercises: ['Bench Press', 'Pull-ups', 'Shoulder Press'] },
      { id: 'template-2', name: 'Lower Body', exercises: ['Squats', 'Deadlifts', 'Lunges'] },
      { id: 'template-3', name: 'Full Body', exercises: ['Deadlifts', 'Bench Press', 'Squats', 'Pull-ups'] },
      { id: 'template-4', name: 'Custom Workout', exercises: [] },
    ];

    // Map saved workouts to compatible format
    const userWorkouts = savedWorkouts.map(workout => ({
      id: workout.id,
      name: workout.name,
      category: workout.category,
      isUserWorkout: true,
      exercises: workout.exercises.map(ex => ({
        id: ex.exerciseId,
        name: ex.exercise?.name || 'Unknown Exercise',
        sets: ex.sets,
        reps: ex.reps,
        weight: ex.weight
      }))
    }));

    return [...userWorkouts, ...defaultTemplates];
  };

  const handleWorkoutSelect = (workout) => {
    setSelectedWorkout(workout);
    
    if (workout.isUserWorkout) {
      // Use the saved workout's exercises with their details
      setExercises(workout.exercises.map(ex => {
        // Find the full exercise details from available exercises
        const fullExercise = availableExercises.find(e => e.id === ex.id);
        
        return {
          exerciseId: ex.id,
          name: ex.name,
          sets: [],
          muscleGroup: fullExercise?.muscleGroup,
          originalSets: ex.sets,
          originalReps: ex.reps,
          originalWeight: ex.weight
        };
      }));
    } else {
      // For template workouts, convert the string exercise names to exercise objects
      const exerciseObjects = workout.exercises.map(name => {
        // Try to find a matching exercise in the available exercises
        const matchingExercise = availableExercises.find(e => 
          e.name.toLowerCase() === name.toLowerCase()
        );
        
        return {
          exerciseId: matchingExercise?.id,
          name: name,
          muscleGroup: matchingExercise?.muscleGroup,
          sets: []
        };
      });
      
      setExercises(exerciseObjects);
    }
  };

  const handleAddSet = (exerciseIndex) => {
    if (currentSet.reps && currentSet.weight) {
      const updatedExercises = [...exercises];
      updatedExercises[exerciseIndex].sets.push({
        reps: currentSet.reps,
        weight: currentSet.weight,
        timestamp: new Date()
      });
      setExercises(updatedExercises);
      setCurrentSet({ reps: '', weight: '' });
    }
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsActive(false);
  };

  const handleCompleteWorkout = async () => {
    if (status !== 'authenticated') {
      alert('You must be signed in to save a workout');
      return;
    }

    // Check if any exercises have sets logged
    if (!exercises.some(ex => ex.sets.length > 0)) {
      alert('Please log at least one set before completing the workout');
      return;
    }

    setIsSaving(true);

    try {
      // Format the exercises for the API
      const formattedExercises = exercises
        .filter(ex => ex.sets.length > 0) // Only include exercises with logged sets
        .map(ex => {
          // Calculate average weight and reps for summary
          const totalWeight = ex.sets.reduce((sum, set) => sum + parseFloat(set.weight), 0);
          const totalReps = ex.sets.reduce((sum, set) => sum + parseInt(set.reps), 0);
          const avgWeight = totalWeight / ex.sets.length;
          const avgReps = totalReps / ex.sets.length;
          
          return {
            exerciseId: ex.exerciseId || null, // If we don't have an ID, the API will need to handle it
            name: ex.name,
            sets: ex.sets.length,
            reps: Math.round(avgReps),
            weight: avgWeight,
            notes: `Completed ${ex.sets.length} sets`
          };
        });

      // Prepare the workout log data
      const workoutData = {
        name: selectedWorkout.name,
        date: new Date().toISOString(),
        duration: Math.floor(timer / 60), // Convert seconds to minutes
        category: selectedWorkout.category || 'strength',
        exercises: formattedExercises,
        isCompleted: true,
        notes: `Completed on ${new Date().toLocaleDateString()}`
      };

      // If this is based on a user's saved workout, include the original ID
      if (selectedWorkout.isUserWorkout) {
        workoutData.workoutId = selectedWorkout.id;
      }

      // Send the data to the API
      const response = await fetch('/api/workouts/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workoutData),
      });

      if (!response.ok) {
        throw new Error('Failed to save workout');
      }

      // Redirect to the workout log or workouts page
      router.push('/workouts');
    } catch (error) {
      console.error('Error saving workout:', error);
      alert('Failed to save your workout. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-pulse text-center">
          <p className="text-gray-400">Loading workout data...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center mb-6">
          <Link href="/workouts" className="mr-4">
            <ArrowLeftIcon className="h-6 w-6 text-purple-500" />
          </Link>
          <h1 className="text-2xl font-bold">Start Workout</h1>
        </div>

        {!selectedWorkout ? (
          <>
            <h2 className="text-xl mb-4">Select a workout to begin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getWorkoutTemplates().map(workout => (
                <div 
                  key={workout.id}
                  onClick={() => handleWorkoutSelect(workout)}
                  className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors border border-gray-700"
                >
                  <h3 className="text-lg font-semibold mb-2">{workout.name}</h3>
                  <div className="flex justify-between">
                    <p className="text-gray-400">{workout.exercises.length} exercises</p>
                    {workout.isUserWorkout && (
                      <span className="text-xs bg-blue-600 px-2 py-1 rounded-full text-white">Saved</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{selectedWorkout.name}</h2>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={toggleTimer}
                    className={`p-2 rounded-full ${isActive ? 'bg-red-600' : 'bg-green-600'}`}
                  >
                    <PlayIcon className="h-5 w-5" />
                  </button>
                  <div className="font-mono text-lg">
                    {Math.floor(timer / 60).toString().padStart(2, '0')}:
                    {(timer % 60).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {exercises.map((exercise, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold mb-4">{exercise.name}</h3>
                    {exercise.muscleGroup && (
                      <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                        {exercise.muscleGroup}
                      </span>
                    )}
                  </div>
                  
                  {/* Show target sets/reps if this is from a saved workout */}
                  {exercise.originalSets && (
                    <div className="mb-4 p-2 bg-gray-700 rounded-md">
                      <p className="text-sm text-gray-300">
                        Target: {exercise.originalSets} sets × {exercise.originalReps} reps
                        {exercise.originalWeight ? ` @ ${exercise.originalWeight} kg` : ''}
                      </p>
                    </div>
                  )}
                  
                  {exercise.sets.length > 0 && (
                    <div className="mb-4">
                      <div className="grid grid-cols-3 gap-2 mb-2 text-gray-400 text-sm">
                        <div>Set</div>
                        <div>Weight</div>
                        <div>Reps</div>
                      </div>
                      {exercise.sets.map((set, setIndex) => (
                        <div key={setIndex} className="grid grid-cols-3 gap-2 mb-1">
                          <div>{setIndex + 1}</div>
                          <div>{set.weight} kg</div>
                          <div>{set.reps}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Weight (kg)"
                      className="bg-gray-700 p-2 rounded flex-1 text-white"
                      value={currentSet.weight}
                      onChange={(e) => setCurrentSet({...currentSet, weight: e.target.value})}
                    />
                    <input
                      type="number"
                      placeholder="Reps"
                      className="bg-gray-700 p-2 rounded flex-1 text-white"
                      value={currentSet.reps}
                      onChange={(e) => setCurrentSet({...currentSet, reps: e.target.value})}
                    />
                    <button 
                      onClick={() => handleAddSet(index)}
                      className="bg-blue-600 p-2 rounded text-white"
                    >
                      <PlusIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <button 
                onClick={() => setSelectedWorkout(null)}
                className="bg-gray-700 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={handleCompleteWorkout}
                disabled={isSaving}
                className="bg-blue-600 px-6 py-2 rounded-lg font-semibold disabled:opacity-50 text-white"
              >
                {isSaving ? 'Saving...' : 'Complete Workout'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 