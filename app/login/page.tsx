'use client';

import { useRouter } from "next/navigation";
import { loginAnonymously } from "@/firebase/config";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await loginAnonymously();
      router.push("/dashboard");
    } catch {
      alert("Login failed! Please try again.");
      console.error("Anonymous login failed.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-500">Welcome to EduBridge</h2>
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
      >
        Continue as Guest
      </button>
    </div>
  );
}
