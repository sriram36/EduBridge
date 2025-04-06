import CourseCard from "@/components/CourseCard";
import Link from "next/link";

const courses = [
  { id: 1, title: "Basic Digital Literacy", lang: "Telugu", progress: 70 },
  { id: 2, title: "Mobile Usage & Safety", lang: "Hindi", progress: 45 },
  { id: 3, title: "Intro to Online Jobs", lang: "English", progress: 90 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold">Welcome to EduBridge 🎓</h2>

      {/* Daily Quote */}
      <div className="bg-yellow-100 p-4 rounded-xl shadow text-center">
        <p className="text-md italic">
          {`'Learning never exhausts the mind.' – Leonardo da Vinci`}
        </p>
      </div>

      {/* Your Courses */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Your Courses</h3>
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
      <div className="bg-blue-100 p-4 rounded-xl shadow flex justify-between items-center">
        <p className="text-md">👨‍🎓 Total Courses: {courses.length}</p>
        <p className="text-md">🔥 Current Streak: 3 days</p>
      </div>

      {/* Actions */}
      <div className="flex space-x-4 mt-4">
        <Link
          href="/subjects"
          className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700"
        >
          Continue Learning
        </Link>
        <Link
          href="/certificate"
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700"
        >
          Download Certificate
        </Link>
      </div>
    </div>
  );
}
