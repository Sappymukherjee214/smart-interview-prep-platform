import React from 'react';
import { Settings, Award, TrendingUp, Calendar, Code, Users } from 'lucide-react';

interface UserProfileProps {
  darkMode: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ darkMode }) => {
  return (
    <div className={`h-full overflow-y-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-8">
        {/* Profile Header */}
        <div className={`rounded-xl border p-6 mb-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-2xl">AC</span>
            </div>
            <div className="flex-1">
              <h1 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Alex Chen
              </h1>
              <p className={`text-lg mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Senior Software Engineer
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Interview Ready Score: 87%
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Joined March 2024
                  </span>
                </div>
              </div>
            </div>
            <button className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}>
              <Settings className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>

        {/* Rest of profile content would go here */}
      </div>
    </div>
  );
};

export default UserProfile;