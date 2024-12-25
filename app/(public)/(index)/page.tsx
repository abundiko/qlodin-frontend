"use client";

import React from "react";
import Link from "next/link";
import { __paths } from "@/utils";

export default function Home() {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col items-center mt-10 justify-center">
        <a
          href="#"
          className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-30 h-30 my-2"
            src="/images/qlodin-logo.png"
            alt="logo"
          />
        </a>

        <div className="mt-4">
          <Link
            href={__paths.signIn}
            className="text-black font-bold py-2 px-4 rounded bg-transparent border hover:bg-[#f1eaea]"
          >
            Log In
          </Link>
          <Link
            href={__paths.signUp}
            className="ml-2 text-black font-bold py-2 px-4 rounded bg-transparent border hover:bg-[#f1eaea]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
