import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

import { Container } from "./container";
import { navigationMenuTriggerStyle } from "./navigation-menu";

interface MenuMobileProps {
  onCloseDrawer: () => void;
}

export const MenuMobile = ({ onCloseDrawer }: MenuMobileProps) => {
  return (
    <Container>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col items-center justify-center gap-5">
          <NavigationMenuLink
            href="/#sobre"
            className={navigationMenuTriggerStyle()}
            onClick={() => onCloseDrawer()}
          >
            Sobre nós
          </NavigationMenuLink>
          <NavigationMenuLink
            href="/#area"
            className={navigationMenuTriggerStyle()}
            onClick={() => onCloseDrawer()}
          >
            Áreas de atuação
          </NavigationMenuLink>
          <NavigationMenuLink
            href="/#form"
            className={navigationMenuTriggerStyle()}
            onClick={() => onCloseDrawer()}
          >
            Formulário
          </NavigationMenuLink>
          <NavigationMenuLink
            href="/#contato"
            className={navigationMenuTriggerStyle()}
            onClick={() => onCloseDrawer()}
          >
            Contato
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </Container>
  );
};
