"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [showContent, setShowContent] = useState(true)

  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-pink-50 text-black">
        {showContent ? (
          <>
            <div className="absolute inset-0 border-[12px] border-black z-10"></div>

            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/valentine-portrait.jpg"
                alt="Valentine's Birthday"
                width={500}
                height={500}
                className="w-full h-full object-cover grayscale-[30%] contrast-110 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-pink-100 opacity-60"></div>

              {/* Doodle elements with pastel colors */}
              <div className="absolute top-10 left-10 w-20 h-20 border-4 border-black rotate-12 bg-yellow-100"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-black -rotate-6 bg-blue-100"></div>
              <div className="absolute top-1/4 right-1/4 w-12 h-12 border-4 border-black rotate-45 bg-green-100"></div>
              <div className="absolute bottom-1/3 left-1/3 w-24 h-8 border-4 border-black -rotate-12 bg-purple-100"></div>
            </div>

            <div className="relative z-20 text-center px-6 transform -rotate-2">
              <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
                  <span className="text-pink-500">🎉</span> VALENTINE&apos;S{" "}
                  <span className="text-purple-400">ANNIVERSAIRE</span> <span className="text-pink-500">🎉</span>
                </h1>
                <div className="w-full h-2 bg-pink-300 my-4"></div>
                <p className="mt-4 text-xl font-bold">
                  Les <span className="text-pink-500">30 ans</span> de Valentine, ça se fête ! 🎂🎈
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-pink-50 text-black">
            <button
              onClick={() => setShowContent(true)}
              className="border-4 border-black bg-pink-100 px-8 py-4 text-xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-200 flex items-center gap-3"
            >
              <X className="w-6 h-6" /> Oups, retour à la fête !
            </button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            {/* Custom diagonal shape */}
            <div className="absolute inset-y-0 right-0 hidden h-full w-80 translate-x-1/2 transform lg:block">
              <div className="h-full w-full border-r-[20px] border-t-[20px] border-black bg-yellow-50"></div>
            </div>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="border-8 border-black bg-white p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-1">
                  <h1 className="text-pretty text-5xl font-black uppercase tracking-tight text-black sm:text-7xl">
                    Parce que <span className="text-pink-500">30 ans</span>, ça se fête…
                  </h1>
                  <div className="w-full h-2 bg-blue-200 my-6"></div>
                  <p className="mt-8 text-pretty text-lg font-bold text-black sm:text-xl/8">
                    Ici, c&apos;est le <span className="bg-green-100 px-1">QG du voyage</span> ! 🚀 Retrouvez tout le
                    programme et les updates pour ne rien louper (et éviter les &apos;Heu… on fait{" "}
                    <span className="text-purple-400">quoi demain</span> déjà ?&apos;).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 border-[12px] border-black z-10"></div>
            <Image
              alt=""
              src="/images/valentine_birthday-young.jpg"
              className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full grayscale-[30%] contrast-110"
              width={500}
              height={500}
            />

            {/* Decorative elements with pastel colors */}
            <div className="absolute top-10 right-10 w-16 h-16 border-4 border-black rotate-12 bg-purple-100"></div>
            <div className="absolute bottom-10 left-10 w-20 h-8 border-4 border-black -rotate-6 bg-pink-100"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

