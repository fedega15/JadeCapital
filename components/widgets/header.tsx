"use client";
import React, { useState } from "react";
import { Logo } from "@/components/widgets/logo";
import { Nav } from "./nav";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full left-0 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-5 lg:py-5 lg:px-0">
        <section>
          <Logo />
        </section>
        <section>
          <Nav />
          <button className="relative lg:hidden" onClick={toggleMenu}>
            <span className="absolute right-0 -top-4 w-8 h-0.5 bg-white"></span>
            <span className="absolute right-0 -top-2 w-8 h-0.5 bg-white"></span>
            <span className="absolute right-0 -top-0 w-8 h-0.5 bg-white"></span>
          </button>
        </section>
      </div>
      {isMenuOpen && (
        <div className="absolute top-[55px] right-0 backdrop-blur-lg bg-white bg-opacity-25 w-[120px] max-w-xs lg:hidden">
          <ul className="text-white">
            <li className="text-lg hover:text-gray-300 p-2 pt-0 ">
              <a href="/">INICIO</a>
            </li>
            <li className="text-lg hover:text-gray-300 p-2">
              <a href="/nosotros">NOSOTROS</a>
            </li>
            <li className="text-lg hover:text-gray-300 p-2">
              <a href="/servicios">SERVICIOS</a>
            </li>
            <li className="text-lg hover:text-gray-300 p-2 pb-0">
              <a href="/contacto">CONTACTO</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
