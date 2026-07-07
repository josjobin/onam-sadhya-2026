"use client";

import { useState, useEffect, useActionState } from "react";
import Image from "next/image";
import { submitOrder } from "@/app/actions/order";

// Allowed cities from the types
const CITIES = [
  "Gothenburg",
  "Halmstad",
  "Jönköping",
  "Borås",
  "Helsingborg",
  "Trollhättan",
];

const DEADLINE = new Date("2026-07-30T23:59:59").getTime();

export default function CustomerLandingPage() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const [isClosed, setIsClosed] = useState(false);
  const [customerType, setCustomerType] = useState<"retail" | "wholesale">("retail");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [state, formAction, isPending] = useActionState(submitOrder, null);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = DEADLINE - now;

      if (distance <= 0) {
        setIsClosed(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return false;
      } else {
        setIsClosed(false);
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
        return true;
      }
    };

    // Calculate immediately on mount
    const shouldRun = calculateTimeLeft();

    if (!shouldRun) return;

    const timer = setInterval(() => {
      const continueTimer = calculateTimeLeft();
      if (!continueTimer) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-emerald-200 pb-20">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-emerald-900 text-emerald-50">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-600 blur-3xl opacity-20 mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500 blur-3xl opacity-20 mix-blend-screen"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-800/50 backdrop-blur-md px-4 py-2 rounded-full w-fit border border-emerald-700/50">
              <span className={`w-2 h-2 rounded-full ${isClosed ? 'bg-red-400' : 'bg-emerald-400 animate-pulse'}`}></span>
              <span className="text-sm font-medium tracking-wide uppercase">
                {isClosed ? 'Pre-booking Closed' : 'Pre-booking Open'}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Authentic <span className="text-amber-400">Onam Sadhya</span>
              <br /> Delivered to You.
            </h1>
            
            <p className="text-lg text-emerald-100 max-w-lg leading-relaxed">
              Experience the rich culinary heritage of Kerala right here in Sweden.
              Reserve your traditional festive box today before the cutoff!
            </p>
            
            {/* Countdown */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-200 mb-3">
                {isClosed ? "Pre-booking is now closed" : "Time Left to Pre-order (July 30, 2026)"}
              </h3>
              <div className="flex space-x-3 sm:space-x-4">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center bg-emerald-950/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-emerald-800/50 min-w-[70px] sm:min-w-[80px]">
                    <span className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">
                      {mounted ? item.value.toString().padStart(2, '0') : "--"}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-emerald-200 mt-1 uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Poster Image */}
          <div className="relative group mx-auto lg:ml-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-emerald-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-800/50 aspect-[3/4] bg-emerald-950 flex items-center justify-center">
              <img 
                src="/Onam_Sadya_1.jpg" 
                alt="Onam Sadhya Poster" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1626082895617-2c6b4ec97010?q=80&w=800&auto=format&fit=crop';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content & Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* Details Column */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-emerald-900">What's in the box?</h2>
            <h3 className="text-xl text-neutral-500 mb-8">Vad ingår i lådan?</h3>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-200"></div>
              <ul className="space-y-6 relative">
                {[
                  { en: "Avial (Mixed vegetable coconut curry)", sv: "Avial (Blandad grönsakscurry med kokos)" },
                  { en: "Sambar (Lentil & vegetable stew)", sv: "Sambar (Lins- och grönsaksgryta)" },
                  { en: "Parippu (Dal curry)", sv: "Parippu (Linsgryta)" },
                  { en: "Thoran (Stir-fried vegetables with coconut)", sv: "Thoran (Wokade grönsaker med kokos)" },
                  { en: "Olan (Ash gourd in coconut milk)", sv: "Olan (Vaxpumpa i kokosmjölk)" },
                  { en: "Kalan (Yam and plantain in yogurt)", sv: "Kalan (Jams och kokbanan i yoghurt)" },
                  { en: "Pachadi (Yogurt-based side dish)", sv: "Pachadi (Yoghurtbaserat tillbehör)" },
                  { en: "Payasam (Sweet dessert pudding)", sv: "Payasam (Söt dessertpudding)" },
                  { en: "Banana Chips & Pappadam", sv: "Banan chips & Pappadam" },
                  { en: "Pickle (Mango/Lemon)", sv: "Inläggning (Mango/Citron)" }
                ].map((item, idx) => (
                  <li key={idx} className="relative pl-10 group">
                    <div className="absolute left-3.5 top-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full ring-4 ring-white group-hover:scale-150 transition-transform"></div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-neutral-800 text-lg leading-tight">{item.en}</span>
                      <span className="text-sm text-neutral-500 italic mt-0.5">{item.sv}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 flex items-start space-x-4 shadow-sm">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-amber-900 text-lg">Important Information</h4>
              <ul className="mt-2 text-amber-800 space-y-2 list-none">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  <span><strong className="font-extrabold text-amber-950">Serves 5</strong> generous portions per box.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  <span><strong className="font-extrabold text-amber-950">*Rice not included</strong> (please prepare separately).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Order Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl shadow-xl shadow-emerald-900/5 border border-neutral-100 p-8 lg:p-10 sticky top-10">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
              <h2 className="text-2xl font-bold text-emerald-950">Secure Your Order</h2>
              
              {/* Toggle Switch */}
              <div className="flex bg-neutral-100 p-1.5 rounded-full relative w-max shadow-inner">
                <button
                  type="button"
                  onClick={() => setCustomerType("retail")}
                  disabled={isClosed || isPending || state?.success}
                  className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
                    customerType === "retail" ? "text-white" : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Retail
                </button>
                <button
                  type="button"
                  onClick={() => setCustomerType("wholesale")}
                  disabled={isClosed || isPending || state?.success}
                  className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
                    customerType === "wholesale" ? "text-white" : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Wholesale
                </button>
                {/* Active Indicator */}
                <div 
                  className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-emerald-600 rounded-full transition-transform duration-300 ease-out shadow-md ${
                    customerType === "wholesale" ? "translate-x-full left-1.5" : "translate-x-0 left-1.5"
                  }`}
                />
              </div>
            </div>

            {isClosed ? (
              <div className="text-center py-20 bg-neutral-50 rounded-2xl border border-neutral-200">
                <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Pre-booking is now closed</h3>
                <p className="text-neutral-500 mt-3 max-w-sm mx-auto">
                  The deadline for ordering has passed. Thank you to everyone who placed an order!
                </p>
              </div>
            ) : state?.success ? (
              <div className="text-center py-16 bg-emerald-50 rounded-2xl border border-emerald-200 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">Pre-order Confirmed!</h3>
                <p className="text-emerald-700 mt-2 font-medium text-lg">Order ID: #{state.orderId}</p>
                <div className="mt-6 p-5 bg-white rounded-xl shadow-sm border border-emerald-100 max-w-sm mx-auto text-sm text-neutral-600 leading-relaxed">
                  <p>Thank you for your order. We will send you payment instructions (Swish / Bank Transfer) shortly to the email provided.</p>
                </div>
                <div className="mt-8 flex flex-col items-center space-y-4">
                  <a 
                    href={`/payment/${state.orderId}`}
                    className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-500 transition-all active:scale-95 text-center w-full max-w-xs"
                  >
                    Proceed to Payment
                  </a>
                  <button 
                    onClick={() => window.location.reload()}
                    className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors text-sm"
                  >
                    Place another order
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-6" action={formAction}>
                <input type="hidden" name="customerType" value={customerType} />

                {state?.error && (
                  <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium animate-in fade-in">
                    {state.error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">First Name</label>
                    <input type="text" name="firstName" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none" placeholder="John" required disabled={isPending} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">Last Name</label>
                    <input type="text" name="lastName" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none" placeholder="Doe" required disabled={isPending} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">Email Address</label>
                    <input type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none" placeholder="john@example.com" required disabled={isPending} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">Phone Number</label>
                    <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none" placeholder="+46 70 123 45 67" required disabled={isPending} />
                  </div>
                </div>

                {customerType === "wholesale" && (
                  <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-6">
                    <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Company Details</h4>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-neutral-700">Company Name</label>
                      <input type="text" name="companyName" className="w-full px-4 py-3 rounded-xl border border-emerald-200/60 bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Nordic Traders AB" required={customerType === "wholesale"} disabled={isPending} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-neutral-700">Org Number</label>
                        <input type="text" name="orgNumber" className="w-full px-4 py-3 rounded-xl border border-emerald-200/60 bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="556000-0000" required={customerType === "wholesale"} disabled={isPending} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-neutral-700">VAT ID</label>
                        <input type="text" name="vatId" className="w-full px-4 py-3 rounded-xl border border-emerald-200/60 bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="SE556000000001" required={customerType === "wholesale"} disabled={isPending} />
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">Pickup City</label>
                    <div className="relative group">
                      <select name="city" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 group-hover:bg-white focus:bg-white appearance-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all cursor-pointer pr-10" required defaultValue="" disabled={isPending}>
                        <option value="" disabled>Select a location</option>
                        {CITIES.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-500">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700 flex justify-between">
                      <span>Quantity (Boxes)</span>
                      <span className="text-neutral-400 font-normal">Min: {customerType === "wholesale" ? 10 : 1}</span>
                    </label>
                    <input 
                      type="number" 
                      name="quantity"
                      min={customerType === "wholesale" ? 10 : 1} 
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" 
                      defaultValue={customerType === "wholesale" ? 10 : 1}
                      required 
                      disabled={isPending}
                    />
                  </div>
                </div>

                {/* T&C CHECKBOX - NOW OUTSIDE WHOLESALE BLOCK */}
                <div className="mt-6">
                  <label className={`flex items-start space-x-3 p-4 rounded-xl border transition-colors cursor-pointer ${termsAccepted ? 'border-emerald-200 bg-emerald-50/30' : 'border-neutral-200 bg-neutral-50/30 hover:bg-neutral-50'}`}>
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      required
                      disabled={isPending}
                    />
                    <span className="text-sm text-neutral-600 leading-relaxed">
                      I accept the <a href="/terms" className="text-emerald-600 font-semibold underline hover:text-emerald-800" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>, including the strict no-refund policy for frozen goods and the one-time delivery window.
                    </span>
                  </label>
                  
                  {/* VISUAL CUE IF T&C NOT ACCEPTED */}
                  {!termsAccepted && (
                    <div className="mt-2 flex items-center space-x-1.5 text-red-500 text-xs font-semibold px-2 animate-in fade-in">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Please accept the terms to proceed with your order.</span>
                    </div>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={isPending || !termsAccepted}
                  className="w-full py-4 mt-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-600/30 transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  {isPending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing Pre-order...</span>
                    </>
                  ) : (
                    <span>Proceed to Checkout</span>
                  )}
                </button>

                {/* Payment Methods */}
                <div className="pt-8 mt-4">
                  <p className="text-center text-xs font-bold text-neutral-400 mb-4 uppercase tracking-widest">Secure Payment Options</p>
                  <div className="flex justify-center items-center space-x-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="flex items-center space-x-1.5 font-bold text-xl text-neutral-800">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                      </svg>
                      <span>Swish</span>
                    </div>
                    <div className="flex items-center space-x-1 font-bold text-xl text-[#635BFF]">
                      <span>stripe</span>
                    </div>
                    <div className="flex items-center space-x-1.5 font-bold text-lg text-neutral-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span>Bank Transfer</span>
                    </div>
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>
    </main>
  );
}