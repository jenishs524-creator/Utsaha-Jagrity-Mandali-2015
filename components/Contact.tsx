
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Send, CheckCircle, Loader2, MessageSquare } from 'lucide-react';
import { Language } from '../App';

interface ContactProps {
  language: Language;
  location: string;
  estDate: string;
}

const Contact: React.FC<ContactProps> = ({ language, location, estDate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.message) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-church-900 text-white py-28 relative overflow-hidden" id="contact">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic tracking-tight">
               {language === 'en' ? 'Get in Touch' : 'सम्पर्क गर्नुहोस्'}
            </h2>
            <p className="text-church-200 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              {language === 'en' 
                ? 'We would love to hear from you. Whether you have a prayer request or a question about our fellowship, please reach out.' 
                : 'हामी तपाईंबाट सुन्न चाहन्छौं। चाहे तपाईंसँग प्रार्थना अनुरोध होस् वा हाम्रो संगतिको बारेमा प्रश्न, कृपया सम्पर्क गर्नुहोस्।'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <div className="bg-white shadow-2xl rounded-[3rem] p-10 md:p-16 order-2 lg:order-1 border border-slate-100">
              <h3 className="text-3xl font-bold mb-10 text-slate-900">
                {language === 'en' ? 'Contact Form' : 'सम्पर्क फारम'}
              </h3>
              
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-4">{language === 'en' ? 'Thank You!' : 'धन्यवाद!'}</h4>
                  <p className="text-slate-500">{language === 'en' ? 'We will get back to you shortly.' : 'हामी चाँडै तपाईंसँग सम्पर्क गर्नेछौं।'}</p>
                  <button onClick={() => setStatus('idle')} className="mt-8 text-lg font-bold text-nepal-blue hover:underline">
                    {language === 'en' ? 'Send another message' : 'फेरि सन्देश पठाउनुहोस्'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest">{language === 'en' ? 'Full Name' : 'पूरा नाम'}</label>
                    <input name="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-100 border-none rounded-2xl px-6 py-5 text-slate-900 focus:ring-4 focus:ring-nepal-blue/20" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest">{language === 'en' ? 'Email Address' : 'इमेल ठेगाना'}</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-100 border-none rounded-2xl px-6 py-5 text-slate-900 focus:ring-4 focus:ring-nepal-blue/20" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest">{language === 'en' ? 'Message' : 'सन्देश'}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-slate-100 border-none rounded-2xl px-6 py-5 text-slate-900 focus:ring-4 focus:ring-nepal-blue/20" />
                  </div>
                  <button type="submit" disabled={status === 'submitting'} className="w-full bg-church-900 hover:bg-black text-white font-bold py-6 px-10 rounded-2xl flex items-center justify-center transition-all shadow-xl">
                    {status === 'submitting' ? <Loader2 className="animate-spin mr-3" /> : <MessageSquare className="mr-3" />}
                    {language === 'en' ? 'Submit Request' : 'अनुरोध बुझाउनुहोस्'}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-16 order-1 lg:order-2">
              <div className="space-y-12">
                <div className="flex items-start space-x-6 group">
                  <div className="p-5 bg-white/10 rounded-3xl group-hover:bg-nepal-red/40 transition-all">
                    <MapPin className="h-8 w-8 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-white">{language === 'en' ? 'Location' : 'स्थान'}</h4>
                    <p className="text-church-200 mt-2 text-xl">{location}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="p-5 bg-white/10 rounded-3xl group-hover:bg-nepal-red/40 transition-all">
                    <Phone className="h-8 w-8 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-white">{language === 'en' ? 'Phone' : 'फोन'}</h4>
                    <p className="text-church-200 mt-2 text-xl font-medium">9808877006</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="p-5 bg-white/10 rounded-3xl group-hover:bg-nepal-red/40 transition-all">
                    <Mail className="h-8 w-8 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-white">{language === 'en' ? 'Email' : 'इमेल'}</h4>
                    <p className="text-church-200 mt-2 text-xl lowercase">utsahajagritymandali@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 backdrop-blur-xl">
                  <div className="flex items-center space-x-5 mb-6">
                     <div className="w-14 h-14 bg-nepal-red rounded-2xl flex items-center justify-center text-xl font-black shadow-lg">⛪</div>
                     <h4 className="text-2xl font-bold tracking-tight">Faithful Witness</h4>
                  </div>
                  <p className="text-church-200 text-lg leading-relaxed font-light italic">
                    {language === 'en' 
                      ? 'Rooted in the Gospel of Jesus Christ, witnessing for nearly a decade in the heart of Kathmandu.' 
                      : 'येशू ख्रीष्टको सुसमाचारमा आधारित, काठमाडौंको हृदयमा झण्डै एक दशकदेखि गवाही दिँदै।'}
                  </p>
              </div>
            </div>
          </div>
       </div>
    </div>
  );
};

export default Contact;
