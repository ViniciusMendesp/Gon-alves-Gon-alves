import {
  NavigationMenu,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-scroll";
import { Container } from "./container";

interface MenuMobileProps {
  onCloseDrawer: () => void;
}

export const MenuMobile = ({ onCloseDrawer }: MenuMobileProps) => {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    onCloseDrawer();
  };

  return (
    <Container>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col gap-5">
          <Link
            to="sobre"
            smooth={true}
            duration={500}
            onClick={handleLinkClick as any}
          >
            Sobre nós
          </Link>
          <Link
            to="area"
            smooth={true}
            duration={500}
            onClick={handleLinkClick as any}
          >
            Áreas de atuação
          </Link>
          <Link
            to="contato"
            smooth={true}
            duration={500}
            onClick={handleLinkClick as any}
          >
            Formulário
          </Link>
          <Link
            to="contato"
            smooth={true}
            duration={500}
            onClick={handleLinkClick as any}
          >
            Contato
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </Container>
  );
};
