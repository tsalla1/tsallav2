import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BatSpecifications() {
  const specs = [
    { label: "Combat Radius", value: "300 km" },
    { label: "Loiter Time", value: "18 hours" },
    { label: "Payload Capacity", value: "75 kg" },
    { label: "Operating Altitude", value: "0-25,000 ft" },
    { label: "Maximum Speed", value: "250 km/h" },
    { label: "Armor Rating", value: "Level IIIA" },
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Combat Specifications</h2>
          <p className="text-xl text-gray-400">Built for durability and performance in high-threat environments</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Battle-Tested Reliability</h3>
              <p className="text-gray-300">
                BAT delivers proven battlefield performance with robust construction and advanced tactical systems
                designed for the most demanding combat scenarios.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
