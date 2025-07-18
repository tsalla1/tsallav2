import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import DexterHero from "./components/DexterHero"
import DexterCapabilities from "./components/DexterCapabilities"
import DexterSpecifications from "./components/DexterSpecifications"

export const metadata: Metadata = {
  title: "DEXTER - Multi-Role Single Solution - Tsalla Aerospace",
  description:
    "DEXTER is a versatile uncrewed system designed for multiple mission profiles with advanced adaptability.",
}

export default function DexterPage() {
  return (
    <PageWrapper>
      <DexterCapabilities />
      <DexterHero />
      <DexterSpecifications />
    </PageWrapper>
  )
}
