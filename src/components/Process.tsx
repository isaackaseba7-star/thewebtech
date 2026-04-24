import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'We create a free demo for your business',
      description: 'We listen to your needs and build a custom, functional demo of your new website—completely free of charge and with no obligations.'
    },
    {
      number: '02',
      title: 'You review & request changes',
      description: 'You get to see exactly how your site will look and feel. We refine the design and functionality until it perfectly matches your vision.'
    },
    {
      number: '03',
      title: 'You only pay when you are satisfied',
      description: 'Once you approve the final product, we launch it. You don’t pay a single cent until you are 100% happy with your new website.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-2">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Zero Risk. Total Transparency.</h3>
          <p className="text-lg text-zinc-400">We challenge the traditional agency model. See your website before you commit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-px bg-zinc-800 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative text-center md:text-left"
            >
              <div className="w-24 h-24 mx-auto md:mx-0 bg-zinc-900 border-2 border-zinc-800 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-xl relative z-10">
                {step.number}
              </div>
              <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
              <p className="text-zinc-400 leading-relaxed text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
