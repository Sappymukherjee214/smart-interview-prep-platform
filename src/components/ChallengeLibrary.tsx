import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Users, TrendingUp, Code, Zap, Award } from 'lucide-react';

interface ChallengeLibraryProps {
  darkMode: boolean;
}

const ChallengeLibrary: React.FC<ChallengeLibraryProps> = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTab, setSelectedTab] = useState('problems');

  const challenges = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array",
      description: "Given an array of integers, return indices of two numbers that add up to a target.",
      acceptance: 49.2,
      likes: 12847,
      companies: ["Amazon", "Google", "Microsoft"],
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      topics: ["Hash Table", "Array"],
      premium: false,
      solved: true
    },
    {
      id: 2,
      title: "Reverse Linked List",
      difficulty: "Easy",
      category: "Linked List",
      description: "Given the head of a singly linked list, reverse the list and return the reversed list.",
      acceptance: 67.8,
      likes: 9234,
      companies: ["Facebook", "Apple", "Netflix"],
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      topics: ["Linked List", "Recursion"],
      premium: false,
      solved: true
    },
    {
      id: 3,
      title: "Maximum Subarray",
      difficulty: "Medium",
      category: "Dynamic Programming",
      description: "Find the contiguous subarray with the largest sum and return its sum.",
      acceptance: 48.3,
      likes: 15632,
      companies: ["LinkedIn", "Bloomberg", "Amazon"],
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      topics: ["Array", "Dynamic Programming", "Divide and Conquer"],
      premium: false,
      solved: false
    },
    {
      id: 4,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stack",
      description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      acceptance: 40.1,
      likes: 8976,
      companies: ["Google", "Microsoft", "Facebook"],
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      topics: ["String", "Stack"],
      premium: false,
      solved: true
    },
    {
      id: 5,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      category: "String",
      description: "Given a string s, return the longest palindromic substring in s.",
      acceptance: 31.4,
      likes: 18923,
      companies: ["Amazon", "Microsoft", "Adobe"],
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      topics: ["String", "Dynamic Programming"],
      premium: false,
      solved: false
    },
    {
      id: 6,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      category: "Linked List",
      description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",
      acceptance: 43.8,
      likes: 11567,
      companies: ["Uber", "Facebook", "Google"],
      timeComplexity: "O(N log k)",
      spaceComplexity: "O(k)",
      topics: ["Linked List", "Divide and Conquer", "Heap", "Merge Sort"],
      premium: true,
      solved: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: challenges.length },
    { id: 'Array', name: 'Array', count: 2 },
    { id: 'Linked List', name: 'Linked List', count: 2 },
    { id: 'Dynamic Programming', name: 'Dynamic Programming', count: 2 },
    { id: 'String', name: 'String', count: 2 },
    { id: 'Stack', name: 'Stack', count: 1 }
  ];

  const studyPlans = [
    {
      id: 1,
      title: "Algorithm Study Plan",
      description: "Master fundamental algorithms step by step",
      progress: 65,
      problems: 75,
      completed: 49,
      duration: "4 weeks",
      difficulty: "Beginner to Intermediate",
      topics: ["Arrays", "Sorting", "Searching", "Two Pointers"]
    },
    {
      id: 2,
      title: "Data Structure Study Plan",
      description: "Deep dive into essential data structures",
      progress: 32,
      problems: 60,
      completed: 19,
      duration: "6 weeks",
      difficulty: "Intermediate",
      topics: ["LinkedList", "Trees", "Graphs", "Hash Tables"]
    },
    {
      id: 3,
      title: "System Design Study Plan",
      description: "Learn to design scalable systems",
      progress: 18,
      problems: 45,
      completed: 8,
      duration: "8 weeks",
      difficulty: "Advanced",
      topics: ["Scalability", "Load Balancing", "Caching", "Databases"]
    }
  ];

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'all' || challenge.category === selectedCategory;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-600 dark:text-green-400';
      case 'Medium':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'Hard':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const ProblemsTab = () => (
    <div>
      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                darkMode
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
          
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className={`px-4 py-3 rounded-lg border transition-colors ${
              darkMode
                ? 'bg-gray-800 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`px-4 py-3 rounded-lg border transition-colors ${
              darkMode
                ? 'bg-gray-800 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {filteredChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`p-6 rounded-xl border transition-all hover:shadow-lg cursor-pointer ${
              darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {challenge.title}
                  </h3>
                  {challenge.solved && (
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                  {challenge.premium && (
                    <div className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 rounded text-xs font-medium">
                      Premium
                    </div>
                  )}
                </div>
                
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {challenge.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm">
                  <span className={`font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {challenge.acceptance}% Acceptance
                  </span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {challenge.likes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {challenge.timeComplexity}
                  </span>
                </div>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                  Solve
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex flex-wrap gap-2">
                  {challenge.topics.slice(0, 3).map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {challenge.companies.slice(0, 3).map((company, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const StudyPlansTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {studyPlans.map((plan) => (
        <div
          key={plan.id}
          className={`p-6 rounded-xl border transition-all hover:shadow-lg cursor-pointer ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}
        >
          <div className="mb-4">
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {plan.title}
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {plan.description}
            </p>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Progress
              </span>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {plan.completed}/{plan.problems} problems
              </span>
            </div>
            <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2`}>
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${plan.progress}%` }}
              ></div>
            </div>
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {plan.progress}% completed
            </span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Duration
              </span>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {plan.duration}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Difficulty
              </span>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {plan.difficulty}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {plan.topics.map((topic, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded text-xs font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
          
          <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
            {plan.progress > 0 ? 'Continue' : 'Start Plan'}
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`h-full overflow-y-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Challenge Library
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Practice coding problems from top tech companies
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <nav className="flex space-x-8">
              {[
                { id: 'problems', name: 'Problems', icon: Code },
                { id: 'study-plans', name: 'Study Plans', icon: Award }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center space-x-2 px-1 py-4 border-b-2 font-medium text-sm transition-colors ${
                    selectedTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {selectedTab === 'problems' ? <ProblemsTab /> : <StudyPlansTab />}
      </div>
    </div>
  );
};

export default ChallengeLibrary;