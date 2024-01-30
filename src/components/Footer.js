import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white mx-4 mt-24">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center mb-4">
            <Image
              src="/logo.png"
              className="w-full h-full"
              alt="Logo"
              width={200}
              height={100}
            />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-800 text-center ">
          © 2023 Banana88 Trans . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
