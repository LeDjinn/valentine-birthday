import { HotelCard } from "@/components/global/hotel-card";
import { Timeline } from "@/components/global/timeline";
import { ZoneCard } from "@/components/global/zone-card";
import { hotels } from "@/data/hotels";
import { sitesTozeurs } from "@/data/zone";
import { div } from "framer-motion/client";
import { title } from "process";

const chbika = sitesTozeurs[0];
const canyonMides = sitesTozeurs[1];
const temerza = sitesTozeurs[2];
const chotJerid = sitesTozeurs[3];
const ongJmel = sitesTozeurs[5];
const hotelDiar = hotels[0];
const hotelDarHi = hotels[1];

const data = [
  {
    title: "Vendredi Matin",
    content: <HotelCard hotel={hotelDiar} />,
  },
  {
    title: "Vendredi Après-midi",
    content: <h2 className="text-4xl font-bold">Pas de programme </h2>,
  },
  {
    title: "Samedi Journée",
    content: <div className="space-y-20">
    <ZoneCard site={chbika} />
    <ZoneCard site={canyonMides} />
    <ZoneCard site={temerza} />
  </div>,
  },
  {
    title: "Samedi Soir",
    content: <h2 className="text-4xl font-bold">Pas de programme </h2>,
  },
  {
    title: "Dimanche Matin",
    content: <ZoneCard site={ongJmel} />,
  },
  {
    title: "Dimanche Après-midi",
    content: <h2 className="text-4xl font-bold">Pas de programme </h2>,
  },
  {title: 'Lundi Matin', content: <HotelCard hotel={hotelDarHi} />},
  {title: 'Mardi Matin', content: <h2 className="text-4xl font-bold">Départ les amis</h2>},
];
export default function page() {
  return (
    <div>
      <Timeline data={data} />
    </div>
  );
}
