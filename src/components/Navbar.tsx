import React, { useState, useEffect } from 'react';
import { Menu, X, Aperture } from 'lucide-react';
import Button from './Button';

// Definindo o tipo aqui para evitar erros de importação
interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Serviços', href: '#solucao' }, // Ajustei para #solucao que usamos no HTML
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-sealab-900/95 backdrop-blur-md border-white/5 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo com a fonte ANTON */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 border border-sealab-accent/30 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
            <Aperture className="w-5 h-5 text-sealab-accent" />
          </div>
          <div className="flex flex-col">
            {/* AQUI ESTÁ A MUDANÇA DA FONTE: font-anton */}
            <span className="font-anton text-2xl tracking-wide text-white leading-none">
              SEA LAB
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono font-medium text-sealab-muted hover:text-white uppercase tracking-widest transition-colors relative group"
            >
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-sealab-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
              {link.label}
            </a>
          ))}

          {/* Botão do WhatsApp */}
          <a
            href="https://wa.me/55000000000"
            target="_blank"
            className="py-2.5 px-6 text-xs bg-sealab-accent hover:bg-sealab-accentHover text-black font-bold uppercase tracking-wider rounded transition-all"
          >
            Consultoria Grátis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-sealab-900 border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl h-screen">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-medium text-white hover:text-sealab-accent uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5583987104919"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-center w-full py-4 bg-sealab-accent text-black font-bold uppercase tracking-wider text-sm mt-4 rounded"
          >
            Agendar consultoria
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
