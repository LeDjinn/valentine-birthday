import { hotels } from "@/data/hotels"
import { HotelCard } from "../global/hotel-card"

export default function HotelsList() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Subtle neo-brutalist header section */}
          <div className="border-b-2 border-gray-200 pb-6 relative">
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gray-900"></div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Les hotels retenus
            </h2>
            <p className="mt-4 text-lg/8 text-gray-600">
              Hotel Diar Abou Habibi pour le{" "}
              <span className="font-semibold bg-gray-100 px-1">11 Avril au 14 Avril</span> et Hotel Dar Hi pour le{" "}
              <span className="font-semibold bg-gray-100 px-1">14 Avril au 15 Avril</span>.
            </p>
          </div>
        </div>

        {/* Structured grid with equal-height cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {hotels.map((hotel) => (
            <div key={hotel.url} className="group h-full">
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>

        {/* Subtle geometric accent */}
        <div className="mt-24 flex justify-end">
          <div className="w-16 h-16 border border-gray-200 rotate-45 opacity-30"></div>
        </div>
      </div>
    </div>
  )
}

