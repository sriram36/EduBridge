import CourseCard from "@/components/CourseCard";
import Link from "next/link";

const courses = [
  { id: 1, title: "Basic Digital Literacy", lang: "Telugu", progress: 70 },
  { id: 2, title: "Mobile Usage & Safety", lang: "Hindi", progress: 45 },
  { id: 3, title: "Intro to Online Jobs", lang: "English", progress: 90 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-sky-50 to-white min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-700">Welcome to EduBridge 🎓</h2>

      {/* Daily Quote */}
      <div className="bg-yellow-200 p-4 rounded-xl shadow text-center border border-yellow-400">
        <p className="text-md italic text-gray-800">
          {`'Learning never exhausts the mind.' – Leonardo da Vinci`}
        </p>
      </div>

      {/* Your Courses */}
      <section>
        <h3 className="text-2xl font-semibold text-purple-700 mb-4">Your Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              lang={course.lang}
              progress={course.progress}
            />
          ))}
        </div>
      </section>

      {/* User Stats */}
      <div className="bg-blue-200 p-4 rounded-xl shadow flex justify-between items-center border border-blue-400">
        <p className="text-md text-blue-900">👨‍🎓 Total Courses: {courses.length}</p>
        <p className="text-md text-blue-900">🔥 Current Streak: <span className="font-bold">3 days</span></p>
      </div>

      {/* Actions */}
      <div className="flex space-x-4 mt-4">
        <Link
          href="/subjects"
          className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 transition"
        >
          Continue Learning
        </Link>
        <Link
          href="/certificate"
          className="bg-indigo-500 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-600 transition"
        >
          Download Certificate
        </Link>
      </div>
    </div>
  );
}
