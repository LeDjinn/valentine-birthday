import { hotels } from "@/data/hotels";
import { HotelCard } from "../global/hotel-card";



export default function HotelsList() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Les hotels retenus
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Hotel Diar Abou Habibi pour le <strong>11 Avril au 14 Avril</strong>{" "}
            et Hotel Dar Hi pour le <strong>14 Avril au 15 Avril</strong>.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.url} hotel={hotel}></HotelCard>
          ))}
        </div>
      </div>
    </div>
  );
}
