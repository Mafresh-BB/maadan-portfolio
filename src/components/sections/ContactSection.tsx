import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/content';
import { ArrowUpRight, Send, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const links = [
    { label: "Email", url: `mailto:${personalInfo.email}` },
    { label: "GitHub", url: personalInfo.github },
    { label: "LinkedIn", url: personalInfo.linkedin },
    { label: "Twitter / X", url: personalInfo.twitter },
    { label: "Résumé", url: personalInfo.resumePdf }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      // Replace these placeholders with your actual EmailJS IDs
      // You can also use environment variables like import.meta.env.VITE_EMAILJS_SERVICE_ID
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Content & Links */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex flex-col"
          >
            <span className="font-mono text-sm tracking-widest text-text-secondary uppercase mb-8">
              03 // Contact
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter text-balance leading-[1.1] mb-8 uppercase">
              Let's build <br /> something <br /> <span className="text-text-secondary">exceptional.</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-md mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {links.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-border/50 hover:border-accent/50 bg-accent/5 transition-all hover:-translate-y-1"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-text-secondary group-hover:text-text-primary transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>

            <p className="font-mono text-sm text-text-secondary/70 italic max-w-md">
              "{personalInfo.personality}"
            </p>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-text-secondary ml-1">Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-accent/5 border border-border/50 rounded-xl px-5 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-text-secondary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-text-secondary ml-1">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-accent/5 border border-border/50 rounded-xl px-5 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-text-secondary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-widest text-text-secondary ml-1">Subject</label>
                <input
                  required
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help?"
                  className="w-full bg-accent/5 border border-border/50 rounded-xl px-5 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-text-secondary/30"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-text-secondary ml-1">Message</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full bg-accent/5 border border-border/50 rounded-xl px-5 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-text-secondary/30 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full relative overflow-hidden group py-5 rounded-xl font-medium text-lg transition-all active:scale-[0.98] ${
                  status === 'success' 
                  ? 'bg-green-500/20 text-green-500 border border-green-500/50' 
                  : status === 'error'
                  ? 'bg-red-500/20 text-red-500 border border-red-500/50'
                  : 'bg-text-primary text-background'
                }`}
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span 
                      key="idle" 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </motion.span>
                  )}
                  {status === 'sending' && (
                    <motion.span 
                      key="sending"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2"
                    >
                      Sending... <Loader2 className="w-4 h-4 animate-spin" />
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span 
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      Message Sent! <CheckCircle2 className="w-5 h-5" />
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span 
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      Something went wrong. Try again?
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
