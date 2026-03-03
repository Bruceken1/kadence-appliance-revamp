import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Users, Clock, CheckCircle, ChevronRight, Award, Zap, BarChart3, AlertTriangle, Flame, Building2, ArrowRight, ArrowDown, Droplets, Plane, Building, Heart, GraduationCap, Landmark } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import CountUp from "@/components/CountUp";
import heroVideo from "@/assets/hero-video.mp4";
import wildfireImg from "@/assets/wildfire.jpg";
import oilFireImg from "@/assets/oil-fire.jpg";
import floodImg from "@/assets/flood-houston.jpg";
import tornadoImg from "@/assets/tornado-debris.jpg";
import commandCenterImg from "@/assets/command-center.jpg";
import teamPlanningImg from "@/assets/team-planning.jpg";
import gridPatternImg from "@/assets/grid-pattern.jpg";
import paulImg from "@/assets/paul-flavell.png";

const services = [
  { title: "Risk Assessments & Audits", desc: "Comprehensive vulnerability analysis and threat identification for critical infrastructure.", icon: BarChart3, color: "primary" },
  { title: "Emergency Planning", desc: "Strategic response frameworks tailored to your industry's unique risk profile.", icon: Target, color: "accent" },
  { title: "Training & Simulations", desc: "Immersive tabletop and full-scale exercises that build muscle memory under pressure.", icon: Users, color: "purple" },
  { title: "Crisis Management", desc: "Real-time advisory and incident command support when every second counts.", icon: AlertTriangle, color: "warning" },
  { title: "Compliance Support", desc: "Navigate complex regulatory landscapes with confidence and audit-readiness.", icon: CheckCircle, color: "primary" },
  { title: "On-Site Response", desc: "Rapid deployment of experienced consultants to manage evolving situations.", icon: Flame, color: "accent" },
];

const sectors = [
  { name: "Oil & Gas", icon: Droplets },
  { name: "Transportation", icon: Plane },
  { name: "Government", icon: Building },
  { name: "Military", icon: Shield },
  { name: "Healthcare", icon: Heart },
  { name: "Utilities", icon: Zap },
  { name: "Education", icon: GraduationCap },
  { name: "Financial Services", icon: Landmark },
];

const testimonials = [
  { quote: "Sandhurst transformed our emergency preparedness program. Their simulation exercises exposed critical gaps we never knew existed.", author: "Director of Safety", org: "Major Pipeline Operator", image: oilFireImg },
  { quote: "When a real incident occurred, our team executed flawlessly — exactly as trained. The confidence they built in our staff was invaluable.", author: "VP Operations", org: "Regional Airline", image: floodImg },
  { quote: "Their regulatory compliance expertise saved us months of work and potential penalties. Professional, thorough, and always available.", author: "Chief Risk Officer", org: "Federal Agency", image: wildfireImg },
];

const caseStudies = [
  { title: "Oil Storage Facility Response", category: "Oil & Gas", image: oilFireImg, result: "Zero casualties, contained in 4 hours" },
  { title: "Category 4 Hurricane Recovery", category: "Government", image: floodImg, result: "Full operations restored in 72 hours" },
  { title: "Wildfire Evacuation Protocol", category: "Utilities", image: wildfireImg, result: "12,000 residents safely evacuated" },
  { title: "Post-Tornado Infrastructure", category: "Transportation", image: tornadoImg, result: "Supply chain restored in 48 hours" },
];

const Homepage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <main className="overflow-hidden">
      {/* ===== HERO — Full-screen video with layered content ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={commandCenterImg}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy)/0.8)] via-[hsl(var(--navy)/0.6)] to-[hsl(var(--navy))]" />
        </motion.div>

        {/* Grid overlay for tech feel */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative container mx-auto px-4 pt-28 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-5 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium">Emergency Management Consulting</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[1.05] mb-8"
            >
              Prepared for the{" "}
              <span className="text-gradient">Unthinkable</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Strategic preparedness, crisis response, and risk mitigation for the world's most critical industries. When seconds matter, experience makes the difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="group relative bg-warning text-warning-foreground px-10 py-4 rounded-lg font-semibold text-base transition-all hover:scale-105 hover:shadow-2xl hover:shadow-warning/30 text-center overflow-hidden"
              >
                <span className="relative z-10">Schedule a Risk Assessment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-warning-light to-warning opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/services"
                className="group border border-white/15 text-white hover:border-white/30 px-10 py-4 rounded-lg font-semibold text-base transition-all text-center backdrop-blur-sm inline-flex items-center justify-center gap-2"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </section>

      {/* ===== STATS BAR — Dark, bold counters ===== */}
      <section className="relative bg-navy-light py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={gridPatternImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <CountUp end={100} suffix="+" label="Simulations Conducted" />
            <CountUp end={250} suffix="+" label="Organizations Served" />
            <CountUp end={0} prefix="" suffix="" label="Major Incidents Post-Training" />
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2"
              >
                24/7
              </motion.div>
              <div className="text-white/40 text-sm uppercase tracking-wider font-medium">Crisis Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER — Dramatic split with parallax image ===== */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Image side */}
          <div className="relative h-[50vh] lg:h-auto overflow-hidden">
            <motion.img
              src={teamPlanningImg}
              alt="Strategic planning team"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(var(--navy)/0.3)] lg:bg-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent lg:hidden" />
          </div>
          {/* Content side */}
          <div className="flex items-center py-16 lg:py-28 px-6 lg:px-16">
            <div className="max-w-xl">
              <SectionReveal>
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Who We Are</span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  Calm Leadership<br />
                  <span className="text-gradient">When It Matters Most</span>
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Founded by emergency management veterans, Sandhurst bridges the gap between theoretical preparedness and real-world resilience. Our consultants bring decades of field experience across the world's highest-risk industries.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.25}>
                <div className="flex items-center gap-5 mb-8 p-5 bg-card border border-border rounded-xl">
                  <img src={paulImg} alt="Paul Flavell" className="w-16 h-16 rounded-lg object-cover border-2 border-primary/20" />
                  <div>
                    <div className="text-foreground font-semibold">Paul Flavell</div>
                    <div className="text-primary text-sm">Founder & Principal</div>
                  </div>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.35}>
                <Link to="/about" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES — Cards with icon accents over dark bg ===== */}
      <section className="relative py-24 md:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={gridPatternImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mb-16">
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Our Capabilities</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Comprehensive Solutions for<br />
                <span className="text-gradient">Every Stage of Crisis</span>
              </h2>
              <p className="text-white/40 text-base max-w-xl">
                From proactive planning to real-time response, end-to-end solutions that protect lives, assets, and reputations.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <SectionReveal key={svc.title} delay={i * 0.08}>
                <Link to="/services" className="group block h-full">
                  <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 h-full hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-500 overflow-hidden">
                    {/* Glow effect on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                        <svc.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">{svc.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed mb-5">{svc.desc}</p>
                      <span className="inline-flex items-center text-primary text-sm font-medium gap-1.5 group-hover:gap-3 transition-all">
                        Learn more <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REAL-WORLD IMPACT — Full-width image gallery with hover reveals ===== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Case Studies</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Real-World <span className="text-gradient">Impact</span>
              </h2>
              <p className="text-muted-foreground">From wildfires to floods, industrial disasters to infrastructure recovery — our expertise spans every crisis scenario.</p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudies.map((cs, i) => (
              <SectionReveal key={cs.title} delay={i * 0.1} direction="scale">
                <div className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy)/0.3)] to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  {/* Always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-semibold">{cs.category}</span>
                    <h3 className="text-white font-heading font-semibold text-base mt-1 mb-2">{cs.title}</h3>
                    {/* Reveal on hover */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">
                      <div className="flex items-center gap-2 text-accent text-sm font-medium pt-2 border-t border-white/10 mt-2">
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        {cs.result}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL-WIDTH DRAMATIC IMAGE BREAK ===== */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.img
          src={commandCenterImg}
          alt="Emergency operations command center"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy)/0.9)] via-[hsl(var(--navy)/0.6)] to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <SectionReveal direction="left">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Command. Coordinate.<br />
                  <span className="text-gradient">Control.</span>
                </h2>
                <p className="text-white/50 text-base mb-8 leading-relaxed">
                  Our emergency operations expertise ensures your team has the tools, protocols, and confidence to manage any crisis scenario effectively.
                </p>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all"
                >
                  View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES — Grid with icons ===== */}
      <section className="py-24 md:py-32 bg-navy">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Industries We Serve</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Trusted Across <span className="text-gradient">High-Risk Sectors</span>
              </h2>
              <p className="text-white/40">Deep sector knowledge and tailored frameworks for the world's most critical industries.</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((sector, i) => (
              <SectionReveal key={sector.name} delay={i * 0.06}>
                <Link
                  to="/industries"
                  className="group bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 md:p-8 text-center hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 block"
                >
                  <sector.icon className="w-8 h-8 text-white/30 group-hover:text-primary mx-auto mb-4 transition-colors duration-300" />
                  <span className="text-white/70 font-medium text-sm group-hover:text-white transition-colors">{sector.name}</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS — Dark cards with accent borders ===== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Client Impact</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                What Leaders Say
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="group relative bg-card border border-border rounded-xl overflow-hidden h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  {/* Top image strip */}
                  <div className="h-32 overflow-hidden">
                    <img src={t.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-card" />
                  </div>
                  <div className="p-8 pt-4">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Award key={j} className="w-4 h-4 text-warning" />
                      ))}
                    </div>
                    <blockquote className="text-foreground text-sm leading-relaxed mb-6 italic">
                      "{t.quote}"
                    </blockquote>
                    <div className="pt-4 border-t border-border">
                      <div className="text-foreground font-semibold text-sm">{t.author}</div>
                      <div className="text-muted-foreground text-xs">{t.org}</div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA — Dramatic gradient with imagery ===== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={wildfireImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.9)] via-[hsl(var(--purple)/0.85)] to-[hsl(var(--navy)/0.95)]" />
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(hsl(0 0% 100%/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%/0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative container mx-auto px-4 text-center">
          <SectionReveal direction="scale">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Build Unbreakable<br />Resilience
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Don't wait for a crisis to expose your vulnerabilities. Partner with Sandhurst to build a preparedness program that stands up to the real world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-warning hover:bg-warning-light text-warning-foreground px-10 py-4 rounded-lg font-semibold text-base transition-all hover:scale-105 hover:shadow-2xl hover:shadow-warning/30"
                >
                  Request Consultation
                </Link>
                <a
                  href="tel:+18005551234"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-lg font-semibold text-base transition-all"
                >
                  <Phone className="w-4 h-4" /> Call 1-800-555-1234
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
};

// Need Phone import
import { Phone } from "lucide-react";

export default Homepage;
