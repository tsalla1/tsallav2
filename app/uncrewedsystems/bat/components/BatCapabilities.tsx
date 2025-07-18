import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BatCapabilities() {
  const capabilities = [
    {
      title: "Battlefield Surveillance",
      description: "Continuous monitoring of tactical situations with real-time data transmission.",
      features: ["360-degree coverage", "Thermal imaging", "Motion detection"],
    },
    {
      title: "Precision Strikes",
      description: "Accurate engagement of high-value targets with minimal collateral damage.",
      features: ["Guided munitions", "Target designation", "Damage assessment"],
    },
    {
      title: "Force Protection",
      description: "Perimeter security and threat detection for friendly forces.",
      features: ["Intrusion detection", "Threat classification", "Alert systems"],
    },
  ]

  return (
    <div className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tactical Capabilities</h2>
          <p className="text-xl text-gray-400">
            BAT provides comprehensive battlefield support and tactical advantages
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
