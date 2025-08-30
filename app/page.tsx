import Header from "@/components/header"
import Landing from "@/components/Hero"
import Artist from "@/components/Artist"
import Features from "@/components/features"
import HowToUse from "@/components/how-to-use"
import CTA from "@/components/cta"
import JoinUs from "@/components/JoinUs"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Header />
      <Landing />
      <Artist />
      <Features />
      <HowToUse />
      <CTA />
      <JoinUs />
    </main>
  )
}
