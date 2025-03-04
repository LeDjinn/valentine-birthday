import { sitesTozeurs } from "@/data/zone";

export default function ZoneTozeur() {
    return (
      <div className="bg-white py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" max-w-2xl lg:max-w-4xl">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Ce qu&apos;on peut visiter à Tozeur
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              On ne pourra pas les faire tous mais on peut en choisir 3 ou 4 pour les visiter.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20 ">
              {sitesTozeurs.map((site) => (
                <article key={site.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      alt={`Photo de ${site.nom}`}
                      src={site.photos[0]}
                      className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <span className="text-gray-500">{site.localisation}</span>
                      <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                        {site.distanceTozeurKm} km de Tozeur
                      </span>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0" />
                        {site.nom}
                      </h3>
                      <p className="mt-5 text-sm/6 text-gray-600">{site.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }