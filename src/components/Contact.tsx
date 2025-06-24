
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos prontos para atender às suas necessidades em embalagens e impressão personalizada.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-green-500 p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" 
                alt="WhatsApp" 
                className="w-16 h-16"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Atendimento rápido e prático</p>
              <a 
                href="https://wa.me/5596991588629" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-blue-600 p-6 flex items-center justify-center">
              <Phone className="w-16 h-16 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4">Fale diretamente conosco</p>
              <a 
                href="tel:+5596991588629"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>(96) 99158-8629</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-800 p-6 flex items-center justify-center">
              <Mail className="w-16 h-16 text-yellow-400" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-600 mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:graficavieiraap@hotmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm"
              >
                <span>graficavieiraap@hotmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-gray-700" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h4>
                <p className="text-gray-600">Rua Professor Tostes, 2426 - Bairro Buritizal</p>
                <p className="text-gray-600">Macapá - AP</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociais</h4>
              
              <div className="space-y-3">
                <a 
                  href="https://www.instagram.com/vieira_sacolas?igsh=bnV4OG5iZHBsZnU1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <Instagram size={20} className="mr-3" />
                  <span>@vieira_sacolas</span>
                </a>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">Horário de Atendimento:</p>
                <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-700">Sábado: 8h às 12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
