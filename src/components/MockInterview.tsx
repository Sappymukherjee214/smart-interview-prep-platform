import React, { useState } from 'react';
import { Video, VideoOff, Mic, MicOff, Phone, Settings, Users, Code, MessageSquare, Clock } from 'lucide-react';

interface MockInterviewProps {
  darkMode: boolean;
}

const MockInterview: React.FC<MockInterviewProps> = ({ darkMode }) => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [activeTab, setActiveTab] = useState('interview');
  const [interviewStarted, setInterviewStarted] = useState(false);

  const liveInterviews = [
    {
      id: '1',
      interviewer: 'Sarah Chen',
      candidate: 'Alex Johnson',
      type: 'Technical',
      duration: '45 min',
      status: 'live',
      participants: 2
    },
    {
      id: '2',
      interviewer: 'Michael Rodriguez',
      candidate: 'Emma Davis',
      type: 'Behavioral',
      duration: '30 min',
      status: 'waiting',
      participants: 1
    }
  ];

  const InterviewRoom = () => (
    <div className="h-full flex flex-col">
      {/* Video Grid */}
      <div className="flex-1 grid grid-cols-2 gap-4 p-4">
        {/* Interviewer Video */}
        <div className={`relative rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-xl">SC</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-gray-900'}`}>
              Sarah Chen (Interviewer)
            </div>
          </div>
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Candidate Video */}
        <div className={`relative rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-xl">You</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-900/80 text-white' : 'bg-white/80 text-gray-900'}`}>
              You (Candidate)
            </div>
          </div>
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={`border-t p-4 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                23:45
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className={`text-sm font-medium text-red-500`}>
                Recording
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMicOn(!isMicOn)}
              className={`p-3 rounded-full transition-colors ${
                isMicOn
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  : 'bg-red-500 text-white'
              }`}
            >
              {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`p-3 rounded-full transition-colors ${
                isVideoOn
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  : 'bg-red-500 text-white'
              }`}
            >
              {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </button>

            <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Settings className="w-5 h-5" />
            </button>

            <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-colors flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>End Interview</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const InterviewDashboard = () => (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Mock Interview Center
        </h1>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Practice with real interviewers or join ongoing sessions
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button
          onClick={() => setInterviewStarted(true)}
          className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
        >
          <div className="flex items-center space-x-3 mb-3">
            <Video className="w-6 h-6" />
            <h3 className="text-xl font-semibold">Start Practice Interview</h3>
          </div>
          <p className="text-blue-100">Begin a new mock interview session</p>
        </button>

        <button className={`p-6 rounded-xl border-2 border-dashed transition-all hover:scale-105 ${
          darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
        }`}>
          <div className="flex items-center space-x-3 mb-3">
            <Users className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Join as Interviewer
            </h3>
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Help other candidates practice
          </p>
        </button>

        <button className={`p-6 rounded-xl border-2 border-dashed transition-all hover:scale-105 ${
          darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
        }`}>
          <div className="flex items-center space-x-3 mb-3">
            <Code className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Coding Challenge
            </h3>
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Practice live coding problems
          </p>
        </button>
      </div>

      {/* Live Sessions */}
      <div className={`rounded-xl border p-6 mb-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Live Interview Sessions
          </h2>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`text-sm font-medium text-green-600 dark:text-green-400`}>
              {liveInterviews.filter(i => i.status === 'live').length} Live Now
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {liveInterviews.map((interview) => (
            <div
              key={interview.id}
              className={`p-4 rounded-lg border transition-all hover:shadow-lg ${
                darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {interview.type} Interview
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {interview.interviewer} → {interview.candidate}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  interview.status === 'live'
                    ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                }`}>
                  {interview.status === 'live' ? '🔴 LIVE' : '⏳ Waiting'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {interview.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {interview.participants}
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
                  {interview.status === 'live' ? 'Observe' : 'Join'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Interview History */}
      <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Recent Interview History
        </h2>
        
        <div className="space-y-4">
          {[
            {
              interviewer: 'Sarah Chen',
              type: 'Technical',
              date: '2 days ago',
              duration: '58 min',
              score: 87,
              feedback: 'Strong problem-solving approach, good communication'
            },
            {
              interviewer: 'Michael Rodriguez',
              type: 'Behavioral',
              date: '5 days ago',
              duration: '42 min',
              score: 92,
              feedback: 'Excellent leadership examples, clear storytelling'
            },
            {
              interviewer: 'Emily Wang',
              type: 'System Design',
              date: '1 week ago',
              duration: '75 min',
              score: 78,
              feedback: 'Good scalability considerations, needs work on consistency'
            }
          ].map((session, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {session.interviewer.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {session.interviewer}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {session.type} • {session.date} • {session.duration}
                  </p>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    "{session.feedback}"
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${
                  session.score >= 85
                    ? 'text-green-500'
                    : session.score >= 70
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}>
                  {session.score}%
                </div>
                <button className="mt-2 text-sm text-blue-500 hover:text-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`h-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {interviewStarted ? <InterviewRoom /> : <InterviewDashboard />}
    </div>
  );
};

export default MockInterview;