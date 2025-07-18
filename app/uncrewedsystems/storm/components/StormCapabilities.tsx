import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StormCapabilities() {
  const capabilities = [
    {
      title: "Heavy Transport",
      description: "Massive cargo capacity for critical supply missions and equipment transport.",
      features: ["Multi-ton payload", "Oversized cargo", "Precision delivery"],
    },
    {
      title: "Extreme Environment",
      description: "Designed to operate in the harshest conditions and remote locations.",
      features: ["Arctic operations", "Desert deployment", "High altitude"],
    },
    {
      title: "Smart Logistics",
      description: "Intelligent routing and supply chain optimization for maximum efficiency.",
      features: ["Route planning", "Fuel optimization", "Load balancing"],
    },
  ]

  return (
    <div className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transport Capabilities</h2>
          <p className="text-xl text-gray-400">
            STORM delivers critical supplies where traditional transport cannot reach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="text-blue-400 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
