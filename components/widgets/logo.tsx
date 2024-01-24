import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="uppercase font-black text-white flex items-center
         text-lg"
      >
        <span
          className="bg-white text-black w-4 h-4 flex items-center 
         justify-center rounder mr-px"
        >
          J
        </span>
        ADE
      </Link>
    </div>
  );
};
