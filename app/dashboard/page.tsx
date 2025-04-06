'use client';

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

interface Course {
  title: string;
  subject: string;
  description: string;
}

const mockCourses: Course[] = [
  { subject: "Math", title: "Algebra Basics", description: "Learn variables, equations, and inequalities." },
  { subject: "Science", title: "Intro to Biology", description: "Understand living organisms and cells." },
  { subject: "English", title: "Grammar Essentials", description: "Master sentence structure and vocabulary." },
  { subject: "Computer", title: "Web Development 101", description: "Basics of HTML, CSS, and JavaScript." },
  { subject: "History", title: "World Wars Overview", description: "Explore key events from WW1 and WW2." },
];

export default function DashboardPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("subjects");
    if (stored) {
      setSelectedSubjects(JSON.parse(stored));
    }
  }, []);

  const filteredCourses = mockCourses.filter(course =>
    selectedSubjects.includes(course.subject)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      <Navbar />
      <div className="px-6 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Recommended Courses</h1>
        {filteredCourses.length === 0 ? (
          <p className="text-center text-gray-500">No courses to show. Please select subjects first.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <h2 className="text-xl font-semibold text-green-700 mb-2">{course.title}</h2>
                <p className="text-sm text-gray-600 mb-2"><strong>Subject:</strong> {course.subject}</p>
                <p className="text-gray-700">{course.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
