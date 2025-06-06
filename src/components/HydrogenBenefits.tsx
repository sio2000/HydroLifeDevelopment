import React from 'react';
import { Activity, Zap, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import hydrogenCup from '../../assets/images/bottle.jpeg';

const HydrogenBenefits = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = 'tel:+306980900300';
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#F5E6D3] to-[#F9EFE6]">
      {/* Hippie style decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#D89084]/10 rounded-full transform rotate-45 animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#A7D7C5]/15 rounded-full transform -rotate-45 animate-float"
          style={{ animationDuration: '8s' }}
        />
        {/* Peace symbol */}
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-[#D89084]/20 rounded-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-16 bg-[#D89084]/20 transform rotate-90" />
            <div className="w-1 h-16 bg-[#D89084]/20" />
          </div>
        </div>
        {/* Flower patterns */}
        <div className="absolute bottom-20 left-20 flex items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 bg-[#F0B7A4]/10 rounded-full"
              style={{
                transform: `rotate(${i * 60}deg) translateY(-20px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up space-y-8">
            <h2 className="text-5xl font-bold mb-6 font-['Helvetica Neue']">
              <span className="text-[#D89084] block transform hover:scale-105 transition-transform duration-300">
                {t('hydrogenBenefits.title')}
              </span>
              <span className="block text-[#4A5759] mt-2 text-4xl">
                {t('hydrogenBenefits.subtitle')}
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              {t('hydrogenBenefits.description')}
            </p>
            
            <div className="space-y-8">
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-3xl transform hover:translate-x-2 transition-all duration-300 hover:shadow-xl border border-[#D89084]/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D89084]/10 rounded-full flex items-center justify-center group-hover:bg-[#D89084]/20 transition-colors duration-300">
                    <Activity className="w-6 h-6 text-[#D89084]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#4A5759] mb-2">{t('hydrogenBenefits.athleticPerformance.title')}</h3>
                    <p className="text-gray-600">{t('hydrogenBenefits.athleticPerformance.description')}</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-3xl transform hover:translate-x-2 transition-all duration-300 hover:shadow-xl border border-[#D89084]/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D89084]/10 rounded-full flex items-center justify-center group-hover:bg-[#D89084]/20 transition-colors duration-300">
                    <Zap className="w-6 h-6 text-[#D89084]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#4A5759] mb-2">{t('hydrogenBenefits.metabolicHealth.title')}</h3>
                    <p className="text-gray-600">{t('hydrogenBenefits.metabolicHealth.description')}</p>
                  </div>
                </div>
              </div>

              {/* Buttons with organic shapes */}
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <button 
                  onClick={() => navigate('/hydrogenated-water')}
                  className="px-8 py-4 bg-gradient-to-r from-[#D89084] to-[#E8B4A9] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group relative overflow-hidden"
                >
                  <span className="relative z-10">{t('hydrogenBenefits.discoverButton')}</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
                <button 
                  onClick={handleCall}
                  className="px-8 py-4 bg-gradient-to-r from-[#A7D7C5] to-[#7FC7AF] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group relative overflow-hidden"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="relative z-10">{t('hydrogenBenefits.callButton')}</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              </div>
            </div>
          </div>

          {/* Image with organic frame */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D89084] via-[#E8B4A9] to-[#A7D7C5] rounded-[3rem] transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
            <img
              src={hydrogenCup}
              alt="Hydrogenated Water Cup"
              className="relative rounded-[2.5rem] shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 w-full object-cover"
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F0B7A4]/30 rounded-full animate-ping" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#A7D7C5]/20 rounded-full animate-pulse" />
            {/* Flower of life pattern */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-20">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full border-2 border-[#D89084] rounded-full"
                  style={{
                    transform: `rotate(${i * 30}deg)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HydrogenBenefits; 