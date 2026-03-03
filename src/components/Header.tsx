import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/98 backdrop-blur-xl shadow-2xl shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Shield className="w-9 h-9 text-primary transition-all group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-heading text-xl font-bold tracking-tight">Sandhurst</span>
            <span className="text-primary-lighter text-[9px] uppercase tracking-[0.25em] font-medium">Emergency Management</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+18005551234" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-all group">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="hidden xl:inline">1-800-555-1234</span>
          </a>
          <Link
            to="/contact"
            className="relative bg-warning text-warning-foreground px-6 py-2.5 rounded-md text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-warning/30 overflow-hidden group"
          >
            <span className="relative z-10">Get Assessment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-warning to-warning-light opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2 relative"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-primary bg-white/5"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                <a href="tel:+18005551234" className="flex items-center gap-3 text-white/80 text-sm px-4 py-2">
                  <Phone className="w-4 h-4 text-primary" /> 1-800-555-1234
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-warning text-warning-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center"
                >
                  Request Assessment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
