"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import DashboardLayout from '../components/DashboardLayout';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    height: '',
    weight: '',
    goal: 'Build muscle',
    experience: 'Intermediate',
    preferredWorkoutDays: ['Monday', 'Wednesday', 'Friday'],
    bio: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'authenticated') {
      fetchUserProfile();
    } else if (status === 'unauthenticated') {
      router.push('/signin');
    }
  }, [status]);

  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/profile');
      
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      
      const userData = await response.json();
      
      setFormData(prevData => ({
        ...prevData,
        name: userData.name || '',
        email: userData.email || '',
        height: userData.height?.toString() || '',
        weight: userData.weight?.toString() || '',
      }));
      
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError('Failed to load profile data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (day) => {
    const updatedDays = formData.preferredWorkoutDays.includes(day)
      ? formData.preferredWorkoutDays.filter(d => d !== day)
      : [...formData.preferredWorkoutDays, day];
    
    setFormData({
      ...formData,
      preferredWorkoutDays: updatedDays
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError('');
    
    try {
      const response = await fetch('/api/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          height: formData.height ? parseFloat(formData.height) : null,
          weight: formData.weight ? parseFloat(formData.weight) : null,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      
      const updatedData = await response.json();
      
      // Update form data with response
      setFormData(prev => ({
        ...prev,
        ...updatedData,
        height: updatedData.height?.toString() || '',
        weight: updatedData.weight?.toString() || '',
      }));
      
      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile');
      toast.error('Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  if (isLoading && status !== 'authenticated') {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
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
          className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              disabled={isLoading || isSaving}
              className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${(isLoading || isSaving) ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <div className="border-b border-gray-200 mb-6"></div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    disabled
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fitness Goal</label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Build muscle">Build Muscle</option>
                    <option value="Lose weight">Lose Weight</option>
                    <option value="Improve endurance">Improve Endurance</option>
                    <option value="Maintain fitness">Maintain Fitness</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Workout Days</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {weekdays.map((day) => (
                    <div key={day} className="flex items-center">
                      <input
                        type="checkbox"
                        id={day}
                        checked={formData.preferredWorkoutDays.includes(day)}
                        onChange={() => handleCheckboxChange(day)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={day} className="ml-2 text-sm text-gray-700">
                        {day}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us a bit about yourself..."
                ></textarea>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSaving ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                  ) : 'Save Changes'}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm text-gray-500">Name</h3>
                      <p className="mt-1 text-gray-900">{formData.name || 'Not set'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Email</h3>
                      <p className="mt-1 text-gray-900">{formData.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Height</h3>
                      <p className="mt-1 text-gray-900">{formData.height ? `${formData.height} cm` : 'Not set'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Weight</h3>
                      <p className="mt-1 text-gray-900">{formData.weight ? `${formData.weight} lbs` : 'Not set'}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Fitness Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm text-gray-500">Experience Level</h3>
                      <p className="mt-1 text-gray-900">{formData.experience || 'Not set'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Fitness Goal</h3>
                      <p className="mt-1 text-gray-900">{formData.goal || 'Not set'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Preferred Workout Days</h3>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {formData.preferredWorkoutDays.length > 0 ? (
                          formData.preferredWorkoutDays.map(day => (
                            <span key={day} className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 border border-blue-200 rounded">
                              {day}
                            </span>
                          ))
                        ) : (
                          <p className="text-gray-700">No preferred days set</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Bio</h2>
                <p className="text-gray-700">{formData.bio || 'No bio provided'}</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 