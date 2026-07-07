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

        {/* Product Overview & Contents */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 overflow-hidden">
          <div className="bg-emerald-900 px-8 py-6">
            <h3 className="text-2xl font-bold text-white">Product Description & Specifications</h3>
            <p className="text-emerald-100 mt-1">Produktbeskrivning och specifikationer</p>
          </div>
          
          <div className="p-8 md:p-10 space-y-8">
            <div className="prose prose-emerald max-w-none">
              <p className="text-lg leading-relaxed text-neutral-700">
                <strong className="text-emerald-900 font-bold">Flavournest Onam Sadhya 2026</strong> is a frozen pack of a full-course Vegetarian Traditional Kerala Meal, served exclusively on the occasion of <a href="https://en.wikipedia.org/wiki/Onam" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 underline font-semibold">Onam</a>.
              </p>
            </div>

            {/* Physical Specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
                <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Weight / Vikt</span>
                <span className="block text-xl font-bold text-neutral-800">5.345 kg</span>
                <span className="block text-sm text-neutral-500 mt-1">*Rice is not included / Ris ingår ej</span>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
                <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Dimensions / Mått</span>
                <span className="block text-xl font-bold text-neutral-800">43.5 × 28.5 × 14 cm</span>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
                <span className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Portions / Portioner</span>
                <span className="block text-xl font-bold text-neutral-800">5 Servings</span>
                <span className="block text-sm text-neutral-500 mt-1">As per manufacturer</span>
              </div>
            </div>

            {/* Contents List */}
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-900 uppercase mb-4 border-b pb-2">Pack Contents / Förpackningens Innehåll</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3 text-sm text-neutral-700">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Salt</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Sharkkara Varatty</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Banana Chips</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Lemon Pickle</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Mango Pickle</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Avial</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Puli Inchi</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Pineapple Pachadi</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Olan</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Koottu Curry</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Erissery</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Achinga Thoran</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Angamaly Mango Curry</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Sambar</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Parippu Curry</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Pappadam</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Rasam</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Ada Pradhaman</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Parippu Payasam</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Kondattam</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span><span>Banana Leaf (from SAS)</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 1: Fulfillment Guarantee */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            1. Order Fulfillment & Storage Limits / Orderuppfyllelse och lagringsgränser
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">English</h4>
              <p className="text-neutral-700 leading-relaxed">
                Making a payment does not guarantee the delivery of your order. Fulfillment is strictly dependent on the availability of free freezer space to safely store the frozen food upon its arrival in Sweden. If we are unable to fulfill your order due to logistical or storage constraints, your order will be cancelled, and we will refund the full amount paid.
              </p>
            </div>
            <div className="pl-4 border-l-4 border-neutral-200 bg-neutral-50 p-4 rounded-r-xl">
              <h4 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-2">Svenska</h4>
              <p className="text-neutral-600 leading-relaxed italic">
                En genomförd betalning garanterar inte leverans av din beställning. Fullgörandet av beställningen är strikt beroende av tillgången på ledigt frysutrymme för att säkert lagra den frysta maten vid ankomsten till Sverige. Om vi inte kan leverera din beställning på grund av logistik- eller utrymmesbrist kommer din beställning att avbrytas och vi återbetalar hela det inbetalda beloppet.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Delivery & Collection */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            2. Delivery & Collection / Leverans och upphämtning
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">English</h4>
              <p className="text-neutral-700 leading-relaxed">
                Home Delivery is available only in Gothenburg by default. For all other cities, customers must collect their orders at the designated location and time slot. However, if we receive a sufficient volume of orders for other specific cities, we may consider organizing home delivery (with or without additional delivery charges). 
                <br /><br />
                We operate a strict one-time delivery/collection window. Because the items are frozen, we do not have the facilities to store melting food or attempt a second delivery. Failure to collect or receive your order during your agreed window transfers all liability to you, resulting in immediate forfeiture of the goods without any right to a refund.
              </p>
            </div>
            <div className="pl-4 border-l-4 border-neutral-200 bg-neutral-50 p-4 rounded-r-xl">
              <h4 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-2">Svenska</h4>
              <p className="text-neutral-600 leading-relaxed italic">
                Hemleverans erbjuds som standard endast i Göteborg. För alla övriga städer måste kunderna hämta sina beställningar på angiven plats och tid. Om vi får in en tillräcklig mängd beställningar för specifika andra städer kan vi dock överväga att organisera hemleverans (med eller utan extra leveransavgifter).
                <br /><br />
                Vi tillämpar ett strikt fönster för leverans och upphämtning vid ett enda tillfälle. Eftersom varorna är frysta har vi inte möjlighet att lagra tinande mat eller genomföra ett andra leveransförsök. Om du inte hämtar eller tar emot din beställning under det överenskomna tidsfönstret övergår allt ansvar till dig, vilket leder till att varorna omedelbart förverkas utan rätt till återbetalning.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Right of Withdrawal */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            3. Right of Withdrawal Exemption / Undantag från ångerrätt
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

        {/* Section 4: Pricing & Disputes */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            4. Pricing & Disputes / Prissättning och tvister
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