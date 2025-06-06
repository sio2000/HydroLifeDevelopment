import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import blueImage from '../../assets/images/hydrogencup.png';
import { useTranslation } from 'react-i18next';

const WestMacedonia = () => {
  const { t } = useTranslation();
  console.log('WestMacedonia component mounted');
  const items = t('westMacedonia.items', { returnObjects: true });
  console.log('WestMacedonia items:', items);
  const comment = t('westMacedonia.comment');
  console.log('WestMacedonia comment:', comment);
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={blueImage}
              alt="Hydrogen Machines and Systems"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              {t('westMacedonia.title')}
            </h2>
            <ul className="text-lg text-gray-600 leading-relaxed space-y-2">
              {Array.isArray(items)
                ? items.map((item: any, idx: number) => {
                    if (typeof item !== 'string') {
                      return <li key={idx} className="text-red-600 font-bold">Λάθος τύπος δεδομένων στη μετάφραση: {JSON.stringify(item)}</li>;
                    }
                    console.log('WestMacedonia item:', item);
                    return (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 w-3 h-3 rounded-full bg-blue-400 inline-block"></span>
                        <span>{item}</span>
                      </li>
                    );
                  })
                : <li className="text-red-600 font-bold">Λάθος στη μετάφραση λίστας</li>}
            </ul>
            <div className="text-blue-900 font-semibold mt-4">
              {comment}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WestMacedonia; 