import React from 'react';
import { TrendingUp, Target, Clock, Award, BarChart3, Calendar, Users, Code } from 'lucide-react';

interface AnalyticsProps {
  user: {
    name: string;
    streak: number;
    challengesSolved: number;
    interviewsCompleted: number;
  };
  darkMode: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ user, darkMode }) => {
  const performanceData = [
    { month: 'Jan', challenges: 12, interviews: 2, score: 78 },
    { month: 'Feb', challenges: 18, interviews: 3, score: 82 },
    { month: 'Mar', challenges: 25, interviews: 4, score: 85 },
    { month: 'Apr', challenges: 31, interviews: 6, score: 88 },
    { month: 'May', challenges: 28, interviews: 5, score: 91 },
    { month: 'Jun', challenges: 35, interviews: 8, score: 87 }
  ];

  const skillBreakdown = [
    { skill: 'Algorithms', score: 92, problems: 28, trend: '+5%' },
    { skill: 'Data Structures', score: 88, problems: 22, trend: '+8%' },
    { skill: 'System Design', score: 78, problems: 8, trend: '+12%' },
    { skill: 'Behavioral', score: 85, problems: 15, trend: '+3%' },
    { skill: 'Databases', score: 82, problems: 12, trend: '+7%' },
    { skill: 'Concurrency', score: 75, problems: 6, trend: '+15%' }
  ];

  const recentTrends = [
    { label: 'Problem Solving Speed', value: '+23%', color: 'text-green-500' },
    { label: 'Code Quality', value: '+18%', color: 'text-blue-500' },
    { label: 'Interview Confidence', value: '+31%', color: 'text-purple-500' },
    { label: 'Communication Skills', value: '+15%', color: 'text-orange-500' }
  ];

  const difficultyDistribution = [
    { level: 'Easy', solved: 18, total: 25, percentage: 72 },
    { level: 'Medium', solved: 22, total: 35, percentage: 63 },
    { level: 'Hard', solved: 7, total: 20, percentage: 35 }
  ];

  return (
    <div className={`h-full overflow-y-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Performance Analytics
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Track your progress and identify areas for improvement
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: 'Total Problems Solved',
              value: user.challengesSolved,
              change: '+12 this week',
              icon: Code,
              color: 'text-blue-500',
              bg: 'bg-blue-100 dark:bg-blue-900/20'
            },
            {
              label: 'Interview Success Rate',
              value: '87%',
              change: '+5% from last month',
              icon: Target,
              color: 'text-green-500',
              bg: 'bg-green-100 dark:bg-green-900/20'
            },
            {
              label: 'Average Session Time',
              value: '42m',
              change: '-8m improvement',
              icon: Clock,
              color: 'text-purple-500',
              bg: 'bg-purple-100 dark:bg-purple-900/20'
            },
            {
              label: 'Current Streak',
              value: user.streak,
              change: 'Personal best!',
              icon: Award,
              color: 'text-orange-500',
              bg: 'bg-orange-100 dark:bg-orange-900/20'
            }
          ].map((metric, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-lg ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${metric.bg}`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="space-y-1">
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {metric.value}{typeof metric.value === 'number' && index === 3 ? ' days' : ''}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {metric.label}
                </p>
                <p className={`text-xs text-green-600 dark:text-green-400`}>
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Performance Chart */}
          <div className="lg:col-span-2">
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Monthly Progress
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Problems Solved
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Average Score
                    </span>
                  </div>
                </div>
              </div>

              {/* Simple bar chart representation */}
              <div className="space-y-4">
                {performanceData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {data.month}
                      </span>
                      <div className="flex items-center space-x-4">
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {data.challenges} problems
                        </span>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {data.score}% avg
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className={`h-2 rounded-full bg-blue-500`} style={{ width: `${(data.challenges / 40) * 100}%` }}></div>
                      <div className={`h-2 rounded-full bg-green-500`} style={{ width: `${(data.score / 100) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Trends */}
          <div>
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Trends
              </h2>
              <div className="space-y-4">
                {recentTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {trend.label}
                    </span>
                    <span className={`text-sm font-semibold ${trend.color}`}>
                      {trend.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Difficulty Distribution */}
            <div className={`rounded-xl border p-6 mt-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Difficulty Distribution
              </h2>
              <div className="space-y-4">
                {difficultyDistribution.map((diff, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {diff.level}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {diff.solved}/{diff.total}
                      </span>
                    </div>
                    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2`}>
                      <div
                        className={`h-2 rounded-full ${
                          diff.level === 'Easy'
                            ? 'bg-green-500'
                            : diff.level === 'Medium'
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${diff.percentage}%` }}
                      ></div>
                    </div>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {diff.percentage}% completed
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skill Breakdown */}
        <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skill Assessment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillBreakdown.map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-colors ${
                  darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {skill.skill}
                  </h3>
                  <span className={`text-sm font-semibold ${
                    skill.score >= 85
                      ? 'text-green-500'
                      : skill.score >= 70
                      ? 'text-yellow-500'
                      : 'text-red-500'
                  }`}>
                    {skill.score}%
                  </span>
                </div>
                <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3`}>
                  <div
                    className={`h-2 rounded-full ${
                      skill.score >= 85
                        ? 'bg-green-500'
                        : skill.score >= 70
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${skill.score}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {skill.problems} problems
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {skill.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;