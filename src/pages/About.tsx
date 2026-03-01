import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Target, Users, Award, CheckCircle } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import aboutHero from "@/assets/about-hero.jpg";

const milestones = [
  { year: "2008", title: "Founded", desc: "Established by former emergency management directors with a mission to close preparedness gaps in critical industries." },
  { year: "2012", title: "Federal Contracts", desc: "Awarded first federal advisory contracts for emergency planning and simulation programs." },
  { year: "2016", title: "National Expansion", desc: "Expanded operations to serve clients across all 50 states with regional response teams." },
  { year: "2020", title: "Pandemic Response", desc: "Deployed crisis management teams to 40+ organizations during COVID-19, rewriting business continuity playbooks." },
  { year: "2024", title: "Global Advisory", desc: "Launched international advisory practice, supporting multi-national energy and transportation clients." },
];

const values = [
  { icon: Shield, title: "Uncompromising Standards", desc: "We hold ourselves to the same rigorous standards we set for our clients." },
  { icon: Target, title: "Precision Under Pressure", desc: "Our methodologies are battle-tested in real-world crisis scenarios." },
  { icon: Users, title: "People First", desc: "Every plan, every drill, every strategy — centered on protecting human life." },
  { icon: Award, title: "Continuous Improvement", desc: "We evolve our practices with emerging threats and lessons learned." },
];

const About = () => (
  <main>
    {/* Hero */}
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutHero} alt="Emergency response team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </div>
      <div className="relative container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">About Us</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Calm Leadership in Chaos
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            For over 15 years, Apex Readiness has partnered with the world's most critical industries to build emergency preparedness programs that save lives, protect assets, and ensure operational continuity.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.15em]">Our Mission</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Making Organizations Resilient Before Disaster Strikes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We exist because preparation saves lives. Our team of former emergency management directors, military strategists, and crisis response specialists bring decades of field experience to every engagement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We don't just write plans — we build organizational muscle memory. Through rigorous training, realistic simulations, and strategic consulting, we ensure your team knows exactly what to do when the unthinkable happens.
              </p>
              <div className="flex flex-col gap-3">
                {["Former FEMA & military leadership", "100+ successful crisis interventions", "Certified emergency management professionals", "24/7 rapid deployment capability"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-card border border-border rounded-lg p-6">
                  <v.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 md:py-28 bg-navy">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-[0.15em]">Our Journey</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">
              Milestones in Preparedness
            </h2>
          </div>
        </SectionReveal>

        <div className="max-w-3xl mx-auto">
          {milestones.map((m, i) => (
            <SectionReveal key={m.year} delay={i * 0.1}>
              <div className="flex gap-6 mb-10 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xs">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-white font-heading font-semibold text-lg mb-2">{m.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8">Join 250+ organizations that trust Apex Readiness to protect what matters most.</p>
          <Link to="/contact" className="inline-block bg-warning hover:bg-warning-light text-warning-foreground px-8 py-4 rounded font-semibold transition-all hover:scale-105">
            Start the Conversation
          </Link>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default About;
