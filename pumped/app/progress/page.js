"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';

// Dynamic import for charts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ProgressPage() {
  const { data: session, status } = useSession();
  const [timeRange, setTimeRange] = useState('1m'); // 1w, 1m, 3m, 6m, 1y
  const [statType, setStatType] = useState('weight'); // weight, workouts, strength, cardio
  const [isLoading, setIsLoading] = useState(true);
  const [progressData, setProgressData] = useState({
    weight: { '1w': [], '1m': [] },
    strength: { '1m': [] },
    workouts: { '1m': [] },
    cardio: { '1m': [] }
  });
  const [statsSummary, setStatsSummary] = useState([
    { name: 'Total Workouts', value: '0', change: '0', trend: 'up' },
    { name: 'Weight Change', value: '0 kg', change: '0%', trend: 'neutral' },
    { name: 'Strength Increase', value: '0 kg', change: '0%', trend: 'neutral' },
    { name: 'Workout Streak', value: '0 days', change: '0', trend: 'neutral' },
  ]);
  const [achievements, setAchievements] = useState([]);

  // Fetch progress data from API
  useEffect(() => {
    const fetchProgressData = async () => {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          setIsLoading(true);
          
          // Fetch stats data
          const statsResponse = await fetch(`/api/stats?userId=${session.user.id}`);
          const statsData = await statsResponse.json();
          
          // Update stats summary
          if (statsData) {
            const updatedStatsSummary = [...statsSummary];
            
            // Update total workouts
            if (statsData.totalWorkouts !== undefined) {
              updatedStatsSummary[0] = {
                ...updatedStatsSummary[0],
                value: statsData.totalWorkouts.toString(),
                change: `+${statsData.workoutsLastMonth || 0}`,
                trend: (statsData.workoutsLastMonth > 0) ? 'up' : 'neutral'
              };
            }
            
            // Update weight change
            if (statsData.weightChange !== undefined) {
              const weightChangeAbs = Math.abs(statsData.weightChange).toFixed(1);
              const weightChangePercentage = Math.abs(statsData.weightChangePercentage || 0).toFixed(1);
              updatedStatsSummary[1] = {
                ...updatedStatsSummary[1],
                value: `${statsData.weightChange < 0 ? '-' : '+'}${weightChangeAbs} kg`,
                change: `${weightChangePercentage}%`,
                trend: statsData.weightChange < 0 ? 'down' : (statsData.weightChange > 0 ? 'up' : 'neutral')
              };
            }
            
            // Update strength increase
            if (statsData.strengthChange !== undefined) {
              updatedStatsSummary[2] = {
                ...updatedStatsSummary[2],
                value: `${statsData.strengthChange > 0 ? '+' : ''}${statsData.strengthChange} kg`,
                change: `${statsData.strengthChangePercentage || 0}%`,
                trend: statsData.strengthChange > 0 ? 'up' : (statsData.strengthChange < 0 ? 'down' : 'neutral')
              };
            }
            
            // Update workout streak
            if (statsData.workoutStreak !== undefined) {
              updatedStatsSummary[3] = {
                ...updatedStatsSummary[3],
                value: `${statsData.workoutStreak} days`,
                change: `+${statsData.streakChange || 0}`,
                trend: statsData.streakChange > 0 ? 'up' : 'neutral'
              };
            }
            
            setStatsSummary(updatedStatsSummary);
          }
          
          // Fetch progress data for charts
          const progressResponse = await fetch(`/api/stats/progress?userId=${session.user.id}&timeRange=${timeRange}`);
          const progressChartData = await progressResponse.json();
          
          if (progressChartData) {
            setProgressData(progressChartData);
          }
          
          // Fetch achievements
          const achievementsResponse = await fetch(`/api/achievements?userId=${session.user.id}&limit=3`);
          const achievementsData = await achievementsResponse.json();
          
          if (achievementsData && Array.isArray(achievementsData)) {
            setAchievements(achievementsData.map(a => ({
              id: a.id,
              title: a.name,
              description: a.description,
              date: a.unlockedAt || a.createdAt,
              icon: a.image || '🏆'
            })));
          }
          
        } catch (error) {
          console.error('Error fetching progress data:', error);
          // If API fails, keep the current state or provide fallback data
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProgressData();
  }, [status, session, timeRange]);

  // Chart configuration
  const getChartOptions = () => {
    let yAxisTitle = '';
    let chartTitle = '';
    
    switch(statType) {
      case 'weight':
        yAxisTitle = 'Weight (kg)';
        chartTitle = 'Weight Progression';
        break;
      case 'strength':
        yAxisTitle = 'Squat Max (kg)';
        chartTitle = 'Strength Progression';
        break;
      case 'workouts':
        yAxisTitle = 'Workouts';
        chartTitle = 'Workout Frequency';
        break;
      case 'cardio':
        yAxisTitle = 'Duration (min)';
        chartTitle = 'Cardio Performance';
        break;
      default:
        break;
    }

    return {
      chart: {
        type: statType === 'workouts' ? 'bar' : 'line',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      title: {
        text: chartTitle,
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 600,
          color: '#263238'
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      colors: [
        statType === 'weight' ? '#3B82F6' : 
        statType === 'strength' ? '#10B981' : 
        statType === 'workouts' ? '#6366F1' : 
        '#F59E0B'
      ],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        title: {
          text: yAxisTitle
        }
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
      }
    };
  };

  // Get current data series based on selected time range and stat type
  const getCurrentSeries = () => {
    if (!progressData[statType] || !progressData[statType][timeRange]) {
      return [{ name: 'No Data', data: [] }];
    }
    
    return [
      {
        name: statType === 'weight' ? 'Weight' : 
              statType === 'strength' ? 'Squat Max' : 
              statType === 'workouts' ? 'Workouts' : 
              'Cardio Duration',
        data: progressData[statType][timeRange]
      }
    ];
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800">My Progress</h1>
          <p className="text-gray-600 mt-2">Track your fitness journey and achievements</p>
        </motion.div>

        {/* Stats summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsSummary.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
              <div className="mt-2 flex justify-between items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <span className={`inline-flex items-center text-sm ${
                  stat.trend === 'up' 
                    ? 'text-green-600' 
                    : stat.trend === 'down' 
                      ? (stat.name === 'Weight Change' ? 'text-green-600' : 'text-red-600')
                      : 'text-gray-500'
                }`}>
                  {stat.change}
                  {stat.trend === 'up' ? (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : stat.trend === 'down' ? (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : null}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex flex-wrap justify-between items-center mb-6">
            <div className="flex space-x-2 mb-4 md:mb-0">
              <button
                onClick={() => setStatType('weight')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  statType === 'weight' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Weight
              </button>
              <button
                onClick={() => setStatType('strength')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  statType === 'strength' 
                    ? 'bg-green-100 text-green-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Strength
              </button>
              <button
                onClick={() => setStatType('workouts')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  statType === 'workouts' 
                    ? 'bg-indigo-100 text-indigo-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Workouts
              </button>
              <button
                onClick={() => setStatType('cardio')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  statType === 'cardio' 
                    ? 'bg-amber-100 text-amber-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Cardio
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => setTimeRange('1w')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  timeRange === '1w' 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                1W
              </button>
              <button
                onClick={() => setTimeRange('1m')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  timeRange === '1m' 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                1M
              </button>
              <button
                onClick={() => setTimeRange('3m')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  timeRange === '3m' 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                3M
              </button>
              <button
                onClick={() => setTimeRange('6m')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  timeRange === '6m' 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                6M
              </button>
              <button
                onClick={() => setTimeRange('1y')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  timeRange === '1y' 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                1Y
              </button>
            </div>
          </div>

          <div className="h-[400px]">
            {typeof window !== 'undefined' && (
              <Chart
                options={getChartOptions()}
                series={getCurrentSeries()}
                type={statType === 'workouts' ? 'bar' : 'line'}
                height="100%"
              />
            )}
          </div>
        </motion.div>

        {/* Recent achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Achievements</h2>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-800 text-2xl">
                  {achievement.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Achieved on {new Date(achievement.date).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All Achievements
            </button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
} 