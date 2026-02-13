import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import {
  Music,
  Film,
  Target,
  Users,
  BookOpen,
  Clock,
  Building2,
  Rocket,
  Sparkles,
  Mail,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImage from "@/assets/hero-activities.png";

/* ---------------- PROGRAM CARDS ---------------- */

const programCards = [
  {
    title: "The River Presents",
    desc: "Live performances, showcases, and creative events celebrating community talent.",
    icon: Sparkles,
  },
  {
    title: "The Waves Academy",
    desc: "Structured learning programs for music and media education.",
    icon: Music,
  },
  {
    title: "Do The Basic Right",
    desc: "Foundation programs focusing on strong creative fundamentals.",
    icon: Target,
  },
];

const Activities = () => {
  return (
    <>
      <Navbar />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={heroImage}
          alt="Arts and entertainment education"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-light mb-3">
            Arts & Entertainment
          </p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Our Activities
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Transforming lives through creative skills by providing accessible education,
            fostering confidence, and enabling personal growth through artistic expression.
          </p>
        </div>
      </section>

      {/* ---------------- PROGRAM CARDS ---------------- */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-14">
            Our Programs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programCards.map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-xl p-8 text-center border border-border
                shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-5">
                  <card.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ACADEMY DETAILS ---------------- */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              The River Academy of Music & Media
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A premier institution dedicated to providing comprehensive education
              in music and video production for individuals of all ages and backgrounds.
            </p>
          </div>

          <Accordion type="multiple" className="space-y-5">

            <AccordionItem value="objectives" className="bg-card rounded-xl border px-6 shadow-sm">
              <AccordionTrigger className="font-display font-bold text-lg">
                <Target className="w-5 h-5 mr-3 text-primary" />
                Objectives
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Comprehensive music & media education</li>
                  <li>Skill development & career pathways</li>
                  <li>Innovative learning experiences</li>
                  <li>Inclusive environment for all age groups</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="audience" className="bg-card rounded-xl border px-6 shadow-sm">
              <AccordionTrigger className="font-display font-bold text-lg">
                <Users className="w-5 h-5 mr-3 text-primary" />
                Target Audience
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Aspiring musicians & filmmakers</li>
                  <li>Students & professionals</li>
                  <li>Music & media enthusiasts</li>
                  <li>Artists & content creators</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="courses" className="bg-card rounded-xl border px-6 shadow-sm">
              <AccordionTrigger className="font-display font-bold text-lg">
                <BookOpen className="w-5 h-5 mr-3 text-primary" />
                Course Offerings
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground space-y-4">
                <div>
                  <strong>Music Education</strong>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Instrumental training (Keyboard, Guitar, Drums, etc.)</li>
                    <li>Vocal coaching</li>
                    <li>Music production & composition</li>
                    <li>Live sound engineering</li>
                    <li>Music therapy</li>
                  </ul>
                </div>

                <div>
                  <strong>Video Production & Digital Media</strong>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>Cinematography & filmmaking</li>
                    <li>Video editing & post-production</li>
                    <li>Social media content creation</li>
                    <li>Animation & motion graphics</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="schedule" className="bg-card rounded-xl border px-6 shadow-sm">
              <AccordionTrigger className="font-display font-bold text-lg">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                Schedule & Duration
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                <p>Class duration: 1–2 hours</p>
                <p>Program length: 5–10 days</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="facilities" className="bg-card rounded-xl border px-6 shadow-sm">
              <AccordionTrigger className="font-display font-bold text-lg">
                <Building2 className="w-5 h-5 mr-3 text-primary" />
                Facilities & Resources
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Professional studios & equipment</li>
                  <li>Instruments & editing tools</li>
                  <li>Practice & rehearsal spaces</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="future" className="bg-card rounded-xl border px-6 shadow-sm">
              <AccordionTrigger className="font-display font-bold text-lg">
                <Rocket className="w-5 h-5 mr-3 text-primary" />
                Future Growth & Expansion
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Advanced certifications</li>
                  <li>Community events & showcases</li>
                  <li>Industry collaborations</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </section>

      {/* ---------------- CONTACT CTA ---------------- */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Want to Know More or Join Our Programs?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Contact us for enrollment details, schedules, or general enquiries.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-primary
            px-8 py-4 rounded-full font-semibold transition-all duration-300
            hover:bg-white/90 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Activities;
 