import React from 'react';
import { TestTube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80'; // Ποτάμι στη φύση, καθαρό νερό

const ScientificFact1 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-start px-0 pb-12">
      {/* Hero Section */}
      <div className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center mb-[-80px]">
        <img
          src={HERO_IMAGE}
          alt={i18n.language === 'en' ? 'Molecular structure of water' : 'Μοριακή δομή του νερού'}
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <TestTube className="h-14 w-14 text-[#D89084] mb-4 drop-shadow-lg" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-xl">
            {i18n.language === 'en'
              ? 'Molecular Structure & Hydrogenated Water'
              : 'Μοριακή Δομή & Υδρογονωμένο Νερό'}
          </h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center border border-blue-100 mt-24">
        <p className="text-lg text-gray-700 text-center mb-6">
          {i18n.language === 'en'
            ? 'Hydrogenated water stands out due to the unique molecular structure of hydrogen. Hydrogen molecules (H₂) are the smallest and lightest in the universe, allowing them to easily penetrate cell membranes and reach areas of the body that other antioxidants cannot. This targeted penetration ability is what makes hydrogenated water so effective in protecting cells from oxidative stress and maintaining cellular health.'
            : 'Το υδρογονωμένο νερό ξεχωρίζει χάρη στη μοναδική μοριακή δομή του υδρογόνου. Τα μόρια υδρογόνου (H₂) είναι τα μικρότερα και ελαφρύτερα στο σύμπαν, επιτρέποντάς τους να διεισδύουν εύκολα στις κυτταρικές μεμβράνες και να φτάνουν σε περιοχές του σώματος που άλλα αντιοξειδωτικά δεν μπορούν. Αυτή η ικανότητα στοχευμένης διείσδυσης είναι που κάνει το υδρογονωμένο νερό τόσο αποτελεσματικό στην προστασία των κυττάρων από το οξειδωτικό στρες και στη διατήρηση της κυτταρικής υγείας.'}
        </p>
        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="text-[#D89084] font-bold text-xl">
            {i18n.language === 'en' ? '99.9% Pure' : '99.9% Καθαρό'}
          </span>
          <span className="text-sm text-gray-400">
            {i18n.language === 'en'
              ? 'The hydrogen in hydrogenated water is extremely pure and bioavailable.'
              : 'Το υδρογόνο στο υδρογονωμένο νερό είναι εξαιρετικά καθαρό και βιοδιαθέσιμο.'}
          </span>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-[#D89084] to-[#E8B4B4] rounded-full mb-6"></div>
        <ul className="text-gray-600 text-base list-disc pl-6 space-y-2 text-left w-full">
          <li>{i18n.language === 'en' ? 'Penetrates deeply into tissues and cells.' : 'Διεισδύει βαθιά στους ιστούς και τα κύτταρα.'}</li>
          <li>{i18n.language === 'en' ? 'Helps neutralize free radicals.' : 'Συμβάλλει στην εξουδετέρωση των ελεύθερων ριζών.'}</li>
          <li>{i18n.language === 'en' ? 'Does not affect normal cellular signaling molecules.' : 'Δεν επηρεάζει τα φυσιολογικά μόρια σηματοδότησης των κυττάρων.'}</li>
          <li>{i18n.language === 'en' ? 'Supports the body\'s natural rejuvenation.' : 'Υποστηρίζει τη φυσική αναζωογόνηση του οργανισμού.'}</li>
        </ul>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <span className="italic">
            {i18n.language === 'en'
              ? 'The molecular structure of hydrogen is the key to the unique benefits of hydrogenated water for our health.'
              : 'Η μοριακή δομή του υδρογόνου είναι το κλειδί για τα μοναδικά οφέλη του υδρογονωμένου νερού στην υγεία μας.'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScientificFact1; 