import communityImage from "@/assets/community-service.jpg";

const MissionSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={communityImage}
                alt="Volunteers doing community service along a river in India"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-river flex items-center justify-center shadow-xl">
              <div className="text-center text-primary-foreground">
                <p className="text-3xl font-heading font-bold">2023</p>
                <p className="text-xs font-body uppercase tracking-wider">Founded</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-3">Our Mission</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Doing Good <span className="text-gradient-river">Deeds</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Imagine a river winding through diverse landscapes, breathing life into everything
              it touches. At The River, we believe that the flow of good deeds and goodness can transform
              communities just as water shapes the land. We exist to be that river
              of positive change, where every act of kindness creates ripples of hope and renewal.
            </p>
            <div className="space-y-4">
              {[
                "Compassion-driven community upliftment programmes",
                "Education and skill development for underserved youth",
                "Spreading kindness through volunteer-led social service",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-saffron mt-2 shrink-0" />
                  <p className="text-foreground font-body">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
