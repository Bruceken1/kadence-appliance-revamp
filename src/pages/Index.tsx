import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Target, Users, Clock, CheckCircle, ChevronRight, Award, Zap, BarChart3, AlertTriangle, Flame, Building2 } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import wildfireImg from "@/assets/wildfire.jpg";
import oilFireImg from "@/assets/oil-fire.jpg";
import floodImg from "@/assets/flood-houston.jpg";
import tornadoImg from "@/assets/tornado-debris.jpg";

const stats = [
  { value: "100+", label: "Simulations Conducted", icon: Target },
  { value: "250+", label: "Organizations Served", icon: Building2 },
  { value: "Zero", label: "Major Incidents Post-Training", icon: Shield },
  { value: "24/7", label: "Crisis Support Available", icon: Clock },
];

const services = [
  { title: "Risk Assessments & Audits", desc: "Comprehensive vulnerability analysis and threat identification for critical infrastructure.", icon: BarChart3 },
  { title: "Emergency Planning", desc: "Strategic response frameworks tailored to your industry's unique risk profile.", icon: Target },
  { title: "Training & Simulations", desc: "Immersive tabletop and full-scale exercises that build muscle memory under pressure.", icon: Users },
  { title: "Crisis Management", desc: "Real-time advisory and incident command support when every second counts.", icon: AlertTriangle },
  { title: "Compliance Support", desc: "Navigate complex regulatory landscapes with confidence and audit-readiness.", icon: CheckCircle },
  { title: "On-Site Response", desc: "Rapid deployment of experienced consultants to manage evolving situations.", icon: Flame },
];

const sectors = [
  "Oil & Gas", "Transportation", "Government", "Military",
  "Healthcare", "Utilities", "Education", "Financial Services",
];

const testimonials = [
  { quote: "Sandhurst transformed our emergency preparedness program. Their simulation exercises exposed critical gaps we never knew existed.", author: "Director of Safety", org: "Major Pipeline Operator" },
  { quote: "When a real incident occurred, our team executed flawlessly — exactly as trained. The confidence they built in our staff was invaluable.", author: "VP Operations", org: "Regional Airline" },
  { quote: "Their regulatory compliance expertise saved us months of work and potential penalties. Professional, thorough, and always available.", author: "Chief Risk Officer", org: "Federal Agency" },
];

const Homepage = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={wildfireImg} alt="Emergency wildfire response" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
      </div>
      <div className="relative container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              Emergency Management Consulting
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-[1.1] mb-6">
              Prepared for the{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent">Unthinkable.</span>
              <br />
              Ready When Seconds Matter.
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Strategic preparedness, crisis response, and risk mitigation for the world's most critical industries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="bg-warning hover:bg-warning-light text-warning-foreground px-8 py-4 rounded font-semibold text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-warning/20 text-center"
            >
              Schedule a Risk Assessment
            </Link>
            <Link
              to="/services"
              className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded font-semibold text-base transition-all text-center"
            >
              Explore Our Solutions
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>

    {/* Stats */}
    <section className="bg-navy-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.15em]">Our Capabilities</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Comprehensive Emergency Management Solutions
            </h2>
            <p className="text-muted-foreground">
              From proactive planning to real-time crisis response, we deliver end-to-end solutions that protect lives, assets, and reputations.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <SectionReveal key={svc.title} delay={i * 0.08}>
              <div className="group bg-card border border-border rounded-lg p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <svc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.desc}</p>
                <Link to="/services" className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Real-World Impact imagery strip */}
    <section className="py-20 md:py-28 bg-navy">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-[0.15em]">Real-World Impact</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              When Preparedness Meets Reality
            </h2>
            <p className="text-white/50">From wildfires to floods, industrial disasters to tornado recovery — our expertise spans every crisis scenario.</p>
          </div>
        </SectionReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { img: wildfireImg, label: "Wildfire Response" },
            { img: oilFireImg, label: "Industrial Incidents" },
            { img: floodImg, label: "Flood Recovery" },
            { img: tornadoImg, label: "Disaster Cleanup" },
          ].map((item, i) => (
            <SectionReveal key={item.label} delay={i * 0.1}>
              <div className="relative group rounded-lg overflow-hidden aspect-[4/3]">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-semibold text-sm">{item.label}</span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="py-20 md:py-28 bg-navy-light">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-[0.15em]">Industries We Serve</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Trusted Across High-Risk Sectors
            </h2>
            <p className="text-white/50">
              We understand the unique risks, regulations, and operational demands of the world's most critical industries.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sectors.map((sector, i) => (
            <SectionReveal key={sector} delay={i * 0.06}>
              <Link
                to="/industries"
                className="group bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">{sector}</span>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.15em]">Client Impact</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              What Leaders Say
            </h2>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-lg p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Award key={j} className="w-4 h-4 text-warning" />
                  ))}
                </div>
                <blockquote className="text-foreground text-sm leading-relaxed mb-6 flex-1 italic">
                  "{t.quote}"
                </blockquote>
                <div>
                  <div className="text-foreground font-semibold text-sm">{t.author}</div>
                  <div className="text-muted-foreground text-xs">{t.org}</div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-purple">
      <div className="container mx-auto px-4 text-center">
        <SectionReveal>
          <Zap className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Build Unbreakable Resilience
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Don't wait for a crisis to expose your vulnerabilities. Partner with Sandhurst to build a preparedness program that stands up to the real world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-warning hover:bg-warning-light text-warning-foreground px-8 py-4 rounded font-semibold transition-all hover:scale-105"
            >
              Request Consultation
            </Link>
            <a
              href="tel:+18005551234"
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded font-semibold transition-all"
            >
              Call 1-800-555-1234
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default Homepage;
