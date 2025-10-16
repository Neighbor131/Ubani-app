import localFont from "next/font/local";

// Pally headline font bundled locally.
export const pally = localFont({
  src: "../public/fonts/pally-regular.woff2",
  display: "swap",
  variable: "--font-pally"
});

// General Sans body font bundled locally.
export const generalSans = localFont({
  src: "../public/fonts/general-sans-regular.woff2",
  display: "swap",
  variable: "--font-general-sans"
});
