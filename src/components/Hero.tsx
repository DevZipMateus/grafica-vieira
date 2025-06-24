
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/e394ea66-b3ce-4f9c-9912-07c72700d26d.png')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements with CMYK colors */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/3435a92c-6bca-4c98-808a-8e4acf4cb217.png" 
              alt="Gráfica Vieira - Muito mais qualidade!" 
              className="h-20 md:h-32 w-auto mx-auto mb-6"
            />
          </div>
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{animationDelay: '0.1s'}}>
            Embalagens de <span className="text-yellow-400">qualidade superior</span> há mais de 15 anos
          </h1>
          
          <p className="text-lg text-blue-200 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Transformando sonhos em realidade
          </p>
          
          <p className="text-md text-blue-100 mb-10 animate-fade-in max-w-3xl mx-auto" style={{animationDelay: '0.3s'}}>
            Especializados em sacolas plásticas e de papel, atendemos pequenos lojistas com tiragens que facilitam o pequeno empreendedor. Nossa experiência de mais de 15 anos nos consolidou no mercado, sempre priorizando a qualidade dos nossos produtos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a 
              href="https://wa.me/5596991588629" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-3 font-semibold shadow-lg transform hover:scale-105"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-6 h-6" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#services" className="bg-white hover:bg-gray-50 text-blue-900 px-8 py-4 rounded-lg transition-all font-semibold shadow-lg transform hover:scale-105">
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
