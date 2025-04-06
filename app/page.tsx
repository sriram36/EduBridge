import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center">
      <h1 className="text-4xl font-bold">EduBridge</h1>
      <p className="mt-2 text-lg text-gray-700">Bridging Rural Youth to Digital Learning</p>
      <Link href="/login" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
        Start Learning
      </Link>
    </main>
  );
}
