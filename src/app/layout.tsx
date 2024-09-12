import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Lora as FontSans } from "next/font/google";
import "./globals.css";

import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gonçalves e Gonçalves Advogacia",
  description: "Gonçalves & Gonçalves Advocacia e Consultoria Jurídica",
  openGraph: {
    phoneNumbers: ["55 11 94854-0659"],
    description:
      "Escritório de Advocacia Gonçalves & Gonçalves: Atuando em direito civil, penal, empresarial e muito mais, com atendimento especializado em Suzano.",
    title: "Gonçalves e Gonçalves Advocacia",
    url: "https://goncalves-e-goncalves-advogados.vercel.app/",
    creators: ["Willian de Souza Gonçalves", "Juliana de Sousa Gonçalves"],
    countryName: "Brasil",
    emails: ["goncalvesegoncalves.advconjur@gmail.com"],
    locale: "pt_BR",
    siteName: "Gonçalves e Gonçalves Advocacia",
    tags: ["Advogado", "Advocacia", "Consultoria Jurídica"],
    images: [
      {
        url: "./public/ogimage.png",
        width: 1200,
        height: 630,
        alt: "Gonçalves e Gonçalves Advocacia",
      },
    ],
  },
  keywords: [
    "Gonçalves e Gonçalves Advocacia e Consultoria Jurídica",
    "Willian de Souza Gonçalves",
    "Advogado",
    "Advocacia",
    "Consultoria Jurídica",
    "Direito Empresarial",
    "Direito Trabalhista",
    "Direito Civil",
    "Direito Penal",
    "Serviços Jurídicos",
    "Escritório de Advocacia",
    "Advogados Especializados",
    "Consultoria Empresarial",
    "Defesa Jurídica",
    "Aconselhamento Jurídico",
    "Direito Imobiliário",
    "Direito de Família",
    "Advocacia Online",
    "Advocacia Digital",
    "Soluções Jurídicas",
    "Assessoria Jurídica",
    "Consultoria Jurídica Personalizada",
    "Advocacia para Empresas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "font-sans antialiased min-h-screen bg-background",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
