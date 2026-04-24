import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, MapPin, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'm interested in getting a website for my business.");
  const WHATSAPP_URL = `https://wa.me/0779053618?text=${WHATSAPP_MESSAGE}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', business: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-zinc-950 mb-6">Let's build something amazing together.</h3>
            <p className="text-lg text-zinc-600 mb-12">
              Ready to grow your online presence? Book a free consultation or drop us a message. We usually reply within 24 hours.
            </p>

            <div className="space-y-8">
              <a href="tel:0779053618" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 mb-1">Call Us</p>
                  <p className="text-xl font-bold text-zinc-950">0779053618</p>
                </div>
              </a>
              
              <a href="mailto:isaackaseba7@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 mb-1">Email Us</p>
                  <p className="text-xl font-bold text-zinc-950">isaackaseba7@gmail.com</p>
                </div>
              </a>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:bg-green-600 transition-colors shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 mb-1">WhatsApp</p>
                  <p className="text-xl font-bold text-zinc-950 tracking-tight">Chat instantly with our team</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50"
          >
            <h4 className="text-2xl font-bold text-zinc-950 mb-6">Book a Consultation</h4>
            
            {isSubmitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-2xl border border-green-200 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h5 className="font-bold mb-2">Request Sent Successfully!</h5>
                <p className="text-green-700">We'll be in touch with you shortly to schedule your demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-zinc-700 mb-2">Business Name</label>
                  <input
                    type="text"
                    id="business"
                    required
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all"
                    placeholder="0779053618"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-base font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    'Book Consultation'
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
