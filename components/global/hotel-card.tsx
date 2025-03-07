export function HotelCard(props:any) {
    return (
      <article className="flex flex-col items-start justify-between">
        <div className="relative w-full">
          <img
            alt={props.hotel.images[0]?.description || "Hotel Image"}
            src={props.hotel.images[0]?.url || "https://via.placeholder.com/400"}
            className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <a
              href={props.hotel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              Visit Hotel
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              <a href={props.hotel.url} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0" />
                {props.hotel.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
              {props.hotel.description}
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-gray-900 font-medium">Facilities:</h4>
            <ul className="mt-2 text-sm text-gray-600">
              {props.hotel.facilities.slice(0, 4).map((facility:any, index:any) => (
                <li key={index}>• {facility}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-lg font-semibold text-green-600">
            {props.hotel.price}
          </div>
        </div>
      </article>
    );
  }