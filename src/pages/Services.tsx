import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, Target, Users, AlertTriangle, CheckCircle, Flame, ChevronRight, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import oilFireImg from "@/assets/oil-fire.jpg";
import commandCenterImg from "@/assets/command-center.jpg";
import gridPatternImg from "@/assets/grid-pattern.jpg";
import wildfireImg from "@/assets/wildfire.jpg";
import floodImg from "@/assets/flood-houston.jpg";

const services = [
  {
    icon: BarChart3,
    title: "Risk Assessments & Audits",
    desc: "Comprehensive vulnerability analysis, threat identification, and gap assessment for your organization's critical operations and infrastructure.",
    features: ["Hazard Vulnerability Analysis (HVA)", "Business Impact Assessments", "Security gap identification", "Regulatory compliance audits", "Custom risk matrices & reporting"],
    image: commandCenterImg,
  },
  {
    icon: Target,
    title: "Emergency Planning & Response",
    desc: "Strategic emergency response frameworks tailored to your industry's unique risk profile, regulatory requirements, and operational demands.",
    features: ["Emergency Operations Plans (EOPs)", "Continuity of Operations Planning", "Incident Command System design", "Evacuation & shelter-in-place plans", "Multi-hazard response strategies"],
    image: floodImg,
  },
  {
    icon: Users,
    title: "Training & Simulations",
    desc: "Immersive tabletop, functional, and full-scale exercises that build confidence and muscle memory under realistic pressure scenarios.",
    features: ["Tabletop exercises", "Functional drills", "Full-scale simulations", "ICS/NIMS training", "After-action reviews & improvement plans"],
    image: wildfireImg,
  },
  {
    icon: AlertTriangle,
    title: "Crisis Management Consulting",
    desc: "Real-time advisory and incident command support for organizations facing active crises or preparing for high-probability scenarios.",
    features: ["Crisis communications strategy", "Executive decision support", "Media & stakeholder management", "Post-incident analysis", "Organizational recovery planning"],
    image: oilFireImg,
  },
  {
    icon: CheckCircle,
    title: "Compliance & Regulatory Support",
    desc: "Expert guidance navigating complex federal, state, and industry-specific regulatory landscapes with confidence and audit-readiness.",
    features: ["OSHA compliance planning", "FEMA grant support", "NFPA standards alignment", "Industry-specific regulations", "Audit preparation & support"],
    image: commandCenterImg,
  },
  {
    icon: Flame,
    title: "On-Site Response & Deployment",
    desc: "Rapid deployment of experienced emergency management consultants to support your team during evolving critical situations.",
    features: ["24/7 rapid deployment", "Incident command support", "Emergency operations center setup", "Multi-agency coordination", "Real-time situational assessment"],
    image: wildfireImg,
  },
];

const Services = () => (
  <main className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={oilFireImg}
          alt="Industrial emergency response"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy)/0.85)] via-[hsl(var(--navy)/0.7)] to-[hsl(var(--navy))]" />
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="relative container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-5 py-2 mb-8">
              <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium">Our Services</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mb-6">
              End-to-End Emergency<br />
              <span className="text-gradient">Preparedness</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              From proactive planning through real-time crisis response, our comprehensive service portfolio protects your people, assets, and operations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services Detail — alternating image/content blocks */}
    <section className="bg-background">
      {services.map((svc, i) => (
        <div key={svc.title} className={`${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
          <div className="container mx-auto px-4 py-20 md:py-28">
            <SectionReveal>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <svc.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight">{svc.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base">{svc.desc}</p>

                  <div className="space-y-3 mb-8">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                        <span className="text-foreground text-sm">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                  >
                    Request this service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} relative`}>
                  <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/10">
                    <motion.img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full aspect-[4/3] object-cover"
                      initial={{ scale: 1.05 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  {/* Decorative accent */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-xl -z-10" />
                </div>
              </div>
            </SectionReveal>
          </div>
          {i < services.length - 1 && (
            <div className="container mx-auto px-4">
              <div className="border-t border-border" />
            </div>
          )}
        </div>
      ))}
    </section>

    {/* CTA */}
    <section className="relative py-28 overflow-hidden bg-navy">
      <div className="absolute inset-0 opacity-10">
        <img src={gridPatternImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <SectionReveal direction="scale">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Mitigate Risk Today</h2>
          <p className="text-white/40 max-w-lg mx-auto mb-10 text-lg">Every day without a plan is a day of unnecessary risk. Let's build your preparedness program.</p>
          <Link to="/contact" className="inline-block bg-warning hover:bg-warning-light text-warning-foreground px-10 py-4 rounded-lg font-semibold text-base transition-all hover:scale-105 hover:shadow-2xl hover:shadow-warning/30">
            Get Started
          </Link>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default Services;
