import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsInit } from "@/components/analytics-init";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alunga Golf Clinic",
  description:
    "Premium golf coaching and youth development that builds confident players and future leaders.",
  icons: {
    icon: [
      { url: "/icon.jpeg", type: "image/jpeg" },
      { url: "/alunga-logo.jpeg", type: "image/jpeg" },
    ],
    apple: [{ url: "/apple-icon.jpeg", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[color:var(--deep-green)] text-white">
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_75%_25%,rgba(30,107,45,0.4),transparent_40%),linear-gradient(150deg,#001d10_0%,#003D1F_55%,#0b4f23_100%)]" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <AnalyticsInit />
        </div>
      </body>
    </html>
  );
}
