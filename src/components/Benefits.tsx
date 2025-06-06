import React from 'react';
import { Activity, Brain, Heart, Guitar as Hospital, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Benefit {
  title: string;
  description: string;
}

const Benefits = () => {
  const { t } = useTranslation();
  const benefits = t('benefitsSection.benefits', { returnObjects: true }) as Benefit[];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#D89084] uppercase tracking-wide">
            {t('benefitsSection.discover')}
          </p>
          <h2 className="text-3xl font-bold text-center text-gray-900 mt-2">
            {t('benefitsSection.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t('benefitsSection.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex-shrink-0">
                {index === 0 ? (
                  <Shield className="h-8 w-8 text-[#D89084]" />
                ) : index === 1 ? (
                  <Activity className="h-8 w-8 text-[#D89084]" />
                ) : index === 2 ? (
                  <Hospital className="h-8 w-8 text-[#D89084]" />
                ) : (
                  <Heart className="h-8 w-8 text-[#D89084]" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;