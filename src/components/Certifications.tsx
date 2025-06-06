import React from 'react';
import { Shield, CheckCircle, Award, FileCheck, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const { t } = useTranslation();

  const certifications = [
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: t('certifications.items.0.title'),
      description: t('certifications.items.0.description'),
      delay: '0'
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-sky-500" />,
      title: t('certifications.items.1.title'),
      description: t('certifications.items.1.description'),
      delay: '100'
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: t('certifications.items.2.title'),
      description: t('certifications.items.2.description'),
      delay: '200'
    },
    {
      icon: <FileCheck className="h-12 w-12 text-sky-500" />,
      title: t('certifications.items.3.title'),
      description: t('certifications.items.3.description'),
      delay: '300'
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes sparkle {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.8; }
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-sparkle {
            animation: sparkle 2s infinite;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
        `}
      </style>
      <section className="relative py-24 overflow-hidden bg-[#D89084]">
        {/* Bubble Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full filter blur-3xl animate-float" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/15 rounded-full filter blur-3xl animate-float animation-delay-200" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/10 rounded-full filter blur-3xl animate-float animation-delay-400" />
        </div>

        {/* Wave Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxNDQwIDUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwYzI0MC43MiAwIDI0MC43MiA1MCA0ODEuNDQgNTBzMjQwLjcyLTUwIDQ4MS40NC01MFMxMTk5LjI4IDUwIDE0NDAgNTBWNTAwSDBWMHoiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] bg-repeat-x bg-bottom opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-white text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in-up">
              {t('certifications.subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
              {t('certifications.title')}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              {t('certifications.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group bg-white/90 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] animate-fade-in-up"
                style={{ animationDelay: `${cert.delay}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-[#D89084]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(cert.icon, { className: "h-12 w-12 text-[#D89084]" })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#D89084] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-700">
                  {cert.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="h-6 w-6 text-[#D89084] mx-auto animate-sparkle" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;