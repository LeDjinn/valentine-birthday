import { sitesTozeurs } from "@/data/zone";
import { ZoneCard } from "../global/zone-card";



export default function ZoneTozeur() {
  return (
    <div className="bg-white py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" max-w-2xl lg:max-w-4xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Ce qu&apos;on peut visiter à Tozeur
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            On ne pourra pas les faire tous mais on peut en choisir 3 ou 4 pour
            les visiter.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20 ">
            {sitesTozeurs.map((site) => (
              <ZoneCard key={site.id} site={site}></ZoneCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
