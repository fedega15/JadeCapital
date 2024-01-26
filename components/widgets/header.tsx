"use client";
import { Logo } from "@/components/widgets/logo";
import { Nav } from "./nav";
import { MenuD } from "./menuD";

export const Header = () => {
  return (
    <header className="fixed w-full left-0 -top-2 z-50">
      <div className="container mx-auto flex items-center justify-between p-5 lg:py-5 lg:px-0">
        <section>
          <Logo />
        </section>
        <section>
          <Nav />
         <MenuD/>
        </section>
      </div>
      
    </header>
  );
};
