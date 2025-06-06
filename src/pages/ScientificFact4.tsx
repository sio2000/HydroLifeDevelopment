import React from 'react';
import { Droplets } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80'; // Καταρράκτης, καθαρό νερό, φύση

const ScientificFact4 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-start px-0 pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center mb-[-80px]">
        <img
          src={HERO_IMAGE}
          alt={i18n.language === 'en' ? 'Bioavailability and hydrogen water' : 'Βιοδιαθεσιμότητα και υδρογονωμένο νερό'}
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Droplets className="h-14 w-14 text-[#E8B4B4] mb-4 drop-shadow-lg" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-xl">
            {i18n.language === 'en'
              ? 'Bioavailability & Rapid Absorption'
              : 'Βιοδιαθεσιμότητα & Γρήγορη Απορρόφηση'}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center border border-blue-100 mt-24">
        <p className="text-lg text-gray-700 text-center mb-6">
          {i18n.language === 'en'
            ? 'Advanced research confirms that hydrogenated water is rapidly absorbed and distributed throughout the body. The small size and high solubility of molecular hydrogen allow it to quickly reach tissues and organs, maximizing its beneficial effects in a short period of time.'
            : 'Η προηγμένη έρευνα επιβεβαιώνει ότι το υδρογονωμένο νερό απορροφάται και διανέμεται γρήγορα σε όλο τον οργανισμό. Το μικρό μέγεθος και η υψηλή διαλυτότητα του μοριακού υδρογόνου του επιτρέπουν να φτάνει άμεσα στους ιστούς και τα όργανα, μεγιστοποιώντας τα οφέλη του σε σύντομο χρονικό διάστημα.'}
        </p>

        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="text-[#E8B4B4] font-bold text-xl">
            {i18n.language === 'en' ? '15 Minutes Action' : '15 Λεπτά Δράση'}
          </span>
          <span className="text-sm text-gray-400">
            {i18n.language === 'en'
              ? 'Noticeable effects in just 15 minutes after consumption.'
              : 'Αισθητά αποτελέσματα μόλις σε 15 λεπτά μετά την κατανάλωση.'}
          </span>
        </div>

        <div className="w-full h-1 bg-gradient-to-r from-[#E8B4B4] to-[#D89084] rounded-full mb-6"></div>

        <ul className="text-gray-600 text-base list-disc pl-6 space-y-2 text-left w-full">
          <li>
            {i18n.language === 'en'
              ? 'Rapid absorption and distribution throughout the body.'
              : 'Γρήγορη απορρόφηση και διανομή σε όλο τον οργανισμό.'}
          </li>
          <li>
            {i18n.language === 'en'
              ? 'Maximizes the beneficial effects of hydrogen in a short time.'
              : 'Μεγιστοποιεί τα οφέλη του υδρογόνου σε σύντομο χρόνο.'}
          </li>
          <li>
            {i18n.language === 'en'
              ? 'Ideal for immediate support of cellular and organ health.'
              : 'Ιδανικό για άμεση υποστήριξη της υγείας κυττάρων και οργάνων.'}
          </li>
          <li>
            {i18n.language === 'en'
              ? 'Safe and natural absorption process.'
              : 'Ασφαλής και φυσική διαδικασία απορρόφησης.'}
          </li>
        </ul>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <span className="italic">
            {i18n.language === 'en'
              ? 'The high bioavailability of hydrogenated water makes it a unique choice for those seeking fast and effective wellness support.'
              : 'Η υψηλή βιοδιαθεσιμότητα του υδρογονωμένου νερού το καθιστά μοναδική επιλογή για όσους αναζητούν γρήγορη και αποτελεσματική υποστήριξη ευεξίας.'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScientificFact4; 