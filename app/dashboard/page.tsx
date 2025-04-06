import CourseCard from "@/components/CourseCard";
import Link from "next/link";

const courses = [
  { id: 1, title: "Basic Digital Literacy", lang: "Telugu" },
  { id: 2, title: "Mobile Usage & Safety", lang: "Hindi" },
  { id: 3, title: "Intro to Online Jobs", lang: "English" },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Your Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} title={course.title} lang={course.lang} />
        ))}
      </div>
      <Link
        href="/certificate"
        className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700"
      >
        Download Certificate
      </Link>
    </div>
  );
}
