import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, Target, Users, AlertTriangle, CheckCircle, Flame, ChevronRight, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import oilFireImg from "@/assets/oil-fire.jpg";

const services = [
  {
    icon: BarChart3,
    title: "Risk Assessments & Audits",
    desc: "Comprehensive vulnerability analysis, threat identification, and gap assessment for your organization's critical operations and infrastructure.",
    features: ["Hazard Vulnerability Analysis (HVA)", "Business Impact Assessments", "Security gap identification", "Regulatory compliance audits", "Custom risk matrices & reporting"],
  },
  {
    icon: Target,
    title: "Emergency Planning & Response",
    desc: "Strategic emergency response frameworks tailored to your industry's unique risk profile, regulatory requirements, and operational demands.",
    features: ["Emergency Operations Plans (EOPs)", "Continuity of Operations Planning", "Incident Command System design", "Evacuation & shelter-in-place plans", "Multi-hazard response strategies"],
  },
  {
    icon: Users,
    title: "Training & Simulations",
    desc: "Immersive tabletop, functional, and full-scale exercises that build confidence and muscle memory under realistic pressure scenarios.",
    features: ["Tabletop exercises", "Functional drills", "Full-scale simulations", "ICS/NIMS training", "After-action reviews & improvement plans"],
  },
  {
    icon: AlertTriangle,
    title: "Crisis Management Consulting",
    desc: "Real-time advisory and incident command support for organizations facing active crises or preparing for high-probability scenarios.",
    features: ["Crisis communications strategy", "Executive decision support", "Media & stakeholder management", "Post-incident analysis", "Organizational recovery planning"],
  },
  {
    icon: CheckCircle,
    title: "Compliance & Regulatory Support",
    desc: "Expert guidance navigating complex federal, state, and industry-specific regulatory landscapes with confidence and audit-readiness.",
    features: ["OSHA compliance planning", "FEMA grant support", "NFPA standards alignment", "Industry-specific regulations", "Audit preparation & support"],
  },
  {
    icon: Flame,
    title: "On-Site Response & Deployment",
    desc: "Rapid deployment of experienced emergency management consultants to support your team during evolving critical situations.",
    features: ["24/7 rapid deployment", "Incident command support", "Emergency operations center setup", "Multi-agency coordination", "Real-time situational assessment"],
  },
];

const Services = () => (
  <main>
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={oilFireImg} alt="Industrial emergency response" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </div>
      <div className="relative container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Our Services</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            End-to-End Emergency Preparedness
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            From proactive planning through real-time crisis response, our comprehensive service portfolio protects your people, assets, and operations.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {services.map((svc, i) => (
            <SectionReveal key={svc.title} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <svc.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{svc.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Request this service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-card border border-border rounded-lg p-8">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Key Deliverables</h4>
                    <ul className="space-y-3">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span className="text-muted-foreground text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {i < services.length - 1 && <div className="border-t border-border mt-12" />}
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-navy text-center">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Mitigate Risk Today</h2>
          <p className="text-white/50 max-w-lg mx-auto mb-8">Every day without a plan is a day of unnecessary risk. Let's build your preparedness program.</p>
          <Link to="/contact" className="inline-block bg-warning hover:bg-warning-light text-warning-foreground px-8 py-4 rounded font-semibold transition-all hover:scale-105">
            Get Started
          </Link>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default Services;
