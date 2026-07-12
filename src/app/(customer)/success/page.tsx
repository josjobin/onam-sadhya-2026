import Link from "next/link";
import React from "react";

// Note: Next.js passes URL parameters natively via the searchParams prop
export default function SuccessPage({
  searchParams,
}: {
  searchParams: { order?: string };
}) {
  const orderId = searchParams.order || "Pending";

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-emerald-900/5 border border-neutral-100 p-8 sm:p-10 text-center animate-in zoom-in-95 duration-500">
        
        {/* Success Checkmark */}
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        {/* Bilingual Headers */}
        <h1 className="text-3xl font-extrabold text-emerald-950 mb-2">Payment Successful!</h1>
        <h2 className="text-xl font-medium text-neutral-500 mb-8">Betalning genomförd!</h2>
        
        {/* Order Reference Box */}
        <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 mb-8 space-y-2">
          <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold">Order Reference</p>
          <p className="text-2xl font-bold text-emerald-700">#{orderId}</p>
        </div>

        {/* Bilingual Thank You Message */}
        <p className="text-neutral-700 mb-8 leading-relaxed">
          Thank you for your order. We have received your payment confirmation and your authentic Onam Sadhya box is secured.
          <br /><br />
          <span className="text-neutral-500 italic">
            Tack för din beställning. Vi har mottagit din betalningsbekräftelse och din Onam Sadhya-låda är säkrad.
          </span>
        </p>

        {/* Return Button */}
        <Link 
          href="/"
          className="inline-flex items-center justify-center w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-600/30 transition-all active:scale-[0.98]"
        >
          Return to Homepage
        </Link>
        
      </div>
    </main>
  );
}