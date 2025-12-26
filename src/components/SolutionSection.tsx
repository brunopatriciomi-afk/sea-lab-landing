import React from 'react';
import { Layers, MonitorPlay, Zap } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="servicos" className="py-12 md:py-24 bg-sealab-900 relative">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Content */}
        <div className="w-full md:w-1/2">
            <span className="font-mono text-[10px] text-sealab-accent uppercase tracking-[0.2em] font-bold mb-4 block">
             </span>
            
            <h2 className="text-center font-display text-[clamp(3.5rem,6vw,6rem)] text-white mb-8 uppercase leading-[0.85]">
               Sua ilha de <br/> pós-produção <br/>
               <span className="text-sealab-accent">estratégica.</span>
            </h2>
            
            <p className="text-lg text-sealab-muted font-light leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                Cuidamos da <strong>edição</strong> e <strong>motion</strong> para você focar no que importa: criar e vender. 
                <br/><br/>
                Sem atrasos. Sem estresse. Sem vídeo genérico.
            </p>

            <ul className="space-y-4">
                {[
                    "Narrativa focada em retenção",
                    "Design sonoro imersivo",
                    "Entrega rigorosa no prazo"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-sealab-accent shadow-[0_0_8px_#FF8C00]"></div>
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        {/* Visual / Icons Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
            <div className="bg-[#0B141F] border border-white/5 p-8 rounded-xl flex items-start gap-6 hover:border-white/10 transition-colors">
                <MonitorPlay className="w-10 h-10 text-sealab-accent flex-shrink-0" />
                <div>
                    <h3 className="font-display text-2xl text-white uppercase mb-2">Edição de Elite</h3>
                    <p className="text-sm text-sealab-muted font-light">Transformamos brutos em peças cinematográficas com ritmo perfeito.</p>
                </div>
            </div>
            <div className="bg-[#0B141F] border border-white/5 p-8 rounded-xl flex items-start gap-6 hover:border-white/10 transition-colors">
                <Zap className="w-10 h-10 text-sealab-accent flex-shrink-0" />
                <div>
                    <h3 className="font-display text-2xl text-white uppercase mb-2">Motion Design</h3>
                    <p className="text-sm text-sealab-muted font-light">Elementos gráficos que explicam, retêm e vendem visualmente.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;