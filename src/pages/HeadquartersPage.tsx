import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import h1Image from '/assets/images/h1.png';
import h2Image from '/assets/images/h2.png';
import h3Image from '/assets/images/h3.png';
import h4Image from '/assets/images/h4.png';
import h5Image from '/assets/images/h5.png';

const HeadquartersPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?q=80&w=1470&auto=format&fit=crop)`,
            filter: 'brightness(0.7)'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {t('headquarters.page.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl">
            {t('headquarters.page.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* 10.000BC Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#2B5173]">{t('headquarters.page.history.title')}</h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('headquarters.page.history.intro.p1')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('headquarters.page.history.intro.p2')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('headquarters.page.history.intro.p3')}
            </p>
          </div>
          
          {/* First Image */}
          <div className="mb-16">
            <img 
              src={h1Image} 
              alt="Historical Minoan artifacts" 
              className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-xl" 
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('headquarters.page.history.knowledge.p1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('headquarters.page.history.knowledge.p2')}
            </p>
          </div>
          
          {/* Second Image */}
          <div className="mb-16">
            <img 
              src={h2Image} 
              alt="Ancient Minoan cultivation techniques" 
              className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-xl" 
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('headquarters.page.history.nutrition.p1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('headquarters.page.history.nutrition.p2')}
            </p>
          </div>
          
          {/* Third Image */}
          <div className="mb-16">
            <img 
              src={h3Image} 
              alt="Biodynamic farming methods" 
              className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-xl" 
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('headquarters.page.history.products.p1')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('headquarters.page.history.products.p2')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('headquarters.page.history.products.p3')}
            </p>
          </div>
          
          {/* Fourth Image */}
          <div className="mb-16">
            <img 
              src={h4Image} 
              alt="Olive oil production" 
              className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-xl" 
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('headquarters.page.history.offerings.p1')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('headquarters.page.history.offerings.p2')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('headquarters.page.history.offerings.p3')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('headquarters.page.history.offerings.p4')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('headquarters.page.history.offerings.p5')}
            </p>
          </div>
          
          {/* Fifth Image */}
          <div className="mb-16">
            <img 
              src={h5Image} 
              alt="Biodynamic products" 
              className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeadquartersPage; 