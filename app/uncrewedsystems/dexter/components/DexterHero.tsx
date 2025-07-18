import { Card, CardContent } from "@/components/ui/card"

export default function DexterHero() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">DEXTER</h1>
          <p className="text-2xl text-blue-400 mb-4">Multi-Role Single Solution</p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The ultimate versatile platform designed for multiple mission profiles with advanced adaptability and
            autonomous decision-making capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Multi-Mission Capable</h3>
              <p className="text-gray-300">
                Adaptable to reconnaissance, surveillance, cargo transport, and tactical support missions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Advanced AI Integration</h3>
              <p className="text-gray-300">
                Powered by cutting-edge artificial intelligence for autonomous mission execution.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Modular Design</h3>
              <p className="text-gray-300">Configurable payload systems allow for rapid mission reconfiguration.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
