import Link from "next/link"

export const Nav = () => {
  return (
    <div>
         <ul className="hidden lg:flex items-center gap-x-8">
            <li>
              <Link
                href="#inicio"
                className="relative text-2xl text-white transition-colors
                    duration-300 before:absolute before:left-0 before:-bottom-2 
                    before:w-1 before:h-0.5 before:bg-white before:rounded-full
                    before:transition-all before:duration-300 hover:before:w-full"
              >
                {" "}
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="#nosotros"
                className="relative text-2xl text-white transition-colors
                    duration-300 before:absolute before:left-0 before:-bottom-2 
                    before:w-1 before:h-0.5 before:bg-white before:rounded-full
                    before:transition-all before:duration-300 hover:before:w-full"
              >
                {" "}
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="#servicios"
                className="relative text-2xl text-white transition-colors
                    duration-300 before:absolute before:left-0 before:-bottom-2 
                    before:w-1 before:h-0.5 before:bg-white before:rounded-full
                    before:transition-all before:duration-300 hover:before:w-full"
              >
                {" "}
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="#contacto"
                className="relative text-2xl text-white transition-colors
                    duration-300 before:absolute before:left-0 before:-bottom-2 
                    before:w-1 before:h-0.5 before:bg-white before:rounded-full
                    before:transition-all before:duration-300 hover:before:w-full"
              >
                {" "}
                Contacto
              </Link>
            </li>
          </ul>
    </div>
  )
}
