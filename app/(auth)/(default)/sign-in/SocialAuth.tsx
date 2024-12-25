export default function SocialAuth() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-black text-[22px] font-medium font-['Quicksand'] leading-7">
        or
      </div>
      <div className="flex flex-col gap-3 my-3">
        <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black">
          <button className="flex items-center">
            <img
              className="w-6 h-6 mr-2"
              src="/images/facebook.png"
              alt="Facebook logo"
            />
            Sign in with Facebook
          </button>
        </div>
        <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black">
          <button className="flex items-center">
            <img
              className="w-6 h-6 mr-2"
              src="/images/google.png"
              alt="Google logo"
            />
            Sign in with Google
          </button>
        </div>
        <div className="flex flex-col items-center justify-center rounded-sm p-2 bg-[#DDDBFF] text-black">
          <button className="flex items-center">
            <img
              className="w-10 h-6 mr-2"
              src="/images/apple.png"
              alt="Apple logo"
            />
            Sign in with Apple
          </button>
        </div>
      </div>
    </>
  );
}
