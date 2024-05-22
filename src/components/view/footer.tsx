import { Facebook, Globe, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/container";

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
    <Container className={`bg-secondary flex flex-col gap-6 ${className}`}>
      <h1 id="contato" className="text-2xl font-bold">
        Contato
      </h1>
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
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
              href={"mailto:willian.sgoncalves@uol.com.br"}
              className="text-sm"
            >
              willian.sgoncalves@uol.com.br
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
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Redes sociais</h2>
          <div className="flex gap-4">
            <Link href={"https://www.instagram.com/dr.williansg"}>
              <Instagram className="w-8 h-8" />
            </Link>
            <Link
              href={"https://web.facebook.com/goncalvesegoncalvesadvocacia"}
            >
              <Facebook className="w-8 h-8" />
            </Link>
          </div>
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
