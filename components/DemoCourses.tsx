'use client';

import React from 'react';

const demoCourses = [
  {
    title: "Intro to HTML",
    category: "Web Development",
    duration: "1 Hour",
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Learn JavaScript Basics",
    category: "Programming",
    duration: "2 Hours",
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Getting Started with Git",
    category: "Dev Tools",
    duration: "1.5 Hours",
    color: "bg-purple-100 text-purple-800",
  },
];

const DemoCourses = () => {
  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">🎓 Demo Courses</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {demoCourses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 border hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
            <p className={`inline-block px-3 py-1 text-sm rounded-full mt-2 ${course.color}`}>
              {course.category}
            </p>
            <p className="text-gray-500 mt-2">⏱ {course.duration}</p>
            <button
              className="mt-4 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition"
              onClick={() => alert('This is a demo!')}
            >
              Start Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoCourses;
