import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Plane, Building, Shield, Heart, Zap, GraduationCap, Landmark, ChevronRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import floodImg from "@/assets/flood-houston.jpg";

const industries = [
  {
    icon: Droplets,
    title: "Oil & Gas",
    desc: "Upstream, midstream, and downstream emergency management for refineries, pipelines, and offshore operations.",
    challenges: ["Well control incidents", "Pipeline ruptures & spills", "Refinery fires & explosions", "HAZMAT releases", "Regulatory compliance (OSHA, EPA)"],
  },
  {
    icon: Plane,
    title: "Transportation",
    desc: "Crisis preparedness for airlines, rail operators, maritime companies, and ground transportation networks.",
    challenges: ["Mass casualty incidents", "HAZMAT transport emergencies", "Operational disruption recovery", "Regulatory compliance (FAA, FRA)", "Multi-agency coordination"],
  },
  {
    icon: Building,
    title: "Government Agencies",
    desc: "Federal, state, and local government emergency management program development and compliance.",
    challenges: ["Multi-jurisdictional coordination", "FEMA grant compliance", "Community resilience programs", "Continuity of government", "Public alert & warning systems"],
  },
  {
    icon: Shield,
    title: "Military & Defense",
    desc: "Installation emergency management, force protection, and critical infrastructure resilience programs.",
    challenges: ["Force protection protocols", "CBRN preparedness", "Installation emergency plans", "Anti-terrorism compliance", "Joint-service coordination"],
  },
  {
    icon: Heart,
    title: "Healthcare",
    desc: "Hospital, long-term care, and health system emergency preparedness meeting CMS and Joint Commission standards.",
    challenges: ["Mass casualty surge planning", "Pandemic response", "Facility evacuation plans", "CMS & Joint Commission compliance", "Medical supply chain continuity"],
  },
  {
    icon: Zap,
    title: "Utilities & Energy",
    desc: "Power generation, transmission, water treatment, and nuclear facility emergency management programs.",
    challenges: ["Grid resilience & restoration", "Nuclear emergency planning", "Water contamination response", "NERC CIP compliance", "Natural disaster recovery"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "K-12 and higher education emergency planning, active threat preparedness, and campus safety programs.",
    challenges: ["Active threat response", "Campus lockdown procedures", "Behavioral threat assessment", "Parent reunification plans", "Natural disaster sheltering"],
  },
  {
    icon: Landmark,
    title: "Financial Services",
    desc: "Business continuity, operational resilience, and crisis management for banks, insurers, and financial institutions.",
    challenges: ["Business continuity planning", "Operational resilience testing", "Third-party risk assessment", "Regulatory compliance", "Pandemic & cyber preparedness"],
  },
];

const Industries = () => (
  <main>
    {/* Hero with flood image */}
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={floodImg} alt="Flood emergency response" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </div>
      <div className="relative container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Industries We Serve</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Sector-Specific Expertise
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Every industry faces unique threats. Our consultants bring deep sector knowledge and tailored frameworks to the challenges that keep you up at night.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Industries Grid */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((ind, i) => (
            <SectionReveal key={ind.title} delay={i * 0.05}>
              <div className="group bg-card border border-border rounded-lg p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <ind.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-foreground mb-2">{ind.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
                <div className="border-t border-border pt-5">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Key Challenges We Address</h4>
                  <ul className="space-y-2">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <ChevronRight className="w-3 h-3 text-accent shrink-0" />
                        <span className="text-muted-foreground text-xs">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-to-br from-primary to-purple text-center">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Prepare Your Team Now</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8">Tell us about your industry and operational challenges. We'll design a preparedness program that fits.</p>
          <Link to="/contact" className="inline-block bg-warning hover:bg-warning-light text-warning-foreground px-8 py-4 rounded font-semibold transition-all hover:scale-105">
            Schedule Industry Consultation
          </Link>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default Industries;
