import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-2">About TheWebTech</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-zinc-950 mb-6 mt-4">
              We are a modern web agency focused on growth.
            </h3>
            <div className="space-y-6 text-lg text-zinc-600">
              <p>
                TheWebTech is a modern web agency focused on helping businesses grow online through high-quality, conversion-focused websites. We believe your website should be your hardest working employee.
              </p>
              <p>
                We work with businesses of all sizes and provide affordable, high-value solutions. Unlike traditional agencies that trap you in long contracts or deliver poor communication, we operate with transparency, speed, and a direct focus on your ROI.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 mt-8 font-medium text-zinc-950 hover:text-brand-600 transition-colors uppercase tracking-wide text-sm">
              Work with us <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative shapes */}
              <div className="absolute inset-0 bg-zinc-100 rounded-full transform -translate-x-6 translate-y-6 -z-10"></div>
              <div className="h-full w-full bg-zinc-950 rounded-3xl overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-950 to-transparent">
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-zinc-300 font-medium">Dedication to client success</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
