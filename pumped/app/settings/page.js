"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    workout: true,
    progress: true,
    achievements: true,
    tips: false
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    units: 'metric',
    language: 'english',
    privacy: 'friends'
  });

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
                    defaultValue="John Doe"
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
                    defaultValue="john.doe@example.com"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Changes
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
                    onClick={() => handleNotificationToggle('workout')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications.workout ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notifications.workout ? 'translate-x-6' : 'translate-x-1'
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
                    onClick={() => handleNotificationToggle('progress')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications.progress ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notifications.progress ? 'translate-x-6' : 'translate-x-1'
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
                    onClick={() => handleNotificationToggle('achievements')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications.achievements ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notifications.achievements ? 'translate-x-6' : 'translate-x-1'
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
                    onClick={() => handleNotificationToggle('tips')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications.tips ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notifications.tips ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
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
                  <label htmlFor="privacy" className="block text-sm font-medium text-gray-700 mb-1">
                    Profile Privacy
                  </label>
                  <select
                    id="privacy"
                    name="privacy"
                    value={preferences.privacy}
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
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Preferences
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
      </div>
    </DashboardLayout>
  );
}