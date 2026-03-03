import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Plane, Building, Shield, Heart, Zap, GraduationCap, Landmark, ChevronRight, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import floodImg from "@/assets/flood-houston.jpg";
import oilFireImg from "@/assets/oil-fire.jpg";
import wildfireImg from "@/assets/wildfire.jpg";
import commandCenterImg from "@/assets/command-center.jpg";
import gridPatternImg from "@/assets/grid-pattern.jpg";

const industries = [
  { icon: Droplets, title: "Oil & Gas", desc: "Upstream, midstream, and downstream emergency management for refineries, pipelines, and offshore operations.", challenges: ["Well control incidents", "Pipeline ruptures & spills", "Refinery fires & explosions", "HAZMAT releases", "Regulatory compliance (OSHA, EPA)"], image: oilFireImg },
  { icon: Plane, title: "Transportation", desc: "Crisis preparedness for airlines, rail operators, maritime companies, and ground transportation networks.", challenges: ["Mass casualty incidents", "HAZMAT transport emergencies", "Operational disruption recovery", "Regulatory compliance (FAA, FRA)", "Multi-agency coordination"], image: floodImg },
  { icon: Building, title: "Government Agencies", desc: "Federal, state, and local government emergency management program development and compliance.", challenges: ["Multi-jurisdictional coordination", "FEMA grant compliance", "Community resilience programs", "Continuity of government", "Public alert & warning systems"], image: commandCenterImg },
  { icon: Shield, title: "Military & Defense", desc: "Installation emergency management, force protection, and critical infrastructure resilience programs.", challenges: ["Force protection protocols", "CBRN preparedness", "Installation emergency plans", "Anti-terrorism compliance", "Joint-service coordination"], image: commandCenterImg },
  { icon: Heart, title: "Healthcare", desc: "Hospital, long-term care, and health system emergency preparedness meeting CMS and Joint Commission standards.", challenges: ["Mass casualty surge planning", "Pandemic response", "Facility evacuation plans", "CMS & Joint Commission compliance", "Medical supply chain continuity"], image: wildfireImg },
  { icon: Zap, title: "Utilities & Energy", desc: "Power generation, transmission, water treatment, and nuclear facility emergency management programs.", challenges: ["Grid resilience & restoration", "Nuclear emergency planning", "Water contamination response", "NERC CIP compliance", "Natural disaster recovery"], image: oilFireImg },
  { icon: GraduationCap, title: "Education", desc: "K-12 and higher education emergency planning, active threat preparedness, and campus safety programs.", challenges: ["Active threat response", "Campus lockdown procedures", "Behavioral threat assessment", "Parent reunification plans", "Natural disaster sheltering"], image: floodImg },
  { icon: Landmark, title: "Financial Services", desc: "Business continuity, operational resilience, and crisis management for banks, insurers, and financial institutions.", challenges: ["Business continuity planning", "Operational resilience testing", "Third-party risk assessment", "Regulatory compliance", "Pandemic & cyber preparedness"], image: commandCenterImg },
];

const Industries = () => (
  <main className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={floodImg}
          alt="Flood emergency response"
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
              <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium">Industries We Serve</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mb-6">
              Sector-Specific<br />
              <span className="text-gradient">Expertise</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Every industry faces unique threats. Our consultants bring deep sector knowledge and tailored frameworks to the challenges that keep you up at night.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Industries — alternating full-width cards */}
    <section className="bg-background">
      {industries.map((ind, i) => (
        <SectionReveal key={ind.title}>
          <div className={`${i % 2 === 0 ? "bg-background" : "bg-card"} py-16 md:py-20`}>
            <div className="container mx-auto px-4">
              <div className={`grid lg:grid-cols-5 gap-10 items-start ${i % 2 === 1 ? "" : ""}`}>
                {/* Image column */}
                <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <motion.img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full aspect-[4/3] object-cover"
                      initial={{ scale: 1.05 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>

                {/* Content column */}
                <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <ind.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{ind.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">{ind.desc}</p>

                  <div className="bg-background border border-border rounded-xl p-6 mb-6">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-[0.15em] mb-4">Key Challenges We Address</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {ind.challenges.map((c) => (
                        <div key={c} className="flex items-center gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="text-muted-foreground text-sm">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact" className="group inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                    Discuss your needs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      ))}
    </section>

    {/* CTA */}
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={wildfireImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.9)] via-[hsl(var(--purple)/0.85)] to-[hsl(var(--navy)/0.95)]" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <SectionReveal direction="scale">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Prepare Your Team Now</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-10 text-lg">Tell us about your industry and operational challenges. We'll design a preparedness program that fits.</p>
          <Link to="/contact" className="inline-block bg-warning hover:bg-warning-light text-warning-foreground px-10 py-4 rounded-lg font-semibold text-base transition-all hover:scale-105 hover:shadow-2xl hover:shadow-warning/30">
            Schedule Industry Consultation
          </Link>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default Industries;
