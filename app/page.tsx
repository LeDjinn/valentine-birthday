import Hero from "@/components/home-page/hero";
import HotelsList from "@/components/home-page/tozeur-hotels";
import ZoneTozeur from "@/components/home-page/tozeur-zone";

export default function Home() {
  return (
    <div>
      <Hero />
      <HotelsList />
      <ZoneTozeur />
    </div>
  );
}
