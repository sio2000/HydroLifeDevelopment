import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Factory, Zap, Leaf, TrendingUp, Droplets, Recycle, Award, Shield, ArrowRight, Play } from 'lucide-react';
import { useEffect } from 'react';

const Industry = () => {
  useEffect(() => {
    console.log('Industry component mounted');
  }, []);

  try {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleContactClick = () => {
      console.log('Contact button clicked');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        navigate('/contact');
      }, 300);
    };

    const handleLearnMoreClick = () => {
      console.log('Learn more button clicked');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        navigate('/products');
      }, 300);
    };

    useEffect(() => {
      console.log('Rendering Special Machinery Section');
    }, []);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full mb-6">
                <Factory className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{t('industry.heroTag')}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {t('industry.title')}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                {t('industry.subtitle')}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            
            {/* Applications Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                    <Factory className="w-5 h-5 mr-2 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-800">{t('industry.applicationsTag')}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                    {t('industry.applications.title')}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('industry.applications.description')}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {(() => {
                      const appList = t('industry.applications.list', { returnObjects: true });
                      console.log('industry.applications.list:', appList);
                      return Array.isArray(appList)
                        ? appList.map((item: any, index: number) => {
                            if (typeof item !== 'string') {
                              return <div key={index} style={{color:'red'}}>Λάθος τύπος δεδομένων στη μετάφραση applications.list: {JSON.stringify(item)}</div>;
                            }
                            console.log('Application Item:', item);
                            return (
                              <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-blue-200">
                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4 flex-shrink-0"></div>
                                <span className="text-gray-700 font-medium">{item}</span>
                              </div>
                            );
                          })
                        : <div style={{color:'red'}}>Λάθος δεδομένα στη μετάφραση applications.list</div>;
                    })()}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                    <img
                      src="/assets/images/q1.jpg"
                      alt={t('industry.applications.imageAlt')}
                      className="w-full h-[400px] object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Special Machinery Section */}
            <section className="mb-20">
              <div className="space-y-8 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 rounded-3xl shadow-xl border-2 border-indigo-200 p-8 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 opacity-20 text-indigo-300 text-[120px] pointer-events-none select-none">
                  <Factory className="w-[120px] h-[120px]" />
                </div>
                <div className="inline-flex items-center px-5 py-2 bg-indigo-200 rounded-full shadow-md animate-pulse">
                  <Factory className="w-6 h-6 mr-2 text-indigo-700" />
                  <span className="text-base font-bold text-indigo-900 tracking-wide uppercase">{t('industry.specialMachineryTag')}</span>
                </div>
                <h2 className="text-4xl font-extrabold text-indigo-900 drop-shadow-lg flex items-center gap-3">
                  <Zap className="w-8 h-8 text-yellow-400 animate-bounce" />
                  {t('industry.specialMachinery.title')}
                </h2>
                <div className="grid grid-cols-1 gap-5">
                  {(() => {
                    const list = t('industry.specialMachinery.list', { returnObjects: true });
                    return Array.isArray(list)
                      ? list.map((item: any, idx: number) => {
                          if (typeof item !== 'string') {
                            return <div key={idx} className="text-red-600 font-bold">Λάθος τύπος δεδομένων στη μετάφραση ειδικών μηχανημάτων: {JSON.stringify(item)}</div>;
                          }
                          return (
                            <div
                              key={idx}
                              className="flex items-center gap-4 p-5 bg-white/90 rounded-2xl shadow-lg border border-indigo-100 hover:scale-[1.03] hover:shadow-2xl hover:border-indigo-300 transition-all duration-300 group relative"
                            >
                              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                                <Droplets className="w-6 h-6" />
                              </span>
                              <span className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                                {item}
                              </span>
                            </div>
                          );
                        })
                      : <div className="text-red-600 font-bold">Λάθος στη μετάφραση ειδικών μηχανημάτων</div>;
                  })()}
                </div>
              </div>
            </section>

            {/* Efficiency Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl transform -rotate-3"></div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                    <img
                      src="/assets/images/q2.jpg"
                      alt={t('industry.efficiency.imageAlt')}
                      className="w-full h-[400px] object-cover rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="space-y-8 order-1 lg:order-2">
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
                    <Zap className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-sm font-semibold text-green-800">{t('industry.efficiencyTag')}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                    {t('industry.efficiency.title')}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('industry.efficiency.description')}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {(t('industry.efficiency.benefits', { returnObjects: true }) as { title: string; description: string }[]).map((benefit: { title: string; description: string }, index: number) => {
                      const icons = [TrendingUp, Zap, Recycle, Award];
                      const Icon = icons[index % icons.length];
                      const colors = ['from-blue-500 to-blue-600', 'from-green-500 to-green-600', 'from-purple-500 to-purple-600', 'from-orange-500 to-orange-600'];
                      
                      return (
                        <div key={index} className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gray-200 hover:-translate-y-1">
                          <div className={`w-12 h-12 bg-gradient-to-r ${colors[index]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Gallery Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
                  <Play className="w-5 h-5 mr-2 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-800">{t('industry.innovationTag')}</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('industry.innovationTitle')}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t('industry.innovationSubtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src="/assets/images/q1.jpg"
                    alt={t('industry.gallery.industrialProcesses.title')}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white mb-2">{t('industry.gallery.industrialProcesses.title')}</h3>
                    <p className="text-gray-200 text-sm">{t('industry.gallery.industrialProcesses.description')}</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src="/assets/images/q2.jpg"
                    alt={t('industry.gallery.cleanTechnology.title')}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white mb-2">{t('industry.gallery.cleanTechnology.title')}</h3>
                    <p className="text-gray-200 text-sm">{t('industry.gallery.cleanTechnology.description')}</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src="/assets/images/q3.jpg"
                    alt={t('industry.gallery.futureEnergy.title')}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white mb-2">{t('industry.gallery.futureEnergy.title')}</h3>
                    <p className="text-gray-200 text-sm">{t('industry.gallery.futureEnergy.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full mb-6">
                  <Leaf className="w-5 h-5 mr-2 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-800">{t('industry.environmentTag')}</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('industry.environmental.title')}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t('industry.environmental.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {(t('industry.environmental.impacts', { returnObjects: true }) as { title: string; description: string }[]).map((impact: { title: string; description: string }, index: number) => {
                  const icons = [Leaf, Droplets, Shield, Recycle];
                  const Icon = icons[index % icons.length];
                  const gradients = [
                    'from-emerald-500 to-teal-500',
                    'from-blue-500 to-cyan-500', 
                    'from-green-500 to-emerald-500',
                    'from-teal-500 to-green-500'
                  ];
                  
                  return (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <div className={`w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-3 text-xl">{impact.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Statistics Section */}
            <div className="mb-20">
              <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">{t('industry.statistics.title')}</h2>
                  <p className="text-xl text-blue-100">{t('industry.statistics.subtitle')}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-300 mb-2">40%</div>
                    <div className="text-blue-100">{t('industry.statistics.energyCost')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-300 mb-2">60%</div>
                    <div className="text-blue-100">{t('industry.statistics.co2Reduction')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-300 mb-2">25%</div>
                    <div className="text-blue-100">{t('industry.statistics.productivity')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-300 mb-2">90%</div>
                    <div className="text-blue-100">{t('industry.statistics.satisfaction')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {t('industry.cta.title')}
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  {t('industry.cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleContactClick}
                    className="group px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer hover:scale-105"
                  >
                    {t('industry.cta.contactButton')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button 
                    onClick={handleLearnMoreClick}
                    className="px-8 py-4 bg-blue-500/30 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-blue-500/40 transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    {t('industry.cta.learnButton')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Industry page crashed:', error);
    return <div style={{ color: 'red', padding: 40, fontSize: 24 }}>Σφάλμα στη σελίδα Βιομηχανίας: {String(error)}</div>;
  }
};

export default Industry; 