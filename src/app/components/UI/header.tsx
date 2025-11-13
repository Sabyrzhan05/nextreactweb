"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import RegistrationModal from "./modals/registration.modal";
import LoginModal from "./modals/login.modal";

export const Logo = () => {
  return (
    <Image
      src="/images/lexus-logo.png" 
      alt="Lexus Logo"
      width={140}
      height={40}
      className="mr-4 rounded-md border border-gray-200"
      priority
    />
  );
};

export default function Header() {
  const navItems = [
    { href: "/", label: "Recipes" },
    { href: "/ingredients", label: "Ingredients" },
    { href: "/about", label: "About us" },
  ];

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <Navbar className="bg-white border-b border-gray-200">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} onPress={()=> setIsLoginOpen(true)} className="bg-red-200 hover:bg-red-800 hover:text-red-200">
            LogIn
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} onPress={()=> setIsRegistrationOpen(true)} className="bg-red-200 hover:bg-red-800 hover:text-red-200">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    
    <RegistrationModal isOpen = {isRegistrationOpen} onClose = {()=> setIsRegistrationOpen(false)}/>
    <LoginModal isOpen = {isLoginOpen} onClose = {()=> setIsLoginOpen(false)}/>

    </Navbar>

  );
}
