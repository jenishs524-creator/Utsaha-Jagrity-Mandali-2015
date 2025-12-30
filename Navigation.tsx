
import React, { useState } from 'react';
import { Menu, X, Church, Globe } from 'lucide-react';
import { Language } from '../App';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  language: Language;
  toggleLanguage: () => void;
  churchName: string;
  location: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage, language, toggleLanguage, churchName, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', en: 'Home', ne: 'घर' },
    { id: 'about', en: 'About', ne: 'बारेमा' },
    { id: 'ministries', en: 'Ministries', ne: 'सेवाहरू' },
    { id: 'bible-training', en: 'Bible Training', ne: 'तालिम' },
    { id: 'companion', en: 'Scripture AI', ne: 'एआई साथी' },
    { id: 'contact', en: 'Visit', ne: 'भेट्नुहोस्' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <Church className="h-8 w-8 text-nepal-blue mr-2 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-slate-900 leading-none truncate max-w-[200px] md:max-w-none">{churchName}</span>
              <span className="text-[10px] md:text-xs text-slate-500 font-medium tracking-widest uppercase truncate max-w-[200px] md:max-w-none">{location}</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[10px] lg:text-xs font-bold transition-colors duration-200 uppercase tracking-wider ${
                  currentPage === item.id
                    ? 'text-nepal-blue border-b-2 border-nepal-blue'
                    : 'text-slate-600 hover:text-nepal-blue'
                }`}
              >
                {language === 'en' ? item.en : item.ne}
              </button>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <Globe size={14} />
              <span>{language === 'en' ? 'NE' : 'EN'}</span>
            </button>

            <button
               onClick={() => handleNavClick('contact')}
               className="bg-nepal-red text-white px-5 py-2 rounded-full text-[10px] font-bold hover:bg-red-700 transition-all shadow-md active:scale-95 uppercase tracking-widest"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
             <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600"
            >
              <Globe size={14} />
              <span>{language === 'en' ? 'NE' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'bg-slate-50 text-nepal-blue'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {language === 'en' ? item.en : item.ne}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
