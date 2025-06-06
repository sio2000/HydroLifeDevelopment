import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Star, ShieldCheck } from 'lucide-react';

// Ενσωματωμένες μεταφράσεις
const greekSupplementsTranslations = {
  title: "Βιολογικά",
  subtitle: "Συμπληρώματα Διατροφής",
  seeMore: "ΔΕΙΤΕ ΠΕΡΙΣΣΟΤΕΡΑ",
  description: "Βρείτε συμπληρώματα διατροφής για όλη την οικογένεια και για όλες τις ανάγκες. Βιταμίνες & παιδικές βιταμίνες και πολυβιταμίνες.",
  detailedDescription: "Τα συμπληρώματα διατροφής είναι τρόφιμα με κύριο στόχο τη συμπλήρωση της συνήθους διατροφής, τα οποία αποτελούν συμπυκνωμένες πηγές θρεπτικών συστατικών και άλλων ουσιών με διατροφική ή ακόμη και φυσιολογική δράση, μεμονωμένα ή σε συνδυασμό, και τα οποία προσφέρονται εμπορικά σε δοσολογικές μορφές",
  organic: "Βιολογικά συμπληρώματα διατροφής για να ενισχύσετε το σώμα σας.",
  herbal: "Βοτανικά συμπληρώματα διατροφής ή αλλιώς η δύναμη της φύσης! Ποικιλία φρούτων ή σπόρων γνωστών για τα θρεπτικά συστατικά τους. Σας βοηθούν να πετύχετε τους στόχους σας και ταυτόχρονα είναι ευεργετικά για την υγεία σας."
};

const SupplementsPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLanguageChange = () => {
    const newLang = i18n.language === 'en' ? 'el' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1984&auto=format&fit=crop)`,
            filter: 'brightness(0.7)'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {t('productCategories.supplements.title')} {t('productCategories.supplements.subtitle')}
          </h1>
        </div>
      </div>

      {/* Nutritional Supplements Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  {i18n.language === 'el' ? greekSupplementsTranslations.title + ' ' + greekSupplementsTranslations.subtitle : t('productCategories.supplements.title') + ' ' + t('productCategories.supplements.subtitle')}
                </h2>
                
                <p className="text-gray-700 leading-relaxed">
                  {i18n.language === 'el' ? greekSupplementsTranslations.description : t('productCategories.supplements.description')}
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  {i18n.language === 'el' ? greekSupplementsTranslations.detailedDescription : t('productCategories.supplements.detailedDescription')}
                </p>
                
                <p className="text-[#D89084] italic">
                  {i18n.language === 'el' ? greekSupplementsTranslations.organic : t('productCategories.supplements.organic')}
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  {i18n.language === 'el' ? greekSupplementsTranslations.herbal : t('productCategories.supplements.herbal')}
                </p>
              </div>
              
              {/* Right side - Image */}
              <div>
                <img 
                  src="assets/images/kout.png" 
                  alt="Nutritional Supplements"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Herbs and Healthy Nutrition Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <div>
                <img 
                  src="/assets/images/spoon.png" 
                  alt={t('productCategories.supplements.herbsAndNutrition.imageAlt')}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Right side - Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  {t('productCategories.supplements.herbsAndNutrition.title')}
                </h2>
                
                <p className="text-gray-700 leading-relaxed">
                  {t('productCategories.supplements.herbsAndNutrition.description')}
                </p>
                
                <ul className="space-y-3 my-6">
                  <li className="flex items-start">
                    <span className="text-pink-300 mr-2">◉</span>
                    <span className="text-gray-700">{t('productCategories.supplements.herbsAndNutrition.benefits.0')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-300 mr-2">◉</span>
                    <span className="text-gray-700">{t('productCategories.supplements.herbsAndNutrition.benefits.1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-300 mr-2">◉</span>
                    <span className="text-gray-700">{t('productCategories.supplements.herbsAndNutrition.benefits.2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-300 mr-2">◉</span>
                    <span className="text-gray-700">{t('productCategories.supplements.herbsAndNutrition.benefits.3')}</span>
                  </li>
                </ul>
                
                <p className="text-gray-700 leading-relaxed">
                  {t('productCategories.supplements.herbsAndNutrition.additionalInfo')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
              {t('productCategories.supplements.benefitsSection.title')}
            </h2>
            
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#E5B3B3] -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Benefit 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#E5B3B3] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1470&auto=format&fit=crop" 
                        alt="Immune System" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#E5B3B3] flex items-center justify-center text-white font-bold">
                      {t('productCategories.supplements.benefitsSection.items.0.number')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {t('productCategories.supplements.benefitsSection.items.0.title')}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {t('productCategories.supplements.benefitsSection.items.0.description')}
                  </p>
                </div>
                
                {/* Benefit 2 */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#E5B3B3] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1470&auto=format&fit=crop" 
                        alt="Healthy Diet" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#E5B3B3] flex items-center justify-center text-white font-bold">
                      {t('productCategories.supplements.benefitsSection.items.1.number')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {t('productCategories.supplements.benefitsSection.items.1.title')}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {t('productCategories.supplements.benefitsSection.items.1.description')}
                  </p>
                </div>
                
                {/* Benefit 3 */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#E5B3B3] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=1470&auto=format&fit=crop" 
                        alt="Longevity" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#E5B3B3] flex items-center justify-center text-white font-bold">
                      {t('productCategories.supplements.benefitsSection.items.2.number')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {t('productCategories.supplements.benefitsSection.items.2.title')}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {t('productCategories.supplements.benefitsSection.items.2.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupplementsPage; 