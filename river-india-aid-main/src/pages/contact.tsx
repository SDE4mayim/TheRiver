import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CrashCourseSection from "@/components/CrashCourseSection";
import WelcomeSection from "@/components/WelcomeSection";
import DonationSection from "@/components/DonationSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";  // ✅ ADD THIS
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection />
      <WelcomeSection />
      <DonationSection />
      <GetInvolvedSection />

      
    

      <Footer />
    </main>
  );
};

export default Index;
import { useState } from "react";
import { Phone, Mail, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const subjectOptions = ["General Enquiry", "Donation"];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-primary pt-32 pb-20 text-center">
        <div className="section-container max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-primary-foreground/80">
            We would love to hear from you. Reach out to us for any inquiries or
            further information about our music program.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-background">
        <div className="section-container max-w-6xl mx-auto">
          <div className="grid gap-14 md:grid-cols-5 items-start">

            {/* INFO CARDS */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <Phone className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <a
                  href="tel:+919442795190"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  +91 94427 95190
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <Mail className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <a
                  href="mailto:info@theriverindia.com"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  info@theriverindia.com
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <MapPin className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>

            {/* FORM – IMPROVED UI */}
            <div className="md:col-span-3 mt-8 md:mt-14">
              <div className="bg-card/80 backdrop-blur rounded-2xl p-10 border shadow-lg">

                {/* FORM HEADER */}
                <div className="mb-8 text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form and our team will get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className="input"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">Select Subject</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                    className="input resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl gold-gradient font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
