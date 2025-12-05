import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Lightbulb } from 'lucide-react';

const LightingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/light-installation" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Pat's Lighting</div>
                <div className="text-xs text-gray-600">Permanent Outdoor Solutions</div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Lighting Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100"
                >
                  <button
                    onClick={() => scrollToSection('why-govee')}
                    className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Permanent Govee Lights
                  </button>
                  <button
                    onClick={() => scrollToSection('why-govee')}
                    className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Holiday Lighting
                  </button>
                  <button
                    onClick={() => scrollToSection('why-govee')}
                    className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Landscape Lighting
                  </button>
                  <button
                    onClick={() => scrollToSection('why-govee')}
                    className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Custom Designs
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact-form')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
            <a
              href="tel:7082742281"
              className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              (708) 274-2281
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <div>
                <div className="font-semibold text-gray-900 mb-2">Lighting Services</div>
                <button
                  onClick={() => scrollToSection('why-govee')}
                  className="block pl-4 py-2 text-gray-600 hover:text-blue-600"
                >
                  Permanent Govee Lights
                </button>
                <button
                  onClick={() => scrollToSection('why-govee')}
                  className="block pl-4 py-2 text-gray-600 hover:text-blue-600"
                >
                  Holiday Lighting
                </button>
                <button
                  onClick={() => scrollToSection('why-govee')}
                  className="block pl-4 py-2 text-gray-600 hover:text-blue-600"
                >
                  Landscape Lighting
                </button>
                <button
                  onClick={() => scrollToSection('why-govee')}
                  className="block pl-4 py-2 text-gray-600 hover:text-blue-600"
                >
                  Custom Designs
                </button>
              </div>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </button>
              <a
                href="tel:7082742281"
                className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                (708) 274-2281
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LightingHeader;
