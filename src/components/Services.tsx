import { motion } from 'motion/react';
import { 
  Laptop, Briefcase, LayoutTemplate, ShoppingBag, 
  RefreshCcw, PenTool, LineChart, Wrench, 
  Zap, Smartphone, Server, MapPin, Target 
} from 'lucide-react';

const services = [
  { icon: Laptop, title: 'Website Design & Development', description: 'Custom-coded or platform-based websites tailored to your unique brand needs.' },
  { icon: Briefcase, title: 'Business Websites', description: 'Professional sites to establish trust, showcase services, and capture leads.' },
  { icon: LayoutTemplate, title: 'Landing Pages', description: 'High-converting, single-page designs optimized for ad campaigns and marketing.' },
  { icon: ShoppingBag, title: 'E-commerce Websites', description: 'Robust online stores equipped to sell products efficiently and securely.' },
  { icon: RefreshCcw, title: 'Website Redesign', description: 'Modernize outdated websites with fresh layouts, better user experience, and speed.' },
  { icon: PenTool, title: 'UI/UX Design', description: 'User-centric interfaces that look beautiful and are intuitively easy to navigate.' },
  { icon: LineChart, title: 'SEO Optimization', description: 'On-page and technical SEO to rank higher on Google and drive organic traffic.' },
  { icon: Wrench, title: 'Website Maintenance & Support', description: 'Ongoing updates, security checks, and backups to keep your site healthy.' },
  { icon: Zap, title: 'Speed Optimization', description: 'Performance tuning so your website loads instantly, preventing bounce rates.' },
  { icon: Smartphone, title: 'Mobile Optimization', description: 'Ensuring your website looks and works perfectly on every mobile device.' },
  { icon: Server, title: 'Domain & Hosting Setup', description: 'Hassle-free configuration of your web addresses and reliable server environments.' },
  { icon: MapPin, title: 'Google Business Profile Setup', description: 'Local SEO setup so customers can easily find your physical business online.' },
  { icon: Target, title: 'Conversion Optimization', description: 'Data-driven tweaks to convert more of your existing traffic into paying clients.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-950 mb-6">Everything you need to succeed online</h3>
          <p className="text-lg text-zinc-600">We offer a complete suite of web services designed to elevate your brand, attract new customers, and scale your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-zinc-900 border border-zinc-200 mb-6 group-hover:-translate-y-1 transition-transform shadow-sm">
                <service.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-bold text-zinc-950 mb-3">{service.title}</h4>
              <p className="text-zinc-600 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
