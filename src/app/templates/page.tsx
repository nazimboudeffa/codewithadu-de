'use client';

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export default function TemplatesPage() {
  const { language } = useLanguage();
  const t = translations[language].templates;

  return (
    <main className="min-h-screen">
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.description}
        </p>
      </section>
      <ul>
        <li>
          <Link href="/templates/template1">Template 1 - SaaS Minimal</Link>
        </li>
        <li>
          <Link href="/templates/template2">Template 2 - Creative Agency</Link>
        </li>
        <li>
          <Link href="/templates/template3">Template 3 - Portfolio Showcase</Link>
        </li>
      </ul>

    </main>
  );
}
