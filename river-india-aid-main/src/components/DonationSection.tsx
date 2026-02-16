import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Send } from "lucide-react";

const amounts = [500, 1000, 2500, 5000, 10000];

const DonationSection = () => {
  const [selected, setSelected] = useState<number | null>(1000);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const showForm = selected !== null || custom !== "";

  return (
    <section
      id="donate"
      className="py-24 bg-gradient-river relative overflow-hidden"
    >
      {/* Decorative ripple */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-primary-foreground/10 animate-ripple" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">

          {/* ICON */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
            <Heart className="h-8 w-8 text-saffron" />
          </div>

          {/* TITLE */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Make a Difference Today
          </h2>

          <p className="text-primary-foreground/70 text-lg mb-10">
            Your donation supports free music education and community upliftment.
          </p>

          {/* AMOUNT SELECTOR */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {amounts.map((amt) => (
              <button
                key={amt}
                onClick={() => {
                  setSelected(amt);
                  setIsCustom(false);
                  setCustom("");
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selected === amt
                    ? "bg-saffron text-primary-foreground shadow-lg scale-105"
                    : "bg-primary-foreground/10 text-primary-foreground/80 hover:bg-primary-foreground/20"
                }`}
              >
                ₹{amt.toLocaleString("en-IN")}
              </button>
            ))}

            {/* CUSTOM BUTTON */}
            <button
              onClick={() => {
                setIsCustom(true);
                setSelected(null);
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                isCustom
                  ? "bg-saffron text-primary-foreground shadow-lg scale-105"
                  : "bg-primary-foreground/10 text-primary-foreground/80 hover:bg-primary-foreground/20"
              }`}
            >
              Custom
            </button>
          </div>

          {/* CUSTOM AMOUNT INPUT */}
          {isCustom && (
            <div className="flex justify-center mb-8 animate-fade-up">
              <input
                type="number"
                min="1"
                step="1"
                placeholder="Enter amount"
                value={custom}
                onChange={(e) => {
                  const value = e.target.value;
                  if (Number(value) >= 0) setCustom(value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") {
                    e.preventDefault();
                  }
                }}
                className="w-48 px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 outline-none"
              />
            </div>
          )}

          {/* CONTACT + BANK DETAILS */}
          {showForm && (
            <div className="mt-10 grid lg:grid-cols-2 gap-8 animate-fade-up">

              {/* CONTACT FORM */}
              <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-8 text-left">
                <h3 className="text-xl font-heading font-bold text-primary-foreground mb-6 text-center">
                  Your Contact Details
                </h3>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 outline-none"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 outline-none"
                  />

                  <textarea
                    rows={3}
                    placeholder="Message (optional)"
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 outline-none resize-none"
                  />

                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Donate{" "}
                    {selected
                      ? `₹${selected.toLocaleString("en-IN")}`
                      : custom
                      ? `₹${custom}`
                      : ""}
                  </Button>
                </form>
              </div>

              {/* BANK DETAILS */}
             {/* BANK DETAILS */}
<div className="bg-primary-foreground rounded-xl p-8 shadow-lg h-fit mt-6 lg:mt-12">

                <h3 className="text-xl font-heading font-bold text-center mb-6">
                  Bank Transfer Details
                </h3>

                <div className="space-y-4 text-sm">
                  <BankRow label="Account Name" value="The River" />
                  <BankRow label="Account Number" value="7673506215" />
                  <BankRow label="IFSC Code" value="IDIB000T170" />
                  <BankRow label="Branch" value="Thippampatti Koottu Road" />
                  <BankRow label="Account Type" value="Current Account" />
                  <BankRow label="Branch Code" value="02468" />
                </div>
              </div>

            </div>
          )}

          <p className="text-primary-foreground/50 text-sm mt-8">
            All donations are eligible under Section 80G
          </p>
        </div>
      </div>
    </section>
  );
};

const BankRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="flex justify-between border-b last:border-0 pb-2">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-semibold text-foreground">{value}</span>
  </div>
);

export default DonationSection;
