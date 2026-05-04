import React, { useState, useRef, useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";

const languages = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "he", label: "HE", flag: "🇮🇱" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find((l) => l.code === lang);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 bg-background/80 hover:bg-secondary transition-colors text-sm font-medium text-foreground"
      >
        <span className="text-base">{current.flag}</span>
        <span className="text-xs">{current.label}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-10 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-50 min-w-[100px]">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${lang === l.code ? "text-primary font-semibold" : "text-foreground"}`}
            >
              <span className="text-base">{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}