'use client';

import { useState } from 'react';

export type Language = 'en' | 'fr';

interface LanguageSelectorProps {
  readonly currentLang: Language;
  readonly onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as Language, label: 'English' },
    { code: 'fr' as Language, label: 'Français' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-black border border-gray-300 rounded-lg shadow-sm hover:bg-gray-500 transition-colors flex items-center gap-2"
      >
        <span className="text-sm font-medium">{currentLanguage?.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-500 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-300 transition-colors ${
                currentLang === lang.code ? 'bg-gray-500 font-semibold' : ''
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
