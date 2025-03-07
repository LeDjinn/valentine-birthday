export function ZoneCard(props:any) {
    return (
      <article className="relative isolate flex flex-col gap-8 lg:flex-row">
        <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
          <img
            alt={`Photo de ${props.site.nom}`}
            src={props.site.photos[0]}
            className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div>
          <div className="flex items-center gap-x-4 text-xs">
            <span className="text-gray-500">{props.site.localisation}</span>
            <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
              {props.site.distanceTozeurKm} km de Tozeur
            </span>
          </div>
          <div className="group relative max-w-xl">
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              <span className="absolute inset-0" />
              {props.site.nom}
            </h3>
            <p className="mt-5 text-sm/6 text-gray-600">
              {props.site.description}
            </p>
          </div>
        </div>
      </article>
    );
  }