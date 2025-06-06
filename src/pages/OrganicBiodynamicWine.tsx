import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

interface Benefit {
  number: string;
  title: string;
  description: string;
}

const OrganicBiodynamicWine = () => {
  const { t, i18n } = useTranslation();
  const benefits: string[] = t('productCategories.organicWine.biodynamicSection.benefits', { returnObjects: true }) as string[];
  const timelineBenefits = t('productCategories.organicWine.benefitsSection.benefits', { returnObjects: true }) as Benefit[];

  const handleLanguageChange = () => {
    const newLang = i18n.language === 'en' ? 'el' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop)`,
            filter: 'brightness(0.7)'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium tracking-wider mb-4">{t('productCategories.organicWine.subtitle')}</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">{t('productCategories.organicWine.title')}</h1>
        </div>
      </div>

      {/* Organic & Biodynamic Wines Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2B5173]">
            {t('productCategories.organicWine.section.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                {t('productCategories.organicWine.section.description')}
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                {t('productCategories.organicWine.section.trend')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('productCategories.organicWine.section.biodynamic')}
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/assets/images/wines.png"
                alt={t('productCategories.organicWine.section.imageAlt')}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biodynamic Winemaking Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <img
                src="/assets/images/staf.png"
                alt={t('productCategories.organicWine.biodynamicSection.imageAlt')}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B5173]">
                {t('productCategories.organicWine.biodynamicSection.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('productCategories.organicWine.biodynamicSection.description')}
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-700">
                    <svg className="h-5 w-5 text-[#D89084]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                      <path d="M8 12l3 3 5-5" strokeWidth="2"/>
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 leading-relaxed italic">
                {t('productCategories.organicWine.biodynamicSection.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-[#2B5173]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('organicFarming.title')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            {t('organicFarming.description')}
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-[#D89084] mb-2">12+</div>
              <p className="text-gray-600">{t('organicFarming.experience.years')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-[#D89084] mb-2">100%</div>
              <p className="text-gray-600">{t('organicFarming.respect.title')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-[#D89084] mb-2">Bio</div>
              <p className="text-gray-600">{t('organicFarming.respect.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="bg-[#FDF7F7] py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop" 
                alt="Wine Barrels"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=800&auto=format&fit=crop" 
                alt="Wine Grapes"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=800&auto=format&fit=crop" 
                alt="Wine Bottles"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Timeline Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#E5B3B3]">
            {t('productCategories.organicWine.benefitsSection.title')}
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-[#E5B3B3] transform -translate-x-1/2 hidden md:block" />

            {/* Benefits */}
            <div className="space-y-24">
              {timelineBenefits.map((benefit, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}>
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div className="relative">
                      <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden border-4 border-[#E5B3B3]">
                        <img
                          src={`https://images.unsplash.com/photo-${index === 0 ? '1510812431401-41d2bd2722f3' : index === 1 ? '1506377247377-2a5b3b417ebb' : '1498429089284-41f8cf3ffd39'}?auto=format&fit=crop&w=800&q=80`}
                          alt={benefit.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#E5B3B3] flex items-center justify-center text-white text-2xl font-bold">
                        {benefit.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#2B5173]">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrganicBiodynamicWine; 