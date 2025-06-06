import React from 'react';
import { useTranslation } from 'react-i18next';
import backgroundFon from '../../assets/images/fon.png';

const BiodynamicOilPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundFon})`
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('biodynamicOil.hero.title')}
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wider max-w-3xl">
            {t('biodynamicOil.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Cultivation Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-playfair text-gray-900">
                {t('biodynamicOil.cultivation.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('biodynamicOil.cultivation.description')}
              </p>
              <p className="text-[#D89084] italic">
                {t('biodynamicOil.cultivation.highlight')}
              </p>
              <p className="text-gray-600">
                {t('biodynamicOil.cultivation.result')}
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img 
                src="/assets/images/kouses.png"
                alt="Kouses Estate Olive Oil"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <img 
                src="/assets/images/benefits.png"
                alt="Olive Oil Benefits"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-playfair text-gray-900">
                {t('biodynamicOil.benefits.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('biodynamicOil.benefits.description')}
              </p>
              
              {/* Stats */}
              <div className="space-y-4">
                <div className="flex items-center text-rose-400">
                  <span className="mr-2">•</span>
                  <span>{t('biodynamicOil.benefits.stats.omega6')}</span>
                </div>
                <div className="flex items-center text-rose-400">
                  <span className="mr-2">•</span>
                  <span>{t('biodynamicOil.benefits.stats.omega3')}</span>
                </div>
                <div className="flex items-center text-rose-400">
                  <span className="mr-2">•</span>
                  <span>{t('biodynamicOil.benefits.stats.vitaminE')}</span>
                </div>
                <div className="flex items-center text-rose-400">
                  <span className="mr-2">•</span>
                  <span>{t('biodynamicOil.benefits.stats.vitaminK')}</span>
                </div>
              </div>

              <p className="text-gray-600">
                {t('biodynamicOil.benefits.additional')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* More Benefits Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-playfair text-center mb-16">
            {t('biodynamicOil.moreBenefits.title')}
          </h2>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-rose-200"></div>

            {/* Timeline Items */}
            <div className="flex flex-col space-y-24">
              {/* Properties */}
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                  <div className="relative rounded-full border-2 border-rose-300 p-1 overflow-hidden md:justify-self-end">
                    <div className="absolute -left-4 -top-4 bg-rose-300 rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold shadow-lg">
                      01
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?q=80&w=500&auto=format&fit=crop"
                      alt="Olive Oil Properties"
                      className="w-full h-64 object-cover rounded-full"
                    />
                  </div>
                  <div className="space-y-4 md:text-left">
                    <h3 className="text-2xl font-playfair">{t('biodynamicOil.moreBenefits.properties.title')}</h3>
                    <p className="text-gray-600">{t('biodynamicOil.moreBenefits.properties.description')}</p>
                  </div>
                </div>
              </div>

              {/* Nutritional Value */}
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                  <div className="relative rounded-full border-2 border-rose-300 p-1 overflow-hidden md:order-2">
                    <div className="absolute -right-4 -top-4 bg-rose-300 rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold shadow-lg">
                      02
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=500&auto=format&fit=crop"
                      alt="Nutritional Value"
                      className="w-full h-64 object-cover rounded-full"
                    />
                  </div>
                  <div className="space-y-4 md:text-right md:order-1">
                    <h3 className="text-2xl font-playfair">{t('biodynamicOil.moreBenefits.nutritionalValue.title')}</h3>
                    <p className="text-gray-600">{t('biodynamicOil.moreBenefits.nutritionalValue.description')}</p>
                  </div>
                </div>
              </div>

              {/* Health Benefits */}
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                  <div className="relative rounded-full border-2 border-rose-300 p-1 overflow-hidden md:justify-self-end">
                    <div className="absolute -left-4 -top-4 bg-rose-300 rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold shadow-lg">
                      03
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=500&auto=format&fit=crop"
                      alt="Health Benefits"
                      className="w-full h-64 object-cover rounded-full"
                    />
                  </div>
                  <div className="space-y-4 md:text-left">
                    <h3 className="text-2xl font-playfair">{t('biodynamicOil.moreBenefits.healthBenefits.title')}</h3>
                    <p className="text-gray-600">{t('biodynamicOil.moreBenefits.healthBenefits.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodynamicOilPage; 