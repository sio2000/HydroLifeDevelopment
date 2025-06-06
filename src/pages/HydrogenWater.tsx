import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Droplets, Shield, Activity } from 'lucide-react';
import hydroBg from '../../assets/images/hydro.jpg';
import hydroBubble from '../../assets/images/hydrobubble.jpg';
import hydroBubble2 from '../../assets/images/hydrobubble2.jpg';

interface Benefit {
  title: string;
  description: string;
}

const HydrogenWater = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#1a3f5c] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3f5c]/90 to-[#2c5c7d]/90 backdrop-brightness-[0.2] backdrop-contrast-125" />
          <div 
            className="absolute inset-0 bg-cover bg-center brightness-75"
            style={{ backgroundImage: `url(${hydroBg})` }}
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {i18n.language === 'en' ? 'HYDROGENATED WATER' : 'ΥΔΡΟΓΟΝΩΜΕΝΟ ΝΕΡΟ'}
            </h1>
          </div>
        </div>
      </div>

      {/* Nutrition Information Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D89084]/5 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#A7D7C5]/5 rounded-full transform translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2C3E50] to-[#3498DB]">
                {t('hydrogenWaterPage.nutritionSection.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D89084] to-[#E8B4B4] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#D89084]/10 rounded-xl">
                      <Droplets className="h-6 w-6 text-[#D89084]" />
                    </div>
                    <div>
                      <p className="text-gray-600 leading-relaxed">
                        {t('hydrogenWaterPage.nutritionSection.content.minerals')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#D89084] to-[#E8B4B4] p-[2px] rounded-2xl">
                  <div className="bg-white rounded-2xl p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#A7D7C5]/10 rounded-xl">
                        <Shield className="h-6 w-6 text-[#A7D7C5]" />
                      </div>
                      <p className="text-[#D89084] italic text-lg">
                        {t('hydrogenWaterPage.nutritionSection.content.sameAsWater')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F0B7A4]/10 rounded-xl">
                      <Activity className="h-6 w-6 text-[#F0B7A4]" />
                    </div>
                    <div>
                      <p className="text-gray-600 leading-relaxed">
                        {t('hydrogenWaterPage.nutritionSection.content.liverStudy')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden group">
                  <img 
                    src={hydroBubble}
                    alt="Hydrogenated Water Benefits"
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3f5c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Animated Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D89084]/10 rounded-full animate-float" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#A7D7C5]/10 rounded-full animate-float-delayed" />
                <div className="absolute top-1/2 right-0 w-16 h-16 bg-[#F0B7A4]/10 rounded-full animate-float" 
                  style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7D7C5]/5 rounded-full transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D89084]/5 rounded-full transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#D89084] uppercase tracking-wider font-medium">
                {t('hydrogenWaterPage.benefits.discover')}
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2C3E50] to-[#3498DB]">
                {t('hydrogenWaterPage.benefits.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D89084] to-[#E8B4B4] mx-auto rounded-full mb-8" />
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {t('hydrogenWaterPage.benefits.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#D89084]/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#D89084]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {t('hydrogenWaterPage.benefits.items.0.title')}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t('hydrogenWaterPage.benefits.items.0.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#D89084]/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#D89084]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {t('hydrogenWaterPage.benefits.items.1.title')}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t('hydrogenWaterPage.benefits.items.1.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#D89084]/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#D89084]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {t('hydrogenWaterPage.benefits.items.2.title')}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t('hydrogenWaterPage.benefits.items.2.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#D89084]/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#D89084]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {t('hydrogenWaterPage.benefits.items.3.title')}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t('hydrogenWaterPage.benefits.items.3.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden group">
                  <img 
                    src={hydroBubble2}
                    alt={t('hydrogenWaterPage.benefits.imageAlt')}
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3f5c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Animated Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D89084]/10 rounded-full animate-float" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#A7D7C5]/10 rounded-full animate-float-delayed" />
                <div className="absolute top-1/2 right-0 w-16 h-16 bg-[#F0B7A4]/10 rounded-full animate-float" 
                  style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-[#D89084]/5 to-[#A7D7C5]/5 rounded-2xl p-8">
              <p className="text-center text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {t('hydrogenWaterPage.benefits.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#D89084] uppercase tracking-wider">
              {t('hydrogenWaterPage.howItWorks.subtitle')}
            </span>
            <h2 className="text-4xl font-bold mt-2">
              {t('hydrogenWaterPage.howItWorks.title')}
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-[#D89084] transform -translate-y-1/2" />
              <div className="absolute top-1/2 left-[5%] right-[5%] flex justify-between items-center">
                <div className="w-4 h-4 rounded-full bg-[#D89084] border-2 border-white shadow-lg" />
                <div className="w-4 h-4 rounded-full bg-[#D89084] border-2 border-white shadow-lg" />
                <div className="w-4 h-4 rounded-full bg-[#D89084] border-2 border-white shadow-lg" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {[
                  {
                    number: '01',
                    titleKey: 'hydrogenWaterPage.howItWorks.steps.first.title',
                    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5'
                  },
                  {
                    number: '02',
                    titleKey: 'hydrogenWaterPage.howItWorks.steps.second.title',
                    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'
                  },
                  {
                    number: '03',
                    titleKey: 'hydrogenWaterPage.howItWorks.steps.third.title',
                    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773'
                  }
                ].map((step, index) => (
                  <div key={step.number} className="relative">
                    <div className="relative">
                      {/* Circle Container */}
                      <div className="relative rounded-full overflow-hidden border-[3px] border-[#D89084] aspect-square mb-6 group">
                        <img 
                          src={step.image}
                          alt={t(step.titleKey)}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Number Badge */}
                        <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#D89084] rounded-full flex items-center justify-center text-white text-xl font-semibold shadow-md">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-center mt-4">{t(step.titleKey)}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HydrogenWater; 