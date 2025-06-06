import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import s1Image from '/assets/images/s1.png';
import s2Image from '/assets/images/s2.png';
import s3Image from '/assets/images/s3.png';
import s4Image from '/assets/images/s4.png';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FoodSupplementsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1577219492769-b63a779fac28?q=80&w=2070&auto=format&fit=crop")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold">{t('foodSupplements.hero.title')}</h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="md:w-2/3">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{t('foodSupplements.intro.date')}</span>
                <span className="mx-2">•</span>
                <span>{t('foodSupplements.intro.category')}</span>
                <span className="mx-2">•</span>
                <span>{t('foodSupplements.intro.comments')}</span>
              </div>
              <h2 className="text-3xl font-bold text-[#2B5173] mb-6">{t('foodSupplements.intro.title')}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('foodSupplements.intro.description1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('foodSupplements.intro.description2')}
              </p>
            </div>
            <div className="md:w-1/3">
              <img 
                src={s1Image} 
                alt={t('foodSupplements.intro.imageAlt')} 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spirulina Section */}
      <div className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2B5173] mb-8">{t('foodSupplements.spirulina.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('foodSupplements.spirulina.description1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('foodSupplements.spirulina.description2')}
                </p>
              </div>
              <div>
                <img 
                  src={s2Image} 
                  alt={t('foodSupplements.spirulina.imageAlt')} 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2B5173] mb-8">{t('foodSupplements.benefits.title')}</h2>
          
          {/* Benefit 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src={s3Image} 
                alt={t('foodSupplements.benefits.benefit1.imageAlt')} 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2B5173] mb-4">{t('foodSupplements.benefits.benefit1.title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('foodSupplements.benefits.benefit1.description')}
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-bold text-[#2B5173] mb-4">{t('foodSupplements.benefits.benefit2.title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('foodSupplements.benefits.benefit2.description')}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={s4Image} 
                alt={t('foodSupplements.benefits.benefit2.imageAlt')} 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src={s1Image} 
                alt={t('foodSupplements.benefits.benefit3.imageAlt')} 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2B5173] mb-4">{t('foodSupplements.benefits.benefit3.title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('foodSupplements.benefits.benefit3.description')}
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-bold text-[#2B5173] mb-4">{t('foodSupplements.benefits.benefit4.title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('foodSupplements.benefits.benefit4.description')}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={s1Image} 
                alt={t('foodSupplements.benefits.benefit4.imageAlt')} 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-[#E5B3B3] bg-opacity-20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#2B5173] mb-4">{t('foodSupplements.cta.title')}</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              {t('foodSupplements.cta.description')}
            </p>
            <Link to="/products" className="inline-flex items-center px-8 py-3 bg-[#E5B3B3] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              {t('foodSupplements.cta.button')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoodSupplementsPage; 