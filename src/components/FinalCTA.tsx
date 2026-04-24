import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'm interested in getting a website for my business.");
  const WHATSAPP_URL = `https://wa.me/0779053618?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="py-24 bg-zinc-950 text-white border-b border-zinc-900 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Grow Your Business Online?</h2>
          <p className="text-xl text-zinc-400 mb-12">
            Stop losing customers to your competitors. Get a high-converting website today and watch your business scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-transform hover:scale-105"
            >
              Get Free Demo
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-transparent border border-zinc-700 rounded-full hover:bg-zinc-800 transition-transform hover:scale-105"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-green-500 rounded-full hover:bg-green-600 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
