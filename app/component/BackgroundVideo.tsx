"use client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function BackgroundVideo() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };
  return (
    <>
      {/* Loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black">
          <p className="text-white">
            <Loader2 className=" animate-spin" />
          </p>
        </div>
      )}

      {/* Video Background */}
      <div
        className={`absolute top-0 w-full h-full z-0 overflow-hidden ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <video
          className="w-full lg:-translate-y-32 lg:-translate-x-8 sm:object-cover"
          autoPlay
          muted
          loop
          src="https://skjwcdoanywqytkwugmt.supabase.co/storage/v1/object/public/resource/Hero3.mp4"
          typeof="video/mp4"
          onLoadedData={handleLoadedData}
        ></video>
      </div>
    </>
  );
}
