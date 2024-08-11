import "../globals.css";
import msClarity from "@/lib/mClarity";
import BackgroundParticles from "@/components/particles/BackgroundParticles";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Providers from "@/context/Providers";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { GeistSans } from "geist/font/sans";
import { useTranslations } from "next-intl";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: String };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: locale,
    namespace: ["metadata"],
  });
  return {
    title: {
      template: "%s | Fernando Furbringer",
      default: "Fernando Furbringer",
    },
    description: t("description"),
    verification: {
      google: "6MHP_v7v_6AanMTrqnMHnFGPcHO-IcUl2l3tphvqFnM",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        follow: true,
        index: true,
      },
    },
    metadataBase: new URL("https://www.FernandoFurbringer.software"),
    alternates: {
      canonical: "/",
      languages: {
        en: [
          {
            url: "/",
          },
          {
            url: "/en",
          },
        ],
        br: "/br",
      },
    },
    keywords: [
      "Fernando Furbringer",
      "Fernando Furbringer Portfolio",
      "Fernando Furbringer Website",
      "Portfolio",
      "Developer",
      "Software Engineer",
      "Software Developer",
      "Web Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    openGraph: {
      type: "website",
      url: locale === "en" ? "/" : "/br",
      title: "Fernando Furbringer",
      description: t("description"),
    },
  };
}
const locales = ["en", "br"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);
  const t = useTranslations("Navbar");
  return (
    <html lang={locale} className={`${GeistSans.className} dark`}>
      <body
        className={`w-full transition-colors duration-300 text-foreground bg-background relative min-h-dscreen flex flex-col`}
      >
        <Providers>
          <Navbar
            about={t("about")}

            home={t("home")}
            particlesEnabled={t("particles-enabled")}
            partcilesDisabled={t("particles-disabled")}
            projects={t("projects")}
          />
          {children}
          <Analytics />
          {
            <div
              aria-hidden
              className="w-full min-h-dscreen absolute top-0 left-0"
            >
              <BackgroundParticles />
            </div>
          }
          <Footer />
        </Providers>
      </body>
      <Script id="microsoft-clarity">{msClarity}</Script>
    </html>
  );
}
