import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Onam Sadhya - Customer",
  description: "Customer storefront for Onam Sadhya pre-order",
};

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}<CookieBanner /></>
  );
}
