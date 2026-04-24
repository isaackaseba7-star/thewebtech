import { Code2, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-zinc-800 pb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-zinc-950 group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                TheWebTech<span className="text-brand-500">.</span>
              </span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              We help businesses establish a powerful online presence with modern, high-performing websites.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-zinc-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#portfolio" className="text-zinc-400 hover:text-white transition-colors text-sm">Portfolio</a></li>
              <li><a href="#pricing" className="text-zinc-400 hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm">About Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>0779053618</li>
              <li>isaackaseba7@gmail.com</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>&copy; {currentYear} TheWebTech Agency. All rights reserved.</p>
          <p>Designed with absolute precision.</p>
        </div>
      </div>
    </footer>
  );
}
