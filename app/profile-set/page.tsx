"use client";


import ProfileSetup from "@/components/ProfileSetup";
import SigninPage from "@/components/SIgninPage";

const page = () => {
  return (
    <div className="bg-[url('/bg.png')] bg-cover min-h-screen  flex items-center justify-center relative overflow-hidden ">
      <ProfileSetup />
      
    </div>
  );
};

export default page;
