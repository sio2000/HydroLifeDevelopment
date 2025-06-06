import React from 'react';
import { Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'; // Φυσικό τοπίο με λίμνη και δέντρα (ηρεμία, γνωστική λειτουργία)

const ScientificFact3 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-start px-0 pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center mb-[-80px]">
        <img
          src={HERO_IMAGE}
          alt={i18n.language === 'en' ? 'Cognitive function and hydrogen water' : 'Γνωστική λειτουργία και υδρογονωμένο νερό'}
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Brain className="h-14 w-14 text-[#D89084] mb-4 drop-shadow-lg" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-xl">
            {i18n.language === 'en'
              ? 'Cognitive Function & Neuroprotection'
              : 'Γνωστική Λειτουργία & Νευροπροστασία'}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center border border-blue-100 mt-24">
        <p className="text-lg text-gray-700 text-center mb-6">
          {i18n.language === 'en'
            ? 'Recent clinical studies reveal that hydrogen-rich water can enhance cognitive performance and provide neuroprotective effects. Molecular hydrogen acts as a selective antioxidant in the brain, reducing oxidative stress and supporting mental clarity, memory, and overall brain health.'
            : 'Πρόσφατες κλινικές μελέτες αποκαλύπτουν ότι το νερό πλούσιο σε υδρογόνο μπορεί να βελτιώσει τη γνωστική απόδοση και να προσφέρει νευροπροστατευτικές επιδράσεις. Το μοριακό υδρογόνο δρα ως επιλεκτικό αντιοξειδωτικό στον εγκέφαλο, μειώνοντας το οξειδωτικό στρες και υποστηρίζοντας τη διαύγεια, τη μνήμη και τη συνολική υγεία του εγκεφάλου.'}
        </p>

        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="text-[#D89084] font-bold text-xl">
            {i18n.language === 'en' ? '+40% Function' : '+40% Λειτουργία'}
          </span>
          <span className="text-sm text-gray-400">
            {i18n.language === 'en'
              ? 'Improved cognitive performance in clinical trials.'
              : 'Βελτιωμένη γνωστική απόδοση σε κλινικές δοκιμές.'}
          </span>
        </div>

        <div className="w-full h-1 bg-gradient-to-r from-[#D89084] to-[#F0B7A4] rounded-full mb-6"></div>

        <ul className="text-gray-600 text-base list-disc pl-6 space-y-2 text-left w-full">
          <li>
            {i18n.language === 'en'
              ? 'Reduces oxidative stress in the brain.'
              : 'Μειώνει το οξειδωτικό στρες στον εγκέφαλο.'}
          </li>
          <li>
            {i18n.language === 'en'
              ? 'Supports memory and mental clarity.'
              : 'Υποστηρίζει τη μνήμη και τη διαύγεια.'}
          </li>
          <li>
            {i18n.language === 'en'
              ? 'Promotes overall brain health and neuroprotection.'
              : 'Προάγει τη συνολική υγεία του εγκεφάλου και τη νευροπροστασία.'}
          </li>
          <li>
            {i18n.language === 'en'
              ? 'Safe and natural support for cognitive function.'
              : 'Ασφαλής και φυσική υποστήριξη της γνωστικής λειτουργίας.'}
          </li>
        </ul>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <span className="italic">
            {i18n.language === 'en'
              ? 'Hydrogen-rich water is a promising tool for supporting brain health and cognitive performance.'
              : 'Το νερό πλούσιο σε υδρογόνο αποτελεί ένα υποσχόμενο εργαλείο για τη στήριξη της υγείας του εγκεφάλου και της γνωστικής απόδοσης.'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScientificFact3; 