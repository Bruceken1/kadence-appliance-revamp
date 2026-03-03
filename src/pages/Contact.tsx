import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { useState } from "react";
import commandCenterImg from "@/assets/command-center.jpg";
import gridPatternImg from "@/assets/grid-pattern.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", org: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", org: "", phone: "", service: "", message: "" });
  };

  const inputClasses = "w-full bg-background border border-border rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300";

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={commandCenterImg}
            alt="Emergency operations center"
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
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium">Get In Touch</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
                Let's Build Your<br />
                <span className="text-gradient">Resilience</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl">
                Whether you're proactively strengthening your preparedness or facing an urgent situation, our team is ready to help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info side */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">Contact Information</h2>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: Phone, label: "24/7 Emergency Line", content: <a href="tel:+18005551234" className="text-primary font-bold text-xl hover:underline block mt-1">1-800-555-1234</a> },
                    { icon: Mail, label: "Email", content: <a href="mailto:info@sandhurst.com" className="text-muted-foreground hover:text-primary transition-colors block mt-1">info@sandhurst.com</a> },
                    { icon: MapPin, label: "Offices", content: <p className="text-muted-foreground text-sm mt-1">Houston, TX • Washington, D.C.</p> },
                    { icon: Clock, label: "Response Time", content: <p className="text-muted-foreground text-sm mt-1">24hrs for consultations • Immediate for active crisis</p> },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground uppercase tracking-wider">{item.label}</div>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="relative bg-navy rounded-xl p-8 overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img src={gridPatternImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-warning pulse-ring" />
                      <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider">Active Crisis?</h3>
                    </div>
                    <p className="text-white/50 text-sm mb-6 leading-relaxed">Our rapid response team is available around the clock for organizations facing active emergency situations.</p>
                    <a href="tel:+18005551234" className="inline-flex items-center gap-2 bg-warning text-warning-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-warning-light hover:shadow-lg hover:shadow-warning/20 transition-all">
                      <Phone className="w-4 h-4" /> Call Emergency Line
                    </a>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Form side */}
            <div className="lg:col-span-3">
              <SectionReveal delay={0.15}>
                <div className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-xl shadow-black/5">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Request a Consultation</h2>
                  <p className="text-muted-foreground text-sm mb-8">Tell us about your organization and needs. We'll respond within one business day.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Full Name *</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} placeholder="john@organization.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Organization</label>
                        <input type="text" value={formData.org} onChange={(e) => setFormData({ ...formData, org: e.target.value })} className={inputClasses} placeholder="Your company" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Phone</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClasses} placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Service of Interest</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={inputClasses}>
                        <option value="">Select a service</option>
                        <option>Risk Assessments & Audits</option>
                        <option>Emergency Planning</option>
                        <option>Training & Simulations</option>
                        <option>Crisis Management</option>
                        <option>Compliance Support</option>
                        <option>On-Site Response</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Message *</label>
                      <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} resize-none`} placeholder="Tell us about your needs, industry, and timeline..." />
                    </div>
                    <button
                      type="submit"
                      className="w-full group bg-warning hover:bg-warning-light text-warning-foreground py-4 rounded-lg font-semibold transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-warning/20 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Consultation Request
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  </form>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
