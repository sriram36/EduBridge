'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const subjects = ["Math", "Science", "English", "Computer", "History"];

export default function SubjectSelection() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSubject = (subject: string) => {
    setSelected(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const handleNext = () => {
    localStorage.setItem("subjects", JSON.stringify(selected));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 px-6 py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Choose Your Interests</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {subjects.map(subject => (
            <button
              key={subject}
              onClick={() => toggleSubject(subject)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-200 border 
              ${
                selected.includes(subject)
                  ? "bg-green-500 text-white border-green-600 shadow"
                  : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
          disabled={selected.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
