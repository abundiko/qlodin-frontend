"use client";
import { motion } from "framer-motion";
import Input from "./Input";
import { Mail, Lock, Loader } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { __paths } from "@/utils";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://qlodin-backend.onrender.com/api/user/auth/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success(" Successful!");
      router.push(__paths.signIn);
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.");
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <div className="flex flex-col items-center mt-10 justify-center">
          <a
            href="#"
            className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-10 h-10 my-2" src="/qlodin-logo.png" alt="logo" />
          </a>
          <h1 className="text-[#1E1E1E] text-[30px] font-medium font-serif ">
            Qlodin.
          </h1>
          <h1 className="text-xl text-center text-black text-[28px] font-semibold font-['Quicksand'] leading-7 tracking-tight md:text-2xl dark:text-white mb-2">
            Welcome Back
          </h1>
        </div>

        <form onSubmit={submitHandler}>
          <Input
            icon={Mail}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            icon={Lock}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="flex items-center mb-6">
            <Link
              href="/forgot-password"
              className="text-sm text-black hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-black to-black text-white
            font-bold rounded-lg shadow-lg hover:from-black
            hover:to-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
            focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <Loader className="text-white animate-spin mx-auto" size={24} />
            ) : (
              "Next"
            )}
          </motion.button>

          <div className="flex flex-col items-center justify-center text-black text-[22px] font-medium font-['Quicksand'] leading-7">
            or
          </div>

          <div className="flex flex-col gap-3 my-3">
            <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black">
              <button className="flex items-center">
                <img
                  className="w-6 h-6 mr-2"
                  src="/facebook.png"
                  alt="Facebook logo"
                />
                Sign in with Facebook
              </button>
            </div>
            <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black">
              <button className="flex items-center">
                <img
                  className="w-6 h-6 mr-2"
                  src="/google.png"
                  alt="Google logo"
                />
                Sign in with Google
              </button>
            </div>
            <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black">
              <button className="flex items-center">
                <img
                  className="w-10 h-6 mr-2"
                  src="/apple.png"
                  alt="Apple logo"
                />
                Sign in with Apple
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="px-8 py-4 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link href={"/sign-in"} className="text-black hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginForm;
