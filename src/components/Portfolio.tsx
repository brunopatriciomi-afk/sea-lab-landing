import React from 'react';

// AQUI VOCÊ COLOCA OS IDs DOS SEUS VÍDEOS DO YOUTUBE
// Exemplo: se o link é youtube.com/shorts/AbCdEfGhIjK, o ID é "AbCdEfGhIjK"
const projects = [
  { id: 1, title: 'Viral Reels', videoId: 'mpMKn3xWX3A' },
  { id: 2, title: 'Viral Reels', videoId: 'V0f4MWQNDkM' },
  { id: 3, title: 'Viral Reels', videoId: '3fygL1irMqM' },
  { id: 4, title: 'Viral Reels', videoId: '6LJwinYPGVE' },
  { id: 5, title: 'Viral Reels', videoId: 'vYYH3n2KX3o' },
  { id: 6, title: 'Viral Reels', videoId: 'PUur1S_eJMU' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-12 md:py-24 bg-sealab-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white mb-4 uppercase leading-none">
            O Laboratório em Ação
          </h2>
          <p className="text-sealab-muted max-w-2xl">
            Confira nossos últimos projetos em formato vertical de alta
            retenção.
          </p>
        </div>

        {/* Grid ajustado para vídeos verticais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-4 group">
              {/* Moldura do Vídeo (Estilo Celular) */}
              <div className="relative aspect-[9/16] w-full bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-sealab-accent/50 group-hover:shadow-[0_0_30px_rgba(255,140,0,0.15)]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${project.videoId}?rel=0&modestbranding=1&controls=1&playsinline=1`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Título abaixo do vídeo */}
              <div className="text-center">
                <h3 className="font-display text-xl text-white uppercase tracking-wide group-hover:text-sealab-accent transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
