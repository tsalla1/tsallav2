import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FenixCapabilities() {
  const capabilities = [
    {
      title: "Stealth Operations",
      description: "Designed for covert reconnaissance with minimal detection signature.",
      features: ["Radar cross-section reduction", "Noise suppression", "Visual camouflage"],
    },
    {
      title: "Intelligence Gathering",
      description: "Advanced sensor suite for comprehensive battlefield intelligence.",
      features: ["Multi-spectral imaging", "Electronic surveillance", "Signal intelligence"],
    },
    {
      title: "Rapid Response",
      description: "Quick deployment and high-speed transit for time-sensitive missions.",
      features: ["Supersonic capability", "Vertical takeoff", "Emergency protocols"],
    },
  ]

  return (
    <div className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Operational Capabilities</h2>
          <p className="text-xl text-gray-400">FENIX excels in high-risk, time-critical reconnaissance missions</p>
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
