import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'm interested in getting a website for my business.");
  const WHATSAPP_URL = `https://wa.me/0779053618?text=${WHATSAPP_MESSAGE}`;

  useEffect(() => {
    // Show after scrolling down 300px to not clash with hero loaded state immediately
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/40 transition-all group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Tooltip */}
        <span className="absolute -top-12 right-0 bg-zinc-950 text-white text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:-bottom-2 after:right-5 after:border-8 after:border-transparent after:border-t-zinc-950">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
