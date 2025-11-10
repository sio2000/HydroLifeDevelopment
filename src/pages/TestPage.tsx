import React from 'react';

const TestPage: React.FC = () => {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-sky-500 to-indigo-600 opacity-80" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
            Test Page
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-sky-100 text-center max-w-3xl mx-auto">
            Αυτή είναι μια εσωτερική σελίδα δοκιμών. Η πρόσβαση είναι δυνατή μόνο αν
            γνωρίζετε το ακριβές URL (`/test`).
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Σκοπός</h2>
          <p className="text-gray-700 leading-relaxed">
            Η συγκεκριμένη σελίδα χρησιμοποιείται για δοκιμές περιεχομένου και διάταξης.
            Δεν υπάρχει σύνδεσμος στο μενού ή σε άλλο σημείο του ιστότοπου· η πρόσβαση
            γίνεται αποκλειστικά μέσω άμεσης πληκτρολόγησης της διαδρομής URL.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Τι να δοκιμάσετε</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Στυλ και τυπογραφία Tailwind</li>
              <li>Ανταπόκριση σε κινητές και μεγάλες οθόνες</li>
              <li>Ρύθμιση SEO/Meta (αν χρειαστεί μελλοντικά)</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Χρήσιμες σημειώσεις</h3>
            <p className="text-gray-700 leading-relaxed">
              Προσθέστε ή αφαιρέστε περιεχόμενο όπως απαιτείται για να εξυπηρετηθούν οι
              ανάγκες δοκιμών. Η σελίδα δεν εμφανίζεται στην πλοήγηση, επομένως δεν θα τη
              βρουν οι τελικοί χρήστες κατά την περιήγησή τους.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestPage;

