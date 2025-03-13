import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";
import Contact from "@/components/sections/Contact";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-hidden">
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <Testimonials />
      <Cta />
      <Contact />
    </main>
  );
}
