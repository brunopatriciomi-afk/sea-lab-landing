import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-[#03060a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex flex-col gap-2 text-center md:text-left">
                <span className="font-display font-bold text-3xl text-white tracking-wide">SEAROOM</span>
                <p className="text-sealab-muted text-xs font-light tracking-widest uppercase">
                    Pós-ProduçãO
                </p>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sealab-muted text-xs font-mono uppercase tracking-wider opacity-50">
            © {new Date().getFullYear()} SeaRoom.
            </p>

            <div className="flex gap-8">
            {/* <a href="#" className="text-sealab-muted hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Instagram</a> */}
            {/* <a href="#" className="text-sealab-muted hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">WhatsApp</a> */}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;