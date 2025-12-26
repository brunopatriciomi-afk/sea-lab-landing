import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Como funcionam os planos mensais?",
    answer: "Nosso modelo é desenhado para garantir constância e escala. Ao fechar um pacote mensal, você não está apenas comprando vídeos, mas garantindo uma estrutura de pós-produção dedicada à sua marca. Isso oferece previsibilidade de custos e a tranquilidade de saber que seu calendário editorial será cumprido com alta qualidade."
  },
  {
    question: "Qual o prazo médio de entrega?",
    answer: "Entendemos que o timing é a moeda mais valiosa do digital. Por isso, estabelecemos um fluxo de trabalho contínuo personalizado para sua demanda. Nosso foco é criar uma 'gordura' de conteúdo para que você nunca fique sem postar, mantendo um ritmo ágil sem sacrificar a qualidade."
  },
  {
    question: "Os vídeos vão ter a minha identidade?", // MUDANÇA ESTRATÉGICA AQUI
    answer: "Com certeza. Não aplicamos uma 'fórmula pronta' para todos. Antes de começar, analisamos seu posicionamento e criamos uma assinatura visual única para seus vídeos. Unimos a nossa técnica de retenção e estética com a essência da sua marca, garantindo que seu conteúdo seja reconhecido instantaneamente pelo seu público."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-24 bg-sealab-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-white mb-10 md:mb-16 text-center uppercase leading-none">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border border-white/5 bg-[#080E16] rounded-lg overflow-hidden transition-all hover:border-white/10"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-display text-lg text-white group-hover:text-sealab-accent transition-colors uppercase tracking-wide">{item.question}</span>
                {openIndex === index ? <Minus className="text-sealab-accent w-4 h-4 flex-shrink-0" /> : <Plus className="text-sealab-muted group-hover:text-sealab-accent w-4 h-4 flex-shrink-0" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="p-6 pt-0 text-sm md:text-base font-light text-sealab-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;