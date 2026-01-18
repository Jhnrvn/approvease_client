"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import notFoundImage from "../../public/images/404-image.webp";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export default function NotFound() {
  const router = useRouter();

  const goBackHandler = () => {
    router.back();
  };

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center gap-2 ${inter.className}`}
    >
      <Image src={notFoundImage} alt="404 Not Found" width={400} height={400} />
      <h1 className="text-2xl">404 - Page Not Found</h1>
      <p>This page does not exist.</p>
      <Button
        type="button"
        onClick={goBackHandler}
        className="mt-8 h-10 w-20 rounded-sm bg-slate-800 text-white hover:bg-slate-950"
      >
        Go Back
      </Button>
    </div>
  );
}
