import Image from "next/image";
import Link from "next/link";

export function HotelCard(props: any) {
  return (
    <article className="flex flex-col items-start justify-between h-full">
      <div className="relative w-full overflow-hidden">
        <Image
          alt={props.hotel.images[0]?.description || "Hotel Image"}
          src={props.hotel.images[0]?.url || "https://via.placeholder.com/400"}
          className="aspect-video w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
        />
        {/* Subtle border instead of rounded corners */}
        <div className="absolute inset-0 border border-gray-200 group-hover:border-gray-400 transition-all" />

        {/* Subtle geometric accent */}
        <div className="absolute top-3 right-3 w-6 h-6 border border-white/70 rotate-45 opacity-70"></div>
      </div>

      <div className="max-w-xl w-full p-4 border-x border-b border-gray-200 group-hover:border-gray-300 transition-colors">
        <div className="flex items-center gap-x-4 text-xs">
          <Link
            href={props.hotel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 border border-gray-200 group-hover:border-gray-400 transition-all"
          >
            Visit Hotel
          </Link>
        </div>

        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 border-b border-gray-100 pb-2">
            <Link href={props.hotel.url} target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0" />
              {props.hotel.title}
            </Link>
          </h3>

          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{props.hotel.description}</p>
        </div>

        <div className="mt-6 relative">
          {/* Subtle vertical line accent */}
          <div className="absolute -left-2 top-0 bottom-0 w-[2px] bg-gray-200"></div>

          <h4 className="text-gray-900 font-medium pl-2">Facilities:</h4>
          <ul className="mt-2 text-sm text-gray-600 pl-2">
            {props.hotel.facilities.slice(0, 4).map((facility: any, index: any) => (
              <li key={index} className="flex items-start mb-1">
                <span className="inline-block w-4 h-[1px] bg-gray-400 mt-3 mr-2"></span>
                {facility}
              </li>
            ))}
          </ul>
        </div>

        {/* Changed from green to gray for the monochromatic palette */}
        <div className="mt-6 text-lg font-semibold text-gray-800 border-t border-gray-200 pt-3">
          {props.hotel.price}
        </div>
      </div>
    </article>
  )
}

