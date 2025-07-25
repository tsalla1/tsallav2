import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Uncrewed Systems - Tsalla Aerospace",
  description: "Advanced uncrewed systems for autonomous flight operations and mission execution.",
}

export default function UncrewedSystemsPage() {
  const systems = [
    {
      name: "DEXTER",
      description: "Multi-Role Single Solution",
      href: "/uncrewedsystems/dexter",
      details: "Versatile platform designed for multiple mission profiles with advanced adaptability.",
    },
    {
      name: "FENIX",
      description: "Fast Entry Navigational Intrusion eXplorer",
      href: "/uncrewedsystems/fenix",
      details: "High-speed reconnaissance and infiltration system for rapid deployment scenarios.",
    },
    {
      name: "BAT",
      description: "Battlefield Aerial Tactical UAS",
      href: "/uncrewedsystems/bat",
      details: "Tactical unmanned aerial system optimized for battlefield operations and surveillance.",
    },
    {
      name: "STORM",
      description: "Smart Transport Operations for Rugged Missions",
      href: "/uncrewedsystems/storm",
      details: "Heavy-duty transport system for challenging environments and critical supply missions.",
    },
  ]

  return (
    <PageWrapper>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Uncrewed Systems</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Next-generation uncrewed systems that think, adapt, and execute missions with unprecedented autonomy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {systems.map((system) => (
              <Card
                key={system.name}
                className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors group"
              >
                <CardHeader>
                  <CardTitle className="text-white text-2xl">{system.name}</CardTitle>
                  <CardDescription className="text-blue-400">{system.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{system.details}</p>
                  <Link
                    href={system.href}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
