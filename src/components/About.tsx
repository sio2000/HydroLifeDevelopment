import React, { useEffect } from 'react';
import { ExternalLink, Sparkles, Waves, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  // Βεβαιώνομαι ότι το i18n έχει φορτωθεί
  useEffect(() => {
    console.log("Current language:", i18n.language);
    console.log("Is i18n initialized:", i18n.isInitialized);
  }, [i18n]);

  // Fallback κείμενα σε περίπτωση που οι μεταφράσεις δεν λειτουργούν
  const texts = {
    tagline: "Ευεξία & Υγεία",
    title: "Quantum Wellness",
    subtitle: "Η Νέα Διάσταση στην Ευεξία",
    description1: "Η Quantum Wellness προσφέρει καινοτόμες λύσεις για την υγεία και την ευεξία, εστιάζοντας στη δύναμη της φύσης και της τεχνολογίας. Με εξειδικευμένες υπηρεσίες όπως το μοριακό υδρογόνο, την καθαρή αναπνοή, και τις ενεργειακές θεραπείες, προωθεί την ολιστική υγεία, την πρόληψη χρόνιων νοσημάτων και τη συνολική αναζωογόνηση του οργανισμού.",
    description2: "Στόχος της Quantum Wellness είναι να δημιουργήσει έναν νέο τρόπο ζωής, όπου το σώμα και το μυαλό λειτουργούν σε απόλυτη αρμονία με το περιβάλλον.",
    buttonText: "Επισκεφθείτε το Quantum Wellness"
  };

  // Προσπαθώ να πάρω μεταφράσεις, αλλά με fallback στα σκληρά κωδικοποιημένα κείμενα
  const getTranslation = (key: string, fallback: string): string => {
    const translation = t(key);
    return translation === key ? fallback : translation;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#f0f9ff] via-[#f8fafc] to-[#f5f3ff] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8BC6EC]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#9599E2]/10 rounded-full transform translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#A7D7C5]/10 rounded-full animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-[#D89084]/10 rounded-full animate-pulse" style={{ animationDuration: '9s' }} />
      </div>

      {/* Light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-40 left-1/4 w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#8BC6EC] to-transparent transform rotate-[30deg]" />
        <div className="absolute -top-40 left-1/3 w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#9599E2] to-transparent transform rotate-[20deg]" />
        <div className="absolute -top-40 right-1/3 w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#8BC6EC] to-transparent transform -rotate-[15deg]" />
        <div className="absolute -top-40 right-1/4 w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#9599E2] to-transparent transform -rotate-[25deg]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-white/40">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#8BC6EC] to-[#9599E2] text-white rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>{getTranslation('about.tagline', texts.tagline)}</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3f87a6] to-[#512da8] mb-8 leading-tight">
              {getTranslation('about.title', texts.title)}
            </h2>
            
            <div className="my-8 w-32 h-1 bg-gradient-to-r from-[#8BC6EC] to-[#9599E2] mx-auto rounded-full"></div>
            
            <div className="mb-10 text-lg text-gray-700 leading-relaxed space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 p-2 bg-[#A7D7C5]/20 rounded-full">
                  <Waves className="h-5 w-5 text-[#3f87a6]" />
                </div>
                <p>
                  {getTranslation('about.description.first', texts.description1)}
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 p-2 bg-[#D89084]/20 rounded-full">
                  <Leaf className="h-5 w-5 text-[#512da8]" />
                </div>
                <p>
                  {getTranslation('about.description.second', texts.description2)}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://quantumwellness.gr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#8BC6EC] to-[#9599E2] group-hover:from-[#9599E2] group-hover:to-[#8BC6EC] transition-all duration-500"></div>
                <div className="relative z-10 px-10 py-5 flex items-center border border-white/20 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg">
                  {getTranslation('about.buttonText', texts.buttonText)}
                  <ExternalLink className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="absolute -inset-[3px] -z-10 bg-gradient-to-r from-[#8BC6EC]/20 to-[#9599E2]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;