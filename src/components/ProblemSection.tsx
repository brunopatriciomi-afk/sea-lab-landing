import React from 'react';
import { Ghost, Clock, TrendingDown, EyeOff } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section id="sobre" className="py-12 md:py-24 bg-sealab-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
             <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] text-white leading-none uppercase mb-6">
              O problema não é você.<br/>
              <span className="text-sealab-muted">É como você é visto.</span>
            </h2>
            <p className="text-sealab-muted font-light text-lg">
                Seu conteúdo é bom. Mas a embalagem amadora está matando sua autoridade antes mesmo de você falar.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
                icon: EyeOff, 
                title: "Amadorismo", 
                desc: "Meus vídeos parecem feitos em casa e não passam credibilidade." 
            },
            { 
                icon: TrendingDown, 
                title: "Ninguém Engaja", 
                desc: "As pessoas pulam nos primeiros 3 segundos. A retenção é nula." 
            },
            { 
                icon: Ghost, 
                title: "Sem Profissionalismo", 
                desc: "A edição atual não reflete o valor do ticket que eu cobro." 
            },
            { 
                icon: Clock, 
                title: "Atrasos Constantes", 
                desc: "Editores que somem e atrapalham todo o meu cronograma de posts." 
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#080E16] p-8 rounded-xl border border-white/5 hover:border-sealab-accent/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sealab-accent group-hover:text-black text-white transition-colors">
                 <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl text-white uppercase mb-4 tracking-wide">{item.title}</h3>
              <p className="text-sm text-sealab-muted font-light leading-relaxed">
                "{item.desc}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;