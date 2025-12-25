import React from 'react';

const Founder: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-sealab-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="relative bg-[#080E16] border border-white/5 rounded-2xl p-8 md:p-16 overflow-hidden">
          {/* Background Texture inside card */}
          <div className="absolute inset-0 bg-radial-depth opacity-50"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="w-full md:w-5/12">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="founder.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-display text-white text-2xl uppercase">
                    Bruno Patricio
                  </p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-7/12 text-center md:text-left">
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6 uppercase">
                A Mente por trás do Lab.
              </h2>

              <p className="text-lg text-sealab-muted font-light leading-relaxed mb-8">
                "O mercado está cheio de editores que apertam botões. O que
                fazemos aqui é engenharia de atenção."
              </p>

              <p className="text-base text-white/80 font-light leading-relaxed">
                Especialista em transformar material bruto em autoridade visual
                através de edição dinâmica e motion design focado em retenção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
