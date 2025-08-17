import React from 'react';
import { TrendingUp, Clock, Target, Award, Calendar, Code2, Brain, Users } from 'lucide-react';

interface DashboardProps {
  user: {
    name: string;
    level: string;
    streak: number;
    challengesSolved: number;
    interviewsCompleted: number;
  };
  darkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ user, darkMode }) => {
  const stats = [
    {
      label: 'Current Streak',
      value: user.streak,
      unit: 'days',
      icon: TrendingUp,
      color: 'text-green-500',
      bg: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      label: 'Problems Solved',
      value: user.challengesSolved,
      unit: 'total',
      icon: Code2,
      color: 'text-blue-500',
      bg: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      label: 'Mock Interviews',
      value: user.interviewsCompleted,
      unit: 'completed',
      icon: Users,
      color: 'text-purple-500',
      bg: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      label: 'Avg Score',
      value: 87,
      unit: '%',
      icon: Target,
      color: 'text-orange-500',
      bg: 'bg-orange-100 dark:bg-orange-900/20'
    }
  ];

  const recentActivity = [
    {
      type: 'challenge',
      title: 'Two Sum Problem',
      difficulty: 'Easy',
      score: 95,
      time: '2 hours ago',
      status: 'completed'
    },
    {
      type: 'interview',
      title: 'Mock Interview with Sarah K.',
      difficulty: 'Senior Level',
      score: 82,
      time: '1 day ago',
      status: 'completed'
    },
    {
      type: 'challenge',
      title: 'Binary Tree Traversal',
      difficulty: 'Medium',
      score: 78,
      time: '2 days ago',
      status: 'completed'
    },
    {
      type: 'challenge',
      title: 'Dynamic Programming - Coins',
      difficulty: 'Hard',
      score: 0,
      time: '3 days ago',
      status: 'in-progress'
    }
  ];

  const upcomingInterviews = [
    {
      interviewer: 'Mike Johnson',
      company: 'Tech Corp',
      time: 'Tomorrow, 2:00 PM',
      type: 'System Design',
      avatar: 'MJ'
    },
    {
      interviewer: 'Lisa Wang',
      company: 'StartupXYZ',
      time: 'Friday, 10:00 AM',
      type: 'Coding Interview',
      avatar: 'LW'
    }
  ];

  return (
    <div className={`h-full overflow-y-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Welcome back, {user.name.split(' ')[0]}! 👋
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to ace your next interview? Let's keep building your skills.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-lg ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="space-y-1">
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}{stat.unit === '%' ? '%' : ''}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </p>
                {stat.unit !== '%' && (
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {stat.unit}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Recent Activity
                </h2>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                      darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${
                        activity.type === 'challenge'
                          ? 'bg-blue-100 dark:bg-blue-900/20'
                          : 'bg-purple-100 dark:bg-purple-900/20'
                      }`}>
                        {activity.type === 'challenge' ? (
                          <Code2 className={`w-4 h-4 ${activity.type === 'challenge' ? 'text-blue-500' : 'text-purple-500'}`} />
                        ) : (
                          <Users className="w-4 h-4 text-purple-500" />
                        )}
                      </div>
                      <div>
                        <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {activity.title}
                        </h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {activity.difficulty} • {activity.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {activity.status === 'completed' ? (
                        <div className="flex items-center space-x-2">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.score >= 90
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : activity.score >= 70
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                          }`}>
                            {activity.score}%
                          </div>
                          <Award className="w-4 h-4 text-green-500" />
                        </div>
                      ) : (
                        <div className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400 rounded-full text-xs font-medium">
                          In Progress
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Interviews */}
          <div>
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Upcoming Interviews
                </h2>
                <Calendar className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <div className="space-y-4">
                {upcomingInterviews.map((interview, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border transition-colors ${
                      darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{interview.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {interview.interviewer}
                        </h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {interview.company}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {interview.time}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                            {interview.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                Schedule New Interview
              </button>
            </div>

            {/* Quick Actions */}
            <div className={`rounded-xl border p-6 mt-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all">
                  <Brain className="w-5 h-5" />
                  <span className="font-medium">Start Daily Challenge</span>
                </button>
                <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg border transition-colors ${
                  darkMode
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Join Study Group</span>
                </button>
                <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg border transition-colors ${
                  darkMode
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Practice Mock Interview</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;