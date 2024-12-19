"use client";


// import SigninPage from "@/components/SIgninPage";
import LoginForm from "@/components/LoginForm"

const page = () => {
  return (
    <div className="bg-[url('/bg.png')] bg-cover  min-h-screen  flex items-center justify-center relative overflow-hidden ">
      {/* <SigninPage /> */}
      <LoginForm/>
    </div>
  );
};

export default page;
