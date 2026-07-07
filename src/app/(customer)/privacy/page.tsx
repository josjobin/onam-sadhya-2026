import React from "react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-950">
            Privacy Policy & GDPR
          </h1>
          <h2 className="text-2xl text-neutral-500 font-medium">
            Integritetspolicy och GDPR
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Introduction / Data Controller */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            1. Data Controller / Personuppgiftsansvarig
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">English</h4>
              <p className="text-neutral-700 leading-relaxed">
                <strong>Indian Grocery Mall / Brown Bag AB</strong> is the Data Controller responsible for processing your personal data when you use this website. We are committed to protecting your privacy in accordance with the EU General Data Protection Regulation (GDPR) and the Swedish Data Protection Act.
              </p>
            </div>
            <div className="pl-4 border-l-4 border-neutral-200 bg-neutral-50 p-4 rounded-r-xl">
              <h4 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-2">Svenska</h4>
              <p className="text-neutral-600 leading-relaxed italic">
                <strong>Indian Grocery Mall / Brown Bag AB</strong> är personuppgiftsansvarig för behandlingen av dina personuppgifter när du använder denna webbplats. Vi har åtagit oss att skydda din integritet i enlighet med EU:s allmänna dataskyddsförordning (GDPR) och den svenska dataskyddslagen.
              </p>
            </div>
          </div>
        </section>

        {/* Data Collected */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            2. Data We Collect / Uppgifter vi samlar in
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">English</h4>
              <p className="text-neutral-700 leading-relaxed mb-3">To process your pre-order, we collect the following personal information:</p>
              <ul className="list-disc pl-5 text-neutral-700 space-y-2">
                <li><strong>Identity Data:</strong> First name and last name.</li>
                <li><strong>Contact Data:</strong> Email address and phone number.</li>
                <li><strong>Transaction Data:</strong> Order details, pickup location, and payment status.</li>
                <li><strong>Technical Data:</strong> IP address and browser interaction (processed securely via Google reCAPTCHA for spam prevention).</li>
              </ul>
            </div>
            <div className="pl-4 border-l-4 border-neutral-200 bg-neutral-50 p-4 rounded-r-xl">
              <h4 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-2">Svenska</h4>
              <p className="text-neutral-600 leading-relaxed italic mb-3">För att hantera din förbokning samlar vi in följande personuppgifter:</p>
              <ul className="list-disc pl-5 text-neutral-600 italic space-y-2">
                <li><strong>Identitetsuppgifter:</strong> Förnamn och efternamn.</li>
                <li><strong>Kontaktuppgifter:</strong> E-postadress och telefonnummer.</li>
                <li><strong>Transaktionsuppgifter:</strong> Beställningsdetaljer, upphämtningsplats och betalningsstatus.</li>
                <li><strong>Tekniska uppgifter:</strong> IP-adress och webbläsarinteraktion (behandlas säkert via Google reCAPTCHA för att förhindra skräppost).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Purpose & Legal Basis */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            3. Purpose & Legal Basis / Ändamål och rättslig grund
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">English</h4>
              <p className="text-neutral-700 leading-relaxed">
                We process your data strictly to fulfill our contract with you (delivering your order and sending payment instructions). We also retain transaction records to comply with Swedish legal obligations, specifically the Accounting Act (<em>Bokföringslagen</em>). Security verifications (reCAPTCHA) are processed under our legitimate interest to protect our platform from automated attacks.
              </p>
            </div>
            <div className="pl-4 border-l-4 border-neutral-200 bg-neutral-50 p-4 rounded-r-xl">
              <h4 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-2">Svenska</h4>
              <p className="text-neutral-600 leading-relaxed italic">
                Vi behandlar dina uppgifter strikt för att fullgöra vårt avtal med dig (leverera din beställning och skicka betalningsinstruktioner). Vi sparar även transaktionsregister för att uppfylla svenska rättsliga förpliktelser, specifikt Bokföringslagen. Säkerhetsverifieringar (reCAPTCHA) behandlas med stöd av vårt berättigade intresse att skydda vår plattform mot automatiserade attacker.
              </p>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            4. Third-Party Sharing / Delning med tredje part
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">English</h4>
              <p className="text-neutral-700 leading-relaxed">
                We do not sell your personal data. We only share necessary data with trusted partners to operate our service: 
                <strong> QLX Informatics AB</strong> (for website design, hosting, and technical maintenance), <strong>Hetzner Online GmbH</strong> (for secure European server hosting), and <strong>Google</strong> (strictly for reCAPTCHA v3 security analysis). Payment providers will process your financial data directly when you complete a transaction.
              </p>
            </div>
            <div className="pl-4 border-l-4 border-neutral-200 bg-neutral-50 p-4 rounded-r-xl">
              <h4 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-2">Svenska</h4>
              <p className="text-neutral-600 leading-relaxed italic">
                Vi säljer inte dina personuppgifter. Vi delar endast nödvändiga uppgifter med betrodda partners för att driva vår tjänst: <strong>QLX Informatics AB</strong> (för webbdesign, drift och tekniskt underhåll), <strong>Hetzner Online GmbH</strong> (för säker europeisk serverdrift) och <strong>Google</strong> (strikt för säkerhetsanalys via reCAPTCHA v3). Betalningsleverantörer behandlar dina finansiella uppgifter direkt när du genomför en transaktion.
              </p>
            </div>
          </div>
        </section>

        {/* Data Retention & Rights */}
        <section className="bg-white rounded-3xl shadow-lg shadow-emerald-900/5 border border-neutral-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-neutral-100 pb-4">
            5. Retention & Your Rights / Lagringstid och dina rättigheter
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-2">English</h4>
              <p className="text-neutral-700 leading-relaxed">
                Your order information is kept until the delivery is finalized. Data required for financial auditing is stored for 7 years as mandated by Swedish law. Under GDPR, you have the right to request access to your data, ask for corrections, or request deletion (provided it does not conflict with our legal obligations to retain financial records).
              </p>
            </div>
            <div className="pl-4 border-l-4 border-neutral-200 bg-neutral-50 p-4 rounded-r-xl">
              <h4 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-2">Svenska</h4>
              <p className="text-neutral-600 leading-relaxed italic">
                Din beställningsinformation sparas tills leveransen är slutförd. Uppgifter som krävs för finansiell revision lagras i 7 år enligt svensk lag. Enligt GDPR har du rätt att begära tillgång till dina uppgifter, be om rättelser eller begära radering (förutsatt att det inte strider mot våra lagstadgade skyldigheter att behålla finansiella register).
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-emerald-900 rounded-3xl shadow-xl text-emerald-50 p-8 md:p-10 text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Data Privacy Contact / Dataskyddskontakt</h3>
          <p className="text-emerald-100 mb-6">If you have any questions about how we handle your data or wish to exercise your rights, please contact us:</p>
          <div className="space-y-4 text-lg">
            <p className="font-semibold text-xl">Indian Grocery Mall / Brown Bag AB</p>
            <div className="flex flex-col items-center justify-center space-y-4 mt-4">
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