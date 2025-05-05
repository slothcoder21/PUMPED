'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../components/DashboardLayout';

export default function AIWorkouts() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    fitnessLevel: 'intermediate',
    goal: 'strength',
    duration: 45,
    equipment: 'gym',
    focusArea: 'full_body',
    limitations: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [generatedWorkout, setGeneratedWorkout] = useState(null);
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSaveSuccess(false);
    
    try {
      const response = await fetch('/api/ai-workout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate workout');
      }
      
      const data = await response.json();
      setGeneratedWorkout(data);
    } catch (err) {
      setError('Failed to generate workout. Please try again.');
      console.error('Workout generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const saveWorkout = async () => {
    if (!session?.user?.id) {
      setError('You must be signed in to save a workout');
      return;
    }

    setIsSaving(true);
    setSaveSuccess(false);
    
    try {
      const response = await fetch('/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: generatedWorkout.name,
          category: formData.goal,
          duration: parseInt(formData.duration),
          notes: generatedWorkout.description,
          exercises: generatedWorkout.exercises.map((exercise, index) => ({
            exerciseId: `mock-${index}`, // Add mock ID for new exercises
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps || 0,
            // Convert rest time string to seconds if needed
            restTime: typeof exercise.rest === 'string' 
              ? parseInt(exercise.rest.replace(/\D/g, '')) 
              : exercise.rest || 60,
            notes: exercise.instruction,
            muscleGroup: getMuscleGroupFromFocusArea(formData.focusArea),
            equipment: getEquipmentType(formData.equipment)
          }))
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save workout');
      }

      setSaveSuccess(true);
      setTimeout(() => {
        router.push('/workouts');
      }, 2000);
    } catch (err) {
      setError('Failed to save workout. Please try again.');
      console.error('Workout save error:', err);
    } finally {
      setIsSaving(false);
    }
  };

  // Helper functions to map focus area to muscle group and equipment
  const getMuscleGroupFromFocusArea = (focusArea) => {
    const mapping = {
      full_body: 'full body',
      upper_body: 'upper body',
      lower_body: 'lower body',
      chest: 'chest',
      back: 'back',
      legs: 'legs',
      arms: 'arms',
      core: 'core',
      cardio: 'cardio'
    };
    return mapping[focusArea] || 'other';
  };

  const getEquipmentType = (equipment) => {
    const mapping = {
      none: 'bodyweight',
      minimal: 'minimal',
      gym: 'full gym'
    };
    return mapping[equipment] || 'other';
  };

  // Render the bottom section with the fitness form and generated workout
  return (
    <DashboardLayout>
      <div className="px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Workout Generator</h1>
          <p className="text-gray-600 mb-8">Create personalized workouts with the power of AI</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-6">
                  {error}
                </div>
              )}
              
              {saveSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded mb-6">
                  Workout saved successfully! Redirecting to your workouts...
                </div>
              )}
              
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Create Your Workout</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fitnessLevel" className="block text-sm font-medium text-gray-700 mb-1">
                      Fitness Level
                    </label>
                    <select
                      id="fitnessLevel"
                      name="fitnessLevel"
                      value={formData.fitnessLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Goal
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option value="strength">Strength</option>
                      <option value="hypertrophy">Muscle Growth</option>
                      <option value="endurance">Endurance</option>
                      <option value="weight_loss">Weight Loss</option>
                      <option value="flexibility">Flexibility</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                      Workout Duration (minutes)
                    </label>
                    <input
                      id="duration"
                      name="duration"
                      type="number"
                      min="15"
                      max="120"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="equipment" className="block text-sm font-medium text-gray-700 mb-1">
                      Available Equipment
                    </label>
                    <select
                      id="equipment"
                      name="equipment"
                      value={formData.equipment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option value="none">None (Bodyweight Only)</option>
                      <option value="minimal">Minimal (Dumbbells, Resistance Bands)</option>
                      <option value="gym">Full Gym Access</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="focusArea" className="block text-sm font-medium text-gray-700 mb-1">
                      Focus Area
                    </label>
                    <select
                      id="focusArea"
                      name="focusArea"
                      value={formData.focusArea}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option value="full_body">Full Body</option>
                      <option value="upper_body">Upper Body</option>
                      <option value="lower_body">Lower Body</option>
                      <option value="chest">Chest</option>
                      <option value="back">Back</option>
                      <option value="legs">Legs</option>
                      <option value="arms">Arms</option>
                      <option value="core">Core</option>
                      <option value="cardio">Cardio</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="limitations" className="block text-sm font-medium text-gray-700 mb-1">
                      Limitations or Injuries (Optional)
                    </label>
                    <textarea
                      id="limitations"
                      name="limitations"
                      rows="3"
                      value={formData.limitations}
                      onChange={handleChange}
                      placeholder="E.g., knee injury, shoulder pain, etc."
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating Workout...
                      </>
                    ) : (
                      'Generate Workout'
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            <div>
              {generatedWorkout ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{generatedWorkout.name}</h2>
                      <p className="text-gray-600 mt-1">{generatedWorkout.description}</p>
                    </div>
                    <button
                      onClick={saveWorkout}
                      disabled={isSaving}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center"
                    >
                      {isSaving ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                          </svg>
                          Save Workout
                        </>
                      )}
                    </button>
                  </div>
                  
                  {/* Warmup Section */}
                  {generatedWorkout.warmup && generatedWorkout.warmup.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-blue-600">Warm-up</h3>
                      <ul className="space-y-2">
                        {generatedWorkout.warmup.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-xs mr-3 mt-0.5">
                              {index + 1}
                            </span>
                            <div>
                              <span className="font-medium text-gray-800">{item.name}</span>
                              <span className="ml-2 text-sm text-gray-600">{item.duration}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Main Workout Section */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-600">Exercises</h3>
                    <div className="space-y-4">
                      {generatedWorkout.exercises.map((exercise, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex justify-between items-start">
                            <div className="flex items-start">
                              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-xs mr-3 mt-0.5">
                                {index + 1}
                              </span>
                              <div>
                                <h4 className="font-semibold text-gray-800">{exercise.name}</h4>
                                <div className="flex flex-wrap mt-1 gap-x-4 text-sm text-gray-600">
                                  <span>{exercise.sets} sets</span>
                                  {exercise.reps && <span>{exercise.reps} reps</span>}
                                  {exercise.duration && <span>{exercise.duration}</span>}
                                  <span>Rest: {exercise.rest}</span>
                                </div>
                                {exercise.instruction && (
                                  <p className="mt-2 text-sm text-gray-700 border-l-2 border-blue-500 pl-3 italic">
                                    {exercise.instruction}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Cooldown Section */}
                  {generatedWorkout.cooldown && generatedWorkout.cooldown.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-green-600">Cool-down</h3>
                      <ul className="space-y-2">
                        {generatedWorkout.cooldown.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 text-xs mr-3 mt-0.5">
                              {index + 1}
                            </span>
                            <div>
                              <span className="font-medium text-gray-800">{item.name}</span>
                              <span className="ml-2 text-sm text-gray-600">{item.duration}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-8 bg-white rounded-xl border border-dashed border-gray-300 shadow-sm max-w-md mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-blue-300 mb-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm9 4a1 1 0 11-2 0 1 1 0 012 0zm-8 5a1 1 0 110-2 1 1 0 010 2zM5.5 7a1 1 0 100-2 1 1 0 000 2zM8 9a1 1 0 11-2 0 1 1 0 012 0zm4 4a1 1 0 100-2 1 1 0 000 2zm-2-2a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                      <path d="M8 15a1 1 0 110-2 1 1 0 010 2zm4-2a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">No Workout Generated</h3>
                    <p className="text-gray-600">Fill out the form and click "Generate Workout" to create your personalized AI workout plan.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 