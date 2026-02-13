import { useState } from "react";
import { Phone, Mail, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar"; // ✅ ADD NAVBAR

const subjectOptions = ["General Enquiry", "Donation", "Music Class"];

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
      {/* ✅ NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-primary pt-32 pb-20">
        <div className="section-container text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We would love to hear from you. Reach out to us for any inquiries or
            further information about our music program.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-16 bg-background">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-5 gap-10">
            
            {/* INFO CARDS */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-md border">
                <Phone className="w-6 h-6 mb-3 text-primary" />
                <h3 className="font-bold">Phone</h3>
                <a href="tel:+919442795190" className="text-muted-foreground">
                  +91 94427 95190
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-md border">
                <Mail className="w-6 h-6 mb-3 text-primary" />
                <h3 className="font-bold">Email</h3>
                <a href="mailto:info@theriverindia.com" className="text-muted-foreground">
                  info@theriverindia.com
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-md border">
                <MapPin className="w-6 h-6 mb-3 text-primary" />
                <h3 className="font-bold">Location</h3>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>

            {/* FORM */}
            <div className="md:col-span-3">
              <div className="bg-card rounded-xl p-8 shadow-md border">
                <h2 className="text-2xl font-bold mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
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
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    className="input resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg gold-gradient font-semibold flex justify-center gap-2"
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
