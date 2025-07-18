import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import BatHero from "./components/BatHero"
import BatCapabilities from "./components/BatCapabilities"
import BatSpecifications from "./components/BatSpecifications"

export const metadata: Metadata = {
  title: "BAT - Battlefield Aerial Tactical UAS - Tsalla Aerospace",
  description: "BAT is a tactical unmanned aerial system optimized for battlefield operations and surveillance.",
}

export default function BatPage() {
  return (
    <PageWrapper>
      <BatHero />
      <BatCapabilities />
      <BatSpecifications />
    </PageWrapper>
  )
}
