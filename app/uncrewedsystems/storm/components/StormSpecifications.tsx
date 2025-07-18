import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StormSpecifications() {
  const specs = [
    { label: "Maximum Payload", value: "2,500 kg" },
    { label: "Transport Range", value: "1,200 km" },
    { label: "Flight Duration", value: "24 hours" },
    { label: "Cargo Volume", value: "15 m³" },
    { label: "Operating Temperature", value: "-40°C to +60°C" },
    { label: "Landing Precision", value: "±2 meters" },
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transport Specifications</h2>
          <p className="text-xl text-gray-400">Engineered for maximum payload capacity and operational reliability</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-400 text-sm font-medium">{spec.label}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-2xl font-bold text-white">{spec.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-blue-900/20 border-blue-800 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Logistics Revolution</h3>
              <p className="text-gray-300">
                STORM transforms supply chain operations with unprecedented payload capacity and the ability to reach
                the most challenging and remote destinations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
