'use client';

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">EduBridge</h1>
      <button
        onClick={handleLogout}
        className="text-sm bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
