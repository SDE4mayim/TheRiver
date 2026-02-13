import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-river.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="A river flowing through India at golden sunrise"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <img
          src={logo}
          alt="The River India logo"
          className="mx-auto h-32 md:h-44 w-auto mb-8 opacity-0 animate-fade-up drop-shadow-2xl"
          style={{ animationDelay: "0.2s" }}
        />

        {/* Vision / Mission / Doing Good Deeds pills */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {["Vision", "Doing Good Deeds", "Mission"].map((label) => (
            <span
              key={label}
              className="px-6 py-2 rounded-full border border-primary-foreground/30 text-primary-foreground/90 font-body text-sm tracking-widest uppercase backdrop-blur-sm bg-primary-foreground/5"
            >
              {label}
            </span>
          ))}
        </div>

        <h1
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8 max-w-4xl mx-auto opacity-0 animate-fade-up italic"
          style={{ animationDelay: "0.6s" }}
        >
          "Life thrives wherever The River flows by doing good, to be rich in good deeds
          and to be generous and willing to share."
        </h1>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#getinvolved">Join Us</a>
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>

      <a
        href="#crashcourse"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
