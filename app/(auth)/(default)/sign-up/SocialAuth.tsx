export default function SocialAuth() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-black text-sm md:text-lg md:font-semibold mt-3 leading-7">
        or
      </div>
      <div className="flex flex-col  gap-1 my-3">
 
        <SocialAuthButton
          title="Sign in with Google"
          icon="/images/icons/google.svg"
          onClick={() => {}}
        />
  
      </div>
    </>
  );
}


function SocialAuthButton({
  icon,
  title,
  onClick,
}: {
  icon?: string;
  title: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="btn-social-auth">
      <img
        className="w-5 aspect-square object-contain"
        src={icon}
        alt={`${title} logo`}
      />
      {title}
    </button>
  );
}
