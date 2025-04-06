'use client';

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-6 text-green-700">Welcome to EduBridge</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        EduBridge helps you discover personalized online courses based on your favorite subjects. Learn what you love, at your pace.
      </p>
      <button
        onClick={() => router.push('/login')}
        className="px-8 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-all"
      >
        Continue as Guest
      </button>
    </main>
  );
}
