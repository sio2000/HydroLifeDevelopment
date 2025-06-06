import React from 'react';
import { Activity, Brain, Shield, Heart, Stethoscope } from 'lucide-react';
import h2oSymbol from '../../assets/images/h20symbol.jpg';
import c1xrGnjVvM2OEBMox28tQ from '../../assets/images/img-c1xrGnjVvM2OEBMox28tQ.jpg';
import person775073 from '../../assets/images/person-775073_1280.jpg';
import goldenRetriever from '../../assets/images/golden-retriever-7258225_960_720.jpg';
import yoga from '../../assets/images/yoga-6128116_1280.jpg';
import waterfalls from '../../assets/images/waterfalls-6476336_1280.jpg';
import woman from '../../assets/images/woman-5380651_1280.jpg';
import water from '../../assets/images/water-1761027_1280.jpg';
import { useTranslation } from 'react-i18next';

const HealthBenefits = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: <Activity className="w-8 h-8 text-[#D89084]" />,
      title: t('healthBenefits.benefits.0.title'),
      description: t('healthBenefits.benefits.0.description')
    },
    {
      icon: <Brain className="w-8 h-8 text-[#A7D7C5]" />,
      title: t('healthBenefits.benefits.1.title'),
      description: t('healthBenefits.benefits.1.description')
    },
    {
      icon: <Shield className="w-8 h-8 text-[#F0B7A4]" />,
      title: t('healthBenefits.benefits.2.title'),
      description: t('healthBenefits.benefits.2.description')
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-[#D89084]" />,
      title: t('healthBenefits.benefits.3.title'),
      description: t('healthBenefits.benefits.3.description')
    },
    {
      icon: <Heart className="w-8 h-8 text-[#A7D7C5]" />,
      title: t('healthBenefits.benefits.4.title'),
      description: t('healthBenefits.benefits.4.description')
    },
    {
      icon: <Brain className="w-8 h-8 text-[#F0B7A4]" />,
      title: t('healthBenefits.benefits.5.title'),
      description: t('healthBenefits.benefits.5.description')
    }
  ];

  const gallery = [
    { image: h2oSymbol, alt: 'H2O Symbol' },
    { image: c1xrGnjVvM2OEBMox28tQ, alt: 'Healthy Lifestyle' },
    { image: person775073, alt: 'Person Drinking Water' },
    { image: goldenRetriever, alt: 'Happy Golden Retriever' },
    { image: yoga, alt: 'Yoga Practice' },
    { image: waterfalls, alt: 'Natural Waterfalls' },
    { image: woman, alt: 'Woman Wellness' },
    { image: water, alt: 'Pure Water' }
  ];

  return (
    <>
      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-[#F5E6D3] to-[#F9EFE6] relative overflow-hidden">
        {/* Hippie decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D89084]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#A7D7C5]/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
          {/* Peace symbols */}
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-[#D89084]/20 rounded-full flex items-center justify-center">
            <div className="w-0.5 h-12 bg-[#D89084]/20 absolute" />
            <div className="w-0.5 h-12 bg-[#D89084]/20 absolute transform rotate-90" />
          </div>
          {/* Flower pattern */}
          <div className="absolute bottom-0 left-1/4">
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
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="block text-[#6BB5D8] mb-2">{t('healthBenefits.sectionTitle')}</span>
            <span className="block text-[#6BB5D8] text-lg mt-2 mb-4">{t('healthBenefits.sectionSubcomment')}</span>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6BB5D8] to-[#A7D7C5] mx-auto mt-4 rounded-full" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-white/20 group"
              >
                <div className="flex flex-col items-start">
                  <div className="bg-gradient-to-br from-white/80 to-white/40 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#4A5759] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9EFE6] to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#A7D7C5]/10 rounded-full transform translate-x-1/2 translate-y-1/2" />
          {/* Mandala pattern */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-2 border-[#D89084] rounded-full"
                style={{
                  transform: `rotate(${i * 45}deg) scale(${1 + i * 0.2})`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="block text-[#6BB5D8]">{t('healthBenefits.experienceTitle')}</span>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6BB5D8] to-[#A7D7C5] mx-auto mt-4 rounded-full" />
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gallery.slice(0, 4).map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D89084]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {gallery.slice(4).map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D89084]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthBenefits; 