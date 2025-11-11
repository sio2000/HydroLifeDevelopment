import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Globe, Menu as MenuIcon, X } from 'lucide-react';
import { Menu } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const { t, i18n } = useTranslation('translation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'el' : 'en';
    
    // Clear localStorage and change language
    localStorage.removeItem('i18nextLng');
    i18n.changeLanguage(newLang).then(() => {
      // Force a re-render by saving the language
      localStorage.setItem('i18nextLng', newLang);
      // Reload the page to ensure all components update
      window.location.reload();
    });
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10 mr-2" />
            <Link to="/" className="text-xl sm:text-2xl font-bold text-sky-600">Hydrogen Construction and Solution Ltd</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sky-600">{t('nav.home')}</Link>
            
            <Menu as="div" className="relative">
              <Menu.Button className="text-gray-700 hover:text-sky-600">
                {t('nav.hydrogenLife')}
              </Menu.Button>
              <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/hydrogenated-water"
                        className={`${
                          active ? 'bg-sky-50 text-sky-600' : 'text-gray-700'
                        } block px-4 py-2 text-sm`}
                      >
                        {t('nav.hydrogenWater')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/humans"
                        className={`${
                          active ? 'bg-sky-50 text-sky-600' : 'text-gray-700'
                        } block px-4 py-2 text-sm`}
                      >
                        {t('nav.humans')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/animals"
                        className={`${
                          active ? 'bg-sky-50 text-sky-600' : 'text-gray-700'
                        } block px-4 py-2 text-sm`}
                      >
                        {t('nav.animals')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/plants"
                        className={`${
                          active ? 'bg-sky-50 text-sky-600' : 'text-gray-700'
                        } block px-4 py-2 text-sm`}
                      >
                        {t('nav.plants')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/industry"
                        className={`${
                          active ? 'bg-sky-50 text-sky-600' : 'text-gray-700'
                        } block px-4 py-2 text-sm`}
                      >
                        {t('nav.industry')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/horeca"
                        className={`${
                          active ? 'bg-sky-50 text-sky-600' : 'text-gray-700'
                        } block px-4 py-2 text-sm`}
                      >
                        {t('nav.horeca')}
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
            <Link to="/contact" className="text-gray-700 hover:text-sky-600">{t('nav.contact')}</Link>
            <a
              href="https://hardi-amc.com/hardi-amc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-sky-600"
            >
              {t('nav.hardiAmc')}
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={toggleLanguage}
              className="p-1.5 sm:p-2 text-gray-600 hover:text-sky-600 flex items-center space-x-1 border rounded-md"
              title={i18n.language === 'en' ? 'Αλλαγή σε Ελληνικά' : 'Switch to English'}
            >
              <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm font-medium">
                {i18n.language === 'en' ? (
                  <span className="flex items-center">
                    <span className="mr-1">🇬🇧</span>
                    <span>EN</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <span className="mr-1">🇬🇷</span>
                    <span>EL</span>
                  </span>
                )}
              </span>
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-gray-600 hover:text-sky-600"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/hydrogenated-water"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.hydrogenWater')}
            </Link>
            <Link
              to="/humans"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.humans')}
            </Link>
            <Link
              to="/animals"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.animals')}
            </Link>
            <Link
              to="/plants"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.plants')}
            </Link>
            <Link
              to="/industry"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.industry')}
            </Link>
            <Link
              to="/horeca"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.horeca')}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <a
              href="https://hardi-amc.com/hardi-amc/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.hardiAmc')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;