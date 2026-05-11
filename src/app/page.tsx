import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UseCases } from "@/components/UseCases";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { OpenSource } from "@/components/OpenSource";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UseCases />
        <Features />
        <HowItWorks />
        <OpenSource />
        <Download />
      </main>
      <Footer />
    </>
  );
}
