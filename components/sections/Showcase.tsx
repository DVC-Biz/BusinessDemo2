import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Features from "@/public/features.png";

export default function Showcase() {
  const benefits = [
    "Increase productivity by up to 40%",
    "Reduce operational costs by 25%",
    "Improve customer satisfaction scores",
    "Streamline your business processes",
    "Make data-driven decisions",
  ];

  return (
    <section
      id="showcase"
      className="w-full py-20 md:py-28 lg:py-36 bg-muted/30 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Streamline your workflow with our intuitive platform
              </h2>
              <p className="text-muted-foreground text-lg">
                Our platform is designed to help you work smarter, not harder.
                With intuitive tools and powerful features, you can focus on
                what matters most - growing your business.
              </p>

              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="rounded-full mt-4">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl opacity-50 -z-10"></div>
            <Image
              src={Features}
              width={600}
              height={600}
              alt="Platform Dashboard"
              className="rounded-xl shadow-xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
