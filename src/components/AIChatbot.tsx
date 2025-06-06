import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AIChatbot: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Default features in case translation fails
  const defaultFeatures = {
    el: [
      "24/7 διαθεσιμότητα",
      "Άμεσες απαντήσεις",
      "Επιστημονικά τεκμηριωμένες πληροφορίες",
      "Προσωποποιημένη υποστήριξη"
    ],
    en: [
      "24/7 availability",
      "Instant responses",
      "Scientifically backed information",
      "Personalized support"
    ]
  };

  // Safely get features with fallback
  const features = React.useMemo(() => {
    try {
      const translatedFeatures = t('aiChatbot.features', { returnObjects: true });
      return Array.isArray(translatedFeatures) ? translatedFeatures : defaultFeatures[currentLang as 'el' | 'en'];
    } catch (error) {
      console.error('Translation error:', error);
      return defaultFeatures[currentLang as 'el' | 'en'];
    }
  }, [t, currentLang]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
              {t('aiChatbot.title', currentLang === 'el' ? 'AI Chatbot για Υδρογονωμένο Νερό' : 'AI Chatbot for Hydrogen Water')}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl text-gray-700 mb-10 font-light"
          >
            {t('aiChatbot.subtitle', currentLang === 'el' ? 'Μάθετε περισσότερα για τα οφέλη του υδρογονωμένου νερού' : 'Learn more about the benefits of hydrogen water')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            {t('aiChatbot.description', currentLang === 'el' 
              ? 'Οι ειδικοί μας σε τεχνητή νοημοσύνη είναι εδώ για να απαντήσουν σε όλες τις ερωτήσεις σας σχετικά με το υδρογονωμένο νερό και τα οφέλη του για την υγεία σας.'
              : 'Our AI experts are here to answer all your questions about hydrogen water and its health benefits.')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <h3 className="text-4xl font-semibold text-gray-900 mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                {t('aiChatbot.features.0', currentLang === 'el' ? 'Χαρακτηριστικά' : 'Features')}
              </h3>
              <ul className="space-y-8">
                {features.map((feature: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center text-gray-700 text-xl group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6 transform group-hover:rotate-12 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl transform rotate-3"></div>
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden relative">
              <iframe
                style={{ width: '100%', height: '600px' }}
                src="https://app.fastbots.ai/embed/cmatro7b200ywn8lwhd3yq5ce"
                title="AI Chatbot"
                className="border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatbot; 