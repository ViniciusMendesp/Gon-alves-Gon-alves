"use client";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import { ModeToggle } from "../theme/theme-toggle";
import { Container } from "../ui/container";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { MenuMobile } from "../ui/menu-mobile";
import LogoBlack from "/public/logo-black.svg";
import LogoWhite from "/public/logo-white.svg";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(
    undefined
  );
  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const systemPrefersDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Container className="flex items-center justify-between border-b border-muted">
        <Image
          src={
            currentTheme === "system"
              ? systemPrefersDarkMode
                ? LogoWhite
                : LogoBlack
              : currentTheme === "dark"
              ? LogoWhite
              : LogoBlack
          }
          alt="logo"
          className="h-14 w-14"
        />

        <div className="hidden lg:block">
          <div className="flex gap-5">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-5">
                <NavigationMenuLink
                  href="/#sobre"
                  className={navigationMenuTriggerStyle()}
                >
                  Sobre nós
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/#area"
                  className={navigationMenuTriggerStyle()}
                >
                  Áreas de atuação
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/#form"
                  className={navigationMenuTriggerStyle()}
                >
                  Formulário
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/#contato"
                  className={navigationMenuTriggerStyle()}
                >
                  Contato
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="hidden lg:block">
          <ModeToggle />
        </div>

        <div className="lg:hidden">
          <Drawer open={isDrawerOpen} onClose={handleDrawerClose}>
            <DrawerTrigger onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
              <Menu className="w-8 h-8" />
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
        </div>
      </Container>
    </>
  );
};
