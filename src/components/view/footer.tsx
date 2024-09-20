"use client";

import { Container } from "../ui/container";
import { Facebook, Globe, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const handlePhoneLinkClick = () => {
    const phoneNumber = "5511948540659";
    const message = "Olá, gostaria de entrar em contato.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <Container
      className={`bg-popover p-6 shadow-lg shadow-secondary-foreground flex flex-col  gap-6 ${className}`}
    >
      <div className="flex flex-col gap-6  md:justify-between">
        <h1 id="contato" className="text-2xl font-bold">
          Contato
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <Link
              href={"https://maps.app.goo.gl/hTrzStb1gyF7idWU7"}
              className="text-sm"
            >
              R. Vinte e Sete de Outubro, n° 401 - Centro, Suzano - SP,
              08674-200
            </Link>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handlePhoneLinkClick}
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">55 11 94854-0659</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <Link
              href={"mailto:goncalvesegoncalves.advconjur@gmail.com"}
              className="text-sm"
            >
              goncalvesegoncalves.advconjur@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <Link
              href={"https://brasiladvogados.adv.br/willian-goncalves/"}
              className="text-sm"
            >
              brasiladvogados.adv.br/willian-goncalves
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        <h2 className="text-2xl font-bold">Redes sociais</h2>
        <div className="flex flex-col  gap-4">
          <Button variant="link" className="flex text-foreground  gap-2">
            <Instagram className="w-5 h-5" />
            <Link href={"https://www.instagram.com/dr.williansg"}>
              Instagram
            </Link>
          </Button>

          <Button variant="link" className="flex text-foreground gap-2">
            <Facebook className="w-5 h-5" />
            <Link
              href={"https://web.facebook.com/goncalvesegoncalvesadvocacia"}
            >
              Facebook
            </Link>
          </Button>
        </div>
      </div>
      <div className="text-center">
        <span className="text-muted-foreground text-xs">
          © {currentYear} Todos os direitos reservados. Site desenvolvido por
          VMP Tech.
        </span>
      </div>
    </Container>
  );
};
