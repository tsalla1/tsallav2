import { Card, CardContent } from "@/components/ui/card"

export default function StormHero() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">STORM</h1>
          <p className="text-2xl text-blue-400 mb-4">Smart Transport Operations for Rugged Missions</p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Heavy-duty transport system designed for challenging environments and critical supply missions in remote
            locations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Heavy Lift Capability</h3>
              <p className="text-gray-300">
                Massive payload capacity for transporting critical supplies and equipment to remote locations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">All-Weather Operations</h3>
              <p className="text-gray-300">
                Engineered to operate in extreme weather conditions and challenging environments.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Logistics</h3>
              <p className="text-gray-300">Smart routing and delivery systems for efficient supply chain management.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
