import { Sun, Shirt, TreePalmIcon as PalmTree, Lightbulb } from "lucide-react"

export default function TozeurPage() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-950 py-16 px-4">
      <main className="max-w-5xl mx-auto space-y-16">
        <header className="text-center">
          <h1 className="text-5xl font-black uppercase tracking-tight text-teal-700 dark:text-teal-500 mb-6">
            <span className="bg-yellow-200 dark:bg-teal-900 px-6 py-3 -rotate-1 inline-block border-4 border-black dark:border-teal-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(20,184,166,0.5)]">
              Voyage à Tozeur
            </span>
          </h1>
          <div className="inline-block bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            <p className="text-xl font-bold text-teal-600 dark:text-teal-400">
              Préparez-vous à explorer l&apos;une des plus belles oasis du sud tunisien
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(45,212,191,0.8)] dark:hover:shadow-[12px_12px_0px_0px_rgba(45,212,191,0.5)] transition-all duration-300">
            <div className="px-6 py-4 border-b-4 border-black dark:border-gray-700 bg-teal-400 dark:bg-teal-700 flex items-center">
              <Sun className="h-8 w-8 mr-3 text-white" />
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Météo en Avril</h2>
            </div>
            <div className="p-6">
              <p className="text-black dark:text-white font-medium text-lg">
                En avril, Tozeur bénéficie d&apos;un climat doux et ensoleillé. Les températures varient entre{" "}
                <span className="bg-yellow-100 dark:bg-yellow-900 px-2 py-1 font-black border-2 border-black dark:border-yellow-600">
                  18°C le matin
                </span>{" "}
                et{" "}
                <span className="bg-teal-100 dark:bg-teal-900 px-2 py-1 font-black border-2 border-black dark:border-teal-600">
                  30°C l&apos;après-midi
                </span>
                . Les nuits sont agréables mais peuvent être fraîches dans le désert.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(45,212,191,0.8)] dark:hover:shadow-[12px_12px_0px_0px_rgba(45,212,191,0.5)] transition-all duration-300">
            <div className="px-6 py-4 border-b-4 border-black dark:border-gray-700 bg-teal-400 dark:bg-teal-700 flex items-center">
              <Shirt className="h-8 w-8 mr-3 text-white" />
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Tenue conseillée</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "Vêtements légers et respirants (coton, lin)",
                  "Pull léger ou veste pour le soir",
                  "Lunettes de soleil, chapeau ou foulard",
                  "Chaussures de marche confortables pour les excursions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block bg-black dark:bg-white text-white dark:text-black font-bold w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-black dark:text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(45,212,191,0.8)] dark:hover:shadow-[12px_12px_0px_0px_rgba(45,212,191,0.5)] transition-all duration-300">
          <div className="px-6 py-4 border-b-4 border-black dark:border-gray-700 bg-teal-400 dark:bg-teal-700 flex items-center">
            <PalmTree className="h-8 w-8 mr-3 text-white" />
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Que faire à Tozeur ?</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Explorer la vieille ville et son architecture en briques d&apos;argile",
                "Découvrir l&apos;oasis et ses milliers de palmiers",
                "Visiter Chebika, Tamerza et Mides : les oasis de montagne",
                "Faire du quad ou du 4x4 dans les dunes",
                "Aller voir le site de tournage de Star Wars à Ong Jmel",
              ].map((activity, index) => (
                <div key={index} className="bg-teal-50 dark:bg-teal-950 border-2 border-black dark:border-teal-800 p-4">
                  <div className="flex items-start">
                    <span className="inline-block bg-teal-400 dark:bg-teal-600 text-white font-black w-8 h-8 flex-shrink-0 flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    <span className="text-black dark:text-teal-200 font-medium">{activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(45,212,191,0.8)] dark:hover:shadow-[12px_12px_0px_0px_rgba(45,212,191,0.5)] transition-all duration-300">
          <div className="px-6 py-4 border-b-4 border-black dark:border-gray-700 bg-teal-400 dark:bg-teal-700 flex items-center">
            <Lightbulb className="h-8 w-8 mr-3 text-white" />
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Conseils pratiques</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Hydratez-vous régulièrement (il fait sec)",
                "Pensez à la crème solaire même en avril",
                "Respectez la culture locale (évitez les tenues trop découvertes en ville)",
                "Goûtez aux dattes de Tozeur et aux spécialités du sud ",
              ].map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start bg-blue-50 dark:bg-blue-950 border-2 border-black dark:border-blue-800 p-4"
                >
                  <span className="inline-block bg-black dark:bg-blue-600 text-white dark:text-black font-black w-8 h-8 flex-shrink-0 flex items-center justify-center mr-3">
                    !
                  </span>
                  <span className="text-black dark:text-blue-200 font-medium">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

