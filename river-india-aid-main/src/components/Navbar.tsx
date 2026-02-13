import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showActivities, setShowActivities] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setShowActivities(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img src={logo} alt="The River India logo" className="h-10 w-auto" />
          <div className="hidden sm:block leading-tight">
            <span className="text-lg font-bold block">The River</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Do the Basics Right
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>

          {/* Activities Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary transition">
              Activities <ChevronDown className="h-4 w-4" />
            </button>

            <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link
                to="/activities"
                className="block px-4 py-2 hover:bg-muted rounded-lg"
              >
                Arts & Entertainment
              </Link>
            </div>
          </div>

          {/* HOME PAGE SECTIONS */}
          <Link to="/#getinvolved" className="hover:text-primary transition">
            Get Involved
          </Link>

          <Link to="/contact" className="hover:text-primary transition">
            Contact
          </Link>

          <Button variant="hero" size="sm" asChild>
            <Link to="/#donate">Donate</Link>
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4 text-sm font-medium">

          <Link to="/" onClick={closeMenu} className="block">
            Home
          </Link>

          {/* Activities Mobile */}
          <button
            onClick={() => setShowActivities(!showActivities)}
            className="flex items-center justify-between w-full"
          >
            Activities
            <ChevronDown
              className={`h-4 w-4 transition ${
                showActivities ? "rotate-180" : ""
              }`}
            />
          </button>

          {showActivities && (
            <div className="pl-4 space-y-2">
              <Link
                to="/activities"
                onClick={closeMenu}
                className="block"
              >
                Arts & Entertainment
              </Link>
            </div>
          )}

          <Link to="/#getinvolved" onClick={closeMenu} className="block">
            Get Involved
          </Link>

          <Link to="/contact" onClick={closeMenu} className="block">
            Contact
          </Link>

          <Button variant="hero" className="w-full mt-4" asChild>
            <Link to="/#donate" onClick={closeMenu}>
              Donate
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
