import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Zap, TrendingUp } from 'lucide-react';

interface Target {
  year: string;
  title: string;
  value: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

const EUHydrogenStrategy = () => {
  const { t } = useTranslation();

  const targets = t('euHydrogenStrategy.targets', { returnObjects: true }) as Target[];
  const benefits = t('euHydrogenStrategy.benefits', { returnObjects: true }) as Benefit[];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('euHydrogenStrategy.title')}
          </h2>
          <p className="text-xl text-blue-600 font-semibold mb-4">
            {t('euHydrogenStrategy.subtitle')}
          </p>
          <p className="text-lg text-gray-600">
            {t('euHydrogenStrategy.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {targets.map((target, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-blue-600 font-semibold mb-2">{target.year}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{target.title}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">{target.value}</div>
              <p className="text-gray-600">{target.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-6">
                {index === 0 ? (
                  <Zap className="h-6 w-6 text-green-600" />
                ) : index === 1 ? (
                  <Target className="h-6 w-6 text-green-600" />
                ) : (
                  <TrendingUp className="h-6 w-6 text-green-600" />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EUHydrogenStrategy; 