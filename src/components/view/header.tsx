import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "../theme/theme-toggle";
import { Container } from "../ui/container";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuMobile } from "../ui/menu-mobile";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Container className="flex items-center justify-between border-b border-muted">
        <h1 className="font-bold text-4xl">
          <Link href="/" passHref>
            G&G
          </Link>
        </h1>

        <div className="hidden lg:block">
          <div className="flex gap-5">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-5">
                <Link href="#sobre" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Sobre nós
                  </NavigationMenuLink>
                </Link>
                <Link href="#area" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Áreas de atuação
                  </NavigationMenuLink>
                </Link>
                <Link href="#contato" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Formulário
                  </NavigationMenuLink>
                </Link>
                <Link href="#contato" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contato
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuList>
            </NavigationMenu>

            <ModeToggle />
          </div>
        </div>

        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <DrawerTrigger onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            Menu
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <MenuMobile onCloseDrawer={handleDrawerClose} />
            </DrawerHeader>
            <DrawerFooter>
              <ModeToggle />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Container>
    </>
  );
};
