import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gonçalves e Gonçalves Advogacia",
  description: "Gonçalves & Gonçalves Advocacia e Consultoria Jurídica",
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
