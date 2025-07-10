import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BeakerIcon, 
  CogIcon, 
  SparklesIcon, 
  HeartIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const HOReCAPage = () => {
  const { t, ready, i18n } = useTranslation();

  // Safe translation helper
  const safeT = (key: string, fallback: string = key) => {
    try {
      const result = t(key);
      return result && result !== key ? result : fallback;
    } catch (error) {
      console.error(`Translation error for ${key}:`, error);
      return fallback;
    }
  };

  if (!ready) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Φόρτωση μεταφράσεων... / Loading translations...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {safeT('horeca.title', 'HO.RE.CA.')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            {safeT('horeca.description', 'Λύσεις Μοριακού Υδρογόνου για Ξενοδοχεία, Εστιατόρια & Καφέ')}
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-6 py-3">
            <SparklesIcon className="h-6 w-6 mr-2" />
            <span className="font-medium">
              {safeT('horeca.systemPresentation.title', 'ΠΑΡΟΥΣΙΑΣΗ ΣΥΣΤΗΜΑΤΟΣ ΕΠΕΞΕΡΓΑΣΙΑΣ ΚΑΙ ΕΜΠΛΟΥΤΙΣΜΟΥ ΝΕΡΟΥ')}
            </span>
          </div>
        </div>
      </section>



      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* pH Regulator Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <BeakerIcon className="h-10 w-10 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">
                {safeT('horeca.systemPresentation.phRegulator.title', '1. Ο ΡΥΘΜΙΣΤΗΣ PH')}
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              {safeT('horeca.systemPresentation.phRegulator.description', 'είναι για την προσαρμογή του pH πριν από τη διαδικασία καθαρισμού ή επεξεργασίας.')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {i18n.language === 'el' ? 'Παραδείγματα Χρήσης' : 'Usage Examples'}
                </h3>
                <ul className="space-y-2">
                  {(t('horeca.systemPresentation.phRegulator.examples', { returnObjects: true }) as string[]).map((example, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  {i18n.language === 'el' ? 'Ξενοδοχειακή Χρήση' : 'Hotel Use'}
                </h3>
                <p className="text-blue-700">
                  {safeT('horeca.systemPresentation.phRegulator.hotelUse', 'Για ένα ξενοδοχείο, το νερό πρέπει να είναι ιδανικό για διάφορες χρήσεις')}
                </p>
              </div>
            </div>

            {/* Ideal pH Levels */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {safeT('horeca.systemPresentation.phRegulator.idealPh.title', 'Ιδανικό pH για Ξενοδοχειακή Χρήση')}
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Dishwashing */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {safeT('horeca.systemPresentation.phRegulator.idealPh.dishwashing.title', '1. Για Πλύσιμο Πιάτων και Μαγειρικών Σκευών')}
                  </h4>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {safeT('horeca.systemPresentation.phRegulator.idealPh.dishwashing.range', 'Ιδανικό pH: 7.5 - 8.5')}
                  </div>
                  <ul className="space-y-2">
                    {(t('horeca.systemPresentation.phRegulator.idealPh.dishwashing.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bathing */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {safeT('horeca.systemPresentation.phRegulator.idealPh.bathing.title', '2. Για Μπάνια και Υγιεινή Πελατών')}
                  </h4>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {safeT('horeca.systemPresentation.phRegulator.idealPh.bathing.range', 'Ιδανικό pH: 5.5 - 7.5')}
                  </div>
                  <ul className="space-y-2">
                    {(t('horeca.systemPresentation.phRegulator.idealPh.bathing.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckIcon className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cleaning */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {safeT('horeca.systemPresentation.phRegulator.idealPh.cleaning.title', '3. Για Καθαριστικά και Πλυντήρια Ρούχων')}
                  </h4>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {safeT('horeca.systemPresentation.phRegulator.idealPh.cleaning.range', 'Ιδανικό pH: 7 - 9')}
                  </div>
                  <ul className="space-y-2">
                    {(t('horeca.systemPresentation.phRegulator.idealPh.cleaning.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckIcon className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Drinking */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {safeT('horeca.systemPresentation.phRegulator.idealPh.drinking.title', '4. Ιδανικό pH για πόσιμο νερό')}
                  </h4>
                  <div className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {safeT('horeca.systemPresentation.phRegulator.idealPh.drinking.range', 'Ιδανικό εύρος pH: 7.0 - 9.5')}
                  </div>
                  <p className="text-sm text-gray-600">
                    {safeT('horeca.systemPresentation.phRegulator.idealPh.drinking.description', 'Εξασφαλίζει ασφαλές νερό για την υγεία χωρίς βλάβες στον οργανισμό')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-yellow-800 font-medium">
                💡 {safeT('horeca.systemPresentation.phRegulator.systemNote', 'Προτιμότερο να υπάρχουν δύο επιλογές pH που είναι στο μέσο όρο για όλα τα τμήματα')}
              </p>
            </div>
          </div>
        </section>

        {/* Water Hardness Regulator */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <CogIcon className="h-10 w-10 text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">
                {safeT('horeca.systemPresentation.hardnessRegulator.title', '2. Ο ΡΥΘΜΙΣΤΗΣ ΣΚΛΗΡΟΤΗΤΑΣ ΝΕΡΟΥ')}
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              {safeT('horeca.systemPresentation.hardnessRegulator.description', 'είναι η συσκευή που χρησιμοποιείται για να μειώσει ή να ελέγξει τη σκληρότητα του νερού')}
            </p>

            <div className="bg-indigo-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                {i18n.language === 'el' ? 'Σκοπός Συστήματος' : 'System Purpose'}
              </h3>
              <p className="text-indigo-700">
                {safeT('horeca.systemPresentation.hardnessRegulator.purpose', 'Απαραίτητο για την προστασία εξοπλισμού και βελτίωση της εμπειρίας των πελατών')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {safeT('horeca.systemPresentation.hardnessRegulator.benefits.title', 'Πλεονεκτήματα σε ξενοδοχειακές εγκαταστάσεις')}
                </h3>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">
                    ✅ {safeT('horeca.systemPresentation.hardnessRegulator.benefits.saltReduction', 'Μείωση αποθέσεων αλάτων σε:')}
                  </h4>
                  <ul className="ml-6 space-y-1">
                    {(t('horeca.systemPresentation.hardnessRegulator.benefits.equipment', { returnObjects: true }) as string[]).map((equipment, index) => (
                      <li key={index} className="text-gray-600">• {equipment}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {i18n.language === 'el' ? 'Επιπλέον Οφέλη' : 'Additional Benefits'}
                </h3>
                <ul className="space-y-3">
                  {(t('horeca.systemPresentation.hardnessRegulator.benefits.other', { returnObjects: true }) as string[]).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <SparklesIcon className="h-10 w-10 text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">
                {safeT('horeca.systemPresentation.filters.title', 'Φίλτρα Γραφίτη και Άμμου')}
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              {safeT('horeca.systemPresentation.filters.description', 'Τα φίλτρα που χρησιμοποιούμε στο δικό μας σύστημα είναι γραφίτη και άμμου.')}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  {safeT('horeca.systemPresentation.filters.graphiteFilters.title', 'Φίλτρα Γραφίτη')}
                </h3>
                <p className="text-green-700 mb-4">
                  {safeT('horeca.systemPresentation.filters.graphiteFilters.description', 'χρησιμοποιούνται κυρίως για την απομάκρυνση οργανικών ακαθαρσιών')}
                </p>
                <h4 className="font-semibold text-green-800 mb-2">
                  {safeT('horeca.systemPresentation.filters.graphiteFilters.benefits.title', 'Πλεονεκτήματα:')}
                </h4>
                <ul className="space-y-2">
                  {(t('horeca.systemPresentation.filters.graphiteFilters.benefits.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  {safeT('horeca.systemPresentation.filters.sandFilters.title', 'Φίλτρα Άμμου')}
                </h3>
                <p className="text-blue-700 mb-4">
                  {safeT('horeca.systemPresentation.filters.sandFilters.description', 'είναι πολύ δημοφιλή και οικονομικά στην προκαθαρισμένη επεξεργασία νερού')}
                </p>
                <h4 className="font-semibold text-blue-800 mb-2">
                  {safeT('horeca.systemPresentation.filters.sandFilters.benefits.title', 'Πλεονεκτήματα:')}
                </h4>
                <ul className="space-y-2">
                  {(t('horeca.systemPresentation.filters.sandFilters.benefits.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckIcon className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {safeT('horeca.systemPresentation.filters.combination.title', 'Συνδυασμός Φίλτρων Γραφίτη και Άμμου')}
              </h3>
              <p className="text-gray-700 mb-4">
                {safeT('horeca.systemPresentation.filters.combination.description', 'Στα ξενοδοχεία και τις βιομηχανικές εγκαταστάσεις, συχνά συνδυάζονται τα δύο φίλτρα')}
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-center text-lg font-medium text-green-600 mb-2">
                  🔧 {safeT('horeca.systemPresentation.filters.selfCleaning', 'Τα φίλτρα μας έχουν σύστημα αυτοκαθαρισμού και δε χρειάζονται service.')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Electromagnetic System */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <HeartIcon className="h-10 w-10 text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">
                {safeT('horeca.systemPresentation.electromagneticSystem.title', '3. ΣΥΣΤΗΜΑ ΜΕ ΗΛΕΚΤΡΟΜΑΓΝΗΤΕΣ ΓΙΑ "ΖΩΝΤΑΝΟ ΝΕΡΟ"')}
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              {safeT('horeca.systemPresentation.electromagneticSystem.description', 'Οι ηλεκτρομαγνήτες μας ενεργοποιούν τα ελεύθερα ηλεκτρόνια του νερού')}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {i18n.language === 'el' ? 'Πρόβλημα' : 'Problem'}
                </h3>
                <p className="text-red-700">
                  {safeT('horeca.systemPresentation.electromagneticSystem.problem', 'Η κατάσταση του νερού, η εμφιάλωσή του, οι συνθήκες καθαρισμού και μεταφοράς στα σπίτια, απενεργοποιούν τα ηλεκτρόνια')}
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  {i18n.language === 'el' ? 'Λύση' : 'Solution'}
                </h3>
                <p className="text-green-700">
                  {safeT('horeca.systemPresentation.electromagneticSystem.solution', 'Το μηχάνημά μας επαναφέρει την ηλεκτροδιέγερσή του')}
                </p>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-blue-800 font-medium">
                ⚡ {safeT('horeca.systemPresentation.electromagneticSystem.note', 'Η φόρτισή του είναι ακαριαία περνώντας στο επόμενο στάδιο που είναι ο εμπλουτισμός του με μοριακό υδρογόνο.')}
              </p>
            </div>
          </div>
        </section>

        {/* Hydrogen Enrichment */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <SparklesIcon className="h-10 w-10 text-cyan-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">
                {safeT('horeca.systemPresentation.hydrogenEnrichment.title', '4. ΕΜΠΛΟΥΤΙΣΜΟΣ ΜΕ ΜΟΡΙΑΚΟ ΥΔΡΟΓΟΝΟ')}
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              {safeT('horeca.systemPresentation.hydrogenEnrichment.introduction', 'Το υδρογόνο είναι το μικρότερο χημικό στοιχείο στη φύση')}
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-cyan-800 mb-3">
                {i18n.language === 'el' ? 'Οφέλη' : 'Benefits'}
              </h3>
              <p className="text-cyan-700">
                {safeT('horeca.systemPresentation.hydrogenEnrichment.benefits', 'Το υδρογονωμένο νερό είναι η φυσική λύση για υγεία, ευεξία και ανάπτυξη')}
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">
                🎯 {i18n.language === 'el' ? 'Κύριο Πλεονέκτημα' : 'Key Advantage'}
              </h4>
              <p className="text-yellow-800">
                {safeT('horeca.systemPresentation.hydrogenEnrichment.keyAdvantage', 'Το σύστημα υδρογόνωσης του νερού είναι το μεγαλύτερο ατού του συνολικού συστήματος')}
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-emerald-800 mb-3">
                {i18n.language === 'el' ? 'Επιχειρηματικά Οφέλη' : 'Business Benefits'}
              </h4>
              <p className="text-emerald-700 mb-3">
                {safeT('horeca.systemPresentation.hydrogenEnrichment.businessBenefits.title', 'Τα πλεονεκτήματα του μοριακού υδρογόνου σε χρήση των πελατών και του προσωπικού είναι σε σχέση με:')}
              </p>
              <ul className="space-y-2">
                {(t('horeca.systemPresentation.hydrogenEnrichment.businessBenefits.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckIcon className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-emerald-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                {safeT('horeca.systemPresentation.companyInfo.title', 'HYDROGEN CONSTRUCTION AND SOLUTION LTD')}
              </h2>
              <p className="text-xl text-slate-300">
                {safeT('horeca.systemPresentation.companyInfo.subtitle', 'ΕΞΕΙΔΙΚΕΥΜΕΝΑ ΜΗΧΑΝΗΜΑΤΑ ΠΑΡΑΓΩΓΗΣ ΜΟΡΙΑΚΟΥ ΥΔΡΟΓΟΝΟΥ')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <PhoneIcon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">
                  {i18n.language === 'el' ? 'Τηλέφωνο' : 'Phone'}
                </h3>
                <p className="text-slate-300">
                  {safeT('horeca.systemPresentation.companyInfo.contact.phone', 'Τηλ. 00306980900300')}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <EnvelopeIcon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-slate-300">
                  {safeT('horeca.systemPresentation.companyInfo.contact.email', 'infohydrogenlife@gmail.com')}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <GlobeAltIcon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Website</h3>
                <p className="text-slate-300">
                  {safeT('horeca.systemPresentation.companyInfo.contact.website', 'www.hydrogenlife.eu')}
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default HOReCAPage;