"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const CORRECT_PASSWORD = "anointed2026";
const STORAGE_KEY = "anointed_access";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setUnlocked(true);
    }
    setChecked(true);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setError("Invalid code");
    }
  }

  if (!checked) return null;
  if (unlocked) return <>{children}</>;

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <style>{`@keyframes logoIntro { 0% { transform: scale(1) rotate(0deg); } 50% { transform: scale(1.3) rotate(0deg); } 100% { transform: scale(1.3) rotate(360deg); } }`}</style>
      <div className="flex flex-col items-center gap-6 w-full max-w-xs">
        <Image
          src="/logo-new.svg"
          alt="Anointed Studio"
          width={128}
          height={128}
          className="w-32 h-auto"
          priority
          style={{ animation: "logoIntro 2s ease-in-out forwards" }}
        />
        <p className="text-neutral-400 text-sm tracking-widest uppercase font-medium"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
          ANOINTED STUDIO
        </p>
        <div className="w-full border-t border-neutral-800" />
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
          <input
            type="password"
            placeholder="Enter access code"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
            className="bg-transparent border-b border-neutral-700 text-white text-center w-64 py-3 focus:outline-none focus:border-neutral-400 placeholder-neutral-600 text-sm tracking-widest"
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button type="submit"
            className="text-neutral-400 uppercase tracking-widest text-sm cursor-pointer bg-transparent border-none"
            style={{ fontFamily: "Roboto Mono, monospace" }}>
            ENTER →
          </button>
        </form>
      </div>
      <p className="absolute bottom-6 text-neutral-600 text-xs">© 2026 Anointed Studio</p>
    </main>
  );
}
