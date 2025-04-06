import Image from "next/image";

export function ZoneCard(props: any) {
  return (
    <article className="relative flex flex-col gap-8 lg:flex-row border border-gray-200 hover:border-gray-300 transition-all p-4 bg-white">
      {/* Image container with fixed dimensions */}
      <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <Image
          alt={`Photo de ${props.site.nom}`}
          src={props.site.photos[0] || "/placeholder.svg"}
          className="absolute inset-0 size-full bg-gray-50 object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
        />
        {/* Subtle border instead of rounded corners */}
        <div className="absolute inset-0 border border-gray-200 hover:border-gray-400 transition-all" />

        {/* Subtle geometric accent */}
        <div className="absolute bottom-3 right-3 w-6 h-6 border border-white/70 opacity-70"></div>
      </div>

      {/* Content container with structured layout */}
      <div className="flex flex-col justify-between flex-grow">
        <div className="space-y-4">
          {/* Location and distance info */}
          <div className="flex items-center gap-x-4 text-xs border-b border-gray-100 pb-3">
            <span className="text-gray-500 font-medium">{props.site.localisation}</span>
            <span className="relative z-10 bg-gray-50 px-3 py-1.5 font-medium text-gray-600 border border-gray-200">
              {props.site.distanceTozeurKm} km de Tozeur
            </span>
          </div>

          {/* Site name with subtle underline */}
          <div className="group relative max-w-xl">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 border-b border-gray-100 pb-2 inline-block">
              <span className="absolute inset-0" />
              {props.site.nom}
            </h3>
          </div>

          {/* Description with left border accent */}
          <div className="relative pl-3">
            {/* Subtle vertical line accent */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200"></div>
            <p className="text-sm/6 text-gray-600">{props.site.description}</p>
          </div>
        </div>

        {/* Subtle bottom line */}
        <div className="mt-4 pt-3 border-t border-gray-100 w-1/3"></div>
      </div>
    </article>
  )
}

