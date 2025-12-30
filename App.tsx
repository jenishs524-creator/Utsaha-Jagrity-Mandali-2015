
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import AICompanion from './components/AICompanion';
import BibleTraining from './components/BibleTraining';

export type Language = 'en' | 'ne';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: string) => {
    window.location.hash = page;
    setCurrentPage(page);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ne' : 'en');
  };

  const churchName = "Utsaha Jagrity Mandali";
  const location = "Near Gokarneshwor Banquet, Kathmandu";
  const estDate = "23/04/2015";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-nepal-blue selection:text-white">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={navigateTo} 
        language={language} 
        toggleLanguage={toggleLanguage} 
        churchName={churchName}
        location={location}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigateTo} language={language} churchName={churchName} location={location} estDate={estDate} />
            <Services language={language} location={location} estDate={estDate} />
            <About language={language} estDate={estDate} location={location} />
            <Contact language={language} location={location} estDate={estDate} />
          </>
        )}
        
        {currentPage === 'about' && (
          <div className="animate-fade-in">
             <div className="bg-church-900 py-24 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 blur-[120px]"></div>
                <h1 className="text-5xl md:text-7xl text-white font-serif font-bold relative z-10 tracking-tight">
                  {language === 'en' ? 'Our Ministry Profile' : 'हाम्रो मन्त्रालयको विवरण'}
                </h1>
                <p className="text-sky-300 mt-4 font-serif italic text-xl relative z-10 uppercase tracking-widest">
                  {language === 'en' ? `Faith & Fellowship Since ${estDate}` : `विश्वास र संगति: ${estDate} देखि`}
                </p>
             </div>
             <About language={language} estDate={estDate} location={location} />
             <div className="bg-slate-50 py-20 text-center border-t border-slate-200">
                 <p className="text-slate-400 font-serif italic text-2xl max-w-2xl mx-auto px-4">
                    {language === 'en' 
                      ? '"For where two or three gather in my name, there am I with them."' 
                      : '"जहाँ दुई वा तीन जना मेरो नाममा भेला हुन्छन्, म त्यहाँ तिनीहरूको बीचमा हुनेछु।"'
                    }
                    <br /> 
                    <span className="text-nepal-red not-italic font-bold text-lg mt-4 block">- Matthew 18:20</span>
                 </p>
             </div>
          </div>
        )}

        {currentPage === 'ministries' && (
          <div className="animate-fade-in">
              <div className="bg-church-900 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl text-white font-serif font-bold tracking-tight">
                   {language === 'en' ? 'Ministries & Service' : 'मन्त्रालय र सेवाहरू'}
                </h1>
             </div>
             <Services language={language} location={location} estDate={estDate} />
          </div>
        )}

        {currentPage === 'bible-training' && (
          <div className="animate-fade-in">
              <div className="bg-church-900 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl text-white font-serif font-bold tracking-tight">
                   {language === 'en' ? 'Equipping Disciples' : 'चेलाहरूलाई सुसज्जित पार्दै'}
                </h1>
             </div>
             <BibleTraining language={language} />
          </div>
        )}

        {currentPage === 'companion' && (
          <div className="animate-fade-in">
             <div className="bg-indigo-950 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl text-white font-serif font-bold tracking-tight">Scripture AI Companion</h1>
             </div>
             <AICompanion language={language} />
          </div>
        )}

        {currentPage === 'contact' && (
           <div className="animate-fade-in">
              <Contact language={language} location={location} estDate={estDate} />
           </div>
        )}
      </main>

      {currentPage !== 'home' && currentPage !== 'contact' && (
        <footer className="bg-church-900 text-slate-400 py-12 text-center border-t border-slate-800">
           <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                   <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white">⛪</div>
                   <span className="font-serif font-bold text-white text-xl">{churchName}</span>
                </div>
                <p className="text-sm tracking-widest uppercase">{location}</p>
                <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
              </div>
           </div>
        </footer>
      )}
    </div>
  );
};

export default App;
