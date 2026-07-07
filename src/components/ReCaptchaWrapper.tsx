"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";

export default function ReCaptchaWrapper({ children }: { children: React.ReactNode }) {
  // We use the environment variable if available, otherwise a fallback to prevent crashes
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "YOUR_GOOGLE_SITE_KEY";

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}