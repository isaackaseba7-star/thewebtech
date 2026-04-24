import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Star, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'm interested in getting a website for my business.");
  const WHATSAPP_URL = `https://wa.me/0779053618?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/5 text-zinc-900 border border-zinc-950/10 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
            Premium Web Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-950 mb-6"
          >
            We Build Websites That <span className="text-zinc-500 italic block mt-2">Grow Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto"
          >
            We help businesses establish a powerful online presence with modern, high-performing websites that attract and convert customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-zinc-950 rounded-full hover:bg-zinc-800 transition-transform hover:scale-105 active:scale-95"
            >
              Get a Free Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-zinc-950 bg-white border border-zinc-200 shadow-sm rounded-full hover:bg-zinc-50 transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Trust Section incorporated into Hero bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 pt-10 border-t border-zinc-200 max-w-5xl mx-auto text-center"
        >
          <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-8">
            Trusted by growing businesses globally
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
            {[
              { icon: Star, name: "NexusCorp" },
              { icon: ShieldCheck, name: "Vertex Security" },
              { icon: Zap, name: "Flash Logistics" },
              { icon: Star, name: "Lumina Studio" },
            ].map((company, i) => (
              <div key={i} className="flex items-center gap-2 text-zinc-800 font-bold text-xl">
                <company.icon className="w-6 h-6" />
                {company.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
