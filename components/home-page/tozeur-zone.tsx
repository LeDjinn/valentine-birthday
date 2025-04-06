import { sitesTozeurs } from "@/data/zone";
import { ZoneCard } from "../global/zone-card";

export default function ZoneTozeur() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl relative">
          {/* Subtle neo-brutalist header section */}
          <div className="border-b-2 border-gray-200 pb-6 relative">
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gray-900"></div>
            <h2 className="text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Ce qu&apos;on peut visiter à Tozeur
            </h2>
            <p className="mt-4 text-lg/8 text-gray-600">
              On ne pourra pas les faire tous mais on peut en choisir{" "}
              <span className="font-semibold bg-gray-100 px-1">3 ou 4</span> pour
              les visiter.
            </p>
          </div>
          
          {/* Subtle geometric accent */}
          <div className="absolute -right-4 top-12 w-12 h-12 border border-gray-200 rotate-45 opacity-30"></div>
          
          {/* List of sites with structured spacing */}
          <div className="mt-16 space-y-8 lg:mt-20">
            {sitesTozeurs.map((site, index) => (
              <div 
                key={site.id} 
                className="group hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                {/* Numbered index marker */}
                <div className="relative">
                  <div className="absolute -left-8 top-4 font-mono text-sm text-gray-400">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <ZoneCard site={site} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom decorative element */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
            <div className="w-16 h-[1px] bg-gray-300"></div>
            <div className="text-xs text-gray-400 font-medium">Sites à explorer</div>
            <div className="w-16 h-[1px] bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
