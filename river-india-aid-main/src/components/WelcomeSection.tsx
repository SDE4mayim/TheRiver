import communityImage from "@/assets/community-service.jpg";

const WelcomeSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="rounded-2xl overflow-hidden shadow-2xl sticky top-24">
            <img
              src={communityImage}
              alt="Community members working together along the river"
              className="w-full h-[450px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-2">Welcome to The River</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Doing Good <span className="text-gradient-river">Deeds.</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Imagine a river winding through diverse landscapes, breathing life into everything
                it touches. At The River, we believe that the flow of good deeds and goodness can transform
                communities just as water shapes the land. Our organization is inspired by the timeless
                truth that "Swarms of living creatures will live wherever the river flows." We exist to be that river
                of positive change, where every act of kindness and generosity creates ripples of hope and
                renewal.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Why The River?</h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Our name is a tribute to the transformative power of flowing water. Just as a
                river refreshes and sustains its surroundings, we are committed to bringing fresh perspectives and
                opportunities wherever we go. Our name symbolizes our belief that, through generous acts and
                shared commitment, we can rejuvenate communities and inspire profound change.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Inspiration</h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Inspired by the profound truth that "Swarms of living creatures will live wherever
                the river flows," The River was founded on the principle that positive change has the power
                to revitalize and uplift. Just as the river makes saltwater fresh, we are committed to bringing
                new life and opportunities wherever we work.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Who We Are?</h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Founded in 2023, The River is driven by a diverse team united by a shared vision
                of making a difference. Our team members come from various backgrounds and bring a wealth of
                experience to our cause. Together, we are committed to creating ripples of positive impact
                that extend far beyond our immediate reach.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Approach</h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                At The River, we operate with the belief that "doing good deeds" are at the
                heart of transformative change. By staying true to our core values of compassion and shared
                responsibility, we ensure that our initiatives resonate deeply and create lasting effects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
