import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-background">
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-foreground opacity-50 z-50 "
          onClick={toggleMenu}
        />
      )}
      <div className="">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-primary font-bold text-2xl hidden md:block">
            Gonçalves & Gonçalves
          </h1>

          <div className="hidden md:block">
            <div className="flex items-center gap-4 ">
              <Button variant="link">
                <Link href="/#areas" className="font-bold text-base ">
                  Áreas de atuação
                </Link>
              </Button>

              <Button variant="link">
                <Link href="/#sobre" className="font-bold text-base">
                  Sobre nós
                </Link>
              </Button>
              <Button variant="link">
                <Link href="/#map" className="font-bold text-base">
                  Endereço
                </Link>
              </Button>
              <Button variant="link">
                <Link href="/#contato" className="font-bold text-base">
                  Contato
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-end w-full px-4 md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <X className="text-primary w-8 h-8" />
              ) : (
                <Menu className="text-primary w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed rounded-t-2xl bottom-0 left-0 w-full bg-secondary py-4 z-50">
          <div className="flex flex-col font-bold gap-4 items-center w-full">
            <Button variant="link">
              <Link href="/#areas" className="font-bold">
                Áreas de atuação
              </Link>
            </Button>
            <Button variant="link">
              <Link href="/#sobre" className="font-bold">
                Sobre nós
              </Link>
            </Button>
            <Button variant="link">
              <Link href="/#map" className="font-bold">
                Endereço
              </Link>
            </Button>
            <Button variant="link">
              <Link href="/#contato" className="font-bold">
                Contato
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
