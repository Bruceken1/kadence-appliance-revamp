import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import gridPattern from "@/assets/grid-pattern.jpg";

const Footer = () => (
  <footer className="relative bg-navy text-white/60 overflow-hidden">
    {/* Background texture */}
    <div className="absolute inset-0 opacity-10">
      <img src={gridPattern} alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </div>

    <div className="relative">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-white font-heading text-2xl font-bold">Sandhurst</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-sm">
              Strategic emergency management consulting for organizations operating in the world's most critical and high-risk sectors. Prepared. Proven. Professional.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+18005551234" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                1-800-555-1234
              </a>
              <a href="mailto:info@sandhurst.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                info@sandhurst.com
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                Houston, TX • Washington, D.C.
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-xs uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-3 text-sm">
              {["Risk Assessments", "Emergency Planning", "Training & Simulations", "Crisis Management", "Compliance Support", "On-Site Response"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    {s}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-xs uppercase tracking-[0.2em]">Industries</h4>
            <ul className="space-y-3 text-sm">
              {["Oil & Gas", "Transportation", "Government", "Healthcare", "Utilities", "Financial"].map((i) => (
                <li key={i}>
                  <Link to="/industries" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    {i}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency CTA */}
          <div className="lg:col-span-4">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-warning pulse-ring" />
                <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em]">24/7 Emergency Line</h4>
              </div>
              <p className="text-sm mb-6 leading-relaxed">
                Critical situations can't wait. Our crisis response team is available around the clock for immediate support.
              </p>
              <a
                href="tel:+18005551234"
                className="inline-flex items-center gap-2 bg-warning hover:bg-warning-light text-warning-foreground px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-warning/20"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Sandhurst Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white/60 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
