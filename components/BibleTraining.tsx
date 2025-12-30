
import React from 'react';
import { BookOpen, GraduationCap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Language } from '../App';

interface BibleTrainingProps {
  language: Language;
}

const BibleTraining: React.FC<BibleTrainingProps> = ({ language }) => {
  const features = [
    { 
      en: { title: "Foundations", desc: "Core Christian doctrines." }, 
      ne: { title: "आधारहरू", desc: "मुख्य ईसाई सिद्धान्तहरू।" } 
    },
    { 
      en: { title: "Leadership", desc: "Equipping for ministry roles." }, 
      ne: { title: "नेतृत्व", desc: "मन्त्रालयका भूमिकाहरूका लागि सुसज्जित।" } 
    },
    { 
      en: { title: "Hermeneutics", desc: "Sound biblical interpretation." }, 
      ne: { title: "व्याख्या", desc: "बाइबलीय व्याख्या।" } 
    },
    { 
      en: { title: "Discipleship", desc: "Following Jesus daily." }, 
      ne: { title: "चेलापन", desc: "दैनिक येशूलाई पछ्याउँदै।" } 
    }
  ];

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-24">
          <div className="lg:w-1/2 space-y-10">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-nepal-blue px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-blue-100">
               <GraduationCap size={18} />
               <span>{language === 'en' ? 'Biblical Studies' : 'बाइबलीय अध्ययन'}</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-church-900 leading-tight tracking-tight">
              {language === 'en' ? (
                <>Deepen Your Faith <br /><span className="text-nepal-blue italic">In The Word</span></>
              ) : (
                <>वचनमा आफ्नो <br /><span className="text-nepal-blue italic">विश्वास गहिरो बनाउनुहोस्</span></>
              )}
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
               {language === 'en' 
                 ? 'At Utsaha Jagrity Mandali, we provide structured biblical training to transform lives through sound doctrine and spiritual discipline.'
                 : 'उत्साह जागृति मण्डलीमा, हामी सुदृढ सिद्धान्त र आत्मिक अनुशासन मार्फत जीवन परिवर्तन गर्न व्यवस्थित बाइबल तालिम प्रदान गर्दछौं।'}
            </p>
            
            <button className="flex items-center space-x-3 bg-nepal-red text-white px-10 py-5 rounded-[2rem] font-bold text-xl hover:bg-red-700 transition-all shadow-2xl hover:translate-x-3 active:scale-95">
              <span>{language === 'en' ? 'Enroll in Training' : 'तालिममा सामेल हुनुहोस्'}</span>
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-8 relative">
             <div className="absolute -top-20 -right-20 w-80 h-80 bg-nepal-blue/5 rounded-full blur-[100px]"></div>
             <div className="space-y-8 pt-16">
                <img src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl transform hover:-rotate-3 transition-transform" alt="Study" />
                <div className="bg-church-900 p-10 rounded-[3rem] text-white">
                   <BookOpen className="text-sky-400 w-12 h-12 mb-6" />
                   <h4 className="font-bold text-2xl mb-3">Scripture Centered</h4>
                </div>
             </div>
             <div className="space-y-8">
                <div className="bg-slate-100 p-10 rounded-[3rem] border border-slate-200">
                   <Users className="text-nepal-red w-12 h-12 mb-6" />
                   <h4 className="font-bold text-2xl text-church-900 mb-3">Faithful Community</h4>
                </div>
                <img src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl transform hover:rotate-3 transition-transform" alt="Training" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
           {features.map((f, i) => {
             const data = language === 'en' ? f.en : f.ne;
             return (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:border-nepal-blue transition-all group hover:bg-white hover:shadow-xl">
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-nepal-blue group-hover:text-white transition-all">
                    <CheckCircle size={28} />
                 </div>
                 <h4 className="text-2xl font-bold text-church-900 mb-4">{data.title}</h4>
                 <p className="text-slate-500 leading-relaxed">{data.desc}</p>
              </div>
            );
           })}
        </div>
      </div>
    </div>
  );
};

export default BibleTraining;
