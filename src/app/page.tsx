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
    <section className="relative flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/hero.png"
        alt="hero"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="flex flex-col items-center justify-center absolute mt-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">{t.hero.title}</h2>
        <Link className="text-center px-20 py-5 bg-green-500 text-white rounded-lg hover:bg-green-600"
          href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
        >
        {t.hero.cta}
        </Link>
      </div>
    </section>
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-3xl space-y-4 border-l-4 border-green-500 pl-4">
      <p className="text-lg md:text-xl leading-relaxed">
        {t.intro.line1}
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        {t.intro.line2}
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        {t.intro.line3}
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        {t.intro.line4}
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        {t.intro.line5}
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        {t.intro.line6}
      </p>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="flex flex-col items-center justify-center min-h-screen py-16 px-6 bg-black">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.pricing.title}</h2>
          <p className="text-xl text-gray-300">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Learn Column */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 rounded-full p-4 mb-4 text-3xl">📘</div>
              <h3 className="text-gray-700 text-2xl font-bold mb-2">{t.pricing.learn.title}</h3>
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
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-green-500 transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
              {t.pricing.build.featured}
            </div>
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 rounded-full p-4 mb-4 text-3xl">🛠️</div>
              <h3 className="text-gray-700 text-2xl font-bold mb-2">{t.pricing.build.title}</h3>
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
                  href="https://coolui.codewithadu.de"
                > 
                <u className="text-gray-700">{t.pricing.build.step6}</u>
                </Link>
              </li>
            </ul>
          </div>

          {/* Ship Column */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 rounded-full p-4 mb-4 text-3xl">🚀</div>
              <h3 className="text-gray-700 text-2xl font-bold mb-2">{t.pricing.ship.title}</h3>
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
                  href="https://rapidosaas.com"
                > 
                <u className="text-gray-700">{t.pricing.ship.step6}</u>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Bottom */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border-2 border-green-500">
          <div className="mb-6">
            <div className="text-5xl font-bold text-green-600 mb-2">{t.pricing.price}</div>
            <p className="text-gray-600 text-lg">{t.pricing.priceSubtitle}</p>
          </div>
          <Link 
            href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
            className="inline-block px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t.pricing.cta}
          </Link>
        </div>
      </div>
    </section>

    <IntroFAQ />

    <section className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-700">
      <p className="text-white text-xl mx-3 text-center">
        
        <Link
          href="https://www.linkedin.com/in/nazimboudeffa"
        > 
        👉 <u>{t.footer.keepInTouch}</u>
        </Link>
      </p>
      <p className="text-white text-sm mt-4 mx-3 text-center">
        {t.footer.note}
      </p>
      {/* YouTube Video Embed */}
      <div className="w-full max-w-4xl mx-auto mt-8 px-4">
        <div className="relative w-full rounded-lg overflow-hidden shadow-xl">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/_ZKNoGa9eOI?rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
