"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ProfilePlaceholder from "@/public/placeholder_profile.png";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Elevate has transformed the way we operate. The platform's intuitive design and powerful features have helped us streamline our processes and grow our business exponentially.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "The team at Elevate truly understands our industry and has provided invaluable guidance as we've scaled our operations globally. Their platform is a game-changer.",
      author: "Michael Chen",
      role: "COO, Global Solutions",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "I've worked with many service providers over the years, but none have delivered the level of results and ROI that Elevate has. Their platform is exceptional.",
      author: "Jessica Williams",
      role: "Marketing Director, Retail Giant",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "Implementing Elevate's solution has been the best decision we've made this year. Our productivity has increased by 40% and our customer satisfaction scores are at an all-time high.",
      author: "David Rodriguez",
      role: "CTO, Innovation Labs",
      avatar: "/placeholder.svg?height=100&width=100",
      company: "/placeholder.svg?height=40&width=120",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="w-full py-20 md:py-28 lg:py-36 bg-muted/30 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What our clients say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-background border-border p-8 md:p-10 h-full">
                    <Quote className="h-12 w-12 text-primary/20 mb-6" />
                    <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Image
                          src={ProfilePlaceholder}
                          alt={testimonial.author}
                          width={56}
                          height={56}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold">
                            {testimonial.author}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <Image
                        src={ProfilePlaceholder}
                        alt="Company logo"
                        width={120}
                        height={40}
                        className="h-8 w-auto opacity-80"
                      />
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full hidden md:flex"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full hidden md:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
