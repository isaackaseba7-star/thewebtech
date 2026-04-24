import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Aura Fintech',
    category: 'Corporate Website',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Luxe Furniture',
    category: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Kinex Logistics',
    category: 'Business Landing Page',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Zenith Health',
    category: 'Medical Clinic Web Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Elevate SaaS',
    category: 'Software Marketing Site',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2574&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Nomad Coffee',
    category: 'Local Business Profile',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-2">Our Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-zinc-950">Recent projects we've launched</h3>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-medium text-zinc-950 hover:text-brand-600 transition-colors">
            Start your project today <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/3] w-full bg-zinc-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white/80 text-sm font-medium mb-1">{project.category}</p>
                <div className="flex items-center justify-between pointer-events-none">
                  <h4 className="text-2xl font-bold text-white shadow-sm">{project.title}</h4>
                  <div className="w-10 h-10 rounded-full bg-white text-zinc-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
