import React from 'react';
// Não precisamos mais importar o Button pois vamos usar um link direto
// import Button from './Button'; 

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-12 md:pb-24 flex flex-col items-center justify-center overflow-hidden bg-sealab-900">
      
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 z-0 bg-radial-depth pointer-events-none"></div>
      
      {/* Subtle Video Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-sealab-accent/10 blur-[150px] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-8 md:gap-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
           <span className="w-2 h-2 rounded-full bg-sealab-accent animate-pulse shadow-[0_0_10px_#FF8C00]"></span>
           <span className="font-sans text-[11px] font-bold text-white/80 uppercase tracking-[0.2em]">Sea Lab Post-Production</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(2.2rem,8vw,5.5rem)] text-white uppercase tracking-tight leading-[0.95] md:leading-[0.9]">
          Vídeos que fazem sua <br className="hidden md:block" /> audiência
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white mx-3">parar de rolar</span>
          <br/>e começar a comprar.
        </h1>
        
        {/* Subheadline */}
        <p className="text-base md:text-xl text-sealab-muted max-w-2xl font-light leading-relaxed tracking-wide">
          Transformamos seus vídeos em conteúdo profissional que gera <strong className="text-white font-semibold">engajamento</strong>, <strong className="text-white font-semibold">autoridade</strong> e <strong className="text-white font-semibold">vendas</strong> — sem atrasos e sem dor de cabeça.
        </p>

        {/* CTA - AGORA COM LINK PARA O WHATSAPP */}
        <div className="mt-6 animate-fade-in-up">
          <a 
            href="https://wa.me/5583987104919"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-4 px-8 bg-sealab-accent hover:bg-sealab-accentHover text-black font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(255,140,0,0.3)] hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] transform hover:scale-105"
          >
            👉 Agendar consultoria grátis
          </a>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative w-full max-w-5xl group perspective-1000">
             <div className="absolute inset-0 bg-sealab-accent/20 blur-[100px] -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-1000"></div>
             <img 
                src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Timeline de Edição" 
                className="w-full h-auto rounded-lg border border-white/10 shadow-2xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-sealab-900 via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;