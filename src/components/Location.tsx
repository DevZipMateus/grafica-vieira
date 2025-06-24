import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';
const Location = () => {
  return <section id="location" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-full text-sm mb-4">
            Localização
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Visite nossa loja
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos localizados no coração de Macapá, prontos para atender você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg animate-fade-in">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.463547281936!2d-51.08123962593757!3d0.04470699997689999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d61e7b7f7b7b7b7%3A0x7b7b7b7b7b7b7b7b!2sR.%20Prof.%20Tostes%2C%202426%20-%20Central%2C%20Macap%C3%A1%20-%20AP%2C%2068901-316!5e0!3m2!1spt-BR!2sbr!4v1703000000000!5m2!1spt-BR!2sbr" width="100%" height="400" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização da Gráfica Vieira"></iframe>
          </div>

          {/* Location Info */}
          <div className="space-y-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            {/* Address */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Endereço</h3>
                  <p className="text-gray-700 text-lg">Rua Professor Tostes, 2426</p>
                  <p className="text-gray-700">Bairro Central</p>
                  <p className="text-gray-700">Macapá - AP, 68901-316</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6">
              <div className="flex items-start">
                <div className="bg-yellow-600 p-3 rounded-full mr-4 flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Horário de Funcionamento</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Segunda - Sexta:</span>
                      <span className="font-medium text-gray-900">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Sábado:</span>
                      <span className="font-medium text-gray-900">08:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Domingo:</span>
                      <span className="font-medium text-gray-900">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default Location;