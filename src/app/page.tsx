'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

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
      <Link className="absolute mt-10 px-20 py-5 bg-green-500 text-white rounded-lg hover:bg-green-600"
        href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
      >
      {t.hero.cta}
      </Link>
    </section>
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-xl mx-3 text-center">
        {t.intro.line1}
      </p>
      <p className="text-xl mx-3 text-center">
        {t.intro.line2}<b>{t.intro.line2Bold}</b>.
      </p>
      <p className="text-xl mx-3 text-center">
        {t.intro.line3}
      </p>
      <p className="text-xl mx-3 text-center">
        <Link
          href="templates"
        > 
        👉 <u>{t.intro.templatesLink}</u>
        </Link>
      </p>
    </section>
    <section className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-700">
      <p className="text-white text-xl mx-3 text-center">
        
        <Link
          href="https://www.linkedin.com/in/nazimboudeffa"
        > 
        👉 <u>{t.footer.keepInTouch}</u>
        </Link>
      </p>
    </section>
    </main>
  );
}
