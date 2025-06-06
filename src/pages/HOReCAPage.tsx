import React from 'react';
import { useTranslation } from 'react-i18next';

const HOReCAPage = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-sky-700 mb-8">
          {t('horeca.title')}
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
          {t('horeca.description')}
        </p>
        {/* Προσθέστε εδώ επιπλέον περιεχόμενο για τη σελίδα HO.RE.CA. */}
      </div>
    </main>
  );
};

export default HOReCAPage; 