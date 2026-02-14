"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, Menu, X, CheckCircle, Phone, Instagram, Linkedin, Facebook, Box } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import HeroSection from '@/components/hero/page';
import ServicesSection from '@/components/services/page';
import AboutSection from '@/components/about/page';
import TaxCalculatorSection from '@/components/calculator/page';
import FAQSection from '@/components/faq/page';
import Footer from '@/components/footer/page';


// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
// Ensure we handle cases where config might be missing during build
const app = initializeApp(firebaseConfig.apiKey ? firebaseConfig : {
    apiKey: "placeholder", authDomain: "placeholder", projectId: "placeholder", storageBucket: "placeholder", messagingSenderId: "placeholder", appId: "placeholder" 
});
const auth = getAuth(app);
const db = getFirestore(app);
const appId = 'tax-portfolio-prod';

// --- STYLES ---
const styles = `
  /* Professional Range Slider */
  .range-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: #e5e7eb;
    outline: none;
  }
  .range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgb(83, 154, 248);
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: transform 0.1s;
  }
  .range-slider::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes float-delayed {
    0% { transform: translateY(0px); }
    50% { transform: translateY(8px); }
    100% { transform: translateY(0px); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
`;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        await signInAnonymously(auth);
      } catch (error) {
        console.warn("Auth fallback:", error);
      }
    };
    initAuth();
    // @ts-ignore
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Solutions', id: 'services' },
    { label: 'Why Me', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-50 selection:text-blue-900 overflow-x-hidden">
      <style>{styles}</style>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="w-8 h-8 bg-[rgb(83,154,248)] text-white rounded-md flex items-center justify-center">
              <Box size={16} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-gray-900 text-base tracking-tight">SaHiTax</span>
              <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-widest">Smart, Simple, Sahi Taxation</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-[rgb(83,154,248)]' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="ml-2 px-5 py-2 bg-[rgb(83,154,248)] hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors"
            >
              Consult Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-600 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-sm py-4 px-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }}
                className="w-full text-left py-3 text-sm font-medium text-gray-700 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection user={user} />
      <TaxCalculatorSection />
      <FAQSection />
      <Footer />
    </div>
  );
};


const ContactSection = ({ user }) => {
  const [form, setForm] = useState({ 
    firstname: '',
    lastname: '',
    email: '', 
    phone: '', 
    subject: '', 
    query: '' 
  });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { 
      if (document.body.contains(script)) document.body.removeChild(script); 
    };
  }, []);

  const handleChange = (e) => 
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    let currentUser = auth.currentUser;
    if (!currentUser) {
      try {
        const result = await signInAnonymously(auth);
        currentUser = result.user;
      } catch (err) { 
        console.error("JIT Auth failed:", err); 
      }
    }

    if (currentUser) {
      try {
        const now = new Date();
        const ticketNumber = now.getTime(); 
        await addDoc(
          collection(db, 'artifacts', appId, 'public', 'data', 'inquiries'),
          {
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            phone: form.phone, // ✅ Added phone
            subject: form.subject,
            query: form.query,
            ticketNumber: ticketNumber,
            readableDate: now.toLocaleDateString(),
            readableTime: now.toLocaleTimeString(),
            createdAt: serverTimestamp(),
            userId: currentUser.uid
          }
        );
      } catch (error) { 
        console.error("DB Error: ", error); 
      }
    }

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = { 
      email: form.email, 
      firstname: form.firstname,
      lastname: form.lastname,
      phone: form.phone,
      title: form.subject, 
      message: form.query, 
      reply_to: form.email 
    };

    if (window.emailjs) {
      window.emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(() => { 
          setStatus('success'); 
          setForm({ 
            firstname: '',
            lastname: '', 
            email: '', 
            phone: '', 
            subject: '', 
            query: '' 
          }); 
        })
        .catch((err) => { 
          alert(`Failed to send email. Error: ${err.text}`); 
          setStatus('idle'); 
        });
    } else {
      setTimeout(() => { 
        setStatus('success'); 
        setForm({ 
          firstname: '',
          lastname: '', 
          email: '', 
          phone: '', 
          subject: '', 
          query: '' 
        }); 
      }, 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden grid lg:grid-cols-2">
            
          <div className="p-10 lg:p-12 bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-200"> <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2> <p className="text-gray-500 text-sm mb-10 leading-relaxed"> Ready to optimize your finances? Fill out the form or reach out directly via the details below. </p> <div className="space-y-6 text-sm"> <div className="flex items-center gap-4"> <div className="w-8 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center text-[rgb(83,154,248)]"> <Phone size={16} /> </div> <div> <div className="text-gray-900 font-medium">+91 79825 89704</div> <div className="text-xs text-gray-400">Mon-Fri, 10am - 6pm</div> </div> </div> <div className="flex items-center gap-4"> <div className="w-8 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center text-[rgb(83,154,248)]"> <Send size={16} /> </div> <div> <div className="text-gray-900 font-medium">wisetaxmanwork@gmail.com</div> <div className="text-xs text-gray-400">Response within 48h</div> </div> </div> </div> </div>

          <div className="p-10 lg:p-12">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center"> <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4"> <CheckCircle size={24} /> </div> <h3 className="text-lg font-bold text-gray-900 mb-2">Inquiry Received</h3> <p className="text-gray-500 mb-6 text-sm">We will review your details shortly.</p> <button onClick={() => setStatus('idle')} className="text-[rgb(83,154,248)] font-medium hover:underline text-sm">Send New Message</button> </div>
            ) : (
              <form onSubmit={sendEmail} className="space-y-5">
                
                {/* Name, Email, Phone */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      First Name
                    </label>
                    <input
                      required
                      name="firstname"
                      value={form.firstname}
                      onChange={handleChange}
                      type="text"
                      className="w-full p-2.5 bg-white rounded border border-gray-300 focus:border-[rgb(83,154,248)] focus:ring-1 focus:ring-[rgb(83,154,248)] outline-none transition-all text-sm"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Last Name
                    </label>
                    <input
                      required
                      name="lastname"
                      value={form.lastname}
                      onChange={handleChange}
                      type="text"
                      className="w-full p-2.5 bg-white rounded border border-gray-300 focus:border-[rgb(83,154,248)] focus:ring-1 focus:ring-[rgb(83,154,248)] outline-none transition-all text-sm"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full p-2.5 bg-white rounded border border-gray-300 focus:border-[rgb(83,154,248)] focus:ring-1 focus:ring-[rgb(83,154,248)] outline-none transition-all text-sm"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Phone
                    </label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      className="w-full p-2.5 bg-white rounded border border-gray-300 focus:border-[rgb(83,154,248)] focus:ring-1 focus:ring-[rgb(83,154,248)] outline-none transition-all text-sm"
                      placeholder="Phone Number"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Subject
                  </label>
                  <input
                    required
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    type="text"
                    className="w-full p-2.5 bg-white rounded border border-gray-300 focus:border-[rgb(83,154,248)] focus:ring-1 focus:ring-[rgb(83,154,248)] outline-none transition-all text-sm"
                    placeholder="Inquiry Topic"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    name="query"
                    value={form.query}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-2.5 bg-white rounded border border-gray-300 focus:border-[rgb(83,154,248)] focus:ring-1 focus:ring-[rgb(83,154,248)] outline-none transition-all resize-none text-sm"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>

                <button
                  disabled={status === 'sending'}
                  type="submit"
                  className="w-full py-3 bg-[rgb(83,154,248)] text-white font-bold rounded hover:bg-blue-600 transition-colors text-sm"
                >
                  {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};




export default App;