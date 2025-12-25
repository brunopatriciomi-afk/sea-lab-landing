import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const quotes = [
    "A qualidade visual que a Sea Lab trouxe para o meu canal é absurda.",
    "Nunca mais me preocupei com prazos. Eles entregam como relógio.",
    "O Motion Design transformou meus vídeos de vendas.",
    "Atendimento impecável e um olhar artístico diferenciado."
  ];

  return (
    <section className="py-12 md:py-24 relative bg-sealab-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-display text-center text-[clamp(2rem,5vw,3.5rem)] text-white mb-16 uppercase leading-none">
          Quem faz não volta atrás.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote, idx) => (
            <div key={idx} className="bg-[#080E16] p-8 rounded-xl border border-white/5 flex flex-col gap-6 hover:border-white/10 transition-colors">
              <Quote className="w-6 h-6 text-sealab-accent opacity-60" />
              <p className="text-sm font-light leading-relaxed text-gray-300 italic">"{quote}"</p>
              <div className="mt-auto pt-4 flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-gray-800" />
                 <div className="h-1.5 w-16 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;