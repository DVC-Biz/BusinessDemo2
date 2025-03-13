import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeroImage from "@/public/hero.png";

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 overflow-hidden relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
              Introducing Elevate 2.0
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Transform Your Business{" "}
              <span className="text-primary">Vision</span> Into Reality
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
              Powerful tools and strategies to help your business grow, scale,
              and succeed in today's competitive market.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md pl-8">
            <Button size="lg" className="rounded-full text-base">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base"
            >
              Book a Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 lg:mt-24 relative">
          <Image
            src={HeroImage}
            width={1080}
            height={320}
            alt="Platform Dashboard"
            className="rounded-t-xl shadow-2xl border border-border mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
