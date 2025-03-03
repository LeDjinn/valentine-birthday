"use client";

import { useState } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";



export default function Hero() {
 
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="bg-white">
  
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-purple-100 text-white">
        {showContent ? (
          <>
            <Image
              src="/images/valentine-portrait.jpg"
              alt="Valentine's Birthday"
              width={500}
              height={500}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 text-center px-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
                🎉 VALENTINE&apos;S ANNIVERSAIRE 🎉
              </h1>
              <p className="mt-4 text-xl font-medium">
               Les 30 ans de Valentine, ça se fête ! 🎂🎈
              </p>
    
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-white text-gray-900">
            <button
              onClick={() => setShowContent(true)}
              className="rounded-lg bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-red-700 flex items-center gap-2"
            >
              <XMarkIcon className="w-6 h-6" /> Oups, retour à la fête !
            </button>
          </div>
        )}
      </div>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  Parce que 30 ans, ça se fête…
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Ici, c&apos;est le QG du voyage ! 🚀 Retrouvez tout le programme et
                  les updates pour ne rien louper (et éviter les &apos;Heu… on fait
                  quoi demain déjà ?&apos;).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt=""
            src="images/valentine_birthday-young.jpg"
            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
          />
        </div>
      </div>
    </div>
  );
}
