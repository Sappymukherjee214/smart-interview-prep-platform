import React, { useState, useRef, useEffect } from 'react';
import { Play, Save, RefreshCw, CheckCircle, XCircle, Clock, Brain, Star } from 'lucide-react';

interface CodeEditorProps {
  darkMode: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ darkMode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(`function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}`);
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const languages = [
    { id: 'javascript', name: 'JavaScript', ext: '.js' },
    { id: 'python', name: 'Python', ext: '.py' },
    { id: 'java', name: 'Java', ext: '.java' },
    { id: 'cpp', name: 'C++', ext: '.cpp' }
  ];

  const currentProblem = {
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      }
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹"
    ]
  };

  const runCode = async () => {
    setIsRunning(true);
    setTestResults(null);
    setFeedback(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock test results
    const mockResults = {
      passed: 3,
      total: 4,
      testCases: [
        { input: "[2,7,11,15], 9", expected: "[0,1]", actual: "[0,1]", passed: true, time: "1ms" },
        { input: "[3,2,4], 6", expected: "[1,2]", actual: "[1,2]", passed: true, time: "0ms" },
        { input: "[3,3], 6", expected: "[0,1]", actual: "[0,1]", passed: true, time: "0ms" },
        { input: "[1,2,3], 7", expected: "[]", actual: "[1,2]", passed: false, time: "1ms" }
      ]
    };

    // Mock AI feedback
    const mockFeedback = {
      score: 85,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      strengths: [
        "Efficient single-pass solution using hash map",
        "Good variable naming conventions",
        "Proper edge case handling"
      ],
      improvements: [
        "Consider adding input validation",
        "Add comments explaining the algorithm approach",
        "Handle edge case where no solution exists more explicitly"
      ],
      overallRating: "Strong Solution",
      interviewReadiness: 78
    };

    setTestResults(mockResults);
    setFeedback(mockFeedback);
    setIsRunning(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newValue = code.substring(0, start) + '    ' + code.substring(end);
        setCode(newValue);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 4;
        }, 0);
      }
    }
  };

  return (
    <div className={`h-full flex ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Problem Description */}
      <div className={`w-1/2 border-r overflow-y-auto ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {currentProblem.title}
              </h1>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded-full text-sm font-medium">
                {currentProblem.difficulty}
              </span>
            </div>
            <button className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}>
              <Star className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </button>
          </div>

          <div className={`prose prose-sm max-w-none ${darkMode ? 'prose-invert' : ''}`}>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {currentProblem.description}
            </p>

            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Examples
            </h3>
            
            {currentProblem.examples.map((example, index) => (
              <div key={index} className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <p className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Example {index + 1}:
                </p>
                <div className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p><strong>Input:</strong> {example.input}</p>
                  <p><strong>Output:</strong> {example.output}</p>
                  {example.explanation && (
                    <p><strong>Explanation:</strong> {example.explanation}</p>
                  )}
                </div>
              </div>
            ))}

            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Constraints
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {currentProblem.constraints.map((constraint, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{constraint}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Code Editor */}
      <div className={`w-1/2 flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Editor Header */}
        <div className={`flex items-center justify-between p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center space-x-4">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className={`px-3 py-2 rounded-lg border transition-colors ${
                darkMode
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              {languages.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
            >
              {isRunning ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              <span>{isRunning ? 'Running...' : 'Run Code'}</span>
            </button>
            
            <button className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}>
              <Save className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>

        {/* Code Input */}
        <div className="flex-1 flex flex-col">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`flex-1 p-4 font-mono text-sm resize-none outline-none ${
              darkMode
                ? 'bg-gray-900 text-gray-100'
                : 'bg-white text-gray-900'
            }`}
            placeholder="Write your code here..."
            style={{
              lineHeight: '1.5',
              tabSize: 4
            }}
          />
        </div>

        {/* Results Panel */}
        {(testResults || feedback) && (
          <div className={`border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
            <div className="max-h-80 overflow-y-auto">
              {testResults && (
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Test Results ({testResults.passed}/{testResults.total} passed)
                    </h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      testResults.passed === testResults.total
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {testResults.passed === testResults.total ? 'All Passed' : 'Some Failed'}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {testResults.testCases.map((test, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border ${
                          test.passed
                            ? darkMode
                              ? 'border-green-800 bg-green-900/10'
                              : 'border-green-200 bg-green-50'
                            : darkMode
                            ? 'border-red-800 bg-red-900/10'
                            : 'border-red-200 bg-red-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {test.passed ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-500" />
                            )}
                            <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              Test Case {index + 1}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{test.time}</span>
                          </div>
                        </div>
                        <div className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <p><strong>Input:</strong> {test.input}</p>
                          <p><strong>Expected:</strong> {test.expected}</p>
                          <p><strong>Actual:</strong> {test.actual}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {feedback && (
                <div className={`border-t p-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="w-6 h-6 text-purple-500" />
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      AI Feedback
                    </h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      feedback.score >= 80
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : feedback.score >= 60
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      Score: {feedback.score}/100
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Time Complexity
                      </p>
                      <p className={`font-mono text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {feedback.timeComplexity}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Space Complexity
                      </p>
                      <p className={`font-mono text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {feedback.spaceComplexity}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-medium mb-2 text-green-600 dark:text-green-400`}>
                        Strengths ✓
                      </h4>
                      <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feedback.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-green-500">•</span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className={`font-medium mb-2 text-orange-600 dark:text-orange-400`}>
                        Areas for Improvement
                      </h4>
                      <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feedback.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-orange-500">•</span>
                            <span>{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`mt-4 p-3 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                    <p className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                      Interview Readiness: {feedback.interviewReadiness}% • {feedback.overallRating}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;