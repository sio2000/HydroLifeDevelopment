import React from 'react';
import { Globe2, Wind, Zap, Flag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EUStrategy = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">
              {t('euStrategy.title')}
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              {t('euStrategy.description')}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl backdrop-blur-sm">
                <Wind className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('euStrategy.cleanEnergy.title')}</h3>
                <p className="text-blue-100">{t('euStrategy.cleanEnergy.description')}</p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl backdrop-blur-sm">
                <Flag className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('euStrategy.independence.title')}</h3>
                <p className="text-blue-100">{t('euStrategy.independence.description')}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 rounded-xl mt-8">
              <div className="flex items-center space-x-4">
                <Globe2 className="h-10 w-10 text-blue-300" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{t('euStrategy.greeceRole.title')}</h3>
                  <p className="text-blue-100">
                    {t('euStrategy.greeceRole.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80"
              alt={t('euStrategy.imageAlt')}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900 to-transparent rounded-b-2xl">
              <div className="flex items-center space-x-4">
                <Zap className="h-8 w-8 text-yellow-400" />
                <p className="text-lg font-semibold">{t('euStrategy.poweringEurope')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EUStrategy; 