import {  Home, Hotel, Map } from "lucide-react"

// Define the type for our data
interface PricingItem {
  name: string
  capacity: number
  total_price_dt?: number
  total_price_eur?: number
  price_per_person_dt?: number
  price_per_person_eur: number
}

export default function PricingTable() {
  // Our pricing data
  const pricingData: PricingItem[] = [
    {
      name: "Bungalow 6 Diar Abou Habibi",
      capacity: 6,
      total_price_dt: 820,
      price_per_person_dt: 136.67,
      price_per_person_eur: 40.5,
    },
    {
      name: "Room  Diar Abou Habibi",
      capacity: 2,
      total_price_dt: 520,
      price_per_person_dt: 260,
      price_per_person_eur: 77,
    },
    {
      name: "Hotel Dar Hi",
      capacity: 1,
      total_price_eur: 57,
      price_per_person_eur: 57,
    },
    {
      name: "Excursion - Premier jour",
      capacity: 7,
      total_price_dt: 350,
      price_per_person_dt: 50,
      price_per_person_eur: 14.8,
    },
    {
      name: "Excursion - Deuxième jour",
      capacity: 7,
      total_price_dt: 250,
      price_per_person_dt: 35.71,
      price_per_person_eur: 10.5,
    },
  ]

  // Helper function to get the appropriate icon for each item
  const getItemIcon = (name: string) => {
    if (name.includes("Bungalow")) return <Home className="w-5 h-5" />
    if (name.includes("Room")) return <Home className="w-5 h-5" />
    if (name.includes("Hotel")) return <Hotel className="w-5 h-5" />
    if (name.includes("Excursion")) return <Map className="w-5 h-5" />
    return <Home className="w-5 h-5" />
  }

  // Helper function to get the category of the item
  const getItemCategory = (name: string) => {
    if (name.includes("Excursion")) return "Excursion"
    return "Accommodation"
  }

  // Calculate totals
  const calculateTotals = () => {
    let totalDT = 0
    let totalEUR = 0
    let totalCapacity = 0

    pricingData.forEach((item) => {
      if (item.total_price_dt) totalDT += item.total_price_dt
      if (item.total_price_eur) totalEUR += item.total_price_eur
      totalCapacity += item.capacity
    })

    // Calculate weighted average for price per person
    let weightedSumDT = 0
    let weightedSumEUR = 0

    pricingData.forEach((item) => {
      if (item.price_per_person_dt) {
        weightedSumDT += item.price_per_person_dt * item.capacity
      }
      weightedSumEUR += item.price_per_person_eur * item.capacity
    })

    const avgPricePerPersonDT = weightedSumDT / totalCapacity
    const avgPricePerPersonEUR = weightedSumEUR / totalCapacity

    return {
      totalDT,
      totalEUR,
      totalCapacity,
      avgPricePerPersonDT,
      avgPricePerPersonEUR,
    }
  }

  const totals = calculateTotals()

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Le dépenses</h1>

      {/* Desktop Table View (hidden on small screens) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Option</th>
          
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Price (DT)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Price (EUR)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prix par personne (DT)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prix par personne (EUR)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pricingData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center text-gray-500">
                      {getItemIcon(item.name)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </div>
                  </div>
                </td>
         
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.total_price_dt ? `${item.total_price_dt.toFixed(2)} DT` : "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.total_price_eur ? `${item.total_price_eur.toFixed(2)} €` : "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.price_per_person_dt ? `${item.price_per_person_dt.toFixed(2)} DT` : "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  {item.price_per_person_eur.toFixed(2)} €
                </td>
              </tr>
            ))}

            {/* Totals row */}
            <tr className="bg-gray-100 font-semibold">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span className="font-bold">TOTAL</span>
              </td>
         
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{totals.totalDT.toFixed(2)} DT</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{totals.totalEUR.toFixed(2)} €</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {totals.avgPricePerPersonDT ? totals.avgPricePerPersonDT.toFixed(2) + " DT" : "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {totals.avgPricePerPersonEUR.toFixed(2)} €
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View (shown only on small screens) */}
      <div className="md:hidden space-y-4">
        {pricingData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {getItemIcon(item.name)}
                  <h3 className="font-medium">{item.name}</h3>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    getItemCategory(item.name) === "Accommodation"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {getItemCategory(item.name)}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-3">
          

              {item.total_price_dt && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Prix total (DT):</span>
                  <span>{item.total_price_dt.toFixed(2)} DT</span>
                </div>
              )}

              {item.total_price_eur && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Price (EUR):</span>
                  <span>{item.total_price_eur.toFixed(2)} €</span>
                </div>
              )}

              {item.price_per_person_dt && (
                <div className="flex justify-between">
                  <span className="text-gray-500">En Moyenne par personne(DT):</span>
                  <span>{item.price_per_person_dt.toFixed(2)} DT</span>
                </div>
              )}

              <div className="flex justify-between font-medium">
                <span className="text-gray-500">En Moyenne par personne(EUR):</span>
                <span className="text-blue-600">{item.price_per_person_eur.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        ))}

        {/* Mobile Totals Card */}
        <div className="bg-gray-100 rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-200">
            <div className="flex items-center justify-center">
              <h3 className="font-bold text-lg">TOTAL</h3>
            </div>
          </div>
          <div className="p-4 space-y-3">
         

            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Total (DT):</span>
              <span>{totals.totalDT.toFixed(2)} DT</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Total (EUR):</span>
              <span>{totals.totalEUR.toFixed(2)} €</span>
            </div>

            {totals.avgPricePerPersonDT > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">En Moyenne par personne (DT):</span>
                <span>{totals.avgPricePerPersonDT.toFixed(2)} DT</span>
              </div>
            )}

            <div className="flex justify-between font-medium">
              <span className="text-gray-700">En Moyenne par personne (EUR):</span>
              <span className="text-blue-600">{totals.avgPricePerPersonEUR.toFixed(2)} €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

