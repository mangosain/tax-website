"use client";

import React, { useState, useEffect, useRef } from "react";
import Nav from "../components/nav/page";
import HeroSection from "../components/hero/page";
import ServicesSection from "../components/services/page";
import AboutSection from "../components/about/page";
import TaxCalculatorSection from "../components/taxcCalc/page";
import FAQSection from "../components/faq/page";
import Footer from "../components/footer/page";
import { CheckCircle, ArrowRight } from "lucide-react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  signInWithCustomToken,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = "tax-portfolio-prod";

// --- STYLES ---
const styles = `
  /* Luxury Dark Glass */
  .glass-panel-dark {
    background: rgba(20, 20, 20, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  
  /* Subtle Grid Background Pattern */
  .bg-grid-pattern {
    background-image: linear-gradient(to right, #27272a 1px, transparent 1px),
                      linear-gradient(to bottom, #27272a 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(circle at center, black, transparent 80%);
  }

  /* Custom Range Slider */
  .range-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 5px;
    background: #3f3f46;
    outline: none;
    opacity: 0.9;
    transition: opacity .2s;
  }
  .range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255,255,255,0.5);
  }
`;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // --- AUTH SETUP ---
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Simplified auth for production environment
        // We removed the __initial_auth_token check
        await signInAnonymously(auth);
      } catch (error) {
        console.warn("Auth fallback:", error);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-700 selection:text-white">
      <style>{styles}</style>

      <Nav />
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

// --- SECTIONS ---

const ContactSection = ({ user }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    query: "",
  });
  const [status, setStatus] = useState("idle");

  // Load EmailJS SDK
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
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
    setStatus("sending");

    // 1. SAVE TO FIRESTORE
    if (user) {
      try {
        const now = new Date();
        const ticketNumber = now.getTime();
        await addDoc(
          collection(db, "artifacts", appId, "public", "data", "inquiries"),
          {
            name: form.name,
            email: form.email,
            subject: form.subject,
            query: form.query,
            ticketNumber: ticketNumber,
            readableDate: now.toLocaleDateString(),
            readableTime: now.toLocaleTimeString(),
            createdAt: serverTimestamp(),
            userId: user.uid,
          },
        );
      } catch (error) {
        console.error("DB Error: ", error);
      }
    }

    // 2. SEND VIA EMAILJS
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      email: form.email,
      name: form.name,
      title: form.subject,
      message: form.query,
      reply_to: form.email,
    };

    if (window.emailjs) {
      window.emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(() => {
          setStatus("success");
          setForm({ name: "", email: "", subject: "", query: "" });
        })
        .catch((err) => {
          alert(`Failed to send email. Error: ${err.text}`);
          setStatus("idle");
        });
    } else {
      setTimeout(() => {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", query: "" });
      }, 2000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mt-6 mb-8">
            Maximize Your In-Hand Salary.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-12">
            Stop leaving money on the table. Reach out for a comprehensive
            review of your tax structure. I respond to all inquiries within 24
            hours.
          </p>

          <div className="space-y-8 font-light text-sm text-zinc-300">
            <div className="flex items-center gap-6 border-b border-zinc-900 pb-8">
              <span className="text-zinc-600 uppercase tracking-widest w-20 text-xs">
                Phone
              </span>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-6 border-b border-zinc-900 pb-8">
              <span className="text-zinc-600 uppercase tracking-widest w-20 text-xs">
                Office
              </span>
              <span>Financial District, New Delhi</span>
            </div>
            <div className="flex items-center gap-6 border-b border-zinc-900 pb-8">
              <span className="text-zinc-600 uppercase tracking-widest w-20 text-xs">
                Email
              </span>
              <span>contact@email.com</span>
            </div>
          </div>
        </div>

        {/* Minimal Dark Form */}
        <div className="bg-zinc-900/50 p-6 md:p-8 border border-zinc-800 rounded-sm">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 border border-white text-white rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Inquiry Received
              </h3>
              <p className="text-zinc-500 text-sm">
                I will review your tax details shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-xs uppercase tracking-widest text-white border-b border-zinc-700 hover:border-white pb-1 transition-colors"
              >
                Send New Message
              </button>
            </div>
          ) : (
            <form onSubmit={sendEmail} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:border-white outline-none transition-colors placeholder-zinc-700"
                    placeholder="Required"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:border-white outline-none transition-colors placeholder-zinc-700"
                    placeholder="Required"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">
                  Subject
                </label>
                <input
                  required
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:border-white outline-none transition-colors placeholder-zinc-700"
                  placeholder="e.g. FBP Optimization, ITR Filing"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500">
                  Details
                </label>
                <textarea
                  required
                  name="query"
                  value={form.query}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:border-white outline-none transition-colors resize-none placeholder-zinc-700"
                  placeholder="Describe your current salary structure or tax issue"
                ></textarea>
              </div>
              <button
                disabled={status === "sending"}
                type="submit"
                className="w-full py-5 bg-white text-zinc-950 font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {status === "sending" ? (
                  "Processing..."
                ) : (
                  <>
                    Submit Query <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default App;
