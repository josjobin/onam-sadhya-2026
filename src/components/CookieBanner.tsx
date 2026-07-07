"use client";
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-emerald-900 text-emerald-50 p-4 flex items-center justify-between z-50">
      <p className="text-sm max-w-md">
        We use cookies to enhance your experience, analyze traffic, and comply with GDPR. By continuing to browse, you agree to our <a href="/privacy" className="underline hover:text-emerald-300">Privacy Policy</a> and <a href="/terms" className="underline hover:text-emerald-300">Terms & Conditions</a>.
      </p>
      <button
        onClick={accept}
        className="ml-4 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Accept
      </button>
    </div>
  );
}
