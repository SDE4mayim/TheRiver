import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import classImage from "@/assets/clean-water.jpg";

const CrashCourseSection = () => {
  return (
    <section id="crashcourse" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={classImage}
              alt="Music class and community programme"
              className="w-full h-[350px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 text-saffron font-body text-sm mb-4">
              <Music className="h-4 w-4" />
              <span className="uppercase tracking-wider font-semibold">Upcoming Event</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              10 Days Keyboard Crash Course
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-2">Vellore District</p>
            <p className="text-foreground font-body text-lg font-semibold mb-6">From 5th May to 16th May</p>
            <Button variant="hero" size="lg" className="text-base px-8 py-5" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeLosOhIfGk3WC2LPmf-Yc_4ZcxdpPmHTQncocRg8lhCwHIeQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Here
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrashCourseSection;
