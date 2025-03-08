import { Users, Home, Hotel, Map } from "lucide-react"

// Define the type for our data
interface PricingItem {
  name: string
  capacity: number
  total_price_dt?: number
  total_price_eur?: number
  price_per_person_dt?: number
  price_per_person_eur: number
}

export default function PricingDisplay() {
  // Our pricing data
  const pricingData: PricingItem[] = [
    {
      name: "Bungalow",
      capacity: 6,
      total_price_dt: 820,
      price_per_person_dt: 136.67,
      price_per_person_eur: 40.5,
    },
    {
      name: "Room",
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
      name: "Excursion - First Day",
      capacity: 7,
      total_price_dt: 350,
      price_per_person_dt: 50,
      price_per_person_eur: 14.8,
    },
    {
      name: "Excursion - Second Day",
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

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Pricing Options</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-200"
          >
            {/* Card Header */}
            <div className="p-5 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  {getItemIcon(item.name)}
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  {getItemCategory(item.name)}
                </span>
              </div>
              <div className="flex items-center mt-2 text-gray-600 text-sm">
                <Users className="w-4 h-4 mr-1" />
                <span>
                  Capacity: {item.capacity} {item.capacity === 1 ? "person" : "people"}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {item.total_price_dt && (
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm text-gray-500">Total Price</p>
                      <p className="text-xl font-semibold">{item.total_price_dt} DT</p>
                    </div>
                  )}
                  {item.total_price_eur && (
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm text-gray-500">Total Price</p>
                      <p className="text-xl font-semibold">{item.total_price_eur} €</p>
                    </div>
                  )}
                  {item.price_per_person_dt && (
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm text-gray-500">Per Person</p>
                      <p className="text-xl font-semibold">{item.price_per_person_dt.toFixed(2)} DT</p>
                    </div>
                  )}
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-gray-500">Per Person</p>
                    <p className="text-xl font-semibold text-blue-600">{item.price_per_person_eur.toFixed(2)} €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

