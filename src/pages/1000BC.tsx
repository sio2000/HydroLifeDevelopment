import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import image1000bc from '/assets/images/1000bc.png';
import image1000bc2 from '/assets/images/1000bc2.png';
import heroImage1 from '/assets/images/hero1000bc.png';
import heroImage2 from '/assets/images/hero1000bc2.png';
import bottleImage from '/assets/images/bottle.png';
import { Award, Gift, ArrowRight } from 'lucide-react';

// Add this at the top of your file
const calligraphyStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
`;

// Replace local image imports with Unsplash URLs
const oilCategoryImage = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop";
const wineCategoryImage = "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop";
const supplementsCategoryImage = "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop";

const BC1000Page = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage1,
      subtitle: "BIODYNAMIC OIL",
      title: "Kouses Estate"
    },
    {
      image: heroImage2,
      subtitle: "BIODYNAMIC OIL",
      title: "Kouses Estate"
    },
    {
      image: heroImage1,
      subtitle: "ORGANIC-BIODYNAMIC",
      title: "Native Wines"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Add the style tag for the font */}
      <style>{calligraphyStyle}</style>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(1.2)'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
              <p className="text-lg md:text-xl font-light tracking-widest mb-4">
                {slide.subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-playfair" style={{ fontFamily: "'Playfair Display', serif" }}>
                {slide.title}
              </h1>
              {index === 0 && (
                <Link 
                  to="/biodynamic-oil" 
                  className="inline-flex items-center px-8 py-3 bg-[#D89084] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 cursor-pointer z-10"
                >
                  {t('hero.slide1Button')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              )}
              {index === 1 && (
                <Link 
                  to="/biological-olive-oil" 
                  className="inline-flex items-center px-8 py-3 bg-[#D89084] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 cursor-pointer z-10"
                >
                  {t('hero.readMore')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              )}
              {index === 2 && (
                <Link 
                  to="/organic-biodynamic-wine" 
                  className="inline-flex items-center px-8 py-3 bg-[#D89084] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 cursor-pointer z-10"
                >
                  {t('hero.exploreButton')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        ))}

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-[#2B5173] mb-8">
            {t('mainSection.title')}
          </h1>
          
          <div className="w-24 h-1 bg-[#E5B3B3] mx-auto rounded-full mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[#2B5173]">
                {t('mainSection.heritage.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('mainSection.heritage.description')}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={image1000bc} 
                alt={t('mainSection.heritage.title')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <img 
                src={image1000bc2} 
                alt={t('mainSection.philosophy.title')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-semibold text-[#2B5173]">
                {t('mainSection.philosophy.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('mainSection.philosophy.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Farming Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="bg-[#FDF7F7] p-8 rounded-3xl">
                <img 
                  src={bottleImage} 
                  alt="Organic Wine Bottle" 
                  className="w-full h-auto relative z-10"
                />
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-24 h-24 text-[#E5B3B3]">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M10,50 Q50,10 90,50" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <p className="text-[#E5B3B3] font-medium tracking-wider">
                {t('organicFarming.subtitle')}
              </p>
              <h2 className="text-4xl md:text-5xl font-playfair" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('organicFarming.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('organicFarming.description')}
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Experience Card */}
                <div className="bg-white rounded-lg p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#E5B3B3]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-4xl text-[#E5B3B3] font-serif">"</span>
                  </div>
                  <h3 className="text-xl text-gray-800 mb-8">{t('organicFarming.experience.years')}</h3>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop&crop=faces&auto=format" 
                      alt="Experience" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Work</p>
                      <p className="text-gray-500 text-sm">EXPERIENCE</p>
                    </div>
                  </div>
                </div>

                {/* Nature Card */}
                <div className="bg-white rounded-lg p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#E5B3B3]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-4xl text-[#E5B3B3] font-serif">"</span>
                  </div>
                  <h3 className="text-xl text-gray-800 mb-8">{t('organicFarming.respect.title')}</h3>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&h=100&fit=crop&crop=faces&auto=format" 
                      alt="Organic" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Organic</p>
                      <p className="text-gray-500 text-sm">BIODYNAMIC FARMING</p>
                    </div>
                  </div>
                </div>

                {/* Health Card */}
                <div className="bg-white rounded-lg p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#E5B3B3]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-4xl text-[#E5B3B3] font-serif">"</span>
                  </div>
                  <h3 className="text-xl text-gray-800 mb-8">{t('hydrogenWaterPage.benefits.items.3.title')}</h3>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop&crop=faces&auto=format" 
                      alt="Heal" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Heal</p>
                      <p className="text-gray-500 text-sm">BODY AND SPIRIT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Link to="/products" className="mt-8 inline-block px-8 py-3 bg-[#E5B3B3] text-white font-medium rounded-lg hover:bg-[#d89f9f] transition-colors">
                {t('organicFarming.discoverButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories Section */}
      <div className="bg-[#FDF7F7] py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Biodynamic Oil Card */}
            <Link to="/biodynamic-oil" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 h-[450px]">
                <div className="relative h-[250px]">
                  <div className="w-full h-full">
                    <img 
                      src={oilCategoryImage} 
                      alt="Biodynamic Oil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-14 h-14 bg-[#E5B3B3] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🌿</span>
                    </div>
                  </div>
                </div>
                <div className="pt-10 pb-6 px-4 text-center">
                  <h3 className="text-xl font-playfair mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t('productCategories.biodynamicOil.title')}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {t('productCategories.biodynamicOil.subtitle')}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-[#E5B3B3] group-hover:text-[#d89f9f] transition-colors">
                    <span className="font-medium text-sm">{t('productCategories.biodynamicOil.seeMore')}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Organic Wine Card */}
            <Link to="/organic-biodynamic-wine" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 h-[450px]">
                <div className="relative h-[250px]">
                  <div className="w-full h-full">
                    <img 
                      src={wineCategoryImage} 
                      alt="Organic Wine"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-14 h-14 bg-[#E5B3B3] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🍷</span>
                    </div>
                  </div>
                </div>
                <div className="pt-10 pb-6 px-4 text-center">
                  <h3 className="text-xl font-playfair mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t('productCategories.organicWine.title')}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {t('productCategories.organicWine.subtitle')}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-[#E5B3B3] group-hover:text-[#d89f9f] transition-colors">
                    <span className="font-medium text-sm">{t('productCategories.biodynamicOil.seeMore')}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Supplements Card */}
            <Link to="/food_supplements" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 h-[450px]">
                <div className="relative h-[250px]">
                  <div className="w-full h-full">
                    <img 
                      src={supplementsCategoryImage} 
                      alt="Organic Supplements"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-14 h-14 bg-[#E5B3B3] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🌺</span>
                    </div>
                  </div>
                </div>
                <div className="pt-10 pb-6 px-4 text-center">
                  <h3 className="text-xl font-playfair mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t('productCategories.supplements.title')}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {t('productCategories.supplements.subtitle')}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-[#E5B3B3] group-hover:text-[#d89f9f] transition-colors">
                    <span className="font-medium text-sm">{t('productCategories.supplements.seeMore')}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Use Our Products Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-[#E5B3B3] uppercase tracking-wider mb-3">
                {t('whyUseProducts.subtitle')}
              </p>
              <h2 className="text-4xl font-playfair mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('whyUseProducts.title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('whyUseProducts.description')}
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Experience Card */}
              <div className="bg-white rounded-lg p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#E5B3B3]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-4xl text-[#E5B3B3] font-serif">"</span>
                </div>
                <h3 className="text-xl text-gray-800 mb-8">{t('whyUseProducts.cards.experience.title')}</h3>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop&crop=faces&auto=format" 
                    alt="Experience" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{t('whyUseProducts.cards.experience.subtitle')}</p>
                    <p className="text-gray-500 text-sm">{t('whyUseProducts.cards.experience.description')}</p>
                  </div>
                </div>
              </div>

              {/* Nature Card */}
              <div className="bg-white rounded-lg p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#E5B3B3]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-4xl text-[#E5B3B3] font-serif">"</span>
                </div>
                <h3 className="text-xl text-gray-800 mb-8">{t('whyUseProducts.cards.nature.title')}</h3>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&h=100&fit=crop&crop=faces&auto=format" 
                    alt="Organic" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{t('whyUseProducts.cards.nature.subtitle')}</p>
                    <p className="text-gray-500 text-sm">{t('whyUseProducts.cards.nature.description')}</p>
                  </div>
                </div>
              </div>

              {/* Health Card */}
              <div className="bg-white rounded-lg p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#E5B3B3]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-4xl text-[#E5B3B3] font-serif">"</span>
                </div>
                <h3 className="text-xl text-gray-800 mb-8">{t('whyUseProducts.cards.health.title')}</h3>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=100&fit=crop&crop=faces&auto=format" 
                    alt="Heal" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{t('whyUseProducts.cards.health.subtitle')}</p>
                    <p className="text-gray-500 text-sm">{t('whyUseProducts.cards.health.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatments Section */}
      <div className="relative bg-black text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop"
            alt="Spa Treatment Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-[#E5B3B3] uppercase tracking-wider mb-3 text-sm">
                {t('treatments.subtitle')}
              </p>
              <h2 className="text-4xl font-playfair mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('treatments.title')}
              </h2>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div className="space-y-6">
                <p className="text-[#E5B3B3] uppercase tracking-wider text-sm">
                  {t('treatments.rebootTitle')}
                </p>
                <h3 className="text-3xl font-playfair leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t('treatments.heading')}
                </h3>
              </div>

              {/* Right Side - Treatment Lists */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-3">
                  {Object.keys(t('treatments.leftColumn', { returnObjects: true })).map((key) => (
                    <div key={key} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#E5B3B3]"></div>
                      <span className="text-sm">{t(`treatments.leftColumn.${key}`)}</span>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  {Object.keys(t('treatments.rightColumn', { returnObjects: true })).map((key) => (
                    <div key={key} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#E5B3B3]"></div>
                      <span className="text-sm">{t(`treatments.rightColumn.${key}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <h2 className="text-center text-[#E5B3B3] uppercase tracking-wider mb-16">
              {t('services.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Life Managers */}
              <div className="text-center relative">
                <div className="relative mb-8">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#E5B3B3]">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop"
                      alt="Life Manager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-[#E5B3B3] flex items-center justify-center text-white font-semibold">
                    {t('services.lifeManagers.number')}
                  </div>
                </div>
                <h3 className="text-xl font-playfair mb-4">{t('services.lifeManagers.title')}</h3>
                <p className="text-gray-600 text-sm">{t('services.lifeManagers.description')}</p>
              </div>

              {/* Certifications */}
              <div className="text-center relative">
                <div className="relative mb-8">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#E5B3B3]">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=500&auto=format&fit=crop"
                      alt="Certifications"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-[#E5B3B3] flex items-center justify-center text-white font-semibold">
                    {t('services.certifications.number')}
                  </div>
                </div>
                <h3 className="text-xl font-playfair mb-4">{t('services.certifications.title')}</h3>
                <p className="text-gray-600 text-sm">{t('services.certifications.description')}</p>
              </div>

              {/* Job Opportunities */}
              <div className="text-center relative">
                <div className="relative mb-8">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#E5B3B3]">
                    <img 
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop"
                      alt="Job Opportunities"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-[#E5B3B3] flex items-center justify-center text-white font-semibold">
                    {t('services.jobOpportunities.number')}
                  </div>
                </div>
                <h3 className="text-xl font-playfair mb-4">{t('services.jobOpportunities.title')}</h3>
                <p className="text-gray-600 text-sm">{t('services.jobOpportunities.description')}</p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[45%] left-0 right-0 border-t-2 border-[#E5B3B3] -z-10"></div>
          </div>
        </div>
      </div>

      {/* Headquarters Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-playfair text-center mb-16">
              {t('headquarters.title')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Headquarters Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?w=800&auto=format&fit=crop&q=80" 
                    alt="Our Headquarters"
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-playfair mb-4">
                      {t('headquarters.cards.headquarters.title')}
                    </h3>
                    <a href="/headquarters" className="text-sm font-medium tracking-wider hover:text-[#E5B3B3] transition-colors flex items-center gap-2">
                      {t('headquarters.cards.headquarters.readMore')}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Olive Oil Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80" 
                    alt="Biodynamic Olive Oil"
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-playfair mb-4">
                      {t('headquarters.cards.oliveOil.title')}
                    </h3>
                    <a href="/biological-olive-oil" className="text-sm font-medium tracking-wider hover:text-[#E5B3B3] transition-colors flex items-center gap-2">
                      {t('headquarters.cards.oliveOil.readMore')}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Supplements Card */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80" 
                    alt="Food Supplements"
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-playfair mb-4">
                      {t('headquarters.cards.supplements.title')}
                    </h3>
                    <a href="/food_supplements" className="text-sm font-medium tracking-wider hover:text-[#E5B3B3] transition-colors flex items-center gap-2">
                      {t('headquarters.cards.supplements.readMore')}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BC1000Page; 