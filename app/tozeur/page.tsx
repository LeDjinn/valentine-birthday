import { Globe, Building, ChurchIcon as Mosque, Home, Film, BookOpen } from "lucide-react"

export default function HistoireTozeur() {
  return (
    <div className="min-h-screen bg-rose-50 dark:bg-gray-950 py-16 px-4">
      <main className="max-w-4xl mx-auto space-y-14">
        <header className="text-center">
          <h1 className="text-5xl font-black uppercase tracking-tight text-rose-700 dark:text-rose-400 mb-6">
            <span className="bg-rose-200 dark:bg-rose-900 px-6 py-3 -rotate-1 inline-block border-4 border-gray-700 dark:border-rose-500 shadow-[6px_6px_0px_0px_rgba(107,114,128,0.7)] dark:shadow-[6px_6px_0px_0px_rgba(244,114,182,0.4)]">
              Histoire de Tozeur
            </span>
          </h1>
          <div className="inline-block bg-white dark:bg-gray-900 border-4 border-gray-700 dark:border-gray-700 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(107,114,128,0.7)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            <p className="text-xl font-bold text-rose-600 dark:text-rose-400">
              Une oasis millénaire au cœur du désert tunisien
            </p>
          </div>
        </header>

        <div className="space-y-10">
          <section className="bg-white dark:bg-gray-900 border-4 border-gray-700 dark:border-gray-700 shadow-[6px_6px_0px_0px_rgba(107,114,128,0.7)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.6)] dark:hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.4)] transition-all duration-300">
            <div className="px-6 py-4 border-b-4 border-gray-700 dark:border-gray-700 bg-rose-300 dark:bg-rose-800 flex items-center">
              <Globe className="h-8 w-8 mr-3 text-gray-800 dark:text-white" />
              <h2 className="text-2xl font-black text-gray-800 dark:text-white uppercase tracking-tight">
                Aux origines de l&apos;oasis
              </h2>
            </div>
            <div className="p-6">
              <p className="text-black dark:text-white font-medium text-lg leading-relaxed">
                Tozeur est une ville historique du sud-ouest tunisien, nichée au bord du plus grand chott du pays : le
                Chott El Jerid. Son histoire remonte à l&apos;Antiquité, lorsqu&apos;elle était connue sous le nom de{" "}
                <span className="bg-rose-100 dark:bg-rose-950 px-2 py-0.5 font-bold italic border-2 border-gray-700 dark:border-rose-800">
                  Tusuros
                </span>
                , une importante halte caravanière sur les routes commerciales transsahariennes reliant l&apos;Afrique
                centrale à la Méditerranée.
              </p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-900 border-4 border-gray-700 dark:border-gray-700 shadow-[6px_6px_0px_0px_rgba(107,114,128,0.7)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.6)] dark:hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.4)] transition-all duration-300">
            <div className="px-6 py-4 border-b-4 border-gray-700 dark:border-gray-700 bg-blue-200 dark:bg-blue-800 flex items-center">
              <Building className="h-8 w-8 mr-3 text-gray-800 dark:text-white" />
              <h2 className="text-2xl font-black text-gray-800 dark:text-white uppercase tracking-tight">
                Époque romaine et byzantine
              </h2>
            </div>
            <div className="p-6">
              <p className="text-black dark:text-white font-medium text-lg leading-relaxed">
                Durant la période romaine, Tozeur faisait partie de la province d&apos;Afrique Proconsulaire. Elle
                bénéficiait d&apos;un système d&apos;irrigation avancé pour exploiter son immense oasis. Sous
                l&apos;Empire byzantin, elle conservait son importance stratégique et économique.
              </p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-900 border-4 border-gray-700 dark:border-gray-700 shadow-[6px_6px_0px_0px_rgba(107,114,128,0.7)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.6)] dark:hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.4)] transition-all duration-300">
            <div className="px-6 py-4 border-b-4 border-gray-700 dark:border-gray-700 bg-green-200 dark:bg-green-800 flex items-center">
              <Mosque className="h-8 w-8 mr-3 text-gray-800 dark:text-white" />
              <h2 className="text-2xl font-black text-gray-800 dark:text-white uppercase tracking-tight">
                Islamisation et rayonnement intellectuel
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-black dark:text-white font-medium text-lg leading-relaxed">
                Avec l&apos;arrivée de l&apos;islam au VIIe siècle, Tozeur devient un centre culturel et spirituel. Au
                Moyen Âge, elle connaît un essor intellectuel remarquable avec des savants et poètes célèbres comme{" "}
                <span className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-2 py-0.5 font-black">
                  Ibn Chabbat
                </span>
                , l&apos;architecte du système d&apos;irrigation traditionnel appelé{" "}
                <span className="italic font-bold text-rose-600 dark:text-rose-400">foggara</span>.
              </p>
              <p className="text-black dark:text-white font-medium text-lg leading-relaxed">
                Les écoles coraniques et la mosquée Sidi Abid témoignent encore de cette époque florissante.
              </p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-900 border-4 border-gray-700 dark:border-gray-700 shadow-[6px_6px_0px_0px_rgba(107,114,128,0.7)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.6)] dark:hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.4)] transition-all duration-300">
            <div className="px-6 py-4 border-b-4 border-gray-700 dark:border-gray-700 bg-purple-200 dark:bg-purple-800 flex items-center">
              <Home className="h-8 w-8 mr-3 text-gray-800 dark:text-white" />
              <h2 className="text-2xl font-black text-gray-800 dark:text-white uppercase tracking-tight">
                Architecture et traditions
              </h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-black dark:text-white font-medium text-lg leading-relaxed">
                    L&apos;architecture typique de Tozeur est unique en Tunisie. Les maisons sont bâties en briques
                    d&apos;argile aux motifs géométriques, donnant à la vieille ville (la médina) une esthétique
                    incomparable. Cette tradition architecturale remonte au XIIe siècle et perdure encore
                    aujourd&apos;hui.
                  </p>
                </div>
                <div className="md:w-1/3 bg-rose-100 dark:bg-rose-950 border-2 border-gray-700 dark:border-rose-800 p-3">
                  <div className="border-2 border-dashed border-rose-600 dark:border-rose-600 p-3 h-full flex items-center justify-center">
                    <p className="text-rose-700 dark:text-rose-300 font-black text-center uppercase text-sm">
                      Motifs géométriques
                      <br />
                      des briques d&apos;argile
                      <br />
                      de Tozeur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-900 border-4 border-gray-700 dark:border-gray-700 shadow-[6px_6px_0px_0px_rgba(107,114,128,0.7)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.6)] dark:hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.4)] transition-all duration-300">
            <div className="px-6 py-4 border-b-4 border-gray-700 dark:border-gray-700 bg-yellow-200 dark:bg-yellow-800 flex items-center">
              <Film className="h-8 w-8 mr-3 text-gray-800 dark:text-white" />
              <h2 className="text-2xl font-black text-gray-800 dark:text-white uppercase tracking-tight">
                Un décor de cinéma
              </h2>
            </div>
            <div className="p-6">
              <p className="text-black dark:text-white font-medium text-lg leading-relaxed">
                Tozeur a également servi de décor à de nombreux films célèbres, notamment la saga{" "}
                <span className="italic font-bold">Star Wars</span>, qui a immortalisé ses paysages lunaires et ses
                dunes dorées. Le site d&apos;
                <span className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-2 py-0.5 font-black">
                  Ong Jmel
                </span>{" "}
                est devenu une attraction touristique majeure.
              </p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-900 border-4 border-gray-700 dark:border-gray-700 shadow-[6px_6px_0px_0px_rgba(107,114,128,0.7)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.6)] dark:hover:shadow-[10px_10px_0px_0px_rgba(244,114,182,0.4)] transition-all duration-300">
            <div className="px-6 py-4 border-b-4 border-gray-700 dark:border-gray-700 bg-teal-200 dark:bg-teal-800 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-gray-800 dark:text-white" />
              <h2 className="text-2xl font-black text-gray-800 dark:text-white uppercase tracking-tight">
                Héritage vivant
              </h2>
            </div>
            <div className="p-6">
              <p className="text-black dark:text-white font-medium text-lg leading-relaxed">
                Aujourd&apos;hui, Tozeur reste un symbole vivant de l&apos;histoire du sud tunisien. Entre traditions,
                artisanat, palmeraies et légendes du désert, elle séduit autant les passionnés de culture que les
                voyageurs en quête d&apos;authenticité.
              </p>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { year: "Antiquité", event: "Fondation de Tusuros" },
            { year: "VIIe siècle", event: "Arrivée de l'Islam" },
            { year: "XIIe siècle", event: "Développement architectural" },
          ].map((item, index) => (
            <div key={index} className="bg-rose-100 dark:bg-rose-950 border-2 border-gray-700 dark:border-rose-800 p-4">
              <div className="text-center">
                <span className="inline-block bg-gray-800 dark:bg-rose-500 text-white dark:text-gray-900 font-black px-3 py-1 mb-2">
                  {item.year}
                </span>
                <p className="text-gray-800 dark:text-rose-200 font-bold">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

