
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/3435a92c-6bca-4c98-808a-8e4acf4cb217.png" 
                alt="Gráfica Vieira" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Há mais de 15 anos oferecendo embalagens de qualidade superior, 
                especializados em sacolas plásticas e de papel para pequenos empreendedores.
              </p>
            </div>
            <p className="text-blue-400 font-semibold">
              "Transformando sonhos em realidade"
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={18} />
                <a href="https://wa.me/5596991588629" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  (96) 99158-8629
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={18} />
                <a href="https://wa.me/5596991588629" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  graficavieiraap@hotmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0 text-blue-400" size={18} />
                <span>Rua Professor Tostes, 2426 - Bairro Central, Macapá - AP, 68901-316</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links & Social */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#location" className="hover:text-blue-400 transition-colors duration-300 inline-block">Localização</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/vieira_sacolas?igsh=bnV4OG5iZHBsZnU1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-pink-600 transition-colors duration-300 p-2 rounded-full"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Gráfica Vieira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
