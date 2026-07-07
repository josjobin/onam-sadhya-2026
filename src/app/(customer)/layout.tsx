import type { Metadata } from "next";
import ReCaptchaWrapper from "@/components/ReCaptchaWrapper";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Onam Sadhya 2026 | Pre-order",
  description: "Authentic Onam Sadhya delivered to you in Sweden.",
};

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased bg-neutral-50 text-neutral-900 min-h-screen flex flex-col">
      <ReCaptchaWrapper>
        {/* Main Content Area - flex-grow pushes the footer to the bottom */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="bg-emerald-950 text-emerald-200/60 py-10 mt-auto border-t border-emerald-900">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-sm">
            
            {/* Copyright */}
            <div className="flex flex-col space-y-1 text-center md:text-left">
              <span className="font-semibold text-emerald-100">© 2026 Indian Grocery Mall / Brown Bag AB.</span>
              <span>All rights reserved.</span>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 font-medium">
              <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/nutrition" className="hover:text-white transition-colors">Nutrition & Allergens</a>
            </div>

            {/* Credits */}
            <div className="text-center md:text-right">
              Designed and hosted by <br className="hidden md:block" />
              <a href="https://qlx.se" target="_blank" rel="noopener noreferrer" className="font-bold text-amber-400 hover:text-amber-300 transition-colors">
                QLX Informatics AB, Sweden
              </a>
            </div>

          </div>
        </footer>
      </ReCaptchaWrapper>
      
      <CookieBanner />
    </div>
  );
}