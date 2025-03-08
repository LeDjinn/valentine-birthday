import PricingTable from "@/components/pricing-page/pricing-table";

export default function PricingPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight">Les dépenses pour le logement et les excursions</h1>
            <p className="mt-4 text-lg text-gray-600">
            Ce ne sont pas les prix définitifs, mais une estimation des dépenses pour le logement et les excursions.
            </p>
          </div>
  
          <PricingTable />
        </div>
      </div>
    )
  }