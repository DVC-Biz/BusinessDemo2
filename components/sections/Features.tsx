import {
  BarChart3,
  Layers,
  Zap,
  Shield,
  Globe,
  Smartphone,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast Performance",
      description:
        "Optimized for speed and efficiency, our platform ensures your business operates at peak performance levels.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Enterprise-Grade Security",
      description:
        "Advanced security measures to protect your data and ensure compliance with industry regulations.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Scalable Architecture",
      description:
        "Built to grow with your business, our platform scales seamlessly as your needs evolve.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with comprehensive analytics and reporting tools to drive informed decisions.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Reach",
      description:
        "Expand your business globally with multi-language support and localized content delivery.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Optimized",
      description:
        "Fully responsive design ensures a seamless experience across all devices and screen sizes.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Our comprehensive suite of features is designed to help your
            business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border rounded-xl p-6 transition-all hover:shadow-md hover:border-primary/50"
            >
              <div className="mb-5 rounded-full bg-primary/10 p-3 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
