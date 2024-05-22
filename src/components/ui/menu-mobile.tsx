import {
  NavigationMenu,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import React from "react";
import { Container } from "./container";

interface MenuMobileProps {
  onCloseDrawer: () => void;
}

export const MenuMobile = ({ onCloseDrawer }: MenuMobileProps) => {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    to: string
  ) => {
    event.preventDefault();

    // Fecha o drawer
    onCloseDrawer();

    // Verifica se já estamos na página inicial ("/")
    if (window.location.pathname === "/") {
      const element = document.getElementById(to);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
        return;
      }
    }

    // Redireciona para a página inicial com um hash para o elemento desejado
    window.location.assign(`/#${to}`);
  };

  return (
    <Container>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col gap-5">
          <a href="#" onClick={(e) => handleLinkClick(e, "sobre")}>
            Sobre nós
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, "areas")}>
            Áreas de atuação
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, "form")}>
            Formulário
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, "contato")}>
            Contatos
          </a>
        </NavigationMenuList>
      </NavigationMenu>
    </Container>
  );
};
