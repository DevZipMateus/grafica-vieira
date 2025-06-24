
import React from 'react';
import { Clock, Award, Users, Target } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    {
      icon: Clock,
      number: "15+",
      label: "Anos de experiência",
      description: "Mais de uma década atendendo o mercado"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Clientes atendidos",
      description: "Pequenos e médios empreendedores"
    },
    {
      icon: Award,
      number: "100%",
      label: "Qualidade garantida",
      description: "Compromisso com a excelência"
    },
    {
      icon: Target,
      number: "24h",
      label: "Resposta rápida",
      description: "Atendimento ágil e personalizado"
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-block bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-full text-sm mb-6">
              Sobre a Gráfica Vieira
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mais de 15 anos <span className="text-blue-600">transformando sonhos em realidade</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A <strong className="text-gray-900">Gráfica Vieira</strong> é uma empresa consolidada no mercado de embalagens há mais de 15 anos, especializada principalmente em sacolas plásticas e de papel.
              </p>
              
              <p>
                Nossa missão é atender pequenos lojistas com tiragens que facilitam o orçamento do pequeno empreendedor, oferecendo produtos de alta qualidade que valorizam sua marca.
              </p>
              
              <p>
                Sabemos o quanto é importante para nossos clientes ter sua logomarca exposta em material de alta qualidade. Por isso, nossa maior preocupação sempre foi manter o padrão de excelência em todos os nossos produtos.
              </p>
              
              <p className="text-blue-600 font-semibold text-lg">
                "Transformando sonhos em realidade" - esse é nosso compromisso diário.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all inline-flex items-center gap-2 font-semibold shadow-lg transform hover:scale-105"
              >
                Conheça nossos serviços
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={28} />
                </div>
                
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                
                <div className="text-gray-900 font-semibold mb-1">
                  {stat.label}
                </div>
                
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-blue-600">Valores</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que nos guiam em cada projeto e nos conectam com nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-yellow-600" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Qualidade</h4>
              <p className="text-gray-600">
                Compromisso com a excelência em cada produto, garantindo materiais duráveis e acabamento impecável.
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-pink-600" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Parceria</h4>
              <p className="text-gray-600">
                Construímos relacionamentos duradouros, entendendo as necessidades específicas de cada cliente.
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Inovação</h4>
              <p className="text-gray-600">
                Sempre buscando novas soluções e tecnologias para oferecer o melhor resultado aos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
