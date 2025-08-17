import React, { useState } from 'react';
import { Calendar, Clock, Users, Video, MapPin, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface InterviewSchedulerProps {
  darkMode: boolean;
}

const InterviewScheduler: React.FC<InterviewSchedulerProps> = ({ darkMode }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [interviewType, setInterviewType] = useState('technical');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const interviewTypes = [
    { id: 'technical', name: 'Technical Interview', duration: '60 min', description: 'Coding problems and system design' },
    { id: 'behavioral', name: 'Behavioral Interview', duration: '45 min', description: 'Leadership and communication skills' },
    { id: 'system-design', name: 'System Design', duration: '90 min', description: 'Architecture and scalability discussion' },
    { id: 'mock-onsite', name: 'Mock On-site', duration: '4 hours', description: 'Full interview loop simulation' }
  ];

  const availableInterviewers = [
    {
      id: '1',
      name: 'Sarah Chen',
      title: 'Senior Software Engineer',
      company: 'Google',
      rating: 4.9,
      reviews: 127,
      avatar: 'SC',
      specialties: ['Algorithms', 'System Design', 'Leadership'],
      nextAvailable: 'Today, 2:00 PM'
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      title: 'Engineering Manager',
      company: 'Meta',
      rating: 4.8,
      reviews: 89,
      avatar: 'MR',
      specialties: ['Behavioral', 'Team Management', 'Strategy'],
      nextAvailable: 'Tomorrow, 10:00 AM'
    },
    {
      id: '3',
      name: 'Emily Wang',
      title: 'Staff Engineer',
      company: 'Netflix',
      rating: 4.9,
      reviews: 156,
      avatar: 'EW',
      specialties: ['System Design', 'Scalability', 'Microservices'],
      nextAvailable: 'Friday, 3:00 PM'
    },
    {
      id: '4',
      name: 'David Kim',
      title: 'Principal Engineer',
      company: 'Amazon',
      rating: 4.7,
      reviews: 203,
      avatar: 'DK',
      specialties: ['Algorithms', 'Data Structures', 'Performance'],
      nextAvailable: 'Monday, 11:00 AM'
    }
  ];

  const upcomingInterviews = [
    {
      id: '1',
      interviewer: 'Sarah Chen',
      type: 'Technical Interview',
      date: 'Tomorrow',
      time: '2:00 PM - 3:00 PM',
      status: 'confirmed',
      meetingLink: 'https://meet.google.com/abc-defg-hij'
    },
    {
      id: '2',
      interviewer: 'Michael Rodriguez',
      type: 'Behavioral Interview',
      date: 'Friday',
      time: '10:00 AM - 10:45 AM',
      status: 'pending',
      meetingLink: null
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const isSelectedDate = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <div className={`h-full overflow-y-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Schedule Mock Interview
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Book a session with experienced interviewers from top tech companies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scheduling Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Interview Type Selection */}
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Interview Type
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interviewTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setInterviewType(type.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      interviewType === type.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : darkMode
                        ? 'border-gray-600 hover:border-gray-500'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {type.name}
                    </h3>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {type.duration}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {type.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Select Date
                </h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className={`p-2 rounded-lg transition-colors ${
                      darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <ChevronLeft className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>
                  <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h3>
                  <button
                    onClick={() => navigateMonth('next')}
                    className={`p-2 rounded-lg transition-colors ${
                      darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    <ChevronRight className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div
                    key={day}
                    className={`p-2 text-center text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    {day}
                  </div>
                ))}
                {getDaysInMonth(currentMonth).map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                    disabled={!day}
                    className={`aspect-square p-2 text-sm rounded-lg transition-all ${
                      !day
                        ? ''
                        : isSelectedDate(day)
                        ? 'bg-blue-500 text-white'
                        : isToday(day)
                        ? darkMode
                          ? 'bg-gray-700 text-blue-400 font-medium'
                          : 'bg-gray-100 text-blue-600 font-medium'
                        : darkMode
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Available Times
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTimeSlot(time)}
                    className={`p-3 rounded-lg border transition-all text-sm font-medium ${
                      selectedTimeSlot === time
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600'
                        : darkMode
                        ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Available Interviewers */}
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Available Interviewers
              </h2>
              <div className="space-y-4">
                {availableInterviewers.slice(0, 3).map((interviewer) => (
                  <div
                    key={interviewer.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-lg ${
                      darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{interviewer.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {interviewer.name}
                        </h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {interviewer.title} • {interviewer.company}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-400">★</span>
                            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {interviewer.rating}
                            </span>
                          </div>
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            ({interviewer.reviews} reviews)
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 mt-2">
                          <Clock className="w-4 h-4 text-green-500" />
                          <span className={`text-sm text-green-600 dark:text-green-400`}>
                            {interviewer.nextAvailable}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {interviewer.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                View All Interviewers
              </button>
            </div>

            {/* Upcoming Interviews */}
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Upcoming Interviews
              </h2>
              <div className="space-y-4">
                {upcomingInterviews.map((interview) => (
                  <div
                    key={interview.id}
                    className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {interview.interviewer}
                        </h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {interview.type}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        interview.status === 'confirmed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}>
                        {interview.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {interview.date} • {interview.time}
                        </span>
                      </div>
                      {interview.meetingLink && (
                        <div className="flex items-center space-x-2">
                          <Video className="w-4 h-4 text-blue-500" />
                          <a
                            href={interview.meetingLink}
                            className="text-sm text-blue-500 hover:text-blue-600"
                          >
                            Join Meeting
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                <Plus className="w-4 h-4" />
                <span>Schedule New Interview</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewScheduler;