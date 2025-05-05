'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import DashboardLayout from '../../components/DashboardLayout';

export default function CreateGoalPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [goalData, setGoalData] = useState({
    name: '',
    description: '',
    type: 'WEIGHT',
    metric: '',
    targetValue: '',
    currentValue: '',
    targetDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoalData({
      ...goalData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!session?.user?.id) {
        throw new Error('You must be signed in to create a goal');
      }

      const response = await fetch('/api/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(goalData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create goal');
      }

      router.push('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to create goal. Please try again.');
      console.error('Goal creation error:', err);
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

  // Helper function to render appropriate form fields based on goal type
  const renderTypeSpecificFields = () => {
    switch (goalData.type) {
      case 'WEIGHT':
        return (
          <>
            <div>
              <label htmlFor="currentValue" className="block text-sm font-medium text-gray-300 mb-1">
                Current Weight
              </label>
              <div className="flex items-center">
                <input
                  id="currentValue"
                  name="currentValue"
                  type="number"
                  step="0.1"
                  min="0"
                  value={goalData.currentValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <span className="ml-2 text-gray-400">kg/lbs</span>
              </div>
            </div>
            <div>
              <label htmlFor="targetValue" className="block text-sm font-medium text-gray-300 mb-1">
                Target Weight
              </label>
              <div className="flex items-center">
                <input
                  id="targetValue"
                  name="targetValue"
                  type="number"
                  step="0.1"
                  min="0"
                  value={goalData.targetValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <span className="ml-2 text-gray-400">kg/lbs</span>
              </div>
            </div>
          </>
        );
      case 'STRENGTH':
        return (
          <>
            <div>
              <label htmlFor="metric" className="block text-sm font-medium text-gray-300 mb-1">
                Exercise
              </label>
              <input
                id="metric"
                name="metric"
                type="text"
                value={goalData.metric}
                onChange={handleChange}
                placeholder="e.g., Bench Press, Squat, Deadlift"
                className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>
            <div>
              <label htmlFor="currentValue" className="block text-sm font-medium text-gray-300 mb-1">
                Current Weight/Reps
              </label>
              <div className="flex items-center">
                <input
                  id="currentValue"
                  name="currentValue"
                  type="number"
                  min="0"
                  value={goalData.currentValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <span className="ml-2 text-gray-400">kg/reps</span>
              </div>
            </div>
            <div>
              <label htmlFor="targetValue" className="block text-sm font-medium text-gray-300 mb-1">
                Target Weight/Reps
              </label>
              <div className="flex items-center">
                <input
                  id="targetValue"
                  name="targetValue"
                  type="number"
                  min="0"
                  value={goalData.targetValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <span className="ml-2 text-gray-400">kg/reps</span>
              </div>
            </div>
          </>
        );
      case 'CARDIO':
        return (
          <>
            <div>
              <label htmlFor="metric" className="block text-sm font-medium text-gray-300 mb-1">
                Activity Type
              </label>
              <input
                id="metric"
                name="metric"
                type="text"
                value={goalData.metric}
                onChange={handleChange}
                placeholder="e.g., Running, Cycling, Swimming"
                className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>
            <div>
              <label htmlFor="currentValue" className="block text-sm font-medium text-gray-300 mb-1">
                Current Distance/Time
              </label>
              <div className="flex items-center">
                <input
                  id="currentValue"
                  name="currentValue"
                  type="number"
                  min="0"
                  value={goalData.currentValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <span className="ml-2 text-gray-400">km/min</span>
              </div>
            </div>
            <div>
              <label htmlFor="targetValue" className="block text-sm font-medium text-gray-300 mb-1">
                Target Distance/Time
              </label>
              <div className="flex items-center">
                <input
                  id="targetValue"
                  name="targetValue"
                  type="number"
                  min="0"
                  value={goalData.targetValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <span className="ml-2 text-gray-400">km/min</span>
              </div>
            </div>
          </>
        );
      case 'HABIT':
        return (
          <>
            <div>
              <label htmlFor="metric" className="block text-sm font-medium text-gray-300 mb-1">
                Habit
              </label>
              <input
                id="metric"
                name="metric"
                type="text"
                value={goalData.metric}
                onChange={handleChange}
                placeholder="e.g., Workout frequency, Water intake"
                className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>
            <div>
              <label htmlFor="currentValue" className="block text-sm font-medium text-gray-300 mb-1">
                Current Frequency/Amount
              </label>
              <div className="flex items-center">
                <input
                  id="currentValue"
                  name="currentValue"
                  type="number"
                  min="0"
                  value={goalData.currentValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <span className="ml-2 text-gray-400">per week</span>
              </div>
            </div>
            <div>
              <label htmlFor="targetValue" className="block text-sm font-medium text-gray-300 mb-1">
                Target Frequency/Amount
              </label>
              <div className="flex items-center">
                <input
                  id="targetValue"
                  name="targetValue"
                  type="number"
                  min="0"
                  value={goalData.targetValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <span className="ml-2 text-gray-400">per week</span>
              </div>
            </div>
          </>
        );
      case 'CUSTOM':
        return (
          <>
            <div>
              <label htmlFor="metric" className="block text-sm font-medium text-gray-300 mb-1">
                Metric
              </label>
              <input
                id="metric"
                name="metric"
                type="text"
                value={goalData.metric}
                onChange={handleChange}
                placeholder="What will you measure?"
                className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>
            <div>
              <label htmlFor="currentValue" className="block text-sm font-medium text-gray-300 mb-1">
                Current Value
              </label>
              <input
                id="currentValue"
                name="currentValue"
                type="number"
                min="0"
                value={goalData.currentValue}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>
            <div>
              <label htmlFor="targetValue" className="block text-sm font-medium text-gray-300 mb-1">
                Target Value
              </label>
              <input
                id="targetValue"
                name="targetValue"
                type="number"
                min="0"
                value={goalData.targetValue}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Create New Goal</h1>

          {error && (
            <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 text-red-100 px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl shadow-md p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-6 text-white">Goal Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Goal Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={goalData.name}
                    onChange={handleChange}
                    placeholder="e.g., Lose 5kg, Bench press 100kg"
                    className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">
                    Goal Type *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={goalData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    <option value="WEIGHT">Weight</option>
                    <option value="STRENGTH">Strength</option>
                    <option value="CARDIO">Cardio</option>
                    <option value="HABIT">Habit</option>
                    <option value="CUSTOM">Custom</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="2"
                  value={goalData.description}
                  onChange={handleChange}
                  placeholder="Why is this goal important to you?"
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {renderTypeSpecificFields()}
              </div>
              
              <div>
                <label htmlFor="targetDate" className="block text-sm font-medium text-gray-300 mb-1">
                  Target Date
                </label>
                <input
                  id="targetDate"
                  name="targetDate"
                  type="date"
                  value={goalData.targetDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {isLoading ? 'Creating...' : 'Create Goal'}
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 