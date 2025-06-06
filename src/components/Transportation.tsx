import React, { useEffect } from 'react';
import { Heart, Leaf, Brain, Activity, ChevronRight, Zap, Timer } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Transportation = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#F5E6D3] to-[#F9EFE6] relative overflow-hidden">
      {/* Hippie decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D89084]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#A7D7C5]/10 rounded-full transform translate-x-1/2 translate-y-1/2" />
        {/* Peace symbol */}
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-[#D89084]/20 rounded-full flex items-center justify-center">
          <div className="w-0.5 h-12 bg-[#D89084]/20 absolute" />
          <div className="w-0.5 h-12 bg-[#D89084]/20 absolute transform rotate-90" />
        </div>
        {/* Flower pattern */}
        <div className="absolute bottom-20 left-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-12 h-12 bg-[#F0B7A4]/10 rounded-full"
              style={{
                transform: `rotate(${i * 60}deg) translateY(-24px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-6 py-3 bg-[#E8F1F8] rounded-2xl text-[#6BB5D8] font-semibold text-sm mb-6 backdrop-blur-sm border border-[#6BB5D8]/30 flex items-center space-x-2">
            <span>{t('transportation.sectionTitle')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#6BB5D8] mb-6 leading-tight">
            {t('transportation.mainTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('transportation.mainDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D89084] to-[#A7D7C5] rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
              <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#D89084]/10 rounded-xl">
                      <Heart className="h-8 w-8 text-[#D89084]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#4A5759]">{t('transportation.features.0.title')}</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {t('transportation.features.0.description')}
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#F5E6D3]/50 p-6 rounded-3xl transform hover:scale-105 transition-transform border border-[#D89084]/20">
                    <Leaf className="h-6 w-6 text-[#D89084] mb-4" />
                    <h4 className="font-semibold text-[#4A5759] mb-2">{t('transportation.features.1.title')}</h4>
                    <p className="text-sm text-gray-600">{t('transportation.features.1.description')}</p>
                  </div>
                  <div className="bg-[#F5E6D3]/50 p-6 rounded-3xl transform hover:scale-105 transition-transform border border-[#D89084]/20">
                    <Brain className="h-6 w-6 text-[#A7D7C5] mb-4" />
                    <h4 className="font-semibold text-[#4A5759] mb-2">{t('transportation.features.2.title')}</h4>
                    <p className="text-sm text-gray-600">{t('transportation.features.2.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#D89084]/20">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#A7D7C5]/20 rounded-xl">
                    <Activity className="h-6 w-6 text-[#A7D7C5]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4A5759] mb-2">{t('transportation.features.3.title')}</h3>
                    <p className="text-gray-600">
                      {t('transportation.features.3.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#D89084]/20">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F0B7A4]/20 rounded-xl">
                    <Zap className="h-6 w-6 text-[#F0B7A4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4A5759] mb-2">{t('transportation.features.4.title')}</h3>
                    <p className="text-gray-600">
                      {t('transportation.features.4.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-[#D89084]/20">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-[#D89084]/10 rounded-xl">
                  <Timer className="h-8 w-8 text-[#D89084]" />
                </div>
                <div>
                  {(() => {
                    // Use different feature index based on language
                    const featureIndex = i18n.language === 'en' ? 5 : 4;
                    return (
                      <>
                        <h3 className="text-xl font-bold text-[#4A5759] mb-4">{t(`transportation.features.${featureIndex}.title`)}</h3>
                        <p className="text-gray-600 mb-4">{t(`transportation.features.${featureIndex}.description`)}</p>
                        <div className="space-y-4">
                          {[0, 1, 2].map((index) => {
                            const point = t(`transportation.features.${featureIndex}.points.${index}`);
                            return (
                              <div key={index} className="flex items-center space-x-3">
                                <ChevronRight className="h-5 w-5 text-[#A7D7C5]" />
                                <p className="text-gray-600">{point}</p>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-[#D89084]/10 p-6 rounded-3xl shadow-md backdrop-blur-sm border border-[#D89084]/20">
          <p className="text-xl text-black font-bold">
            {t('transportation.conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transportation;