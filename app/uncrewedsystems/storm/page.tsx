import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import StormHero from "./components/StormHero"
import StormCapabilities from "./components/StormCapabilities"
import StormSpecifications from "./components/StormSpecifications"

export const metadata: Metadata = {
  title: "STORM - Smart Transport Operations for Rugged Missions - Tsalla Aerospace",
  description: "STORM is a heavy-duty transport system for challenging environments and critical supply missions.",
}

export default function StormPage() {
  return (
    <PageWrapper>
      <StormHero />
      <StormCapabilities />
      <StormSpecifications />
    </PageWrapper>
  )
}
