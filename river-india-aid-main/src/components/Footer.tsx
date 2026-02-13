import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
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

            <p className="text-background/60 font-body leading-relaxed">
              Life thrives wherever The River flows. We exist to spread good deeds,
              kindness, and transform communities across India through compassion
              and shared responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">
              Quick Links
            </h4>

            <div className="space-y-2">
              <a
                href="#about"
                className="block text-background/60 hover:text-saffron transition-colors"
              >
                About Us
              </a>

              <a
                href="#donate"
                className="block text-background/60 hover:text-saffron transition-colors"
              >
                Donate
              </a>

              <a
                href="#getinvolved"
                className="block text-background/60 hover:text-saffron transition-colors"
              >
                Get Involved
              </a>

              {/* Contact is a PAGE */}
              <Link
                to="/contact"
                className="block text-background/60 hover:text-saffron transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">
              Contact
            </h4>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/60">
                <Mail className="h-4 w-4 text-saffron" />
                <span>info@theriverindia.com</span>
              </div>

              <div className="flex items-center gap-3 text-background/60">
                <Phone className="h-4 w-4 text-saffron" />
                <span>+91 94427 95190</span>
              </div>

              <div className="flex items-center gap-3 text-background/60">
                <MapPin className="h-4 w-4 text-saffron" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © 2026 The River India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
