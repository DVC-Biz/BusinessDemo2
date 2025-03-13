import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-80">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to transform your business?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Join thousands of businesses that are already using Elevate to
            streamline their operations, increase productivity, and drive
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full text-base">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
