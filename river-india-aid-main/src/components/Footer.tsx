import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="container mx-auto px-4 py-16">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-3 items-start">

          {/* BRAND */}
          <div className="max-w-sm mx-auto md:mx-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <img
                src={logo}
                alt="The River India"
                className="h-10 w-auto brightness-200"
              />
              <div>
                <span className="font-heading text-lg font-bold text-background block">
                  The River
                </span>
                <span className="text-xs text-background/50 tracking-widest uppercase">
                  Do the Basics Right
                </span>
              </div>
            </div>

            <p className="text-background/60 font-body leading-relaxed text-sm">
              Life thrives wherever The River flows. We exist to spread good deeds,
              kindness, and transform communities across India through compassion
              and shared responsibility.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold text-background mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-background/60 hover:text-saffron transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#donate"
                  className="text-background/60 hover:text-saffron transition-colors"
                >
                  Donate
                </a>
              </li>

              <li>
                <a
                  href="#getinvolved"
                  className="text-background/60 hover:text-saffron transition-colors"
                >
                  Get Involved
                </a>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-background/60 hover:text-saffron transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold text-background mb-5">
              Contact
            </h4>

            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3 text-background/60">
                <Mail className="h-4 w-4 text-saffron shrink-0" />
                <span className="text-sm">info@theriverindia.com</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 text-background/60">
                <Phone className="h-4 w-4 text-saffron shrink-0" />
                <span className="text-sm">+91 94427 95190</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 text-background/60">
                <MapPin className="h-4 w-4 text-saffron shrink-0" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>

        </div>

        {/* DIVIDER + COPYRIGHT */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center space-y-2">
          <p className="text-background/40 text-sm">
            © 2026 The River India. All rights reserved.
          </p>

          <p className="text-background/40 text-sm">
            Designed & Developed by{" "}
            <a
              href="https://mayimdazzle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:underline hover:text-saffron/80 transition-colors"
            >
              mayimdazzle.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
