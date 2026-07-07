import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-950">
            Terms & Conditions
          </h1>
          <h2 className="text-2xl text-neutral-500 font-medium">
            Allmänna Villkor
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Section 1: Right of Withdrawal */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            1. Right of Withdrawal Exemption / Undantag från ångerrätt
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">English</h4>
              <p className="text-neutral-700 leading-relaxed">
                Due to the highly perishable and temperature-sensitive nature of our frozen Onam Sadhya packs, the standard 14-day right of withdrawal under the Swedish Distance Contracts Act (<em>Distansavtalslagen</em>) does not apply. By completing this pre-order, you acknowledge that you are purchasing perishable goods. All pre-orders are final, binding, and strictly non-refundable once the payment is confirmed and the container space is reserved.
              </p>
            </div>
            <div className="pl-4 border-l-4 border-neutral-200 bg-neutral-50 p-4 rounded-r-xl">
              <h4 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-2">Svenska</h4>
              <p className="text-neutral-600 leading-relaxed italic">
                På grund av att våra frysta Onam Sadhya-förpackningar är temperaturkänsliga färskvaror med begränsad hållbarhet, gäller inte den normala 14-dagars ångerrätten enligt den svenska distansavtalslagen. Genom att genomföra denna förbokning bekräftar du att du köper färskvaror. Alla förbokningar är bindande, slutgiltiga och återbetalas inte under några omständigheter när betalningen är bekräftad och containerutrymmet har reserverats.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Delivery & Forfeiture */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            2. Delivery Collection & Forfeiture / Leverans och förverkande
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">English</h4>
              <p className="text-neutral-700 leading-relaxed">
                We operate a strict one-time delivery and collection window. Customers will be notified of their specific time slot in advance and must be available to collect their order at the designated time and location. Because the items are frozen, we do not have the facilities to store melting food or attempt a second delivery. Failure to collect your order during your agreed window transfers all liability to you, resulting in immediate forfeiture of the goods without any right to a refund.
              </p>
            </div>
            <div className="pl-4 border-l-4 border-neutral-200 bg-neutral-50 p-4 rounded-r-xl">
              <h4 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-2">Svenska</h4>
              <p className="text-neutral-600 leading-relaxed italic">
                Vi tillämpar ett strikt fönster för leverans och upphämtning vid ett enda tillfälle. Kunder kommer att meddelas om sin specifika tid i förväg och måste finnas tillgängliga för att hämta sin beställning vid angiven tid och plats. Eftersom varorna är frysta har vi inte möjlighet att lagra tinande mat eller genomföra ett andra leveransförsök. Om du inte hämtar din beställning under det överenskomna tidsfönstret övergår allt ansvar till dig, vilket leder till att varorna omedelbart förverkas utan rätt till återbetalning.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Pricing & Disputes */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            3. Pricing & Disputes / Prissättning och tvister
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">English</h4>
              <p className="text-neutral-700 leading-relaxed">
                The pricing provided is valid exclusively for pre-ordered customers who secure their reservation in advance. Any uncollected or excess inventory distributed at a later stage will be sold at a different retail price. For any inquiries, order modifications, or payment disputes, you must contact Indian Grocery Mall / Brown Bag AB directly.
              </p>
            </div>
            <div className="pl-4 border-l-4 border-neutral-200 bg-neutral-50 p-4 rounded-r-xl">
              <h4 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-2">Svenska</h4>
              <p className="text-neutral-600 leading-relaxed italic">
                Det angivna priset gäller exklusivt för kunder som säkrar sin förbokning i förväg. Eventuellt ej uthämtat eller kvarvarande lager som säljs i ett senare skede kommer att erbjudas till ett annat försäljningspris. Vid eventuella frågor, ändringar av beställningar eller tvister gällande betalningar måste du kontakta Indian Grocery Mall / Brown Bag AB direkt.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-emerald-900 rounded-3xl shadow-xl text-emerald-50 p-8 md:p-10 text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Contact Information / Kontakt</h3>
          <div className="space-y-4 text-lg">
            <p className="font-semibold text-xl">Indian Grocery Mall / Brown Bag AB</p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-4">
              <div className="flex items-center space-x-2 bg-emerald-800/50 px-6 py-3 rounded-xl border border-emerald-700/50">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+46 76 095 55 65</span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-800/50 px-6 py-3 rounded-xl border border-emerald-700/50">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:communications@indiangrocerymall.se" className="hover:text-amber-200 transition-colors">
                  communications@indiangrocerymall.se
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}