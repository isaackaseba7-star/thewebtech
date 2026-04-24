import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter Website',
      description: 'Perfect for small businesses establishing their first online footprint.',
      price: 'Starting from',
      features: [
        'Custom 1-3 Page Website',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        '1 Revision Round',
      ],
      highlight: false,
    },
    {
      name: 'Business Website',
      description: 'Ideal for growing companies needing a strong, professional presence.',
      price: 'Custom Pricing',
      features: [
        'Up to 10 Pages',
        'Premium UI/UX Design',
        'Advanced SEO Setup',
        'CMS Integration (Blog/Content)',
        'Speed & Performance Tuning',
        'Google Business Profile Setup',
      ],
      highlight: true,
    },
    {
      name: 'Premium Website',
      description: 'Complex platforms, e-commerce, or enterprise-grade scaling.',
      price: 'Custom Pricing',
      features: [
        'Unlimited Pages/Products',
        'Full E-commerce Setup',
        'Custom Functionality',
        'Conversion Optimization',
        'Priority Maintenance',
        'Dedicated Support',
      ],
      highlight: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-2">Simple Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-950 mb-6">Invest in a website that pays for itself</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 lg:p-10 flex flex-col ${
                plan.highlight 
                  ? 'bg-zinc-950 text-white shadow-2xl scale-100 md:scale-105 z-10 relative border border-zinc-800' 
                  : 'bg-white text-zinc-900 border border-zinc-200'
              }`}
            >
              <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
              <p className={`mb-8 ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {plan.description}
              </p>
              
              <div className="mb-8 p-4 rounded-xl bg-zinc-100/10 border border-zinc-500/20 backdrop-blur-sm">
                <span className={`text-sm font-semibold tracking-wide uppercase ${plan.highlight ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  {plan.price}
                </span>
                <div className="text-3xl font-bold mt-1">Let's talk</div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-brand-400' : 'text-brand-600'}`} />
                    <span className={plan.highlight ? 'text-zinc-300' : 'text-zinc-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-4 px-6 rounded-full font-bold text-center transition-all ${
                  plan.highlight 
                    ? 'bg-white text-zinc-950 hover:bg-zinc-100' 
                    : 'bg-zinc-100 text-zinc-950 hover:bg-zinc-200'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
