import React from "react";
import Link from "next/link";

export default function TemplatesPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Templates</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our ready-to-use landing page templates and components.
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
