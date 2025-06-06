import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import oil1 from '/assets/images/oil.png';
import oil2 from '/assets/images/oil2.png';
import oil3 from '/assets/images/oil3.png';
import oil4 from '/assets/images/oil4.png';
import oil5 from '/assets/images/oil5.png';

const BiologicalOliveOilPage = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')`
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair">
            {t('biologicalOliveOil.hero.title')}
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wider max-w-3xl mb-8">
            {t('biologicalOliveOil.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Introduction Section */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex-1 space-y-6"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-playfair text-[#2B5173] mb-6">
                {t('biologicalOliveOil.sections.intro.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('biologicalOliveOil.sections.intro.subtitle')}
              </p>
              <p className="text-gray-600">
                {t('biologicalOliveOil.sections.intro.description')}
              </p>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={oil1} 
                alt="Biodynamic Olive Oil" 
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full"
              />
            </motion.div>
          </motion.div>

          {/* Biodynamic Farming Section */}
          <motion.div 
            className="flex flex-col md:flex-row-reverse items-center gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex-1 space-y-6"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-playfair text-[#2B5173] mb-6">
                {t('biologicalOliveOil.sections.farming.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('biologicalOliveOil.sections.farming.description')}
              </p>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={oil2} 
                alt="Biodynamic Farming" 
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full"
              />
            </motion.div>
          </motion.div>

          {/* Organic Approach Section */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex-1 space-y-6"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-playfair text-[#2B5173] mb-6">
                {t('biologicalOliveOil.sections.approach.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('biologicalOliveOil.sections.approach.description')}
              </p>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={oil3} 
                alt="Organic Approach" 
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full"
              />
            </motion.div>
          </motion.div>

          {/* Local Production Section */}
          <motion.div 
            className="flex flex-col md:flex-row-reverse items-center gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex-1 space-y-6"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-playfair text-[#2B5173] mb-6">
                {t('biologicalOliveOil.sections.production.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('biologicalOliveOil.sections.production.description')}
              </p>
            </motion.div>
            <motion.div 
              className="flex-1 flex gap-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <img 
                  src={oil4} 
                  alt="Local Production" 
                  className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full mb-6"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <img 
                  src={oil5} 
                  alt="Distribution" 
                  className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BiologicalOliveOilPage; 