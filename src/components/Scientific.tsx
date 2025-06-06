import React from 'react';
import { Microscope, TestTube, Dna, Brain, ChevronRight, Beaker, ScrollText, Atom } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Insight {
  title: string;
  description: string;
  stats: string;
}

interface Publication {
  journal: string;
  title: string;
  year: string;
  impact: string;
}

const Scientific = () => {
  const { t } = useTranslation();
  
  const insights = t('scientific.insights', { returnObjects: true }) as Insight[];
  const publications = t('scientific.publications.items', { returnObjects: true }) as Publication[];

  const getColor = (index: number) => {
    const colors = [
      { bg: "bg-[#D89084]", text: "text-[#D89084]" },
      { bg: "bg-[#A7D7C5]", text: "text-[#A7D7C5]" },
      { bg: "bg-[#F0B7A4]", text: "text-[#F0B7A4]" },
      { bg: "bg-[#E8B4B4]", text: "text-[#E8B4B4]" }
    ];
    return colors[index % colors.length];
  };

  const getIcon = (index: number) => {
    const icons = [
      <TestTube className="h-8 w-8" />,
      <Dna className="h-8 w-8" />,
      <Brain className="h-8 w-8" />,
      <Beaker className="h-8 w-8" />
    ];
    return icons[index % icons.length];
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-6 py-2 bg-[#D89084]/10 rounded-full text-[#D89084] font-medium text-sm mb-4">
            {t('scientific.researchBased')}
          </div>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2C3E50] to-[#3498DB] mb-6">
            {t('scientific.title')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t('scientific.subtitle')}
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#D89084] to-[#E8B4B4] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {insights.map((insight: any, index: number) => {
            const colors = getColor(index);
            return (
              <button
                key={index}
                className="relative group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left w-full"
                onClick={() => window.location.href = `/scientific/${index}`}
                style={{ cursor: 'pointer' }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 ${colors.bg}/10 rounded-full opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                <div className="relative z-10">
                  <div className={`p-3 ${colors.bg}/10 rounded-xl inline-block mb-6 ${colors.text}`}>
                    {getIcon(index)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {insight.description}
                  </p>
                  <div className={`${colors.text} font-semibold`}>
                    {insight.stats}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Scientific;