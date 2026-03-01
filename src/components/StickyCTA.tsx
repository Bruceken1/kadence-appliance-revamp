import { Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const StickyCTA = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const y = useTransform(scrollY, [200, 400], [20, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-md border-t border-white/10 py-3 pointer-events-auto"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-white text-sm hidden sm:block font-medium">
          Ready to strengthen your emergency preparedness?
        </p>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href="tel:+18005551234"
            className="flex items-center justify-center gap-2 bg-white/10 text-white px-4 py-2.5 rounded text-sm font-medium hover:bg-white/15 transition-colors flex-1 sm:flex-none"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href="/contact"
            className="bg-warning hover:bg-warning-light text-warning-foreground px-5 py-2.5 rounded text-sm font-semibold transition-all hover:scale-105 flex-1 sm:flex-none text-center"
          >
            Request Consultation
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyCTA;
