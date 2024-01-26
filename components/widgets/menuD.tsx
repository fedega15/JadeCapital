"use client"
import { useState } from "react";

export const MenuD = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
          };
  return (
    <>
    <button className="relative lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
            <div className="flex justify-center items-center">
            <span className="right-1 -top-2 block absolute w-6 h-0.5 bg-white transform rotate-45"></span>
            <span className="right-1 -top-2 block absolute w-6 h-0.5 bg-white transform -rotate-45"></span>
          </div>
            ) : (
              <>
                <span className="absolute right-0 -top-4 w-8 h-0.5 bg-white"></span>
                <span className="absolute right-0 -top-2 w-8 h-0.5 bg-white"></span>
                <span className="absolute right-0 -top-0 w-8 h-0.5 bg-white"></span>
              </>
            )}
          </button>
          <div>
            {isMenuOpen && (
        <div className="absolute top-[55px] right-0 backdrop-blur-lg bg-white bg-opacity-25 w-[116px] max-w-xs lg:hidden">
          <ul className="text-white">
            <li className="text-lg hover:text-gray-300 p-2 pt-0 ">
              <a href="#inicio">INICIO</a>
            </li>
            <li className="text-lg hover:text-gray-300 p-2">
              <a href="#nosotros">NOSOTROS</a>
            </li>
            <li className="text-lg hover:text-gray-300 p-2">
              <a href="#servicios">SERVICIOS</a>
            </li>
            <li className="text-lg hover:text-gray-300 p-2 pb-0">
              <a href="#contacto">CONTACTO</a>
            </li>
          </ul>
        </div>
      )}
          </div>
          </>
  )
}
