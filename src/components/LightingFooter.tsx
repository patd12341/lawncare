import React from 'react';
import { Phone, Mail, MapPin, Clock, Lightbulb } from 'lucide-react';

const LightingFooter = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">Pat's Lighting</div>
                <div className="text-xs text-blue-200">Permanent Outdoor Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Professional permanent outdoor lighting installation. Transform your home with smart, app-controlled LED lighting that lasts year-round.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-200">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection('why-govee')}
                  className="hover:text-white transition-colors text-left"
                >
                  Permanent Outdoor Lighting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-govee')}
                  className="hover:text-white transition-colors text-left"
                >
                  Holiday Lighting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-govee')}
                  className="hover:text-white transition-colors text-left"
                >
                  Landscape Lighting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-govee')}
                  className="hover:text-white transition-colors text-left"
                >
                  Govee Installation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact-form')}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Designs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-200">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-400" />
                <a href="tel:7082742281" className="hover:text-white transition-colors">
                  (708) 274-2281
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@patwslawncare.com" className="hover:text-white transition-colors">
                  info@patwslawncare.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-400" />
                <span>New Lenox, IL & Surrounding Areas</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-400" />
                <div>
                  <div>Mon-Sat: 7:00 AM - 7:00 PM</div>
                  <div>Sun: By Appointment</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-200">Service Areas</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>New Lenox</li>
              <li>Mokena</li>
              <li>Frankfort</li>
              <li>Joliet</li>
              <li>Orland Park</li>
              <li>Tinley Park</li>
              <li>Homer Glen</li>
              <li>Lockport</li>
              <li>Romeoville</li>
              <li className="text-blue-300 font-medium">& All of Will County</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95326.72!2d-87.9676!3d41.5142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5fa5e0c36de7%3A0x9e0c1e0a7e5e2e7e!2sNew%20Lenox%2C%20IL!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Pat's Lighting Services. All rights reserved.</p>
            <p className="mt-2">
              Professional Govee & Permanent Outdoor Lighting Installation | Fully Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LightingFooter;
