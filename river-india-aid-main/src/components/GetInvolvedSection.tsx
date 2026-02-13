import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cleanRiverImage from "@/assets/clean-river.jpg";

const GetInvolvedSection = () => {
  return (
    <section id="getinvolved" className="relative py-24 overflow-hidden">
      <img
        src={cleanRiverImage}
        alt="Clean flowing river"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Get Involved
        </h2>

        <p className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-4">
          We invite you to join us in our mission to spread good deeds and create
          positive change. Whether through volunteering, donating, or partnering
          with us, your involvement can help us extend our reach and amplify our impact.
        </p>

        <p className="text-primary-foreground/90 font-body text-lg font-semibold italic mb-10">
          Together, we can make a difference and ensure that
          <br />
          “life thrives wherever The River flows”.
        </p>

        {/* ✅ OPEN CONTACT PAGE */}
        <Button variant="hero" size="lg" className="text-base px-10 py-6" asChild>
          <Link to="/contact">Join Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
