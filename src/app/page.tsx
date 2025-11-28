'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import IntroFAQ from "@/components/IntroFAQ";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <main>
    <section className="relative flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden">
      <Image
        src="/hero.png"
        alt="hero"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      
      <div className="flex flex-col items-center justify-center absolute z-10 px-4 text-center max-w-4xl">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-8 text-white drop-shadow-2xl">
          {t.hero.title}
        </h2>
        <Link 
          className="group relative px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 hover:scale-110 transform"
          href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
        >
          <span className="relative z-10">{t.hero.cta}</span>
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </Link>
      </div>
    </section>
    <section className="flex flex-col items-center justify-center min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      <div className="w-full max-w-4xl space-y-6 relative z-10">
        <div className="mb-8">
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About My Approach</h2>
        </div>
        
        <div className="space-y-6 border-l-4 border-green-500 pl-8 bg-white/60 backdrop-blur-sm p-8 rounded-r-2xl shadow-xl">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line1}
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line2}
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line3}
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line4}
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line5}
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
            {t.intro.line6}
          </p>
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="flex flex-col items-center justify-center min-h-screen py-16 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">{t.pricing.title}</h2>
          <p className="text-xl md:text-2xl text-gray-300">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Learn Column */}
          <div className="group bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-100 hover:border-green-500 transition-all duration-500 transform hover:scale-105 hover:shadow-green-500/20 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center mb-8 relative z-10">
              <div className="inline-block bg-gradient-to-br from-green-100 to-emerald-100 rounded-full p-5 mb-4 text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">📘</div>
              <h3 className="text-gray-800 text-2xl font-bold mb-2">{t.pricing.learn.title}</h3>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.learn.step1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.learn.step2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.learn.step3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.learn.step4}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.learn.step5}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">👉</span>
                <Link
                  href="https://learn.codewithadu.de"
                  target="_blank"
                  rel="noopener noreferrer"
                > 
                <u className="text-gray-700">{t.pricing.learn.step6}</u>
                </Link>
              </li>
            </ul>
          </div>

          {/* Build Column - Featured */}
          <div className="group bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl p-8 pt-12 border-2 border-green-500 transform scale-105 hover:scale-110 relative transition-all duration-500 hover:shadow-green-500/30 hover:shadow-3xl overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
              {t.pricing.build.featured}
            </div>
            <div className="text-center mb-8 relative z-10">
              <div className="inline-block bg-gradient-to-br from-green-100 to-emerald-100 rounded-full p-5 mb-4 text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">🛠️</div>
              <h3 className="text-gray-800 text-2xl font-bold mb-2">{t.pricing.build.title}</h3>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.build.step1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.build.step2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.build.step3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.build.step4}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.build.step5}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">👉</span>
                <Link
                  href="https://ui.codewithadu.de"
                > 
                <u className="text-gray-700">{t.pricing.build.step6}</u>
                </Link>
              </li>
            </ul>
          </div>

          {/* Ship Column */}
          <div className="group bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-100 hover:border-green-500 transition-all duration-500 transform hover:scale-105 hover:shadow-green-500/20 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center mb-8 relative z-10">
              <div className="inline-block bg-gradient-to-br from-green-100 to-emerald-100 rounded-full p-5 mb-4 text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-gray-800 text-2xl font-bold mb-2">{t.pricing.ship.title}</h3>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.ship.step1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.ship.step2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.ship.step3}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.ship.step4}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✅</span>
                <span className="text-gray-700">{t.pricing.ship.step5}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 flex-shrink-0">👉</span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://saas.codewithadu.de"
                > 
                <u className="text-gray-700">{t.pricing.ship.step6}</u>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Bottom */}
        <div className="mt-16 text-center bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto border-2 border-green-500 hover:shadow-green-500/30 transition-all duration-500 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="mb-8 relative z-10">
            <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-3">{t.pricing.price}</div>
            <p className="text-gray-700 text-xl font-medium">{t.pricing.priceSubtitle}</p>
          </div>
          <Link 
            href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
            className="inline-block px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 relative group"
          >
            <span className="relative z-10">{t.pricing.cta}</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>

    <IntroFAQ />

    <section className="flex flex-col items-center justify-center min-h-screen py-16 bg-gradient-to-br from-green-700 via-emerald-700 to-green-800 relative overflow-hidden">
      <div className="relative z-10 text-center mb-12 px-4">
        <p className="text-white text-2xl md:text-3xl font-semibold mb-6">
          <Link
            href="https://www.linkedin.com/in/nazimboudeffa"
            className="inline-flex items-center gap-3 hover:text-green-200 transition-colors duration-300 group"
          > 
            <span className="text-3xl group-hover:scale-125 transition-transform duration-300">👉</span>
            <span className="border-b-2 border-white/50 group-hover:border-green-200 transition-colors duration-300">{t.footer.keepInTouch}</span>
          </Link>
        </p>
        <p className="text-white/90 text-base md:text-lg mt-6 mx-auto max-w-2xl leading-relaxed">
          {t.footer.note}
        </p>
      </div>
      
      {/* YouTube Video Embed */}
      <div className="w-full max-w-5xl mx-auto px-4 relative z-10">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20 hover:ring-white/40 transition-all duration-300 transform hover:scale-105">
          <div className="relative w-full pb-[56.25%] bg-black/20">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/_ZKNoGa9eOI?rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
