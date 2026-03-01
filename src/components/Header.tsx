import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Shield className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-heading text-lg font-bold tracking-tight">Apex Readiness</span>
            <span className="text-primary-lighter text-[10px] uppercase tracking-[0.2em]">Emergency Management</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-white/5"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+18005551234" className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
            <Phone className="w-4 h-4" />
            <span>1-800-555-1234</span>
          </a>
          <Link
            to="/contact"
            className="bg-warning hover:bg-warning-light text-warning-foreground px-5 py-2.5 rounded text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-warning/25"
          >
            Request Assessment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-white/5"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                <a href="tel:+18005551234" className="flex items-center gap-2 text-white/80 text-sm px-4 py-2">
                  <Phone className="w-4 h-4" /> 1-800-555-1234
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-warning text-warning-foreground px-4 py-3 rounded text-sm font-semibold text-center"
                >
                  Request Assessment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
