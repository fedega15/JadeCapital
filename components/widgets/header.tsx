import { Logo } from "@/components/widgets/logo";
import Link from "next/link";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="fixed w-full left-0 top-0 z-50 ">
      <div
        className="container mx-auto flex items-center justify-between p-5 lg:py-5
         lg:px-0"
      >
        <section>
          <Logo />
        </section>
        <section>
         <Nav/>
          <button className="relative lg:hidden ">
            <span className="absolute right-0 -top-4 w-8 h-0.5 bg-white"></span>
            <span className="absolute right-0 -top-2 w-8 h-0.5 bg-white"></span>
            <span className="absolute right-0 -top-0 w-8 h-0.5 bg-white"></span>

          </button>
        </section>
      </div>
    </header>
  );
};
