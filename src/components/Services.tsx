
import React from 'react';
import { ShoppingBag, Package, Palette, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: "Sacolas Plásticas",
      description: "Sacolas plásticas personalizadas de alta qualidade para diversos tipos de comércio. Resistentes e com excelente acabamento.",
      features: ["Diversos tamanhos", "Personalização completa", "Material resistente", "Cores variadas"]
    },
    {
      icon: Package,
      title: "Sacolas de Papel",
      description: "Sacolas de papel ecológicas e elegantes, perfeitas para lojas que valorizam a sustentabilidade.",
      features: ["Papel de qualidade", "Alças reforçadas", "Design personalizado", "Eco-friendly"]
    },
    {
      icon: Palette,
      title: "Impressão Personalizada",
      description: "Impressão de logomarcas e designs exclusivos com tecnologia de ponta e cores vibrantes.",
      features: ["Alta resolução", "Cores fiéis", "Durabilidade garantida", "Design exclusivo"]
    },
    {
      icon: Award,
      title: "Pequenas Tiragens",
      description: "Especializados em pequenas tiragens que facilitam o orçamento do pequeno empreendedor.",
      features: ["Quantidades flexíveis", "Preços acessíveis", "Qualidade garantida", "Entrega rápida"]
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas em <span className="text-blue-600">embalagens</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Há mais de 15 anos oferecendo produtos de qualidade superior para pequenos e médios empreendedores.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-blue-600" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar sua empresa com embalagens de qualidade superior.
            </p>
            <a 
              href="https://wa.me/5596991588629" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-all inline-flex items-center gap-3 font-semibold shadow-lg transform hover:scale-105"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
