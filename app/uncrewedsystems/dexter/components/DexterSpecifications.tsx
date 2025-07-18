import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DexterSpecifications() {
  const specs = [
    { label: "Maximum Range", value: "500 km" },
    { label: "Flight Duration", value: "12 hours" },
    { label: "Payload Capacity", value: "50 kg" },
    { label: "Operating Altitude", value: "0-15,000 ft" },
    { label: "Maximum Speed", value: "200 km/h" },
    { label: "Communication Range", value: "100 km" },
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-xl text-gray-400">Engineered for performance and reliability in demanding environments</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Ready for Deployment</h3>
              <p className="text-gray-300">
                DEXTER represents the pinnacle of multi-role uncrewed system design, ready to adapt to any mission
                requirement with unmatched reliability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
