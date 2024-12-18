"use client";

import { motion } from "framer-motion";
import Input from "./Input";
import { User, Cake ,Loader} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";



const ProfileSetup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    dateOfBirth: "",
    mobileNumber: "",
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
        "https://qlodin-backend.onrender.com/api/user/auth/profile-setup",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Successful!");
      router.push("/setup");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed.");
      console.error("Error during submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full sm:bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <div className="flex flex-col items-center mt-10 justify-center">
          <a href="#" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-10 h-10 my-2" src="/qlodin-logo.png" alt="logo" />
          </a>
          <h1 className="text-[#1E1E1E] text-[30px] font-medium font-playfair">Qlodin.</h1>
          <h1 className="text-xl text-center text-black text-[28px] font-semibold font-['Quicksand'] leading-7 tracking-tight md:text-2xl dark:text-white">
            Creating your Profile
          </h1>
        </div>

        <form className="p-3" onSubmit={submitHandler}>
          <div className="sm:flex sm:gap-4">
            <Input
              icon={User}
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              icon={User}
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <Input
            icon={Cake}
            name="dateOfBirth"
            type="date"
            placeholder="DD/MM/YYYY"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <Input
            icon={User}
            name="userName"
            placeholder="Driptag"
            value={formData.userName}
            onChange={handleChange}
          />
          <div className="relative w-full">
            <div className="flex items-center">
              <select
                className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-l-lg focus:ring-yellow-500 focus:border-yellow-500 block w-1/3 p-2.5"
                defaultValue="+234"
              >
                <option value="+234">+234 (NG)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                {/* Add more options as needed */}
              </select>
              <input
                type="text"
                name="mobileNumber"
                placeholder="Phone Number"
                className="bg-gray-100 border-t border-r border-b border-gray-300 text-gray-800 text-sm rounded-r-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
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
            {loading ? <Loader className="text-white animate-spin mx-auto" size={24} /> : "Contiue"}
          </motion.button>
        </form>

        <div className="flex mt-4">
          <div className="flex items-center h-5">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="ms-2 text-sm">
            <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">
              I have read and agree to the terms of service
            </label>
            <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">
              By clicking Continue, you agree to Qlodin's Terms of Service and confirm that you have read Qlodin's
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSetup;
