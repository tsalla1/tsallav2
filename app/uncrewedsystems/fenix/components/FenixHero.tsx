import { Card, CardContent } from "@/components/ui/card"

export default function FenixHero() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">FENIX</h1>
          <p className="text-2xl text-blue-400 mb-4">Fast Entry Navigational Intrusion eXplorer</p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            High-speed reconnaissance and infiltration system designed for rapid deployment scenarios and stealth
            operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Stealth Technology</h3>
              <p className="text-gray-300">
                Advanced radar-absorbing materials and low-signature design for covert operations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">High-Speed Deployment</h3>
              <p className="text-gray-300">
                Rapid response capabilities with supersonic flight speeds for time-critical missions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Advanced Sensors</h3>
              <p className="text-gray-300">
                Multi-spectral imaging and electronic intelligence gathering capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
