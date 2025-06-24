
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-3'}`}>
      {/* Top Bar with Contact Info and Social Media */}
      <div className="container-custom px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-3 md:mb-2">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row md:space-x-6 text-xs sm:text-sm text-gray-600 mb-2 md:mb-0 items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <a href="mailto:graficavieiraap@hotmail.com" className="flex items-center hover:text-blue-600 transition-colors duration-300">
              <Mail size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
              <span className="truncate">graficavieiraap@hotmail.com</span>
            </a>
            <a href="https://wa.me/5596991588629" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
              <Phone size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
              (96) 99158-8629
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/vieira_sacolas?igsh=bnV4OG5iZHBsZnU1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors duration-300">
              <Instagram size={16} />
            </a>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3435a92c-6bca-4c98-808a-8e4acf4cb217.png" 
              alt="Gráfica Vieira - Muito mais qualidade!" 
              className={`${isMobile ? 'h-10' : 'h-12 md:h-14 lg:h-16'} w-auto transition-all duration-300 transform hover:scale-[1.02]`} 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            <Link to="/" className="nav-link text-sm lg:text-base">Início</Link>
            <a href="#about" className="nav-link text-sm lg:text-base">Sobre Nós</a>
            <a href="#services" className="nav-link text-sm lg:text-base">Serviços</a>
            <a href="#location" className="nav-link text-sm lg:text-base">Localização</a>
            <a href="#contact" className="nav-link text-sm lg:text-base">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-4 px-4 flex flex-col space-y-2 border-t mt-3">
          <Link to="/" className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base" onClick={toggleMobileMenu}>Início</Link>
          <a href="#about" className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base" onClick={toggleMobileMenu}>Sobre Nós</a>
          <a href="#services" className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base" onClick={toggleMobileMenu}>Serviços</a>
          <a href="#location" className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base" onClick={toggleMobileMenu}>Localização</a>
          <a href="#contact" className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base" onClick={toggleMobileMenu}>Contato</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
