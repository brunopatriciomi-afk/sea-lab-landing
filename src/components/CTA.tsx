import React from 'react';
import Button from './Button';

const CTA: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-32 relative bg-sealab-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="relative z-10">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white mb-8 md:mb-12 leading-none uppercase">
            Pronto para o próximo nível?
          </h2>
          
          <div className="flex justify-center">
             <Button icon className="w-full md:w-auto text-lg px-12 py-6">
                👉 Agendar consultoria grátis
             </Button>
          </div>
          
          <p className="text-sealab-muted text-[10px] uppercase tracking-[0.25em] mt-8 opacity-60">
             Vagas limitadas • Atendimento Online
          </p>
        </div>

      </div>
    </section>
  );
};

export default CTA;