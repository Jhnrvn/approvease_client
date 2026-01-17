"use client";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./globals.css";
// image
import notFoundImage from "../../public/images/404-image.webp";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  // router instance
  const router = useRouter();

  // go back handler
  const goBackHandler = () => {
    router.back();
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col items-center justify-center gap-2">
          <Image
            src={notFoundImage}
            alt="404 Not Found"
            width={400}
            height={400}
          />
          <h1 className="text-2xl">404 - Page Not Found</h1>
          <p>This page does not exist.</p>
          <Button
            type="button"
            onClick={goBackHandler}
            className="mt-8 h-10 w-20 cursor-pointer rounded-sm bg-slate-800 text-white transition-colors duration-300 hover:bg-slate-950"
          >
            Go Back
          </Button>
        </div>
      </body>
    </html>
  );
}
