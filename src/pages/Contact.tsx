import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { useState } from "react";
import wildfireImg from "@/assets/wildfire.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", org: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", org: "", phone: "", service: "", message: "" });
  };

  return (
    <main>
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={wildfireImg} alt="Emergency response" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Contact Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Let's Build Your Resilience
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you're proactively strengthening your preparedness or facing an urgent situation, our team is ready.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <SectionReveal>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
                <div className="space-y-6 mb-10">
                  {[
                    { icon: Phone, label: "24/7 Emergency Line", content: <a href="tel:+18005551234" className="text-primary font-semibold text-lg hover:underline">1-800-555-1234</a> },
                    { icon: Mail, label: "Email", content: <a href="mailto:info@sandhurst.com" className="text-muted-foreground hover:text-primary transition-colors">info@sandhurst.com</a> },
                    { icon: MapPin, label: "Offices", content: <p className="text-muted-foreground text-sm">Houston, TX • Washington, D.C.</p> },
                    { icon: Clock, label: "Response Time", content: <p className="text-muted-foreground text-sm">Within 24 hours for consultations<br />Immediate for active crisis support</p> },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{item.label}</div>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-navy rounded-lg p-6">
                  <h3 className="text-white font-heading font-semibold mb-2">Active Crisis?</h3>
                  <p className="text-white/60 text-sm mb-4">Our rapid response team is available around the clock for organizations facing active emergency situations.</p>
                  <a href="tel:+18005551234" className="inline-block bg-warning text-warning-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-warning-light transition-all">
                    Call Emergency Line
                  </a>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-3">
              <SectionReveal delay={0.2}>
                <div className="bg-card border border-border rounded-lg p-8 md:p-10">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Request a Consultation</h2>
                  <p className="text-muted-foreground text-sm mb-8">Tell us about your organization and needs. We'll respond within one business day.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="john@organization.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Organization</label>
                        <input type="text" value={formData.org} onChange={(e) => setFormData({ ...formData, org: e.target.value })} className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="Your company" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Service of Interest</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition">
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
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none" placeholder="Tell us about your needs, industry, and timeline..." />
                    </div>
                    <button type="submit" className="w-full bg-warning hover:bg-warning-light text-warning-foreground py-4 rounded font-semibold transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-warning/20 flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Submit Consultation Request
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
