"use client";

export type ErrorPageProps = {
  message: string;
  reset: any;
};

export default function ErrorPage({ message, reset }: ErrorPageProps) {
  return (
    <div className="w-full h-full flex flex-col gap-2 md:gap-6 justify-center p-6 md:p-[12vw] bg-white/50">
      <div>
        <h3 className="font-semibold text-4xl md:text-6xl font-playfair">Aww. Snap!</h3>
        <h4 className="text-neutral-500">Something's not right</h4>
      </div>
      <p className="text-neutral-500 font-semibold">{message}</p>
      <div className="flex gap-4">
        <button className="btn rounded-lg border border-black px-4 py-1.5 hover:bg-black/10" onClick={reset}>
          Try again
        </button>
        <button
          className="btn rounded-lg border border-black px-4 py-1.5 hover:bg-black/10"
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
