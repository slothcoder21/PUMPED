"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [notifications, setNotifications] = useState({
    workoutReminders: true,
    progressUpdates: true,
    achievementAlerts: true,
    tipNotifications: false
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    units: 'metric',
    language: 'english',
    privacyLevel: 'friends'
  });

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: ''
  });

  // Fetch settings when component mounts and user is authenticated
  useEffect(() => {
    if (status === 'authenticated') {
      fetchUserSettings();
    }
  }, [status]);

  const fetchUserSettings = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/settings');
      
      if (!response.ok) {
        throw new Error('Failed to fetch settings');
      }
      
      const data = await response.json();
      
      // Update state with fetched data
      setNotifications({
        workoutReminders: data.workoutReminders,
        progressUpdates: data.progressUpdates,
        achievementAlerts: data.achievementAlerts,
        tipNotifications: data.tipNotifications
      });
      
      setPreferences({
        theme: data.theme,
        units: data.units,
        language: data.language,
        privacyLevel: data.privacyLevel
      });
      
      if (data.user) {
        setUserInfo({
          name: data.user.name || '',
          email: data.user.email || ''
        });
      }
      
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast.error('Failed to load settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNotificationToggle = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
  };

  const handlePreferenceChange = (e) => {
    const { name, value } = e.target;
    setPreferences({
      ...preferences,
      [name]: value
    });
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const saveAccountSettings = async () => {
    try {
      setIsSaving(true);
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...userInfo
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update account settings');
      }
      
      toast.success('Account settings saved successfully');
    } catch (error) {
      console.error('Error saving account settings:', error);
      toast.error('Failed to save account settings');
    } finally {
      setIsSaving(false);
    }
  };

  const saveNotificationSettings = async () => {
    try {
      setIsSaving(true);
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          workoutReminders: notifications.workoutReminders,
          progressUpdates: notifications.progressUpdates,
          achievementAlerts: notifications.achievementAlerts,
          tipNotifications: notifications.tipNotifications
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update notification settings');
      }
      
      toast.success('Notification settings saved successfully');
    } catch (error) {
      console.error('Error saving notification settings:', error);
      toast.error('Failed to save notification settings');
    } finally {
      setIsSaving(false);
    }
  };

  const savePreferences = async () => {
    try {
      setIsSaving(true);
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          theme: preferences.theme,
          units: preferences.units,
          language: preferences.language,
          privacyLevel: preferences.privacyLevel
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update preferences');
      }
      
      toast.success('Preferences saved successfully');
    } catch (error) {
      console.error('Error saving preferences:', error);
      toast.error('Failed to save preferences');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-8"
        >
          Settings
        </motion.h1>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar Navigation */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <nav className="flex flex-col">
                  <a href="#account" className="px-6 py-4 border-l-4 border-blue-500 bg-blue-50 text-blue-700 font-medium">
                    Account
                  </a>
                  <a href="#notifications" className="px-6 py-4 border-l-4 border-transparent hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                    Notifications
                  </a>
                  <a href="#preferences" className="px-6 py-4 border-l-4 border-transparent hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                    Preferences
                  </a>
                  <a href="#privacy" className="px-6 py-4 border-l-4 border-transparent hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                    Privacy
                  </a>
                  <a href="#data" className="px-6 py-4 border-l-4 border-transparent hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                    Data Management
                  </a>
                </nav>
              </div>
            </div>

            {/* Settings Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Account Section */}
              <motion.section
                id="account"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Settings</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userInfo.name}
                      onChange={handleUserInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleUserInfoChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      defaultValue="********"
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                    />
                    <p className="mt-1 text-xs text-gray-500">Password changes are not available in this version</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={saveAccountSettings}
                    disabled={isSaving}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                  >
                    {isSaving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </motion.section>

              {/* Notifications Section */}
              <motion.section
                id="notifications"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Notification Preferences</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Workout Reminders</h3>
                      <p className="text-sm text-gray-500">Receive reminders about your scheduled workouts</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNotificationToggle('workoutReminders')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.workoutReminders ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.workoutReminders ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Progress Updates</h3>
                      <p className="text-sm text-gray-500">Receive updates about your fitness progress</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNotificationToggle('progressUpdates')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.progressUpdates ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.progressUpdates ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Achievement Notifications</h3>
                      <p className="text-sm text-gray-500">Get notified when you reach fitness milestones</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNotificationToggle('achievementAlerts')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.achievementAlerts ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.achievementAlerts ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Tips & Articles</h3>
                      <p className="text-sm text-gray-500">Receive fitness and nutrition tips</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNotificationToggle('tipNotifications')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.tipNotifications ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.tipNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={saveNotificationSettings}
                    disabled={isSaving}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                  >
                    {isSaving ? 'Saving...' : 'Save Notification Settings'}
                  </button>
                </div>
              </motion.section>

              {/* Preferences Section */}
              <motion.section
                id="preferences"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6">App Preferences</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">
                      Theme
                    </label>
                    <select
                      id="theme"
                      name="theme"
                      value={preferences.theme}
                      onChange={handlePreferenceChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="system">System Default</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-1">
                      Units
                    </label>
                    <select
                      id="units"
                      name="units"
                      value={preferences.units}
                      onChange={handlePreferenceChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="metric">Metric (kg, cm)</option>
                      <option value="imperial">Imperial (lb, ft)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                      Language
                    </label>
                    <select
                      id="language"
                      name="language"
                      value={preferences.language}
                      onChange={handlePreferenceChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="privacyLevel" className="block text-sm font-medium text-gray-700 mb-1">
                      Profile Privacy
                    </label>
                    <select
                      id="privacyLevel"
                      name="privacyLevel"
                      value={preferences.privacyLevel}
                      onChange={handlePreferenceChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="public">Public</option>
                      <option value="friends">Friends Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={savePreferences}
                    disabled={isSaving}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                  >
                    {isSaving ? 'Saving...' : 'Save Preferences'}
                  </button>
                </div>
              </motion.section>

              {/* Data Management Section */}
              <motion.section
                id="data"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Data Management</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Export Your Data</h3>
                    <p className="mt-1 text-sm text-gray-500">Download all your workout data and progress history</p>
                    <button
                      type="button"
                      className="mt-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Export Data
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Delete Account</h3>
                    <p className="mt-1 text-sm text-gray-500">Permanently delete your account and all associated data</p>
                    <button
                      type="button"
                      className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}