import React, { useState, useEffect } from 'react';
import { Code, Calendar, Users, BarChart3, Settings, Home, BookOpen } from 'lucide-react';
import Dashboard from './components/Dashboard';
import CodeEditor from './components/CodeEditor';
import InterviewScheduler from './components/InterviewScheduler';
import MockInterview from './components/MockInterview';
import Analytics from './components/Analytics';
import ChallengeLibrary from './components/ChallengeLibrary';
import UserProfile from './components/UserProfile';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState({
    name: 'Alex Chen',
    email: 'alex.chen@email.com',
    level: 'Intermediate',
    streak: 12,
    challengesSolved: 47,
    interviewsCompleted: 8
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'challenges', label: 'Challenges', icon: Code },
    { id: 'library', label: 'Library', icon: BookOpen },
    { id: 'interviews', label: 'Mock Interviews', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard user={user} darkMode={darkMode} />;
      case 'challenges':
        return <CodeEditor darkMode={darkMode} />;
      case 'library':
        return <ChallengeLibrary darkMode={darkMode} />;
      case 'interviews':
        return <MockInterview darkMode={darkMode} />;
      case 'schedule':
        return <InterviewScheduler darkMode={darkMode} />;
      case 'analytics':
        return <Analytics user={user} darkMode={darkMode} />;
      default:
        return <Dashboard user={user} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`w-64 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col transition-colors duration-300`}>
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>InterviewAce</h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Smart Prep Platform</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : darkMode
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">{user.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="flex-1">
                <p className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{user.name}</p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user.level}</p>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;