import React, { useState, useEffect } from 'react';
import {
  Brain,
  Heart,
  Battery,
  Shield,
  Activity,
  Dna,
  Pill,
  Droplets,
  Wind,
  Bath,
  ScrollText,
  ChevronDown,
  ChevronUp,
  Microscope,
  Zap,
  Scale,
  Baby,
  Sun,
  ArrowDown
} from 'lucide-react';
import cleanWater from '../../assets/images/cleanwater.png';
import peopleImage from '../../assets/images/people.jpg';
import useHydrogenImage from '../../assets/images/UseHydrogen.jpg';
import hydrogenLab from '../../assets/images/hydrogen-lab.jpg';
import hydrogenMolecules from '../../assets/images/hydrogen-molecules.jpg';
import hydrogenTherapy from '../../assets/images/hydrogen-therapy.jpg';
import athleteWoman from '../../assets/images/athletewoman.jpg';
import brain from '../../assets/images/brain.jpg';
import reaction from '../../assets/images/reaction.jpeg';
import { useTranslation } from 'react-i18next';
import About from '../components/About';

const HumansPage = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainBenefits = t('humansPage.mainBenefits', { returnObjects: true }) as { title: string; description: string; icon?: JSX.Element }[];
  const detailedSections = t('humansPage.detailedSections', { returnObjects: true }) as { title: string; content: string[]; icon?: JSX.Element }[];
  const applicationMethods = t('humansPage.applicationMethods', { returnObjects: true }) as { title: string; description: string; icon?: JSX.Element }[];
  const research = t('humansPage.research', { returnObjects: true }) as { authors: string; year: string; journal?: string; finding: string }[];

  const mainBenefitsIcons = [
    <Shield className="h-12 w-12 text-sky-600" />, <Activity className="h-12 w-12 text-sky-600" />, <Battery className="h-12 w-12 text-sky-600" />,
    <Brain className="h-12 w-12 text-sky-600" />, <Heart className="h-12 w-12 text-sky-600" />, <Scale className="h-12 w-12 text-sky-600" />
  ];
  const detailedSectionsIcons = [
    <Brain className="h-8 w-8 text-sky-600" />, <Heart className="h-8 w-8 text-sky-600" />, <Activity className="h-8 w-8 text-sky-600" />,
    <Dna className="h-8 w-8 text-sky-600" />, <Shield className="h-8 w-8 text-sky-600" />,
    <Activity className="h-8 w-8 text-sky-600" />, // Sports
    <Sun className="h-8 w-8 text-sky-600" /> // Antiaging
  ];
  const applicationMethodsIcons = [
    <Droplets className="h-10 w-10 text-sky-600" />, <Wind className="h-10 w-10 text-sky-600" />, <Pill className="h-10 w-10 text-sky-600" />, <Bath className="h-10 w-10 text-sky-600" />
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={peopleImage}
            alt="Happy people drinking water"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>{t('humansPage.heroTitle')}</h1>
          <p className={`text-lg md:text-xl text-sky-100 max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>{t('humansPage.heroSubtitle')}</p>
          <ArrowDown className={`h-10 w-10 text-white mx-auto animate-bounce transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('humansPage.introTitle')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('humansPage.introDescription')}
            </p>
            <div className="bg-sky-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('humansPage.didYouKnow')}</h3>
              <p className="text-gray-600">
                {t('humansPage.didYouKnowText')}
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={cleanWater}
              alt="Pure water drops"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <Droplets className="h-8 w-8 text-sky-600" />
            </div>
          </div>
        </div>

        {/* Main Benefits Grid with Hover Effects */}
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
            {t('humansPage.gallery.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              src={athleteWoman}
              alt={t('humansPage.gallery.alt1')}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
            <img
              src={brain}
              alt={t('humansPage.gallery.alt2')}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
            <img
              src={reaction}
              alt={t('humansPage.gallery.alt3')}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
          </div>
        </div>

        {/* Detailed Sections with Animation */}
        <div className="space-y-6 mb-16">
          {detailedSections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-sky-50 transition-colors duration-300"
                onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
              >
                <div className="flex items-center space-x-3">
                  {detailedSectionsIcons[idx]}
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                {activeSection === section.title ? (
                  <ChevronUp className="h-6 w-6 text-gray-400" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
                )}
              </button>
              {activeSection === section.title && (
                <div className="px-6 pb-4 animate-fadeIn">
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-sky-600"></span>
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

        {/* Application Methods with Background Image */}
        <div className="relative bg-white rounded-2xl shadow-md p-8 mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={useHydrogenImage}
              alt="Ways to use hydrogen"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('humansPage.applicationMethodsTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationMethods.map((method, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {applicationMethodsIcons[index]}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Section with Gradient Background */}
        <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Microscope className="h-12 w-12 text-sky-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">{t('humansPage.researchTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.map((study, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-3">
                  <ScrollText className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="font-semibold text-gray-900">
                    {study.authors} ({study.year})
                  </span>
                </div>
                {study.journal && (
                  <p className="text-sky-600 text-sm mb-2">{study.journal}</p>
                )}
                <p className="text-gray-600 text-sm">{study.finding}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Note with Icon Animation */}
        <div className="mt-16 bg-green-50 rounded-xl p-6 flex items-start transform hover:scale-[1.01] transition-transform duration-300">
          <Shield className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1 animate-pulse" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('humansPage.safetyTitle')}</h3>
            <p className="text-gray-600">
              {t('humansPage.safetyDescription')}
            </p>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default HumansPage; 