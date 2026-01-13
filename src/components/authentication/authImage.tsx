"use client";

import FadeContent from "../FadeContent";

const AuthImage = () => {
  return (
    <div className="relative w-full bg-[url(/images/pointing-contract.webp)] bg-cover bg-center bg-no-repeat">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-black/60 p-10">
        <FadeContent
          blur={false}
          duration={2000}
          ease="ease-out"
          initialOpacity={0}
          className="flex flex-col gap-3"
        >
          <h1 className="text-7xl font-semibold text-white italic">
            Approv<span className="text-green-500">Ease</span>
          </h1>
          <p className="text-center text-xl text-white">
            Streamline Your Workflow with Ease.
          </p>
        </FadeContent>
      </div>
      <p className="absolute bottom-5 left-5 text-xs text-white">
        copyright &copy; {new Date().getFullYear()} ApprovEase. All rights
        reserved
      </p>
    </div>
  );
};

export default AuthImage;
