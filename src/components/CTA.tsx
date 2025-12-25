import React from 'react';
// import Button from './Button'; // Não precisamos mais importar o Button

const CTA: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-32 relative bg-sealab-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="relative z-10">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white mb-8 md:mb-12 leading-none uppercase">
            Pronto para o próximo nível?
          </h2>
          
          <div className="flex justify-center">
             {/* Link para o WhatsApp com estilo de botão */}
             <a 
                href="https://wa.me/5583987104919"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto text-lg px-12 py-6 bg-sealab-accent hover:bg-sealab-accentHover text-black font-bold uppercase tracking-wider rounded shadow-[0_0_20px_rgba(255,140,0,0.3)] hover:shadow-[0_0_40px_rgba(255,140,0,0.6)] transition-all transform hover:scale-105"
             >
                👉 Agendar consultoria grátis
             </a>
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