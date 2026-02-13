import { Waves, TreePine, Heart, Users } from "lucide-react";
import cleanRiverImage from "@/assets/clean-river.jpg";
import cleanWaterImage from "@/assets/clean-water.jpg";

const initiatives = [
  {
    icon: Waves,
    title: "Community Upliftment",
    description: "Just as a river refreshes its surroundings, we bring fresh perspectives and opportunities to communities, creating lasting positive change.",
    image: cleanRiverImage,
  },
  {
    icon: Heart,
    title: "Education & Skill Building",
    description: "Empowering youth with education, music classes, keyboard courses, and vocational skills to build self-sufficient futures.",
    image: cleanWaterImage,
  },
];

const pillars = [
  { icon: TreePine, title: "Communities", stat: "50+", desc: "Communities positively impacted" },
  { icon: Users, title: "Volunteers", stat: "500+", desc: "Active volunteers nationwide" },
  { icon: Waves, title: "Programs", stat: "25+", desc: "Ongoing service initiatives" },
  { icon: Heart, title: "Lives Touched", stat: "5K+", desc: "Lives transformed so far" },
];

const InitiativesSection = () => {
  return (
    <section id="initiatives" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-gradient-river">Initiatives</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {initiatives.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-border"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-primary/90 rounded-full p-3">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="impact" className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-muted/50 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">{p.stat}</p>
              <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
