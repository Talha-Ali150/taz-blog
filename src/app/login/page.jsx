"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { signIn, useSession } from "next-auth/react";
import React from "react";

export default function LoginPage() {
  const { data, status } = useSession();
  console.log(data,status)
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-semibold mb-6">Sign In</h1>
        <div className="space-y-4 w-full max-w-xs">
          <button
            onClick={() => {
              signIn("google");
            }}
            className="w-full py-3 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-300"
          >
            Sign in with Google
          </button>
          <button className="w-full py-3 px-4 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition duration-300">
            Sign in with Github
          </button>
          <button className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
            Sign in with Facebook
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
