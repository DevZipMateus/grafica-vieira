import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 px-4">
            Entre em contato conosco
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-4">
            Estamos prontos para atender às suas necessidades em embalagens e impressão personalizada.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto px-4 justify-center">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in flex-1 max-w-sm">
            <div className="bg-green-500 p-4 sm:p-6 flex items-center justify-center">
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Atendimento rápido e prático</p>
              <a href="https://wa.me/5596991588629" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium w-full">
                <span className="text-sm sm:text-base">Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in flex-1 max-w-sm" style={{
          animationDelay: '0.1s'
        }}>
            <div className="bg-blue-500 p-4 sm:p-6 flex items-center justify-center">
              <Phone className="text-white w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Ligue para nós</p>
              <a href="https://wa.me/5596991588629" className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium w-full">
                <span className="text-sm sm:text-base">Ligar</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-8 sm:mt-12 bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-gray-700" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h4>
                <p className="text-gray-600 text-sm sm:text-base">Rua Professor Tostes, 2426 - Bairro Central</p>
                <p className="text-gray-600 text-sm sm:text-base">Macapá - AP, 68901-316</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociais</h4>
              
              <div className="space-y-3">
                <a href="https://www.instagram.com/vieira_sacolas?igsh=bnV4OG5iZHBsZnU1" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-pink-600 transition-colors">
                  <Instagram size={20} className="mr-3" />
                  <span className="text-sm sm:text-base">@vieira_sacolas</span>
                </a>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">Horário de Atendimento:</p>
                <p className="text-gray-700 text-sm sm:text-base">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-700 text-sm sm:text-base">Sábado: 8h às 12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;