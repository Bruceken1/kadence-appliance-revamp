import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Target, Users, Award, CheckCircle, ArrowRight, Clock, Globe, Flame } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import CountUp from "@/components/CountUp";
import tornadoImg from "@/assets/tornado-debris.jpg";
import commandCenterImg from "@/assets/command-center.jpg";
import teamPlanningImg from "@/assets/team-planning.jpg";
import paulImg from "@/assets/paul-flavell.png";
import gridPatternImg from "@/assets/grid-pattern.jpg";
import wildfireImg from "@/assets/wildfire.jpg";

const milestones = [
  { year: "2008", title: "Founded", desc: "Established by former emergency management directors with a mission to close preparedness gaps in critical industries.", icon: Shield },
  { year: "2012", title: "Federal Contracts", desc: "Awarded first federal advisory contracts for emergency planning and simulation programs.", icon: Globe },
  { year: "2016", title: "National Expansion", desc: "Expanded operations to serve clients across all 50 states with regional response teams.", icon: Target },
  { year: "2020", title: "Pandemic Response", desc: "Deployed crisis management teams to 40+ organizations during COVID-19, rewriting business continuity playbooks.", icon: Flame },
  { year: "2024", title: "Global Advisory", desc: "Launched international advisory practice, supporting multi-national energy and transportation clients.", icon: Globe },
];

const values = [
  { icon: Shield, title: "Uncompromising Standards", desc: "We hold ourselves to the same rigorous standards we set for our clients." },
  { icon: Target, title: "Precision Under Pressure", desc: "Our methodologies are battle-tested in real-world crisis scenarios." },
  { icon: Users, title: "People First", desc: "Every plan, every drill, every strategy — centered on protecting human life." },
  { icon: Award, title: "Continuous Improvement", desc: "We evolve our practices with emerging threats and lessons learned." },
];

const About = () => (
  <main className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={tornadoImg}
          alt="Disaster response and recovery"
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
              <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium">About Sandhurst</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mb-6">
              Calm Leadership<br />
              <span className="text-gradient">In Chaos</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              For over 15 years, Sandhurst has partnered with the world's most critical industries to build emergency preparedness programs that save lives, protect assets, and ensure operational continuity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="relative bg-navy-light py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={gridPatternImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <CountUp end={15} suffix="+" label="Years of Experience" />
          <CountUp end={100} suffix="+" label="Crisis Interventions" />
          <CountUp end={250} suffix="+" label="Clients Served" />
          <CountUp end={50} suffix="" label="States Covered" />
        </div>
      </div>
    </section>

    {/* Leadership + Mission split */}
    <section className="relative">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[50vh] lg:h-auto overflow-hidden">
          <motion.img
            src={teamPlanningImg}
            alt="Team planning session"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent lg:hidden" />
        </div>

        <div className="flex items-center py-16 lg:py-28 px-6 lg:px-16 bg-background">
          <div className="max-w-xl">
            <SectionReveal>
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Leadership</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
                Led by Experience,<br />Driven by <span className="text-gradient">Purpose</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="flex items-center gap-6 mb-8 p-6 bg-card border border-border rounded-xl">
                <img src={paulImg} alt="Paul Flavell" className="w-20 h-20 rounded-xl object-cover border-2 border-primary/20 shadow-lg" />
                <div>
                  <h3 className="text-foreground font-heading text-lg font-semibold">Paul Flavell</h3>
                  <p className="text-primary text-sm font-medium mb-1">Founder & Principal Consultant</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">Decades of frontline emergency management experience across government, military, and private sectors.</p>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We don't just write plans — we build organizational muscle memory. Through rigorous training, realistic simulations, and strategic consulting, we ensure your team knows exactly what to do when the unthinkable happens.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {["Former FEMA & military leadership", "100+ successful crisis interventions", "Certified emergency management professionals", "24/7 rapid deployment capability"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Our Values</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              What Drives <span className="text-gradient">Everything We Do</span>
            </h2>
          </div>
        </SectionReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <SectionReveal key={v.title} delay={i * 0.1}>
              <div className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 h-full text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="relative py-24 md:py-32 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={gridPatternImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="relative container mx-auto px-4">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Our Journey</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Milestones in <span className="text-gradient">Preparedness</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="max-w-3xl mx-auto">
          {milestones.map((m, i) => (
            <SectionReveal key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex gap-6 md:gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm">
                    <m.icon className="w-6 h-6 text-primary" />
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">{m.year}</span>
                  <h3 className="text-white font-heading font-semibold text-xl mt-1 mb-3">{m.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={wildfireImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.9)] via-[hsl(var(--purple)/0.85)] to-[hsl(var(--navy)/0.95)]" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <SectionReveal direction="scale">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-10 text-lg">Join 250+ organizations that trust Sandhurst to protect what matters most.</p>
          <Link to="/contact" className="inline-block bg-warning hover:bg-warning-light text-warning-foreground px-10 py-4 rounded-lg font-semibold text-base transition-all hover:scale-105 hover:shadow-2xl hover:shadow-warning/30">
            Start the Conversation
          </Link>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default About;
