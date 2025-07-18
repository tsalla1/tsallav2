import { Card, CardContent } from "@/components/ui/card"

export default function BatHero() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">BAT</h1>
          <p className="text-2xl text-blue-400 mb-4">Battlefield Aerial Tactical UAS</p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tactical unmanned aerial system optimized for battlefield operations, surveillance, and close air support
            missions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Combat Ready</h3>
              <p className="text-gray-300">
                Ruggedized design built to withstand harsh battlefield conditions and hostile environments.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Intelligence</h3>
              <p className="text-gray-300">
                Advanced surveillance systems providing live battlefield intelligence to ground forces.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Tactical Support</h3>
              <p className="text-gray-300">
                Precision strike capabilities and close air support for ground operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
