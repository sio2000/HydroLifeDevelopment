import React, { useState, useEffect } from 'react';
import {
  Droplets,
  Thermometer,
  Beaker,
  ArrowDownUp,
  Trash2,
  Apple,
  Brain,
  Dna,
  Dog,
  Heart,
  ChevronDown,
  ChevronUp,
  ArrowDown,
  Scale,
  Microscope,
  ScrollText,
  Shield,
  Wind,
  Bone,
  Baby,
  Activity
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AnimalsPage = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainBenefits = t('animalsPage.mainBenefits', { returnObjects: true }) as { title: string; description: string; icon?: JSX.Element }[];
  const detailedSections = t('animalsPage.detailedSections', { returnObjects: true }) as { id: string; title: string; content: string[]; icon?: JSX.Element }[];
  const speciesExamples = t('animalsPage.speciesExamples', { returnObjects: true }) as { title: string; description: string; icon?: JSX.Element }[];
  const research = t('animalsPage.research', { returnObjects: true }) as { title: string; finding: string }[];

  const mainBenefitsIcons = [
    <Droplets className="h-12 w-12 text-blue-600" />, <Thermometer className="h-12 w-12 text-blue-600" />, <Beaker className="h-12 w-12 text-blue-600" />,
    <ArrowDownUp className="h-12 w-12 text-blue-600" />, <Trash2 className="h-12 w-12 text-blue-600" />, <Apple className="h-12 w-12 text-blue-600" />
  ];
  const detailedSectionsIcons = [
    <Dna className="h-8 w-8 text-blue-600" />, <Brain className="h-8 w-8 text-blue-600" />, <Heart className="h-8 w-8 text-blue-600" />,
    <Wind className="h-8 w-8 text-blue-600" />, <Bone className="h-8 w-8 text-blue-600" />
  ];
  const speciesExamplesIcons = [
    <Dog className="h-10 w-10 text-blue-600" />, <Scale className="h-10 w-10 text-blue-600" />, <Baby className="h-10 w-10 text-blue-600" />, <Activity className="h-10 w-10 text-blue-600" />
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="../../assets/images/farm-animal.jpg"
            alt={t('animalsPage.heroImageAlt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>{t('animalsPage.heroTitle')}</h1>
          <p className={`text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>{t('animalsPage.heroSubtitle')}</p>
          <ArrowDown className={`h-10 w-10 text-white mx-auto animate-bounce transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('animalsPage.introTitle')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('animalsPage.introDescription')}
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('animalsPage.didYouKnow')}</h3>
              <p className="text-gray-600">
                {t('animalsPage.didYouKnowText')}
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="../../assets/images/sheep.jpg"
              alt={t('animalsPage.beeImageAlt')}
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>
        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {mainBenefitsIcons[index]}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        {/* Image Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            {t('animalsPage.galleryTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              src="../../assets/images/farm-animals-gallery.jpg"
              alt={t('animalsPage.galleryAlt1')}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
            <img
              src="../../assets/images/farm-animal.jpg"
              alt={t('animalsPage.galleryAlt2')}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
            <img
              src="../../assets/images/sheep.jpg"
              alt={t('animalsPage.galleryAlt3')}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
          </div>
        </div>
        {/* Detailed Sections */}
        <div className="space-y-6 mb-16">
          {detailedSections.map((section, idx) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              >
                <div className="flex items-center space-x-3">
                  {detailedSectionsIcons[idx]}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {section.title.replace(" - Λεπτομέρειες", "")}
                  </h3>
                </div>
                {activeSection === section.id ? (
                  <ChevronUp className="h-6 w-6 text-gray-400" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
                )}
              </button>
              {activeSection === section.id && (
                <div className="px-6 pb-4 animate-fadeIn">
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        </span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Species Examples Section */}
        <div className="relative bg-white rounded-2xl shadow-md p-8 mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="../../assets/images/farm-animal.jpg"
              alt={t('animalsPage.speciesGalleryAlt')}
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('animalsPage.speciesTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {speciesExamples.map((species, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {speciesExamplesIcons[index]}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {species.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {species.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Research Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Microscope className="h-12 w-12 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">{t('animalsPage.researchTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.map((study, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-3">
                  <ScrollText className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-900">
                    {study.title}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{study.finding}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Warning Section */}
        <div className="mt-16 bg-red-50 rounded-xl p-6 flex items-start">
          <Shield className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1 animate-pulse" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('animalsPage.warningTitle')}</h3>
            <p className="text-gray-600">
              {t('animalsPage.warningText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalsPage; 