import React from 'react';
import { Film, Zap, TrendingUp } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-12 md:py-24 bg-sealab-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-white mb-12 text-center uppercase leading-none">
            Resultados Comprovados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="group bg-[#080E16] border border-white/5 p-8 rounded-xl hover:border-sealab-accent/30 transition-all duration-300">
            <Film className="w-8 h-8 text-sealab-accent mb-6" />
            <h3 className="font-display text-2xl text-white mb-3 uppercase">Vídeos Profissionais</h3>
            <p className="text-sm text-sealab-muted font-light leading-relaxed">
              Acabamento de cinema que posiciona sua marca no topo do mercado.
            </p>
          </div>

          <div className="group bg-[#080E16] border border-white/5 p-8 rounded-xl hover:border-sealab-accent/30 transition-all duration-300">
            <Zap className="w-8 h-8 text-sealab-accent mb-6" />
            <h3 className="font-display text-2xl text-white mb-3 uppercase">Experiências Visuais</h3>
            <p className="text-sm text-sealab-muted font-light leading-relaxed">
              Motion Design que retém a atenção e explica sua oferta visualmente.
            </p>
          </div>

          <div className="group bg-[#080E16] border border-white/5 p-8 rounded-xl hover:border-sealab-accent/30 transition-all duration-300">
            <TrendingUp className="w-8 h-8 text-sealab-accent mb-6" />
            <h3 className="font-display text-2xl text-white mb-3 uppercase">Autoridade e Vendas</h3>
            <p className="text-sm text-sealab-muted font-light leading-relaxed">
              Vídeos estrategicamente desenhados para converter seguidores em clientes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;