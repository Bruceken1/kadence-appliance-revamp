import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-white/70">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-7 h-7 text-primary" />
            <span className="text-white font-heading text-lg font-bold">Sandhurst</span>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Leading emergency management consulting firm delivering strategic preparedness, training, and crisis response solutions for high-risk industries.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> 1-800-555-1234
            </a>
            <a href="mailto:info@sandhurst.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> info@sandhurst.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Houston, TX — Washington, D.C.
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Risk Assessments", "Emergency Planning", "Training & Simulations", "Crisis Management", "Compliance Support"].map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-primary transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Industries</h4>
          <ul className="space-y-2 text-sm">
            {["Oil & Gas", "Transportation", "Government", "Healthcare", "Utilities", "Financial"].map((i) => (
              <li key={i}>
                <Link to="/industries" className="hover:text-primary transition-colors">{i}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">24/7 Emergency Line</h4>
          <p className="text-sm mb-4">Critical situations can't wait. Our crisis response team is available around the clock.</p>
          <a
            href="tel:+18005551234"
            className="inline-block bg-warning hover:bg-warning-light text-warning-foreground px-6 py-3 rounded font-semibold text-sm transition-all hover:scale-105"
          >
            Call Now
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Sandhurst Group. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
