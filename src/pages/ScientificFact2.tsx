import React from 'react';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80'; // Φυσικό τοπίο με καθαρό νερό και πράσινο περιβάλλον

const ScientificFact2 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-start px-0 pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center mb-[-80px]">
        <img
          src={HERO_IMAGE}
          alt={i18n.language === 'en' ? 'Antioxidant properties of hydrogenated water' : 'Αντιοξειδωτικές ιδιότητες του υδρογονωμένου νερού'}
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Shield className="h-14 w-14 text-[#D89084] mb-4 drop-shadow-lg" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-xl">
            {i18n.language === 'en'
              ? 'Antioxidant Properties & Cellular Protection'
              : 'Αντιοξειδωτικές Ιδιότητες & Κυτταρική Προστασία'}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center border border-blue-100 mt-24">
        <p className="text-lg text-gray-700 text-center mb-6">
          {i18n.language === 'en'
            ? 'Hydrogenated water is a powerful antioxidant that can selectively neutralize harmful free radicals while preserving beneficial reactive oxygen species. This selective antioxidant activity is unique to molecular hydrogen and makes it an ideal protective agent for cellular health.'
            : 'Το υδρογονωμένο νερό είναι ένα ισχυρό αντιοξειδωτικό που μπορεί να εξουδετερώσει επιλεκτικά τις επιβλαβείς ελεύθερες ρίζες διατηρώντας παράλληλα τα ωφέλιμα αντιδραστικά είδη οξυγόνου. Αυτή η επιλεκτική αντιοξειδωτική δραστηριότητα είναι μοναδική στο μοριακό υδρογόνο και το καθιστά ιδανικό προστατευτικό παράγοντα για την κυτταρική υγεία.'}
        </p>

        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="text-[#D89084] font-bold text-xl">
            {i18n.language === 'en' ? 'Selective Protection' : 'Επιλεκτική Προστασία'}
          </span>
          <span className="text-sm text-gray-400">
            {i18n.language === 'en'
              ? 'Targets only harmful free radicals while preserving beneficial ones.'
              : 'Στοχεύει μόνο στις επιβλαβείς ελεύθερες ρίζες διατηρώντας τις ωφέλιμες.'}
          </span>
        </div>

        <div className="w-full h-1 bg-gradient-to-r from-[#D89084] to-[#E8B4B4] rounded-full mb-6"></div>

        <ul className="text-gray-600 text-base list-disc pl-6 space-y-2 text-left w-full">
          <li>
            {i18n.language === 'en'
              ? 'Neutralizes the most harmful hydroxyl radicals (•OH).'
              : 'Εξουδετερώνει τις πιο επιβλαβείς υδροξυλικές ρίζες (•OH).'}
          </li>
          <li>
            {i18n.language === 'en'
              ? 'Preserves beneficial reactive oxygen species needed for cellular signaling.'
              : 'Διατηρεί τα ωφέλιμα αντιδραστικά είδη οξυγόνου που χρειάζονται για την κυτταρική σηματοδότηση.'}
          </li>
          <li>
            {i18n.language === 'en'
              ? 'Reduces oxidative stress without disrupting normal cellular functions.'
              : 'Μειώνει το οξειδωτικό στρες χωρίς να διαταράσσει τις φυσιολογικές κυτταρικές λειτουργίες.'}
          </li>
          <li>
            {i18n.language === 'en'
              ? 'Supports the body\'s natural antioxidant defense system.'
              : 'Υποστηρίζει το φυσικό αντιοξειδωτικό αμυντικό σύστημα του οργανισμού.'}
          </li>
        </ul>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <span className="italic">
            {i18n.language === 'en'
              ? 'The selective antioxidant properties of hydrogenated water make it a unique and effective tool for maintaining cellular health.'
              : 'Οι επιλεκτικές αντιοξειδωτικές ιδιότητες του υδρογονωμένου νερού το καθιστούν ένα μοναδικό και αποτελεσματικό εργαλείο για τη διατήρηση της κυτταρικής υγείας.'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScientificFact2; 